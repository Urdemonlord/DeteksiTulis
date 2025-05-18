const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const port = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100 // limit setiap IP ke 100 request per windowMs
});

// Middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*'
}));
app.use(express.json());
app.use(express.static('public'));
app.use(limiter);

// Simpan API key di environment variable
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Endpoint untuk mendapatkan API key
app.get('/api/get-key', (req, res) => {
    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'API key tidak dikonfigurasi' });
    }
    res.json({ apiKey: GEMINI_API_KEY });
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
}); 