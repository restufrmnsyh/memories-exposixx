# 🎓 Memories of Exposixx - Digital Yearbook

Website memories digital untuk kelas Exposixx (X MIPA 6) SMAN 1 Majenang. Kenangan 3 tahun yang tak terlupakan dari 2021-2024.

![Exposixx Logo](img/logo-exposixx-removebg-preview.png)

## ✨ Features

### 🎨 Modern UI/UX Design
- **Warm Color Palette**: Cream, beige, dan coral untuk tampilan yang hangat dan welcoming
- **Modern Typography**: Plus Jakarta Sans & Inter untuk readability yang baik
- **Smooth Animations**: AOS library untuk scroll animations yang halus
- **Responsive Design**: Mobile-first approach, optimal di semua devices

### 🔍 Search & Filter Siswa
- **Real-time Search**: Cari nama siswa secara instant
- **Gender Filter**: Filter berdasarkan laki-laki/perempuan
- **Result Counter**: Menampilkan jumlah hasil pencarian
- **Dynamic Rendering**: Semua cards di-generate oleh JavaScript

### 📅 Timeline Kenangan
- **Organized by Year**: Kenangan dikelompokkan per tahun ajaran (Kelas 10, 11, 12)
- **42 Memories**: Total 42 moment yang diabadikan
- **Category Tags**: Sport, Academic, Event, Food, Culture, Graduation
- **Sticky Year Dividers**: Year headers yang tetap terlihat saat scroll

### 🖼️ Lightbox Gallery
- **Full Image View**: Klik foto untuk melihat versi besar
- **Zoom Feature**: Klik gambar untuk zoom in/out
- **Navigation**: Previous/Next arrows dengan keyboard support
- **Share & Download**: Tombol untuk share dan download foto
- **Swipe Gesture**: Support swipe di mobile
- **Image Counter**: Menampilkan posisi foto (15/42)

### 👨‍🏫 Wali Kelas Timeline
- **3 Wali Kelas**: Pak Hafidz, Bu Diah, Pak Rasda
- **Timeline Design**: Horizontal cards dengan gradient borders
- **Year Badges**: Indicator tahun ajaran
- **Instagram Links**: Link langsung ke Instagram wali kelas

## 🚀 Technologies Used

### Frontend
- **HTML5**: Semantic HTML
- **CSS3**: Modern CSS with variables, grid, flexbox
- **JavaScript (Vanilla)**: No framework dependency

### Libraries
- **Feather Icons** (v4.29.0): Beautiful icon set
- **AOS** (v2.3.1): Animate On Scroll library
- **Formspree**: Contact form handling

### Font
- **Plus Jakarta Sans**: Headings
- **Inter**: Body text
- **Delius**: Accent font

## 📁 Project Structure

```
memories-exposixx/
├── index.html              # Main HTML file
├── README.md              # Documentation
│
├── css/
│   ├── variables.css      # Color palette & spacing system
│   ├── reset.css          # CSS reset & normalization
│   ├── typography.css     # Typography styles
│   ├── components.css     # Reusable UI components
│   ├── layout.css         # Major layout styles
│   ├── lightbox.css       # Lightbox modal styles
│   └── style.css          # Section-specific styles
│
├── js/
│   ├── main.js            # Core functionality
│   ├── animations.js      # Scroll animations & effects
│   ├── search.js          # Siswa search & filter
│   ├── timeline.js        # Kenangan timeline rendering
│   └── lightbox.js        # Lightbox gallery
│
├── data/
│   └── memories-data.js   # 42 memories data with timeline info
│
├── img/
│   ├── kenangan/          # 42 memory photos
│   ├── siswa/             # 36 student photos
│   ├── wali-kelas/        # 3 homeroom teacher photos
│   └── ...                # Other images
│
└── backup-original/       # Backup of original website
    ├── index.html
    └── style.css
```

## 🎯 Key Features Implementation

### 1. Hero Section
- Split layout (50-50)
- Animated stat counters
- Parallax background shapes
- CTA button with hover effect

### 2. Siswa Section
- Search bar with clear button
- Gender filter buttons
- Dynamic card rendering
- Result counter
- Kesan pesan CTA

### 3. Kenangan Section
- Timeline organization by year
- Masonry grid layout
- Category badges
- Click to open lightbox
- Hover overlay effect

### 4. Lightbox Modal
- Full-screen image view
- Zoom in/out functionality
- Keyboard navigation (arrows, ESC)
- Swipe gesture for mobile
- Share & download buttons
- Image counter display

## 🎨 Color System

```css
/* Primary Colors */
--color-primary: #E07A5F;        /* Coral/Orange */
--color-secondary: #6B4E8B;      /* Deep Purple */

/* Background */
--color-bg-cream: #F5EBE0;       /* Main background */
--color-bg-white: #FFFFFF;       /* Cards background */

/* Text */
--color-text-dark: #2D3142;      /* Main text */
--color-text-gray: #4F5D75;      /* Secondary text */

/* Category Colors */
--category-sport: #FF6B35;       /* Orange */
--category-academic: #4A90E2;    /* Blue */
--category-event: #9B59B6;       /* Purple */
--category-food: #27AE60;        /* Green */
--category-culture: #E74C3C;     /* Red */
--category-graduation: #F39C12;  /* Gold */
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px)   { /* 1 column */ }

/* Tablet */
@media (max-width: 768px)   { /* 2 columns */ }

/* Desktop */
@media (max-width: 1024px)  { /* 3 columns */ }

/* Large Desktop */
@media (min-width: 1280px)  { /* 4 columns */ }
```

## 🔧 Setup & Installation

1. **Clone or Download** repository ini
2. **Open** `index.html` di browser
3. **Enjoy!** Website sudah siap digunakan

Tidak perlu install dependencies atau build process karena menggunakan vanilla JavaScript dan CDN links.

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ⚠️ IE11 (limited support)

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load saat terlihat di viewport
- **Debounce**: Search input menggunakan debounce (300ms)
- **CSS Variables**: Konsisten dan mudah maintain
- **Minified Libraries**: Menggunakan CDN minified versions
- **Efficient Selectors**: Query DOM sekali, cache hasilnya
- **Event Delegation**: Minimize event listeners

## 📊 Statistics

- **Total Siswa**: 36 orang
- **Total Memories**: 42 moments
- **Periode**: 3 tahun (2021-2024)
- **Wali Kelas**: 3 guru
- **Total Images**: 80+ photos

## 🎓 Memory Categories

| Category | Count | Icon |
|----------|-------|------|
| Sport | 9 | 🏀 |
| Academic | 6 | 📚 |
| Event | 14 | 🎉 |
| Food | 5 | 🍜 |
| Culture | 7 | 🎭 |
| Graduation | 1 | 🎓 |

## 👥 Credits

**Created by**: [@restu.frmnsyh_](https://www.instagram.com/restu.frmnsyh_/)  
**Class**: X MIPA 6 / Exposixx  
**School**: SMAN 1 Majenang  
**Year**: 2021 - 2024  

**Special Thanks to**:
- Pak Hafidz (Wali Kelas 10)
- Bu Diah (Wali Kelas 11)
- Pak Rasda (Wali Kelas 12)
- Semua anggota Exposixx

## 📝 License

© 2025 Exposixx Memories. All rights reserved.

Website ini dibuat untuk keperluan kenangan kelas dan tidak untuk tujuan komersial.

---

## 🔄 Changelog

### Version 2.0 (2025) - Modern Redesign
- ✨ Complete UI/UX redesign dengan modern color palette
- 🔍 Added search & filter functionality untuk siswa
- 📅 Implemented timeline organization untuk kenangan
- 🖼️ Created lightbox gallery dengan zoom & navigation
- 🎨 Added smooth animations dengan AOS library
- 📱 Improved mobile responsiveness
- ⚡ Performance optimizations

### Version 1.0 (2024) - Original
- 📸 Basic static website dengan semua photos
- 👥 List of 36 siswa
- 🎉 42 kenangan moments
- 👨‍🏫 3 wali kelas information

---

**Made with ❤️ for Exposixx Family**

*"Berawal dari teman kelas yang menjadi sebuah keluarga."*
