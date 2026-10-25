/* ============================================
   Initialization Script - Ensures Proper Loading Order
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM Content Loaded - Initializing...');
  
  // Check if all required libraries are loaded
  const checks = {
    feather: typeof feather !== 'undefined',
    AOS: typeof AOS !== 'undefined',
    memoriesData: typeof memoriesData !== 'undefined',
    siswaData: typeof siswaData !== 'undefined'
  };
  
  console.log('📦 Library checks:', checks);
  
  // Initialize Feather Icons first
  if (checks.feather) {
    feather.replace();
    console.log('✅ Feather Icons initialized');
  } else {
    console.error('❌ Feather Icons not loaded');
  }
  
  // Initialize AOS
  if (checks.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 0,
    });
    console.log('✅ AOS initialized');
  } else {
    console.error('❌ AOS not loaded');
  }
  
  // Check if memories data is loaded
  if (checks.memoriesData) {
    console.log(`✅ Memories data loaded: ${memoriesData.length} memories`);
  } else {
    console.error('❌ Memories data not loaded');
  }
  
  // Check if siswa data is loaded
  if (checks.siswaData) {
    console.log(`✅ Siswa data loaded: ${siswaData.length} students`);
  } else {
    console.error('❌ Siswa data not loaded - will be defined in search.js');
  }
  
  // Add body loaded class
  document.body.classList.add('loaded');
  
  console.log('🎉 Initialization complete!');
});

// Log when all resources (images, scripts) are loaded
window.addEventListener('load', () => {
  console.log('🎨 All resources loaded');
  
  // Reinitialize feather icons after all content is rendered
  setTimeout(() => {
    if (typeof feather !== 'undefined') {
      feather.replace();
      console.log('🔄 Feather Icons refreshed');
    }
  }, 500);
});
