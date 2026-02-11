# Movie App

Aplikasi web sederhana untuk mencari film dan series menggunakan **OMDb API**. Project ini dibuat menggunakan **React** dan **Tailwind CSS**.

## Fitur

1.  **Pencarian**: Mencari film dan series berdasarkan judul.
2.  **Series Slider**:
    *   Tampilan slider untuk hasil pencarian "Series".
    *   Layout Desktop: 2 kolom x 2 baris.
    *   Layout Mobile: 1 kolom x 2 baris.
3.  **Daftar Film**:
    *   Tampilan grid untuk hasil pencarian "Movie".
    *   Layout Desktop: 3 kolom.
    *   Layout Mobile: 1 kolom.
    *   Fitur **Infinite Scroll** (memuat film otomatis saat scroll ke bawah).
4.  **Detail Film**: Menampilkan informasi lengkap seperti Poster, Judul, Tahun, Rating, Durasi, Pemeran, dan Sinopsis.
5.  **Bonus**:
    *   Lazy Loading gambar.
    *   Animasi smooth loading.
    *   Responsive di HP dan Laptop.

## Cara Menjalankan Project

1.  **Install Library**:
    ```bash
    npm install
    ```

2.  **Setup API Key**:
    Buat file `.env` dan masukkan API Key:
    ```env
    VITE_OMDB_API_KEY=a143c6cf
    VITE_OMDB_API_URL=http://www.omdbapi.com/
    ```

3.  **Jalankan Aplikasi**:
    ```bash
    npm run dev
    ```

## Teknologi yang Digunakan

*   React JS (Vite)
*   Tailwind CSS
*   Axios (untuk ambil data API)
