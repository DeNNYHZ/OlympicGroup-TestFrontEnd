# Movie App

Aplikasi pencarian film dan series berbasis OMDb API, dikembangkan dengan React dan Tailwind CSS.

## Fitur Utama

1. Pencarian Real-time
Mencari data film dan series secara instan.

2. Series Slider
Menampilkan rekomendasi series dalam bentuk carousel interaktif.
Layout responsif: 2x2 grid (Desktop) dan 1x2 list (Mobile).

3. Movie Grid
Katalog film dengan tampilan grid yang rapi (3 kolom).
Mendukung Infinite Scroll untuk memuat data otomatis.

4. Detail Informasi Lengkap
Menyajikan poster kualitas tinggi, sinopsis, rating, pemeran, dan kru film.

## Fitur Tambahan

- Optimasi Performa: Menggunakan teknik Lazy Loading agar pemuatan gambar lebih efisien dan ringan.
- Responsivitas Penuh: Tampilan antarmuka yang beradaptasi sempurna pada perangkat Mobile maupun Desktop/Laptop.
- User Experience (UX): Transisi dan animasi antarmuka yang halus untuk kenyamanan pengguna.
- SEO Opt-in: Dilengkapi dengan OpenGraph Meta Tags agar tautan terlihat menarik saat dibagikan di media sosial.

## Cara Menjalankan

1. Instalasi Dependensi
npm install

2. Konfigurasi API
Buat file .env pada folder root:
VITE_OMDB_API_KEY=<API_KEY>
VITE_OMDB_API_URL=https://www.omdbapi.com/

3. Jalankan Project
npm run dev

## Stack Teknologi

- Frontend: React.js (Vite)
- Styling: Tailwind CSS
- Data Fetching: Axios
- Icons: Lucide React
