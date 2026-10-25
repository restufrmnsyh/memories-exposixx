/* ============================================
   Main JavaScript - Core Functionality
   ============================================ */

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar-nav a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile Menu Toggle =====
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburgerMenu.classList.toggle('active');
    navbarNav.classList.toggle('active');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navbarNav && !navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    hamburgerMenu?.classList.remove('active');
    navbarNav.classList.remove('active');
  }
});

// Close mobile menu when clicking on a link
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu?.classList.remove('active');
    navbarNav.classList.remove('active');
  });
});

// ===== Active Navigation Link =====
function setActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if href is just "#" or empty
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Back to Top Button =====
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i data-feather="arrow-up"></i>';
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Trigger counter animation when stats come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  counterObserver.observe(statsSection);
}

// ===== Lazy Loading Images =====
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src || img.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// ===== Form Handling =====
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Form validation
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'var(--color-error)';
      } else {
        input.style.borderColor = 'var(--color-bg-cream)';
      }
    });

    if (!isValid) {
      e.preventDefault();
      showToast('Mohon lengkapi semua field', 'error');
    }
  });
}

// ===== Toast Notification =====
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '1rem 1.5rem',
    backgroundColor: type === 'error' ? 'var(--color-error)' : 'var(--color-success)',
    color: 'white',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-xl)',
    zIndex: '9999',
    animation: 'slideInRight 0.3s ease-out'
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Link Sidebar Toggle (existing functionality) =====
const tautanBtn = document.getElementById('tautan');
const linkSidebar = document.querySelector('.link');

if (tautanBtn && linkSidebar) {
  tautanBtn.addEventListener('click', (e) => {
    e.preventDefault();
    linkSidebar.classList.toggle('active');
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!linkSidebar.contains(e.target) && !tautanBtn.contains(e.target)) {
      linkSidebar.classList.remove('active');
    }
  });
}

// ===== Initialize Feather Icons =====
if (typeof feather !== 'undefined') {
  feather.replace();
}

// ===== Page Load Animation =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ===== Utility Functions =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export utility functions
window.utils = {
  debounce,
  throttle,
  showToast
};

console.log('✨ Main.js loaded successfully!');
