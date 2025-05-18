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
            console.error('GEMINI_API_KEY tidak ditemukan di environment variables');
            return res.status(500).json({ 
                error: 'API key tidak dikonfigurasi',
                message: 'Silakan konfigurasi GEMINI_API_KEY di environment variables'
            });
        }

        // Log untuk debugging (jangan tampilkan full API key)
        console.log('API key tersedia:', GEMINI_API_KEY.substring(0, 5) + '...');
        
        res.json({ 
            apiKey: GEMINI_API_KEY,
            status: 'success'
        });
    } catch (error) {
        console.error('Error in /api/get-key:', error);
        res.status(500).json({ 
            error: 'Terjadi kesalahan server',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        apiKeyConfigured: !!GEMINI_API_KEY
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).json({
        error: 'Terjadi kesalahan server',
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
    console.log('Environment variables:');
    console.log('- GEMINI_API_KEY:', GEMINI_API_KEY ? 'Terkonfigurasi' : 'Tidak terkonfigurasi');
    console.log('- ALLOWED_ORIGINS:', process.env.ALLOWED_ORIGINS || '*');
}); 