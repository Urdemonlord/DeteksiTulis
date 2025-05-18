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
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static('public'));
app.use(limiter);

// Simpan API key di environment variable
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Endpoint untuk mendapatkan API key
app.get('/api/get-key', (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({ 
                error: 'API key tidak dikonfigurasi',
                message: 'Silakan konfigurasi GEMINI_API_KEY di environment variables'
            });
        }
        res.json({ apiKey: GEMINI_API_KEY });
    } catch (error) {
        console.error('Error in /api/get-key:', error);
        res.status(500).json({ 
            error: 'Terjadi kesalahan server',
            message: error.message
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Terjadi kesalahan server',
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
}); 