const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');

const app = express();
const PORT = 3000;
app.set('trust proxy', 1); // Trust Nginx for IPs

app.use(cors());
app.use(express.json());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// --- STORAGE ---
const DB_FILE = path.join(__dirname, 'data', 'graffiti.json');
const DATA_DIR = path.join(__dirname, 'data');
const UPLOAD_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, '[]');

// --- SECURITY ---
const limiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 100 }); // 100 actions/hour
const uploadLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 10 }); // 10 uploads/hour

const upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, UPLOAD_DIR),
        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
    }), 
    limits: { fileSize: 10 * 1024 * 1024 } 
});

const getHash = (ip) => crypto.createHash('sha256').update(ip || 'unknown').digest('hex');

// --- HELPER: MIGRATION & SAFETY ---
// Ensures data is always an array
const getDB = () => {
    try { return JSON.parse(fs.readFileSync(DB_FILE)); } 
    catch { return []; }
};
const saveDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// --- ROUTES ---

// GET: Get the whole map data
app.get('/api/graffiti', (req, res) => {
    const data = getDB().map(loc => ({
        id: loc.id,
        lat: loc.lat,
        lng: loc.lng,
        // Sort contributions by score (most helpful first)
        contributions: loc.contributions.sort((a,b) => (b.up - b.down) - (a.up - a.down)),
        status: loc.status
    }));
    res.json(data);
});

// POST: Create NEW Location (Pin)
app.post('/api/graffiti', uploadLimiter, upload.single('photo'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Photo required for new spot' });

    const data = getDB();
    const newEntry = {
        id: Date.now().toString(),
        lat: parseFloat(req.body.lat),
        lng: parseFloat(req.body.lng),
        status: 'active',
        contributions: [{
            id: 'c-' + Date.now(),
            type: 'image',
            url: '/api/uploads/' + req.file.filename,
            text: req.body.description || 'Original Sighting',
            timestamp: new Date().toISOString(),
            up: 0, down: 0,
            voters: []
        }]
    };
    data.push(newEntry);
    saveDB(data);
    res.json(newEntry);
});

// POST: Add Content to EXISTING Location
app.post('/api/graffiti/:id/contribute', uploadLimiter, upload.single('photo'), (req, res) => {
    const data = getDB();
    const loc = data.find(l => l.id === req.params.id);
    if (!loc) return res.status(404).json({ error: 'Location not found' });

    const newContrib = {
        id: 'c-' + Date.now(),
        type: req.file ? 'image' : 'comment', // Detect if photo or just text
        url: req.file ? '/api/uploads/' + req.file.filename : null,
        text: req.body.text || '',
        timestamp: new Date().toISOString(),
        up: 0, down: 0,
        voters: []
    };

    loc.contributions.push(newContrib);
    saveDB(data);
    res.json(newContrib);
});

// POST: Vote on a Contribution
app.post('/api/contribute/:id/vote', limiter, (req, res) => {
    const { type } = req.body; // 'up' or 'down'
    const userHash = getHash(req.ip);
    const data = getDB();

    // Find the contribution inside ANY location
    let found = false;
    for (const loc of data) {
        const contrib = loc.contributions.find(c => c.id === req.params.id);
        if (contrib) {
            // Vote Logic
            const existing = contrib.voters?.find(v => v.ip === userHash);
            if (!contrib.voters) contrib.voters = [];

            if (existing) {
                if (existing.type === type) return res.json({ msg: 'Already voted' });
                contrib[existing.type]--; // Remove old vote
                contrib[type]++;          // Add new vote
                existing.type = type;
            } else {
                contrib[type]++;
                contrib.voters.push({ ip: userHash, type });
            }
            
            found = true;
            break;
        }
    }

    if (found) {
        saveDB(data);
        res.json({ success: true });
    } else {
        res.status(404).send('Contribution not found');
    }
});

app.listen(PORT, () => console.log('Backend running on ' + PORT));