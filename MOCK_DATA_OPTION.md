# 🎬 Option: Test dengan Mock Data (Tanpa API Key Valid)

Jika Anda ingin **test aplikasi sekarang** tanpa menunggu email API key, gunakan mock data.

---

## ⚡ Quick Setup (2 menit)

### Step 1: Buat file `src/services/mockOmdbService.js`

```javascript
// Mock data untuk testing
const mockResults = {
  avengers: {
    Response: 'True',
    totalResults: '5',
    Search: [
      {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2OTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM2Ni00NTE3LTl3MDItZmQxODg2YjgyZDhlXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
      },
      {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
      },
      {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'
      },
      {
        Title: 'The Avengers: Earth\'s Mightiest Heroes',
        Year: '2010',
        imdbID: 'tt1626038',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTgyODkwNDUtN2QwYS00NmZhLWE2YzgtYzBkZmFhNDY3ZjczXkEyXkFqcGdeQXVyNTgyNTA4MzA@._V1_SX300.jpg'
      }
    ]
  }
};

export const searchAllContent = async (query, page = 1) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('avengers')) {
    return mockResults.avengers;
  }
  
  // Return mock response for any other query
  return {
    Response: 'True',
    totalResults: '3',
    Search: [
      {
        Title: 'Mock Result 1',
        Year: '2020',
        imdbID: 'tt0000001',
        Type: 'movie',
        Poster: 'https://via.placeholder.com/300x450?text=Movie+1'
      },
      {
        Title: 'Mock Result 2',
        Year: '2021',
        imdbID: 'tt0000002',
        Type: 'series',
        Poster: 'https://via.placeholder.com/300x450?text=Series+1'
      },
      {
        Title: 'Mock Result 3',
        Year: '2022',
        imdbID: 'tt0000003',
        Type: 'movie',
        Poster: 'https://via.placeholder.com/300x450?text=Movie+2'
      }
    ]
  };
};

export const getMovieDetail = async (imdbID) => {
  // Mock detail
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    Title: 'Mock Movie Title',
    Year: '2020',
    Rated: 'PG-13',
    Released: '01 Jan 2020',
    Runtime: '120 min',
    Genre: 'Action, Adventure',
    Director: 'Mock Director',
    Writer: 'Mock Writer',
    Actors: 'Mock Actor 1, Mock Actor 2, Mock Actor 3',
    Plot: 'This is a mock movie description for testing purposes.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Mock Awards',
    Poster: 'https://via.placeholder.com/300x450',
    imdbRating: '8.5',
    imdbVotes: '100,000'
  };
};
```

### Step 2: Update `src/pages/Home.jsx`

Cari baris ini:
```javascript
import { searchAllContent } from '../services/omdbService';
```

Ganti dengan:
```javascript
import { searchAllContent } from '../services/mockOmdbService';
```

### Step 3: Restart Dev Server
```bash
npm run dev
```

---

## ✅ Sekarang Test

1. Buka: http://localhost:5173
2. Cari: "Avengers"
3. Harusnya muncul results dari mock data

---

## 📝 Catatan

**Kelebihan Mock Data:**
- ✅ Test tanpa API key
- ✅ Cepat (tidak perlu internet)
- ✅ Konsisten (sama setiap kali)

**Kekurangan:**
- ❌ Data terbatas (hanya "avengers")
- ❌ Tidak bisa search custom
- ❌ Poster placeholder untuk search lain

---

## 🔄 Kembali ke Real API

Jika sudah dapat API key valid dan ingin kembali ke real API:

**Buka `src/pages/Home.jsx` dan ubah:**
```javascript
// Dari:
import { searchAllContent } from '../services/mockOmdbService';

// Ke:
import { searchAllContent } from '../services/omdbService';
```

**Restart dev server dan gunakan API key yang sebenarnya.**

---

## 🎯 Recommended Flow

1. **Sekarang (2 menit):** Setup mock data, test UI
2. **Nanti:** Dapat API key baru
3. **Switch ke real API** ketika API key valid

---

**Use Mock Data untuk Development, Real API untuk Production!**
