const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
const FileType = require('file-type'); 

const app = express();
const PORT = 3000;

app.set('trust proxy', 1);

// SECURITY 1: Only allow your own domain to talk to the backend
app.use(cors({ origin: 'https://laussehub.co.uk' }));
app.use(express.json({ limit: '100kb' })); // Limit body size to prevent crashes

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'default-insecure-password';

const DB_FILE = path.join(__dirname, 'data', 'graffiti.json');
const DATA_DIR = path.join(__dirname, 'data');
const UPLOAD_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, '[]');

const limiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 200 }); 
const uploadLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 10 }); 

// SECURITY 2: Ignore user filename. Use safe random name + extension.
const upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, UPLOAD_DIR),
        filename: (req, file, cb) => cb(null, Date.now() + '-' + crypto.randomBytes(8).toString('hex')) 
    }), 
    limits: { fileSize: 10 * 1024 * 1024 } 
});

const getHash = (ip) => crypto.createHash('sha256').update(ip || 'unknown').digest('hex');
const getDB = () => { try { return JSON.parse(fs.readFileSync(DB_FILE)); } catch { return []; } };
const saveDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// SECURITY 3: Helper to validate extensions
const getExtension = (mime) => {
    if(mime === 'image/jpeg') return '.jpg';
    if(mime === 'image/png') return '.png';
    if(mime === 'image/webp') return '.webp';
    return null;
}

app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// GET: Public Feed
app.get('/api/graffiti', (req, res) => {
    const data = getDB()
        .filter(loc => loc.status === 'active')
        .map(loc => ({
            ...loc,
            contributions: loc.contributions
                .filter(c => (c.status === 'active' || !c.status) && (c.reports || 0) < 2)
                .sort((a,b) => (b.up - b.down) - (a.up - a.down))
        }))
        .filter(loc => loc.contributions.length > 0);
    res.json(data);
});

// GET: Admin Feed (Protected by HEADER, not URL)
app.get('/api/admin/all', (req, res) => {
    if(req.headers['x-admin-secret'] !== ADMIN_SECRET) return res.sendStatus(403);
    res.json(getDB());
});

app.post('/api/graffiti', uploadLimiter, upload.single('photo'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Photo required' });

    const fileInfo = await FileType.fromFile(req.file.path);
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    
    // SECURITY 4: Strict MIME check & Rename file with correct extension
    if (!fileInfo || !allowed.includes(fileInfo.mime)) {
        fs.unlinkSync(req.file.path); 
        return res.status(400).json({ error: 'Invalid image format.' });
    }

    const safeExt = getExtension(fileInfo.mime);
    const safeFilename = req.file.filename + safeExt;
    fs.renameSync(req.file.path, path.join(UPLOAD_DIR, safeFilename));

    const data = getDB();
    const newEntry = {
        id: Date.now().toString(),
        lat: parseFloat(req.body.lat), // Should validate range -90 to 90 here too
        lng: parseFloat(req.body.lng),
        status: 'active',
        contributions: [{
            id: 'c-' + Date.now(),
            type: 'image',
            url: '/api/uploads/' + safeFilename,
            text: (req.body.description || '').substring(0, 500), // Limit text length
            timestamp: new Date().toISOString(),
            up: 0, down: 0, reports: 0,
            status: 'active', voters: []
        }]
    };
    data.push(newEntry);
    saveDB(data);
    res.json(newEntry);
});

app.post('/api/graffiti/:id/contribute', uploadLimiter, upload.single('photo'), async (req, res) => {
    let finalUrl = null;

    if (req.file) {
        const fileInfo = await FileType.fromFile(req.file.path);
        const allowed = ['image/jpeg', 'image/png', 'image/webp'];
        if (!fileInfo || !allowed.includes(fileInfo.mime)) {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ error: 'Invalid image.' });
        }
        const safeExt = getExtension(fileInfo.mime);
        const safeFilename = req.file.filename + safeExt;
        fs.renameSync(req.file.path, path.join(UPLOAD_DIR, safeFilename));
        finalUrl = '/api/uploads/' + safeFilename;
    }

    const data = getDB();
    const loc = data.find(l => l.id === req.params.id);
    if (!loc) return res.status(404).json({ error: 'Not found' });

    const newContrib = {
        id: 'c-' + Date.now(),
        type: finalUrl ? 'image' : 'comment',
        url: finalUrl,
        text: (req.body.text || '').substring(0, 500), // Limit text length
        timestamp: new Date().toISOString(),
        up: 0, down: 0, reports: 0,
        status: 'active', voters: []
    };

    loc.contributions.push(newContrib);
    saveDB(data);
    res.json(newContrib);
});

// ... (Report and Vote routes stay roughly the same, just ensure rate limits) ...
app.post('/api/report/:id', limiter, (req, res) => {
    const data = getDB();
    let found = false;
    data.forEach(loc => {
        loc.contributions.forEach(c => {
            if(c.id === req.params.id) {
                c.reports = (c.reports || 0) + 1;
                if(c.reports >= 2) c.status = 'flagged';
                found = true;
            }
        });
    });
    if(found) { saveDB(data); res.json({ success: true }); } 
    else { res.sendStatus(404); }
});

app.post('/api/contribute/:id/vote', limiter, (req, res) => {
    const { type } = req.body;
    const userHash = getHash(req.ip);
    const data = getDB();
    // ... (Vote logic same as before) ...
    for (const loc of data) {
        const contrib = loc.contributions.find(c => c.id === req.params.id);
        if (contrib) {
            const existing = contrib.voters?.find(v => v.ip === userHash);
            if (!contrib.voters) contrib.voters = [];
            if (existing) {
                if (existing.type === type) return res.json({ msg: 'Already voted', success: false });
                contrib[existing.type]--; contrib[type]++; existing.type = type;
            } else {
                contrib[type]++; contrib.voters.push({ ip: userHash, type });
            }
            saveDB(data);
            return res.json({ success: true, up: contrib.up, down: contrib.down });
        }
    }
    res.sendStatus(404);
});

// ADMIN: Restore (Protected by Header)
app.post('/api/admin/restore', (req, res) => {
    if(req.headers['x-admin-secret'] !== ADMIN_SECRET) return res.sendStatus(403);
    // ... (Restore logic) ...
    const { id } = req.body;
    const data = getDB();
    let found = false;
    data.forEach(loc => {
        loc.contributions.forEach(c => {
            if(c.id === id) { c.status = 'active'; c.reports = 0; found = true; }
        });
    });
    if(found) { saveDB(data); return res.json({success: true}); }
    res.json({success: false});
});

// ADMIN: Delete (Protected by Header)
app.post('/api/admin/delete', (req, res) => {
    if(req.headers['x-admin-secret'] !== ADMIN_SECRET) return res.sendStatus(403);
    // ... (Delete logic) ...
    const data = getDB();
    const { id, type } = req.body;
    if (type === 'location') {
        const index = data.findIndex(l => l.id === id);
        if (index !== -1) { data.splice(index, 1); saveDB(data); return res.json({success: true}); }
    } else {
        data.forEach(loc => {
            const idx = loc.contributions.findIndex(c => c.id === id);
            if (idx !== -1) loc.contributions.splice(idx, 1);
        });
        saveDB(data);
        return res.json({success: true});
    }
    res.json({success: false});
});

app.listen(PORT, () => console.log('Backend running on ' + PORT));