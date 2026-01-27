const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve uploaded images statically
// We map the static folder to '/api/uploads' so it matches the Nginx request
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// Database File Path
const DB_FILE = path.join(__dirname, 'data', 'graffiti.json');
const DATA_DIR = path.join(__dirname, 'data');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, '[]');

// Configure Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ 
    storage, 
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// --- ROUTES ---

// GET: Get all locations
app.get('/api/graffiti', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DB_FILE));
        res.json(data);
    } catch (err) {
        res.json([]);
    }
});

// POST: Add new location
app.post('/api/graffiti', upload.single('photo'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No photo' });

    const data = JSON.parse(fs.readFileSync(DB_FILE));
    const newEntry = {
        id: Date.now().toString(),
        lat: parseFloat(req.body.lat),
        lng: parseFloat(req.body.lng),
        description: req.body.description,
        image_url: '/api/uploads/' + req.file.filename,
        timestamp: new Date().toISOString(),
        missing_count: 0
    };

    data.push(newEntry);
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    res.json(newEntry);
});

// POST: Report Missing
app.post('/api/graffiti/:id/missing', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    const index = data.findIndex(x => x.id === req.params.id);
    if (index !== -1) {
        data[index].missing_count = (data[index].missing_count || 0) + 1;
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    }
    res.sendStatus(200);
});

app.listen(PORT, () => console.log('Backend running on ' + PORT));