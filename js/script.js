// variaveis para função navBar
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

// variaveis para função activeNavLink
let link = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');

//variaveis para a função initTextPost
let calendarPost1 = document.querySelector('.text-calendar1');
let titlePost1 = document.querySelector('.text-title1');
let paragraphPost1= document.querySelector('.text-paragraph1')

let calendarPost2 = document.querySelector('.text-calendar2');
let titlePost2 = document.querySelector('.text-title2');
let paragraphPost2 = document.querySelector('.text-paragraph2');

let calendar3 = document.querySelector('.text-calendar3');
let titlePost3 = document.querySelector('.text-title3');
let paragraphPost3 = document.querySelector('.text-paragraph3');



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
    breakpoints:{
      0: {
        slidesPerView:1,
      },
      520: {
        slidesPerView:1,
      },
      950: {
        slidesPerView:2,
      },
      1100: {
        slidesPerView:3,
      }
    }
  });
}

function initTextPost() {
  // primeiro post
  calendarPost1.innerHTML = "<i class='fas fa-calendar'></i>17/11/2022";
  titlePost1.innerText = "Reciclagem";
  paragraphPost1.innerText="A reciclagem ajuda a conservar recursos naturais como madeira, água e minerais, o que reduz a extração de novas matérias-primas. Quanto mais..."

  // segundo post
  calendarPost2.innerHTML = "<i class='fas fa-calendar'></i> 2/11/2022"
  titlePost2.innerText = "Luta pela sobrevivência";
  paragraphPost2.innerText = "O povo indígena yanomami que há séculos ocupa a floresta amazônica enfrenta diveros desafios atuais. A luta contra exploradores ...";

  // terceiro post 
  calendar3.innerHTML = "<i class='fas fa-calendar'></i>15/10/2022 ";
  titlePost3.innerText = "Vacinas Covid-19";
  paragraphPost3.innerText = "Na última semana de maio, 10 comunidades receberam doses da vacina contra a Covid-19. A vacina foi destinada desde crianças até adultos...";
}

initNavBar();
initActiveNavLink();
initCarroselEffect();
initTextPost();
