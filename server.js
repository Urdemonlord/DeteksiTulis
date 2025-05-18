const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

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