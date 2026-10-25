/* ============================================
   Lightbox Gallery for Memories Section
   ============================================ */

class MemoriesLightbox {
  constructor() {
    this.currentIndex = 0;
    this.memories = [];
    this.isZoomed = false;
    
    this.createLightboxHTML();
    this.cacheDOMElements();
    this.attachEventListeners();
  }

  createLightboxHTML() {
    const lightboxHTML = `
      <div class="lightbox" id="lightbox">
        <button class="lightbox-close" id="lightbox-close" aria-label="Close">
          <i data-feather="x"></i>
        </button>
        
        <button class="lightbox-nav lightbox-nav-prev" id="lightbox-prev" aria-label="Previous">
          <i data-feather="chevron-left"></i>
        </button>
        
        <button class="lightbox-nav lightbox-nav-next" id="lightbox-next" aria-label="Next">
          <i data-feather="chevron-right"></i>
        </button>
        
        <div class="lightbox-content">
          <div class="lightbox-image-wrapper">
            <div class="lightbox-image-counter" id="lightbox-counter">
              1 / 42
            </div>
            <img src="" alt="" class="lightbox-image" id="lightbox-image">
          </div>
          
          <div class="lightbox-info">
            <div class="lightbox-header">
              <h2 class="lightbox-title" id="lightbox-title">Title</h2>
              <div class="lightbox-meta" id="lightbox-meta">
                <!-- Badges will be inserted here -->
              </div>
            </div>
            
            <div class="lightbox-body">
              <p class="lightbox-description" id="lightbox-description">Description</p>
              
              <div class="lightbox-details">
                <div class="lightbox-detail-item">
                  <i data-feather="calendar"></i>
                  <span id="lightbox-year">Kelas 10</span>
                </div>
                <div class="lightbox-detail-item">
                  <i data-feather="tag"></i>
                  <span id="lightbox-category">Category</span>
                </div>
              </div>
            </div>
            
            <div class="lightbox-actions">
              <button class="lightbox-action-btn" id="lightbox-share">
                <i data-feather="share-2"></i>
                <span>Share</span>
              </button>
              <button class="lightbox-action-btn secondary" id="lightbox-download">
                <i data-feather="download"></i>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  }

  cacheDOMElements() {
    this.lightbox = document.getElementById('lightbox');
    this.lightboxImage = document.getElementById('lightbox-image');
    this.lightboxTitle = document.getElementById('lightbox-title');
    this.lightboxDescription = document.getElementById('lightbox-description');
    this.lightboxYear = document.getElementById('lightbox-year');
    this.lightboxCategory = document.getElementById('lightbox-category');
    this.lightboxMeta = document.getElementById('lightbox-meta');
    this.lightboxCounter = document.getElementById('lightbox-counter');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    this.closeBtn = document.getElementById('lightbox-close');
    this.shareBtn = document.getElementById('lightbox-share');
    this.downloadBtn = document.getElementById('lightbox-download');
  }

  attachEventListeners() {
    // Close button
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Navigation buttons
    this.prevBtn.addEventListener('click', () => this.navigate('prev'));
    this.nextBtn.addEventListener('click', () => this.navigate('next'));
    
    // Image zoom toggle
    this.lightboxImage.addEventListener('click', () => this.toggleZoom());
    
    // Share button
    this.shareBtn.addEventListener('click', () => this.shareMemory());
    
    // Download button
    this.downloadBtn.addEventListener('click', () => this.downloadImage());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      
      switch(e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.navigate('prev');
          break;
        case 'ArrowRight':
          this.navigate('next');
          break;
      }
    });
    
    // Close on backdrop click
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.close();
      }
    });
    
    // Touch swipe support for mobile
    this.addSwipeSupport();
  }

  addSwipeSupport() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    this.lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    }, { passive: true });
  }

  handleSwipe(startX, endX) {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.navigate('next');
      } else {
        this.navigate('prev');
      }
    }
  }

  open(index, memoriesArray) {
    this.memories = memoriesArray;
    this.currentIndex = index;
    this.isZoomed = false;
    
    this.updateContent();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reinitialize feather icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
    this.isZoomed = false;
    this.lightboxImage.classList.remove('zoomed');
  }

  navigate(direction) {
    if (direction === 'prev') {
      this.currentIndex = (this.currentIndex - 1 + this.memories.length) % this.memories.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.memories.length;
    }
    
    this.isZoomed = false;
    this.lightboxImage.classList.remove('zoomed');
    this.updateContent();
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
    this.lightboxImage.classList.toggle('zoomed');
  }

  updateContent() {
    const memory = this.memories[this.currentIndex];
    
    // Update image
    this.lightboxImage.src = memory.image;
    this.lightboxImage.alt = memory.title;
    
    // Update text content
    this.lightboxTitle.textContent = memory.title;
    this.lightboxDescription.textContent = memory.description;
    this.lightboxYear.textContent = memory.yearLabel;
    this.lightboxCategory.textContent = memory.categoryLabel;
    
    // Update counter
    this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.memories.length}`;
    
    // Update badges
    this.lightboxMeta.innerHTML = `
      <span class="badge badge-${memory.category}">${memory.categoryLabel}</span>
      <span class="badge badge-primary">${memory.yearLabel}</span>
    `;
    
    // Update navigation button states
    this.updateNavigationButtons();
    
    // Reinitialize feather icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  updateNavigationButtons() {
    // Always enable both buttons for circular navigation
    this.prevBtn.classList.remove('disabled');
    this.nextBtn.classList.remove('disabled');
  }

  shareMemory() {
    const memory = this.memories[this.currentIndex];
    const shareData = {
      title: `Memories Exposixx - ${memory.title}`,
      text: memory.description.substring(0, 100) + '...',
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          if (window.utils && window.utils.showToast) {
            window.utils.showToast('Link berhasil disalin!', 'success');
          } else {
            alert('Link berhasil disalin ke clipboard!');
          }
        })
        .catch((error) => console.log('Error copying:', error));
    }
  }

  downloadImage() {
    const memory = this.memories[this.currentIndex];
    const extension = memory.image.split(/[?#]/, 1)[0].match(/\.[^./\\]+$/)?.[0] || '.jpg';
    const filename = `exposixx-${memory.id}-${memory.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')}${extension}`;

    const link = document.createElement('a');
    link.href = memory.image;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (window.utils && window.utils.showToast) {
      window.utils.showToast('Gambar sedang diunduh...', 'success');
    }
  }
}

// Initialize lightbox
let memoriesLightbox;

document.addEventListener('DOMContentLoaded', () => {
  memoriesLightbox = new MemoriesLightbox();
  console.log('✨ Lightbox.js loaded successfully!');
});

// Export for use in other files
window.openLightbox = (index) => {
  if (memoriesLightbox && typeof memoriesData !== 'undefined') {
    memoriesLightbox.open(index, memoriesData);
  }
};
