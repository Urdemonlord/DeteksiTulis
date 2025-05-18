# Aplikasi Pengenalan Tulisan Tangan

Aplikasi web untuk mengenali tulisan tangan menggunakan Tesseract.js, TensorFlow.js, dan Google Gemini API.

## Fitur

- Pengenalan teks dari gambar
- Deteksi objek
- Klasifikasi gambar
- Analisis gambar menggunakan Gemini API
- Berbagai mode pemrosesan gambar

## Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/username/handwriting.js.git
cd handwriting.js
```

2. Install dependensi:
```bash
npm install
```

3. Buat file `.env` dan tambahkan API key Anda:
```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

4. Jalankan server:
```bash
npm start
```

5. Buka `http://localhost:3000` di browser Anda

## Penggunaan

1. Upload gambar atau ambil foto
2. Pilih mode pemrosesan:
   - Original: Gambar asli
   - Grayscale: Konversi ke grayscale
   - Median: Filter median
   - Adaptive: Adaptive thresholding
   - Full: Pemrosesan lengkap
3. Klik "Kenali Teks"
4. Tunggu hasil analisis

## Deployment

1. Siapkan server Node.js
2. Set environment variable `GEMINI_API_KEY`
3. Deploy kode ke server
4. Jalankan `npm start`

## Keamanan

- API key disimpan di environment variable server
- Tidak ada API key yang terekspos di client
- Gunakan HTTPS untuk keamanan tambahan

## Teknologi

- Tesseract.js untuk OCR
- TensorFlow.js untuk machine learning
- Google Gemini API untuk analisis gambar
- OpenCV.js untuk pemrosesan gambar
- Express.js untuk backend
- Node.js untuk server

## Lisensi

MIT License
