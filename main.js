// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Sticky Header
  window.onscroll = function() {
    const header = document.getElementById('header');
    if (window.pageYOffset > 50) {
      header.style.padding = '15px 0';
      header.style.backgroundColor = 'rgba(26, 42, 58, 0.95)';
    } else {
      header.style.padding = '20px 0';
      header.style.backgroundColor = 'rgba(26, 42, 58, 0.9)';
    }
  };
  
  // Menu Tabs
  const menuTabs = document.querySelectorAll('.menu-tab');
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // In a real implementation, this would show/hide different menu sections
    });
  });
  
  // Form Submission (prevent default)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('お問い合わせありがとうございます。実際のサイトでは、ここでフォームが送信されます。');
    });
  });
  
  // Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});