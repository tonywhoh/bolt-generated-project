// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const themeToggleText = document.querySelector('.theme-toggle-text');

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
      themeToggleText.textContent = 'Light';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
      themeToggleText.textContent = 'Dark';
    }
  };

  // Initialize theme
  setTheme(getPreferredTheme());

  // Theme toggle handler
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  });

  // Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Form Handler
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData));
    contactForm.reset();
    alert('Message sent successfully!');
  });

  // Offline Status
  const offlineMessage = document.getElementById('offline-message');

  window.addEventListener('online', () => {
    offlineMessage.hidden = true;
  });

  window.addEventListener('offline', () => {
    offlineMessage.hidden = false;
  });

  if (!navigator.onLine) {
    offlineMessage.hidden = false;
  }
});
