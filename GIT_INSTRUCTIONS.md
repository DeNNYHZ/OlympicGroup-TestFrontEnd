# Git Workflow Instructions

## ✅ TAHAP 1: SETUP AWAL & KONFIGURASI (COMMIT 1)

Telah ditambahkan:
- ✅ Tailwind CSS & PostCSS configuration
- ✅ Environment variables (.env & .env.example)
- ✅ Updated package.json dengan dependencies
- ✅ Updated .gitignore
- ✅ README documentation

**Untuk melakukan commit pertama:**

```bash
# 1. Check status
git status

# 2. Add semua file stage 1
git add tailwind.config.js postcss.config.js .env .env.example package.json .gitignore README.md

# 3. Commit dengan pesan yang jelas
git commit -m "feat: setup project configuration

- Add Tailwind CSS v4.1 configuration
- Add PostCSS configuration for Tailwind
- Setup environment variables (.env & .env.example)
- Update package.json with react-helmet dependency
- Update .gitignore to exclude .env files
- Create comprehensive README documentation"

# 4. Push ke remote
git push origin v0/c14210312-7309-594254f9
```

---

## ✅ TAHAP 2: API SERVICES & UTILITIES (COMMIT 2)

Telah ditambahkan:
- ✅ OMDb API service dengan semua endpoints
- ✅ Utility functions untuk lazy loading
- ✅ Error handling

**Untuk melakukan commit kedua:**

```bash
# 1. Add semua file stage 2
git add src/services/omdbService.js src/utils/lazyLoad.js

# 2. Commit
git commit -m "feat: implement OMDb API services

- Create omdbService.js dengan 4 endpoints:
  * searchMovies() - search movies
  * searchSeries() - search series
  * getMovieDetail() - get full movie details
  * searchAllContent() - search all types
- Implement error handling untuk all endpoints
- Create lazyLoad.js utilities untuk image loading
- Add IntersectionObserver support"

# 3. Push
git push origin v0/c14210312-7309-594254f9
```

---

## ✅ TAHAP 3: REUSABLE COMPONENTS (COMMIT 3)

Telah ditambahkan:
- ✅ LazyImage component
- ✅ SearchBar component
- ✅ MovieCard component
- ✅ SeriesSlider component dengan Swiper
- ✅ MoviesGrid component dengan Load More

**Untuk melakukan commit ketiga:**

```bash
# 1. Add semua components
git add src/components/

# 2. Commit
git commit -m "feat: create reusable components

- LazyImage.jsx - lazy loading dengan IntersectionObserver
- SearchBar.jsx - search input dengan form handling
- MovieCard.jsx - individual movie card dengan Link
- SeriesSlider.jsx - Swiper slider untuk series
  * Desktop: 2 kolom x 2 baris
  * Mobile: 1 item per baris
- MoviesGrid.jsx - grid layout dengan Load More button
  * Desktop: 3 kolom
  * Mobile: 1 kolom
- All components are responsive & animated"

# 3. Push
git push origin v0/c14210312-7309-594254f9
```

---

## ✅ TAHAP 4: PAGES & ROUTING (COMMIT 4)

Telah ditambahkan:
- ✅ Home.jsx page dengan search & results
- ✅ Detail.jsx page dengan full information
- ✅ Meta tags dengan React Helmet
- ✅ Dynamic OpenGraph tags

**Untuk melakukan commit keempat:**

```bash
# 1. Add pages
git add src/pages/

# 2. Commit
git commit -m "feat: implement pages with routing

- Home.jsx page:
  * Search functionality dengan filtering (movies vs series)
  * Series slider section
  * Movies grid section dengan Load More
  * Meta tags untuk SEO
  * Error handling & loading states
- Detail.jsx page:
  * Full movie/series information display
  * Director, cast, plot, awards, etc.
  * Sticky poster sidebar
  * Dynamic meta tags untuk social sharing
  * Responsive layout
- Both pages use React Helmet for meta management"

# 3. Push
git push origin v0/c14210312-7309-594254f9
```

---

## ✅ TAHAP 5: STYLING & GLOBAL SETUP (COMMIT 5)

Telah ditambahkan:
- ✅ Updated App.jsx dengan React Router
- ✅ Global CSS setup dengan Tailwind
- ✅ Custom animations & styling
- ✅ Swiper styling
- ✅ Scrollbar styling

**Untuk melakukan commit kelima:**

```bash
# 1. Add styling files
git add src/App.jsx src/App.css src/index.css

# 2. Commit
git commit -m "feat: setup global styling & animations

- Update App.jsx dengan React Router setup
- Implement routing untuk Home & Detail pages
- Update index.css:
  * Import Tailwind CSS
  * Reset default styles
  * Global element styling
  * Swiper custom styles
  * Smooth scrolling behavior
- Update App.css:
  * Custom fadeIn & slideIn animations
  * Swiper button styling
  * Scrollbar styling dengan custom colors
  * Transition utilities
- All animations use CSS keyframes for performance"

# 3. Push
git push origin v0/c14210312-7309-594254f9
```

---

## ✅ TAHAP 6: ASSETS & DOCUMENTATION (COMMIT 6)

Telah ditambahkan:
- ✅ Placeholder image untuk movie posters
- ✅ COMMIT_HISTORY.md documentation
- ✅ GIT_INSTRUCTIONS.md (this file)

**Untuk melakukan commit keenam (final):**

```bash
# 1. Add assets & documentation
git add public/placeholder.png COMMIT_HISTORY.md GIT_INSTRUCTIONS.md

# 2. Commit
git commit -m "docs: add assets & documentation

- Add placeholder.png untuk fallback poster images
- Create COMMIT_HISTORY.md dengan detailed development stages
- Create GIT_INSTRUCTIONS.md dengan commit workflow
- Document semua features dan implementation details
- Add troubleshooting guide dan deployment instructions"

# 3. Push (final)
git push origin v0/c14210312-7309-594254f9
```

---

## 🎯 CHECK YOUR COMMITS

Setelah semua commits selesai, jalankan:

```bash
# Lihat commit history
git log --oneline

# Lihat status
git status

# Verify semua push ke remote
git branch -vv
```

Expected output:
```
v0/c14210312-7309-594254f9  abc1234 [origin/...] docs: add assets & documentation
```

---

## 📝 NOTES

### Git Best Practices yang Diterapkan:
1. ✅ **Atomic Commits**: Setiap commit adalah satu logical unit
2. ✅ **Clear Messages**: Menggunakan conventional commits (feat:, docs:)
3. ✅ **Incremental Stages**: 6 tahap yang jelas dan terstruktur
4. ✅ **Tracking Changes**: Mudah untuk melihat proses development

### Commit Size:
- Commit 1: Setup & Config (5-6 files)
- Commit 2: Services (2 files)
- Commit 3: Components (5 files)
- Commit 4: Pages (2 files)
- Commit 5: Styling (3 files)
- Commit 6: Assets & Docs (3 files)

Total: ~20 files dalam 6 commits yang terstruktur dengan baik

---

## 🚀 NEXT STEPS SETELAH COMMIT

1. **Test semua functionality di development**
   ```bash
   npm run dev
   ```

2. **Test production build**
   ```bash
   npm run build
   npm run preview
   ```

3. **Create Pull Request** (jika perlu)
   - Dari branch `v0/c14210312-7309-594254f9` ke `main`

4. **Merge ke main branch** (setelah approval)
   ```bash
   git checkout main
   git pull origin main
   git merge v0/c14210312-7309-594254f9
   git push origin main
   ```

---

## ⚠️ IMPORTANT

- Jangan lupa untuk **test setiap commit** sebelum push
- Pastikan **npm install** sudah dijalankan sebelum testing
- Verify bahwa **environment variables** sudah di-setup
- Check **browser console** untuk errors saat testing

---

**Ready to commit? Let's go! 🚀**
