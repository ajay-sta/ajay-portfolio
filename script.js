document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation
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

  // Swiper config
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
});
