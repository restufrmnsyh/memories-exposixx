/* ============================================
   Timeline Kenangan - Organized by Year
   ============================================ */

class KenanganTimeline {
  constructor() {
    this.container = document.getElementById('kenangan-timeline');
    if (!this.container) return;
    
    this.init();
  }

  init() {
    if (typeof memoriesData === 'undefined') {
      console.error('memoriesData not loaded');
      return;
    }

    this.renderTimeline();
  }

  renderTimeline() {
    // Group memories by year
    const groupedByYear = this.groupByYear(memoriesData);
    
    // Render each year section
    let html = '';
    
    // Kelas 10
    if (groupedByYear['10'] && groupedByYear['10'].length > 0) {
      html += this.renderYearSection('10', 'Kelas 10 (2021/2022)', groupedByYear['10']);
    }
    
    // Kelas 11
    if (groupedByYear['11'] && groupedByYear['11'].length > 0) {
      html += this.renderYearSection('11', 'Kelas 11 (2022/2023)', groupedByYear['11']);
    }
    
    // Kelas 12
    if (groupedByYear['12'] && groupedByYear['12'].length > 0) {
      html += this.renderYearSection('12', 'Kelas 12 (2023/2024)', groupedByYear['12']);
    }
    
    this.container.innerHTML = html;
    
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
    
    // Attach click events to cards
    this.attachClickEvents();
  }

  groupByYear(memories) {
    const grouped = {};
    
    memories.forEach(memory => {
      if (!grouped[memory.year]) {
        grouped[memory.year] = [];
      }
      grouped[memory.year].push(memory);
    });
    
    return grouped;
  }

  renderYearSection(year, yearLabel, memories) {
    return `
      <div class="timeline-divider" data-year="${year}">
        <span class="timeline-icon">📅</span>
        <h3 class="timeline-title">${yearLabel}</h3>
      </div>
      
      <div class="kenangan-grid">
        ${memories.map((memory, index) => this.renderMemoryCard(memory, index)).join('')}
      </div>
    `;
  }

  renderMemoryCard(memory, index) {
    return `
      <div class="kenangan-card" data-memory-id="${memory.id}" data-index="${index}">
        <div class="kenangan-card-badge">
          <span class="badge badge-${memory.category}">${this.getCategoryIcon(memory.category)} ${memory.categoryLabel}</span>
        </div>
        
        <div class="kenangan-card-img-wrapper">
          <img src="${memory.image}" alt="${memory.title}" class="kenangan-card-img">
          <div class="kenangan-card-overlay">
            <p>${memory.description.substring(0, 100)}...</p>
          </div>
        </div>
        
        <div class="kenangan-card-body">
          <h3 class="kenangan-card-title">${memory.title}</h3>
          <p class="kenangan-card-description">${memory.description}</p>
        </div>
      </div>
    `;
  }

  getCategoryIcon(category) {
    const icons = {
      'sport': '🏀',
      'academic': '📚',
      'event': '🎉',
      'food': '🍜',
      'culture': '🎭',
      'graduation': '🎓'
    };
    return icons[category] || '📸';
  }

  attachClickEvents() {
    const cards = document.querySelectorAll('.kenangan-card');
    
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const memoryId = parseInt(card.dataset.memoryId);
        const index = memoriesData.findIndex(m => m.id === memoryId);
        
        if (index !== -1 && typeof window.openLightbox === 'function') {
          window.openLightbox(index);
        }
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new KenanganTimeline();
  console.log('✨ Timeline.js loaded successfully!');
});
