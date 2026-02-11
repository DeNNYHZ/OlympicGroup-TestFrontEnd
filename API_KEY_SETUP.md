# 🔑 Setup OMDb API Key

## Problem

Error "No results found" ketika mencari film/series

## Root Cause

API Key `a143c6cf` sudah **EXPIRED** atau tidak valid lagi.

---

## ✅ Solusi: Dapatkan API Key Baru

### Step 1: Buka Website OMDb
Kunjungi: https://www.omdbapi.com/apikey.aspx

### Step 2: Pilih Paket Free
- Klik tombol **"Free!"**
- Pilih paket **"FREE"** (1,000 requests/day)

### Step 3: Isi Form
```
Email Address: [masukkan email Anda]
First Name: [nama Anda]
Last Name: [nama belakang]
Use Case: Personal Use / Learning / Other
```

### Step 4: Terima Terms & Klik Sign Up
- Cek kotak ✓ I agree to the terms of use
- Klik **"Sign up"**

### Step 5: Verifikasi Email
- Buka email Anda
- Cari email dari OMDb dengan subject "OMDb API Key"
- Klik link **"Verify"** atau copy API key

### Step 6: Copy API Key
- Copy API key yang diberikan (format: huruf + angka, ~8 karakter)

---

## 🔧 Update .env File

Buka file: `.env` di root project

```env
VITE_OMDB_API_KEY=YOUR_NEW_API_KEY_HERE
VITE_OMDB_API_URL=https://www.omdbapi.com
```

**Ganti `YOUR_NEW_API_KEY_HERE` dengan API key yang Anda dapat dari email**

Contoh jika API key Anda `abc123def`:
```env
VITE_OMDB_API_KEY=abc123def
VITE_OMDB_API_URL=https://www.omdbapi.com
```

---

## 🚀 Restart Development Server

**PENTING: Harus restart dev server untuk load environment variables baru**

1. Hentikan dev server (tekan `Ctrl+C` di terminal)
2. Jalankan lagi:
```bash
npm run dev
```

3. Buka browser: http://localhost:5173
4. Coba cari "Avengers"

---

## ✔️ Test

Jika berhasil, seharusnya lihat:
- ✅ Series slider dengan hasil
- ✅ Movies grid dengan hasil
- ✅ **TIDAK ADA error message**

---

## 📊 Console Debugging

Jika masih error, buka **DevTools → Console** dan lihat:
- Cari message: `[v0] API Config`
- Lihat API key status: `✓ Set` atau `✗ Missing`
- Lihat response API: `[v0] searchAllContent Response:`

---

## ❓ FAQ

### Q: Berapa lama email verifikasi datang?
A: Biasanya langsung (1-5 menit). Cek folder Spam jika tidak ada di Inbox.

### Q: API Key sudah benar tapi masih error?
A: 
- Pastikan sudah **restart dev server** (sangat penting!)
- Lihat response di Console untuk error detail
- Pastikan tidak ada spasi di awal/akhir API key

### Q: Limit 1000 requests cukup?
A: Ya, untuk development dan personal use cukup banget.

### Q: Bisa upgrade ke paket berbayar?
A: Bisa, tapi untuk development paket free sudah cukup.

---

## 🔗 Links

- OMDb API: https://www.omdbapi.com/
- API Documentation: https://www.omdbapi.com/?apikey=a143c6cf
- Get Free Key: https://www.omdbapi.com/apikey.aspx

---

**Status: Tunggu email dari OMDb, update .env, restart dev server, done! ✅**
