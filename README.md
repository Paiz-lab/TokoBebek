# Website Peternakan Bebek Berkah

Website modern dan responsif untuk usaha peternakan bebek yang menjual bebek hidup, telur bebek, dan daging bebek segar.

## 🎨 Fitur

- ✅ Desain modern dengan warna alami (hijau & coklat)
- ✅ Fully responsive untuk desktop, tablet, dan mobile
- ✅ Halaman beranda dengan hero banner menarik
- ✅ Katalog produk dengan detail lengkap
- ✅ Tombol pesan langsung via WhatsApp
- ✅ Halaman tentang peternakan
- ✅ Informasi kontak dan lokasi dengan Google Maps
- ✅ Floating WhatsApp button
- ✅ Smooth scrolling navigation
- ✅ Badge stok produk (Banyak/Terbatas/Habis)

## 📦 Produk yang Ditampilkan

1. **Bebek Hidup** - Bebek sehat siap dipelihara atau dipotong
2. **Telur Bebek Segar** - Telur segar langsung dari peternakan
3. **Daging Bebek Segar** - Daging berkualitas tanpa pengawet
4. **Bebek Petelur** - Bebek produktif untuk usaha telur
5. **Telur Bebek Asin** - Telur asin dengan rasa gurih
6. **Daging Bebek Fillet** - Daging tanpa tulang, praktis

## 🚀 Cara Menggunakan

### 1. Setup File

Pastikan struktur folder seperti ini:
```
peternakan-bebek/
├── index.html
├── style.css
├── script.js
└── README.md
```

### 2. Konfigurasi WhatsApp

Edit file `script.js` dan ganti nomor WhatsApp:

```javascript
const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor Anda
```

Format nomor: 
- Gunakan kode negara (62 untuk Indonesia)
- Hilangkan angka 0 di depan
- Contoh: 0812-3456-7890 → 6281234567890

### 3. Kustomisasi Produk

Edit array `products` di file `script.js` untuk menambah/mengubah produk:

```javascript
{
    id: 1,
    name: 'Nama Produk',
    category: 'bebek-hidup', // atau 'telur', 'daging'
    price: 85000,
    unit: 'ekor', // atau 'butir', 'kg'
    stock: 150,
    image: 'URL_GAMBAR',
    description: 'Deskripsi produk',
    features: ['Fitur 1', 'Fitur 2', 'Fitur 3']
}
```

### 4. Update Informasi Kontak

Edit bagian kontak di `index.html`:
- Alamat peternakan
- Nomor telepon
- Email
- Jam operasional
- Link Google Maps

### 5. Ganti Logo/Icon

Saat ini menggunakan icon Font Awesome. Untuk menggunakan logo sendiri:

```html
<!-- Ganti ini -->
<i class="fas fa-dove text-3xl text-primary"></i>

<!-- Dengan ini -->
<img src="logo.png" alt="Logo" class="h-12">
```

## 🎨 Kustomisasi Warna

Edit konfigurasi Tailwind di `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': '#2d5016',      // Hijau tua
                'secondary': '#6b4423',    // Coklat
                'accent': '#8b6f47',       // Coklat muda
                'light-green': '#e8f5e9',  // Hijau muda
            }
        }
    }
}
```

## 📱 Fitur Mobile

- Menu hamburger untuk navigasi
- Layout responsif otomatis
- Tombol WhatsApp floating
- Touch-friendly buttons
- Optimized untuk layar kecil

## 🌐 Deploy Website

### Hosting Gratis:

1. **Netlify** (Recommended)
   - Drag & drop folder ke netlify.com
   - Otomatis deploy

2. **GitHub Pages**
   - Upload ke repository GitHub
   - Enable GitHub Pages di Settings

3. **Vercel**
   - Import dari GitHub
   - Deploy otomatis

### Hosting Berbayar:
- Niagahoster
- Hostinger
- DomaiNesia

## 📸 Mengganti Gambar Produk

Saat ini menggunakan placeholder dari Unsplash. Untuk gambar sendiri:

1. Siapkan foto produk (format JPG/PNG)
2. Upload ke hosting gambar (Imgur, Cloudinary, dll)
3. Ganti URL di `script.js`:

```javascript
image: 'https://link-gambar-anda.com/bebek.jpg'
```

Rekomendasi ukuran gambar: 400x300px atau rasio 4:3

## 🔧 Troubleshooting

**WhatsApp tidak terbuka?**
- Pastikan format nomor benar (62xxx)
- Cek apakah WhatsApp terinstall di device

**Gambar tidak muncul?**
- Cek koneksi internet
- Pastikan URL gambar valid
- Gunakan HTTPS untuk URL gambar

**Layout berantakan di mobile?**
- Clear cache browser
- Pastikan Tailwind CSS ter-load

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- Email: info@bebekberkah.com
- WhatsApp: +62 812-3456-7890

## 📄 License

Free to use untuk usaha kecil menengah. Silakan modifikasi sesuai kebutuhan.

---

**Dibuat dengan ❤️ untuk UMKM Indonesia**
