# Website Desa Maduretno

## Deskripsi
Website resmi Desa Maduretno yang dirancang untuk memberikan informasi komprehensif tentang desa kepada masyarakat. Website ini dibangun menggunakan Next.js untuk memberikan pengalaman pengguna yang cepat dan responsif, dengan fokus pada kemudahan akses informasi desa.

## Fitur Utama
- **Profil Desa**: Informasi lengkap tentang sejarah, visi-misi, dan struktur pemerintahan desa
- **Listing**: Peta Desa
- **UMKM**: Showcase UMKM dan potensi wisata desa
- **Infografis**: Data demografi dan statistik penting tentang desa

## Persyaratan Sistem
Untuk pengembangan lokal, pastikan perangkat Anda memiliki:
- **Node.js** (versi 18.0.0 atau lebih baru) - [Download](https://nodejs.org)
- **npm** (v8.0.0+) atau **yarn** (v1.22.0+) sebagai package manager
- **Git** untuk version control - [Download](https://git-scm.com)

## Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/yusrilprayoga-code/maduretno.git
cd maduretno
```

### 2. Instalasi Dependensi
```bash
npm install
# atau
yarn install
```

### 3. Menjalankan Website Secara Lokal
```bash
npm run dev
# atau
yarn dev
```

Akses website melalui browser di:
```
http://localhost:3000
```

### 4. Build untuk Produksi
```bash
npm run build
# atau
yarn build
```

## Deployment di Vercel

Website ini di-deploy menggunakan Vercel. Untuk melakukan deployment:

1. Push kode ke repository GitHub
2. Login ke [Vercel](https://vercel.com)
3. Import repository GitHub Anda
4. Vercel akan otomatis mendeteksi konfigurasi Next.js
5. Klik Deploy

Website dapat diakses di: [https://maduretno.vercel.app](https://maduretno.vercel.app)

## Teknologi yang Digunakan
- **Framework**: Next.js 15
- **UI/Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Struktur Folder
```
maduretno/
├── components/         # Komponen React yang dapat digunakan kembali
├── pages/             # Halaman-halaman website
├── public/            # Asset statis (gambar, favicon, dll)
├── styles/            # File CSS dan konfigurasi Tailwind
├── data/             # Data statis dalam format JSON/MD
└── utils/            # Fungsi-fungsi utilitas
```

## Pengembangan Lokal
1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/NewFeature`)
3. Commit perubahan (`git commit -m 'Add NewFeature'`)
4. Push ke branch (`git push origin feature/NewFeature`)
5. Buat Pull Request

## Pemeliharaan
Website ini dikelola oleh Tim IT Desa Maduretno. Untuk pertanyaan atau dukungan, silakan hubungi:
- Email: desamaduretno10@gmail.com
- WhatsApp: 085801987426

## Lisensi
Hak Cipta © 2025 KKN AA.82.121 & KKN AA.82.122 - Desa Maduretno - Kebumen. All rights reserved. Seluruh hak cipta dilindungi undang-undang.