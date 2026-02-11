# Test Searches untuk Mock Data

Berikut adalah list film & series yang bisa dicari di aplikasi (menggunakan mock data):

## Marvel Films
- Avengers
- Iron Man
- Spider-Man
- Thor
- Captain America
- Doctor Strange
- Black Panther

## Popular Movies
- Inception
- The Dark Knight
- Interstellar
- Dune
- The Matrix
- Joker
- Parasite
- Oppenheimer

## TV Series
- Breaking Bad
- Game of Thrones
- The Office
- Stranger Things
- The Crown
- The Mandalorian
- Loki
- Westworld

## Cara Test

### Contoh Search 1: Marvel Movies
```
1. Buka http://localhost:5173
2. Ketik: "avengers"
3. Tekan Enter atau klik Cari
4. Lihat: 5 hasil Avengers movies
```

### Contoh Search 2: Single Movie
```
1. Ketik: "inception"
2. Harusnya muncul: Inception (2010)
```

### Contoh Search 3: Series
```
1. Ketik: "breaking"
2. Harusnya muncul: Breaking Bad (series)
```

### Contoh Search 4: Partial Search
```
1. Ketik: "iron" atau "spider" atau "captain"
2. Harusnya muncul: Semua film yang mengandung keyword tersebut
```

## Smart Search Features

Mock service sekarang support:
- ✅ Partial title search (cari "iron" → Iron Man 1, 2, 3)
- ✅ Case insensitive (cari "AVENGERS" sama dengan "avengers")
- ✅ Pagination (10 results per page)
- ✅ Mixed results (movies + series)
- ✅ No results handling

## Debug Info

Setiap kali search, cek console (F12 → Console):
```
[v0] [MOCK] searchAllContent - Query: "avengers"
[v0] [MOCK] Found 5 results for: avengers
```

Ini menunjukkan search bekerja dengan baik!

## Jika Ingin Menambah Film Baru

Edit file: `src/services/mockOmdbService.js`

Tambah ke array `allMovies`:
```javascript
{ 
  Title: 'Judul Film', 
  Year: '2024', 
  imdbID: 'ttXXXXXXX', 
  Type: 'movie',  // atau 'series'
  Poster: 'https://...' 
}
```

Setelah edit, refresh browser dan coba search dengan judul baru!
