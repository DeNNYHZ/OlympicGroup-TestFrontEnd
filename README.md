# MovieDB - Website Pencarian Film dan Series

Website interaktif untuk mencari dan menjelajahi informasi detail tentang film dan series menggunakan OMDb API.

## 🎬 Fitur Utama

### Halaman Home
- **Search Bar**: Input pencarian untuk film/series dengan tampilan yang user-friendly
- **Series Slider**: Menampilkan hasil series dalam bentuk slider responsif
  - Desktop: 2 kolom x 2 baris
  - Mobile: 1 item per baris
- **Movies Grid**: Menampilkan hasil film dalam bentuk grid card
  - Desktop: 3 kolom
  - Mobile: 1 kolom
- **Load More**: Fitur untuk memuat hasil pencarian lebih banyak (infinite scroll)
- **Meta Tags & OpenGraph**: SEO-friendly dengan meta description dan OG tags

### Halaman Detail
- Informasi lengkap film/series:
  - Poster
  - Judul, tahun, rating, runtime
  - Sutradara, pemeran, dan plot
  - Genre, bahasa, negara
  - Awards dan informasi tambahan lainnya
- Meta tags dinamis untuk setiap film
- Responsif di semua ukuran layar

## ⚡ Fitur Bonus yang Sudah Diimplementasikan

- ✅ **Lazy Loading Images**: Gambar dimuat saat masuk viewport untuk performa lebih baik
- ✅ **Infinite Scroll / Load More**: Pagination untuk menambah hasil pencarian
- ✅ **Meta Tags & OpenGraph**: Implementasi untuk SEO
- ✅ **Animasi**: Smooth transitions dan animations untuk UX yang lebih baik
- ✅ **Responsive Design**: Mobile-first approach untuk semua ukuran layar
- ✅ **Error Handling**: Penanganan error API dan data kosong

## 🛠️ Tech Stack

- **React 19.2.0**: UI framework
- **Vite**: Build tool dan dev server
- **React Router 7.13**: Navigation
- **Tailwind CSS 4.1**: Styling
- **Swiper 12.1**: Slider component
- **Axios**: HTTP client
- **React Helmet**: Head management untuk meta tags

## 📋 Prerequisites

- Node.js (v16 atau lebih tinggi)
- npm atau package manager lainnya

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd OlympicGroup-TestFrontEnd
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` di root directory:
```
VITE_OMDB_API_KEY=a143c6cf
VITE_OMDB_API_URL=http://www.omdbapi.com
```

### 4. Run Development Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### 5. Build untuk Production
```bash
npm run build
```

Output akan tersimpan di folder `dist/`

## 📁 Project Structure

```
src/
├── components/
│   ├── LazyImage.jsx          # Lazy loading image component
│   ├── SearchBar.jsx          # Search input component
│   ├── MovieCard.jsx          # Individual movie card
│   ├── MoviesGrid.jsx         # Grid layout for movies
│   └── SeriesSlider.jsx       # Swiper slider for series
├── pages/
│   ├── Home.jsx               # Homepage dengan search & results
│   └── Detail.jsx             # Detail page untuk film/series
├── services/
│   └── omdbService.js         # OMDb API calls
├── utils/
│   └── lazyLoad.js            # Lazy loading utilities
├── App.jsx                    # Main App component
├── App.css                    # Custom CSS
├── index.css                  # Global CSS & Tailwind
└── main.jsx                   # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: #1a1a2e (Dark Blue)
- **Secondary**: #16213e (Darker Blue)
- **Accent**: #e94560 (Red)
- **Light**: #eaeaea (Light Gray)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📝 API Integration

API diambil dari OMDb API dengan endpoint:
- Search: `GET /?s=<query>&type=<type>&page=<page>&apikey=<key>`
- Detail: `GET /?i=<imdbID>&plot=full&apikey=<key>`

## 🔍 SEO Implementation

- Meta tags dinamis pada setiap halaman
- OpenGraph tags untuk social media sharing
- Semantic HTML structure
- Fast loading dengan lazy images

## 🚀 Deployment

### Deploy ke Vercel
```bash
npm run build
# Push ke GitHub dan connect dengan Vercel
```

### Deploy Manual
```bash
npm run build
# Upload folder 'dist/' ke hosting service
```

## 🐛 Troubleshooting

### API Error 429 (Too Many Requests)
- OMDb API memiliki rate limit. Tunggu beberapa saat sebelum mencoba lagi.

### Gambar Tidak Muncul
- Beberapa film di OMDb tidak memiliki poster. Akan menampilkan placeholder.

### Slider Tidak Berfungsi dengan Baik
- Refresh halaman jika swiper tidak menginisialisasi dengan benar.

## 📄 Git Workflow

Setiap fitur dikerjakan dalam commit terpisah untuk tracking yang jelas:

1. Feature Setup (Config & Dependencies)
2. API Services (OMDb Integration)
3. Components Development
4. Pages Creation
5. Styling & Responsiveness
6. Optimization & Features

## 📞 Support

Untuk issues atau questions, silakan buka GitHub issue atau hubungi tim development.

## 📜 License

MIT License - Bebas digunakan untuk keperluan apapun.
