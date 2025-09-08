// Toggle dropdown menu
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
});

// Hide dropdown when a menu link is clicked
document.querySelectorAll('.menu-list a').forEach(link => {
  link.addEventListener('click', () => {
    menuList.style.display = 'none';
  });
});

// Smooth scrolling for section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form validation (basic)
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('formAlert');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    alertBox.style.display = 'block';
    alertBox.textContent = "✅ Thank you, your message has been sent!";
    alertBox.className = "alert alert-success";

    // reset form after 2 seconds
    setTimeout(() => {
      form.reset();
      alertBox.style.display = 'none';
    }, 3000);
  });
}
// Dropdown Menu Toggle
const menubtn = document.querySelector('.menu-btn');
const menulist = document.querySelector('.menu-list');

if (menubtn && menulist) {
  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });

  // Close menu when link clicked
  menulist.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menulist.classList.remove('active');
    });
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

