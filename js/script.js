// variaveis para função navBar
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

// variaveis para função activeNavLink
let link = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');

function initNavBar() {
  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  });

  window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
  });
}

function initActiveNavLink() {
  window.onscroll = function () {
    let current = 'home';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
  
    link.forEach((item) => {
      item.classList.remove('active');
      if (item.href.includes(current)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };
}

// swiper carrosel efeito na seção blog
function initCarroselEffect () {
  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

initNavBar();
initActiveNavLink();
initCarroselEffect();
