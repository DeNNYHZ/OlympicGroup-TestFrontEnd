# Debugging Guide - MovieDB

## Common Issues & Solutions

### 1. Error: "Failed to search. Please try again."

**Causes:**
- Environment variables not set correctly
- API key invalid or expired
- Network connectivity issue
- CORS issue with API

**Solutions:**

#### Check Environment Variables
```bash
# Verify .env file exists in project root with:
cat .env

# Should show:
# VITE_OMDB_API_KEY=a143c6cf
# VITE_OMDB_API_URL=https://www.omdbapi.com
```

#### Check Browser Console
1. Open DevTools (F12)
2. Go to "Console" tab
3. Look for errors with `[v0]` prefix
4. Check "Network" tab to see API calls

#### Test API Manually
```javascript
// In browser console, test the API directly:
const apiKey = 'a143c6cf';
const query = 'avengers';

fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data));
```

#### API Rate Limiting
- OMDb API has rate limits
- If getting 429 error, wait a few seconds before retrying
- Free tier: ~1000 requests per day

### 2. Tailwind CSS Not Working (No Styling)

**Solutions:**

#### Restart Dev Server
```bash
# Stop dev server (Ctrl+C)
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

#### Check CSS Files
```bash
# Verify these files exist:
# - src/index.css (should import 'tailwindcss')
# - src/App.css (should have custom styles)
# - tailwind.config.js (should be in root)
# - postcss.config.js (should be in root)
```

#### Verify Tailwind Config
```bash
cat tailwind.config.js
# Should export default config object
```

### 3. Components Not Rendering

**Check:**
1. Open DevTools Console (F12 > Console)
2. Look for JavaScript errors
3. Check if components are imported correctly
4. Verify Router setup in App.jsx

### 4. Images Not Loading

**Solutions:**
- Check Poster URL is valid (not 'N/A')
- Fallback placeholder.png should appear if no poster
- Clear browser cache: Ctrl+Shift+Delete

### 5. Swiper Slider Not Working

**Solutions:**
```bash
# Reinstall swiper
npm install swiper

# Restart dev server
npm run dev
```

## Browser Console Debugging

### Enable Verbose Logging
Look for `[v0]` prefixed logs:

```javascript
// Example logs you should see:
[v0] Searching for: avengers
[v0] Calling searchAllContent with query: avengers
[v0] API Response: {Response: 'True', Search: Array(10), totalResults: '337', ...}
```

### Check Network Requests
1. Open DevTools (F12)
2. Go to "Network" tab
3. Search for "omdb" requests
4. Click request to see:
   - Status code (should be 200)
   - Response data
   - Request parameters

## Performance Debugging

### Check Load Times
```javascript
// In console:
performance.getEntriesByType('measure')
```

### Monitor Memory Usage
- DevTools > Performance tab
- Record while searching and loading more
- Look for memory leaks

## Testing Steps

### 1. Test Search Function
```
1. Type "avengers" in search bar
2. Press Enter or click "Cari"
3. Check Console for [v0] logs
4. Should see Series Slider and Movies Grid
```

### 2. Test Navigation
```
1. Click any movie card
2. Should navigate to /detail/[imdbID]
3. Detail page should load information
```

### 3. Test Responsive
```
1. Open DevTools (F12)
2. Click responsive mode (Ctrl+Shift+M)
3. Test at:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)
```

### 4. Test Load More
```
1. Search for something with many results
2. Scroll to bottom
3. Click "Load More Movies"
4. Should append more movies to grid
```

## API Testing

### Test with curl
```bash
curl "https://www.omdbapi.com/?s=avengers&apikey=a143c6cf"
```

### Test in JavaScript
```javascript
// Test search
const response = await fetch(
  'https://www.omdbapi.com/?s=avengers&page=1&apikey=a143c6cf'
);
const data = await response.json();
console.log(data);

// Test detail
const response2 = await fetch(
  'https://www.omdbapi.com/?i=tt0848228&plot=full&apikey=a143c6cf'
);
const data2 = await response2.json();
console.log(data2);
```

## Clean Start (Nuclear Option)

If everything is broken:

```bash
# 1. Stop dev server
# 2. Remove dependencies
rm -rf node_modules package-lock.json

# 3. Clear npm cache
npm cache clean --force

# 4. Reinstall everything
npm install

# 5. Start fresh
npm run dev
```

## File Structure Verification

Verify all important files exist:
```bash
ls -la src/components/
# Should show:
# - LazyImage.jsx
# - SearchBar.jsx
# - MovieCard.jsx
# - MoviesGrid.jsx
# - SeriesSlider.jsx

ls -la src/pages/
# Should show:
# - Home.jsx
# - Detail.jsx

ls -la src/services/
# Should show:
# - omdbService.js

ls -la src/utils/
# Should show:
# - lazyLoad.js

ls -la | grep -E "tailwind|postcss"
# Should show:
# - tailwind.config.js
# - postcss.config.js
```

## Logs to Look For

### Successful Search
```
[v0] Searching for: [query]
[v0] Calling searchAllContent with query: [query]
[v0] API Response: {Response: 'True', Search: Array(...), totalResults: '...'}
```

### API Error
```
[v0] API Error: Movie not found!
[v0] Search error: [error message]
```

### Component Rendering
```
Components should render with proper class names from Tailwind
Check Elements tab in DevTools
```

## Need More Help?

1. Check console logs (F12 > Console)
2. Check Network tab for API responses
3. Verify .env file has correct values
4. Try clearing cache and reinstalling: `npm cache clean --force && npm install`
5. Restart dev server completely

