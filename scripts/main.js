function toggleMenu(e) {
  e.classList.toggle("close");
  header = document.querySelector('.header');
  intro = document.querySelector('.intro');
  navList = document.querySelector('.nav__list');
  header.classList.toggle("header__close");
  intro.classList.toggle("intro__close");
  // console.log(navList.style.display);
  // navList.style.display = "flex";
  navList.classList.toggle("nav__list__close");
}
