document.addEventListener("DOMContentLoaded", () => {
  // -----------------------
  // Typing Animation Setup
  // -----------------------
  const domains = [
    "Web Developer",
    "Software Developer",
    "UI/UX Designer",
    "Java Developer",
    "Open Source Contributor"
  ];
  let index = 0;
  const typedText = document.getElementById("typedText");

  function changeText() {
    typedText.textContent = domains[index];
    index = (index + 1) % domains.length;
  }
  setInterval(changeText, 2500);

  // -----------------------
  // Swiper Slider Config
  // -----------------------
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      }
    }
  });

  // -----------------------
  // Navbar Toggle for Mobile
  // -----------------------
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const navbar = document.getElementById('navbar');

  // Toggle mobile menu
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Hide menu after clicking a nav-link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  // -----------------------
  // Smooth Scroll on Anchor Click
  // -----------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href').trim());
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // -----------------------
  // Hide/Show Navbar on Scroll
  // -----------------------
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      navbar.style.transform = 'translateY(-100%)'; // hide navbar
    } else {
      navbar.style.transform = 'translateY(0)'; // show navbar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
