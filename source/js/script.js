let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.header__burger');

navMain.classList.remove('navigation--nojs');
navToggle.classList.remove('header__burger--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed'))
  {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }

  if   (navToggle.classList.contains('header__burger--closed')) {
    navToggle.classList.remove('header__burger--closed');
    navToggle.classList.add('header__burger--opened');
  } else {
    navToggle.classList.add('header__burger--closed');
    navToggle.classList.remove('header__burger--opened');
  }

});


// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });
