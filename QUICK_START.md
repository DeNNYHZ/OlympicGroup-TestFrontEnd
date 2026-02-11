# 🚀 Quick Start Guide - MovieDB Application

## ⚡ 30 Second Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# http://localhost:5173
```

---

## 📱 What You'll See

### Home Page
```
┌─────────────────────────────────────────┐
│     SEARCH BAR (dengan input field)     │
├─────────────────────────────────────────┤
│ SERIES SECTION (Swiper Slider)          │
│  ┌─────────┐  ┌─────────┐              │
│  │ Series1 │  │ Series2 │              │
│  └─────────┘  └─────────┘              │
│  ┌─────────┐  ┌─────────┐              │
│  │ Series3 │  │ Series4 │              │
│  └─────────┘  └─────────┘              │
├─────────────────────────────────────────┤
│ MOVIES SECTION (Grid - 3 kolom)         │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │Movie1│ │Movie2│ │Movie3│            │
│  └──────┘ └──────┘ └──────┘            │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │Movie4│ │Movie5│ │Movie6│            │
│  └──────┘ └──────┘ └──────┘            │
│                                         │
│         [LOAD MORE BUTTON]              │
└─────────────────────────────────────────┘
```

### Detail Page
```
┌─────────────────────────────────────────┐
│ [← Back Home]                           │
├─────────────────────────────────────────┤
│  Poster  │  Title                       │
│  Image   │  Year • Rating               │
│          │  IMDb: 8.5/10                │
│          │                              │
│          │  Runtime: 148 min            │
│          │  Genre: Action, Sci-Fi       │
│          │  Director: ...               │
│          │  Cast: ...                   │
│          │  Awards: ...                 │
│          │                              │
│          │  PLOT:                       │
│          │  Lorem ipsum dolor sit...    │
└─────────────────────────────────────────┘
```

---

## 🔍 Testing the App

### Test Search
```
1. Type di search bar: "Avengers"
2. Klik "Cari" button
3. Lihat results dengan series dan movies terpisah
```

### Test Series Slider
```
1. Desktop: Lihat 2x2 grid layout dengan navigation arrows
2. Mobile: Lihat 1 item per slide
3. Klik anak panah untuk navigate
```

### Test Movie Grid
```
1. Desktop: Lihat 3 kolom
2. Tablet: Lihat 2 kolom (automatic via responsive)
3. Mobile: Lihat 1 kolom
4. Klik "Load More" untuk infinite scroll
```

### Test Detail Page
```
1. Klik "Detail" button pada salah satu movie/series
2. Lihat semua informasi lengkap
3. Scroll untuk lihat semua details
4. Klik browser back atau "← Back Home"
5. Buka DevTools → Console → cek Meta tags
```

### Test Responsive
```
1. Resize browser window
2. Test di: Mobile (375px), Tablet (768px), Desktop (1920px)
3. Gunakan DevTools device emulation
```

### Test Lazy Loading
```
1. Open DevTools → Network tab
2. Filter untuk Images
3. Scroll halaman
4. Lihat images load saat masuk viewport
```

---

## 🛠️ Environment Setup

File `.env` sudah ada dengan default values:
```
VITE_OMDB_API_KEY=a143c6cf
VITE_OMDB_API_URL=http://www.omdbapi.com
```

Jika ingin menggunakan API key sendiri:
1. Register di https://www.omdbapi.com/apikey.aspx
2. Update `.env` file dengan key Anda
3. Jangan commit `.env` ke Git (sudah di .gitignore)

---

## 📂 File Structure Quick Reference

```
src/
├── pages/              # Full pages
│   ├── Home.jsx       # Homepage dengan search
│   └── Detail.jsx     # Detail film/series
├── components/        # Reusable components
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MoviesGrid.jsx
│   ├── SeriesSlider.jsx
│   └── LazyImage.jsx
├── services/          # API calls
│   └── omdbService.js
├── utils/             # Helper functions
│   └── lazyLoad.js
├── App.jsx            # Main app dengan routing
├── index.css          # Global styles
└── main.jsx           # Entry point
```

---

## 🎨 Color Palette

```
Primary (Dark):    #1a1a2e
Secondary (Dark):  #16213e
Accent (Red):      #e94560
Light (Gray):      #eaeaea
```

---

## ⌨️ Keyboard Shortcuts (Browser DevTools)

```
F12 or Ctrl+Shift+I  → Open DevTools
Ctrl+Shift+M         → Toggle Device Toolbar
Ctrl+Shift+J         → Open Console
Ctrl+U               → View Page Source
```

---

## 🐛 Common Issues & Solutions

### Issue: "Cannot find API response"
**Solution**: Check network tab untuk API response, API mungkin rate-limited

### Issue: Images tidak muncul
**Solution**: Beberapa film tidak punya poster, akan muncul placeholder

### Issue: Slider tidak berfungsi
**Solution**: Refresh page atau check console untuk errors

### Issue: Search hasil kosong
**Solution**: Search query mungkin tidak ditemukan di database, coba query lain

### Issue: npm install error
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🚀 Build untuk Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview

# Output akan di folder 'dist/'
```

---

## 📊 Performance Tips

1. **Lazy Loading**: Gambar sudah implement lazy loading
2. **Code Splitting**: React Router automatic code splitting
3. **Bundle Size**: Swiper hanya load saat dibutuhkan
4. **Caching**: Static assets cache-friendly di Tailwind

---

## 📚 Learn More

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- React Router: https://reactrouter.com
- Swiper: https://swiperjs.com
- OMDb API: https://www.omdbapi.com

---

## 🎯 Development Checklist

- [x] Setup project configuration
- [x] API integration dengan OMDb
- [x] Components development
- [x] Pages & routing
- [x] Styling & animations
- [x] Responsive design
- [x] Meta tags & SEO
- [x] Lazy loading images
- [x] Load more / infinite scroll
- [x] Error handling
- [x] Documentation
- [ ] Your first commit! 🚀

---

**Ready to start? Run: `npm install && npm run dev` 🎬**
