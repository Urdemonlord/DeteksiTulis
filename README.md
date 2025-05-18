# Pengenalan Tulisan Tangan

Aplikasi web untuk mengenali tulisan tangan dan teks dari gambar menggunakan teknologi AI.

## Fitur

- Pengenalan tulisan tangan secara real-time
- Pengenalan teks dari gambar (OCR)
- Dukungan untuk berbagai metode input:
  - Menggambar langsung di canvas
  - Upload gambar
  - Mengambil foto dengan kamera
- Pemrosesan gambar dengan berbagai opsi:
  - Gambar asli
  - Grayscale
  - Median Filter
  - Adaptive Threshold
  - Full Processing
- Tampilan hasil dengan tingkat kepercayaan
- Antarmuka yang responsif dan modern

## Cara Penggunaan

1. **Menggambar Tulisan Tangan**
   - Klik area canvas
   - Gambar tulisan tangan Anda
   - Klik "Kenali Gambar" untuk hasil pengenalan

2. **Upload Gambar**
   - Klik "Pilih Gambar"
   - Pilih file gambar dari komputer Anda
   - Gambar akan ditampilkan di canvas
   - Klik "Kenali Teks" untuk hasil pengenalan

3. **Menggunakan Kamera**
   - Klik "Buka Kamera"
   - Posisikan teks dalam frame kamera
   - Klik "Ambil Foto"
   - Klik "Kenali Teks" untuk hasil pengenalan

4. **Opsi Pemrosesan Gambar**
   - Pilih mode pemrosesan yang sesuai:
     - **Gambar Asli**: Tanpa pemrosesan
     - **Grayscale**: Konversi ke hitam putih
     - **Median Filter**: Mengurangi noise
     - **Adaptive Threshold**: Menyesuaikan kontras
     - **Full Processing**: Kombinasi semua pemrosesan

## Tips untuk Hasil Terbaik

1. **Kualitas Gambar**
   - Gunakan gambar dengan resolusi tinggi
   - Pastikan teks kontras dengan latar belakang
   - Hindari gambar yang buram

2. **Format Teks**
   - Gunakan font standar
   - Ukuran teks yang sesuai
   - Teks harus sejajar
   - Hindari teks yang tumpang tindih

3. **Kondisi Pencahayaan**
   - Gunakan pencahayaan yang baik
   - Hindari bayangan
   - Hindari silau pada teks

4. **Penggunaan**
   - Tunggu hingga pemrosesan selesai
   - Perhatikan tingkat kepercayaan hasil
   - Coba mode pemrosesan berbeda jika hasil kurang akurat

## Teknologi yang Digunakan

- Tesseract.js untuk OCR
- TensorFlow.js untuk pemrosesan gambar
- HTML5 Canvas untuk menggambar
- WebRTC untuk akses kamera

## Persyaratan Sistem

- Browser modern (Chrome, Firefox, Edge)
- Akses kamera (untuk fitur kamera)
- Koneksi internet (untuk memuat model AI)

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk diskusi.

## Kontak

Jika Anda memiliki pertanyaan atau saran, silakan buka issue di repositori ini.
