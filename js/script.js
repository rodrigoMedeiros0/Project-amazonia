// variaveis para função navBar
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

// variaveis para função activeNavLink
let link = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');

let url = '../project-amazonia/blogAPI.json';

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
function initCarroselEffect() {
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
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  });
}

async function getAllPosts() {
  let response = await fetch(url);

  let data = await response.json();

  let count = 1;

  data.map((contentPost) => {
    let divCard = document.createElement('div');
    divCard.classList.add('box', 'swiper-slide', 'post-js');
    document.querySelector('.card').appendChild(divCard);

    let img = document.createElement('img');
    img.className = 'img-post';
    img.setAttribute('src', `images/img${count}.jpg`);
    divCard.appendChild(img);

    let divTextPost = document.createElement('div');
    divTextPost.classList.add('content', 'content-js');
    divCard.appendChild(divTextPost);

    let span = document.createElement('span');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let a = document.createElement('a');

    span.className = 'calendar';
    h3.className = 'text-title';
    p.className = 'text-paragraph';
    a.className = 'btn-post';

    span.innerHTML = `<i class='fas fa-calendar'></i>${contentPost.calendar}`;
    h3.innerText = contentPost.title;
    p.innerText = contentPost.paragraph;
    a.innerHTML = "<button class='btn'> Leia mais</button>";

    divTextPost.appendChild(span);
    divTextPost.appendChild(h3);
    divTextPost.appendChild(p);
    divTextPost.appendChild(a);
    count++;
  });
}

initNavBar();
initActiveNavLink();
initCarroselEffect();
getAllPosts();
