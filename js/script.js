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

let json = [
  {
    calendar: "<i class='fas fa-calendar'></i>17/11/2022",
    title: 'Reciclagem',
    paragraph:
      'A reciclagem ajuda a conservar recursos naturais como madeira, água e minerais, o que reduz a extração de novas matérias-primas. Quanto mais...',
  },
  {
    calendar: "<i class='fas fa-calendar'></i> 2/11/2022",
    title: 'Luta pela sobrevivência',
    paragraph:
      'O povo indígena yanomami que há séculos ocupa a floresta amazônica enfrenta diveros desafios atuais. A luta contra exploradores ...',
  },
  {
    calendar: "<i class='fas fa-calendar'></i>15/10/2022 ",
    title: 'Vacinas Covid-19',
    paragraph:
      'Na última semana de maio, 10 comunidades receberam doses da vacina contra a Covid-19. A vacina foi destinada desde crianças até adultos...',
  },
  {
    calendar: "<i class='fas fa-calendar'></i> 1/10/2022 ",
    title: 'Pecuária sustentável',
    paragraph:
      'A pecuária sustentável são um conjunto de técnicas com consciência ambiental e responsabilidade social...',
  },
  {
    calendar: "<i class='fas fa-calendar'></i> 22/09/2022 ",
    title: 'Tecnologia para todos',
    paragraph:
      'Essa iniciativa foi criada para apoiar povos e e ensina-los sobre as tecnologias e como elas são úteis...',
  },
  {
    calendar: "<i class='fas fa-calendar'></i> 07/09/2022 ",
    title: 'Desmatamento',
    paragraph:
      'Certas atividades humanas, como o desmatamento, estão levando espécies à extinção em um ritmo alarmante. Estudos mostram que...',
  },
];

let card = document.querySelector('.card');

for (let contador = 1; contador <= json.length; contador++) {
  let div = document.createElement('div');
  div.classList.add('box', 'swiper-slide', 'post-js');
  card.appendChild(div);
}

let boxPost = document.querySelectorAll('.post-js');
console.log(boxPost);

boxPost.forEach((element, index) => {
  //imagem do post
  let img = document.createElement('img');

  img.className = 'img-post';
  element.appendChild(img);
  element
    .querySelector('.img-post')
    .setAttribute('src', `images/img${index + 1}.jpg`);

  let div = document.createElement('div');
  div.classList.add('content', 'content-js');

  element.appendChild(div);

  //conteudo do post
  let span = document.createElement('span');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let a = document.createElement('a');

  span.className = 'calendar';
  h3.className = 'text-title';
  p.className = 'text-paragraph';
  a.className = 'btn-post';

  span.innerHTML = json[index].calendar;
  h3.innerText = json[index].title;
  p.innerText = json[index].paragraph;
  a.innerHTML = "<button class='btn'> Leia mais</button>";

  element.querySelector('.content-js').appendChild(span);
  element.querySelector('.content-js').appendChild(h3);
  element.querySelector('.content-js').appendChild(p);
  element.querySelector('.content-js').appendChild(a);
});

initNavBar();
initActiveNavLink();
initCarroselEffect();
