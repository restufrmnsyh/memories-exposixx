/* ============================================
   Search & Filter Functionality for Siswa Section
   ============================================ */

// Siswa Data
const siswaData = [
  { nama: "AKMAL HADI PRAWOTO", instagram: "@akmallhadii._", gender: "laki-laki", image: "img/siswa/1.JPG", link: "https://www.instagram.com/akmallhadii._/?utm_source=ig_web_button_share_sheet" },
  { nama: "AMANDA QONITA", instagram: "@amandaaqonita", gender: "perempuan", image: "img/siswa/2.jpg", link: "https://www.instagram.com/amandaaqonita/" },
  { nama: "ARIF FIRMAN DANI", instagram: "@arffrmndani", gender: "laki-laki", image: "img/siswa/3.JPG", link: "https://www.instagram.com/arffrmndani/" },
  { nama: "ASNA MISELLIA NIAR", instagram: "@myyxellni.ar", gender: "perempuan", image: "img/siswa/4.jpg", link: "https://www.instagram.com/myyxellni.ar/" },
  { nama: "AZZAHRA DWI UTAMI", instagram: "@raraadtmi_", gender: "perempuan", image: "img/siswa/5.jpg", link: "https://www.instagram.com/raraadtmi_/" },
  { nama: "CHELSEA PUSPITA MAHARANI", instagram: "@xtcevy", gender: "perempuan", image: "img/siswa/6.jpg", link: "https://www.instagram.com/xtcevy/" },
  { nama: "CIPTO WIDODO", instagram: "@aldodakpagelaran", gender: "laki-laki", image: "img/siswa/7.jpg", link: "https://www.instagram.com/aldodakpagelaran/" },
  { nama: "DINA DWI AGUSTINA", instagram: "@dinaadwiii_", gender: "perempuan", image: "img/siswa/8.jpg", link: "https://www.instagram.com/dinaadwiii_/" },
  { nama: "DWI FEBRIANTO", instagram: "@dwi_fyt06", gender: "laki-laki", image: "img/siswa/9.jpg", link: "https://www.instagram.com/dwi_fyt06/" },
  { nama: "DYAH WAHYU APRILLIANI", instagram: "@yaa.rln", gender: "perempuan", image: "img/siswa/10.jpg", link: "https://www.instagram.com/yaa.rln/" },
  { nama: "FAA`IZETUL BAROROH", instagram: "@jjdfaav", gender: "perempuan", image: "img/siswa/11.jpg", link: "https://www.instagram.com/jjdfaav/" },
  { nama: "FAISHAL DANAR AR-RASYID", instagram: "@faisaldanarr", gender: "laki-laki", image: "img/siswa/12.jpg", link: "https://www.instagram.com/faisaldanarr/" },
  { nama: "FAUZAN AMRI PERMANA", instagram: "@_afznaap", gender: "laki-laki", image: "img/siswa/13.jpg", link: "https://www.instagram.com/_afznaap/" },
  { nama: "FITRI OKTAVIA RAMADANI", instagram: "@fitrioktavia79", gender: "perempuan", image: "img/siswa/14.jpg", link: "https://www.instagram.com/fitrioktavia79/" },
  { nama: "HASNA HANNAN SHOLIHAH", instagram: "@hnns_sh", gender: "perempuan", image: "img/siswa/15.jpg", link: "https://www.instagram.com/hnns_sh/" },
  { nama: "INTAN DEWI MARYAM", instagram: "@_intannnm", gender: "perempuan", image: "img/siswa/16.JPG", link: "https://www.instagram.com/_intannnm/" },
  { nama: "JATMIKO TRI ATMOJO", instagram: "@miko3a", gender: "laki-laki", image: "img/siswa/17.JPG", link: "https://www.instagram.com/miko3a/" },
  { nama: "KARINA GHISA RASYIDAH", instagram: "@karinaghisa", gender: "perempuan", image: "img/siswa/18.JPG", link: "https://www.instagram.com/karinaghisa/" },
  { nama: "LANTAN BAKAT ASWANGGA", instagram: "@tannbkt", gender: "laki-laki", image: "img/siswa/19.JPG", link: "https://www.instagram.com/tannbkt/" },
  { nama: "MELISA FEBRIANINGSIH", instagram: "@melisaaaf_", gender: "perempuan", image: "img/siswa/20.JPG", link: "https://www.instagram.com/melisaaaf_/" },
  { nama: "MUHAMMAD RESTU FIRMANSYAH", instagram: "@restu.frmnsyh_", gender: "laki-laki", image: "img/siswa/21.JPG", link: "https://www.instagram.com/restu.frmnsyh_/" },
  { nama: "NAYLA SALMA FATIMAH", instagram: "@naylaslff_", gender: "perempuan", image: "img/siswa/22.JPG", link: "https://www.instagram.com/naylaslff_/" },
  { nama: "NISA ALIYATU SARIFAH", instagram: "@pocaryy", gender: "perempuan", image: "img/siswa/23.JPG", link: "https://www.instagram.com/pocaryy/" },
  { nama: "OSY WERDIA PRAMESTHI", instagram: "@osywerdia", gender: "perempuan", image: "img/siswa/24.jpg", link: "https://www.instagram.com/osywerdia/" },
  { nama: "PANDU PRIYANTO", instagram: "@panskuy_6", gender: "laki-laki", image: "img/siswa/25.JPG", link: "https://www.instagram.com/panskuy_6/" },
  { nama: "RENISA", instagram: "@rerenesaa", gender: "perempuan", image: "img/siswa/26.JPG", link: "https://www.instagram.com/rerenesaa/" },
  { nama: "REVAN PRAPNA PUTRA", instagram: "@rvnpnt__", gender: "laki-laki", image: "img/siswa/27.JPG", link: "https://www.instagram.com/rvnpnt__/" },
  { nama: "RONALDO BINTANG SATRIA", instagram: "@rnld_b", gender: "laki-laki", image: "img/siswa/28.JPG", link: "https://www.instagram.com/rnld_b/" },
  { nama: "SALSABILA GUSNITA PUTRI", instagram: "@slsaabila.aa", gender: "perempuan", image: "img/siswa/29.JPG", link: "https://www.instagram.com/slsaabila.aa/" },
  { nama: "SENDY BEKTI", instagram: "@sennnnn.__", gender: "laki-laki", image: "img/siswa/30.JPG", link: "https://www.instagram.com/sennnnn.__/" },
  { nama: "SILVIANA ISMI NAJIB", instagram: "@_anaaaisna", gender: "perempuan", image: "img/siswa/31.JPG", link: "https://www.instagram.com/_anaaaisna/" },
  { nama: "SYAFIKAH NURUL AFRIANA", instagram: "@syaaan.a", gender: "perempuan", image: "img/siswa/32.JPG", link: "https://www.instagram.com/syaaan.a/" },
  { nama: "TITIS CRESTI ANJANI", instagram: "@ts.crst__", gender: "perempuan", image: "img/siswa/33.jpg", link: "https://www.instagram.com/ts.crst__/" },
  { nama: "WINDAYANA AYUNING PUTRI", instagram: "@windayaana", gender: "perempuan", image: "img/siswa/34.jpg", link: "https://www.instagram.com/windayaana/" },
  { nama: "ZAIN KAUTSAR RIDHA", instagram: "@zainzenn", gender: "laki-laki", image: "img/siswa/35.jpg", link: "https://www.instagram.com/zainzenn/" },
  { nama: "ZAKKY FAHRIZAL HILMI", instagram: "@zkyfhrlzhil1", gender: "laki-laki", image: "img/siswa/36.jpg", link: "https://www.instagram.com/zkyfhrlzhil1/" }
];

class SiswaSearch {
  constructor() {
    this.searchInput = document.getElementById('siswa-search');
    this.clearBtn = document.getElementById('clear-search');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.siswaGrid = document.getElementById('siswa-grid');
    this.resultCounter = document.getElementById('result-counter');
    
    this.currentFilter = 'all';
    this.currentSearch = '';
    
    this.init();
  }

  init() {
    if (!this.searchInput || !this.siswaGrid) return;

    // Search input event
    this.searchInput.addEventListener('input', window.utils.debounce((e) => {
      this.currentSearch = e.target.value.toLowerCase();
      this.updateClearButton();
      this.filterAndRender();
    }, 300));

    // Clear button event
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        this.searchInput.value = '';
        this.currentSearch = '';
        this.updateClearButton();
        this.filterAndRender();
        this.searchInput.focus();
      });
    }

    // Filter buttons event
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.filterAndRender();
      });
    });

    // Initial render
    this.filterAndRender();
  }

  updateClearButton() {
    if (this.clearBtn) {
      if (this.currentSearch.length > 0) {
        this.clearBtn.classList.add('active');
      } else {
        this.clearBtn.classList.remove('active');
      }
    }
  }

  filterAndRender() {
    let filtered = siswaData;

    // Filter by gender
    if (this.currentFilter !== 'all') {
      filtered = filtered.filter(siswa => siswa.gender === this.currentFilter);
    }

    // Filter by search
    if (this.currentSearch) {
      filtered = filtered.filter(siswa => 
        siswa.nama.toLowerCase().includes(this.currentSearch) ||
        siswa.instagram.toLowerCase().includes(this.currentSearch)
      );
    }

    this.renderSiswa(filtered);
    this.updateCounter(filtered.length);
  }

  renderSiswa(data) {
    if (data.length === 0) {
      this.siswaGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">Tidak Ada Hasil</h3>
          <p class="empty-text">Tidak ditemukan siswa dengan kata kunci "${this.currentSearch}"</p>
        </div>
      `;
      return;
    }

    this.siswaGrid.innerHTML = data.map(siswa => `
      <div class="siswa-card card">
        <img src="${siswa.image}" alt="${siswa.nama}" class="card-image siswa-card-img">
        <div class="card-body">
          <h3 class="siswa-card-title">
            <a href="${siswa.link}" target="_blank" class="btn btn-primary btn-sm">
              ${siswa.nama}
            </a>
          </h3>
          <p class="siswa-card-instagram text-gray">${siswa.instagram}</p>
        </div>
      </div>
    `).join('');
  }

  updateCounter(count) {
    if (this.resultCounter) {
      this.resultCounter.textContent = `Menampilkan ${count} dari ${siswaData.length} siswa`;
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SiswaSearch();
  console.log('✨ Search.js loaded successfully!');
});
