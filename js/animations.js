/* ============================================
   Animations & Scroll Effects
   ============================================ */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  // Check if AOS is available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 0,
    });
  }
  
  // Add fade-in class to body when loaded
  document.body.classList.add('loaded');
  
  console.log('✨ Animations.js loaded successfully!');
});

// Parallax effect for hero shapes
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-shape, .hero::before, .hero::after');
  
  parallaxElements.forEach((el, index) => {
    const speed = 0.5 + (index * 0.1);
    const yPos = -(scrolled * speed);
    el.style.transform = `translateY(${yPos}px)`;
  });
});

// Intersection Observer for elements without AOS
const animationObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      animationObserver.unobserve(entry.target);
    }
  });
}, animationObserverOptions);

// Observe elements that need animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => animationObserver.observe(el));
});

// Smooth reveal for cards
function revealCards() {
  const cards = document.querySelectorAll('.card, .siswa-card, .wali-card, .kenangan-card');
  
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    }, index * 50);
  });
}

// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > scrollThreshold) {
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }
  }
  
  lastScrollTop = scrollTop;
}, { passive: true });

// Add stagger animation to grid items
function staggerAnimation(selector, delay = 100) {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * delay}ms`;
  });
}

// Image lazy load with fade in
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      
      img.classList.add('fade-in');
      imageObserver.unobserve(img);
    }
  });
}, {
  rootMargin: '50px'
});

// Observe all images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src], img.lazy');
  images.forEach(img => imageObserver.observe(img));
});

// Floating animation for hero elements
function floatingAnimation() {
  const floatingElements = document.querySelectorAll('.hero-shape');
  
  floatingElements.forEach((el, index) => {
    const animation = el.animate([
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-20px)' },
      { transform: 'translateY(0px)' }
    ], {
      duration: 3000 + (index * 500),
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  });
}

// Call floating animation when loaded
window.addEventListener('load', floatingAnimation);

// Add pulse animation to CTA buttons
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.animation = 'pulse 0.5s ease-in-out';
  });
  
  btn.addEventListener('animationend', function() {
    this.style.animation = '';
  });
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Add keyframes for animations via JavaScript
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .slide-in-up {
    animation: slideInUp 0.8s ease-out forwards;
  }
  
  .animate-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  body {
    opacity: 1;
  }
  
  body.loaded {
    opacity: 1;
  }
`;

document.head.appendChild(styleSheet);
