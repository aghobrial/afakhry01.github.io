document.addEventListener("DOMContentLoaded", function(event) {
  // AOS Animation
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    disable: 'mobile'
  });

  // Navigation
  function scrollDown(e) {
    e.preventDefault(); //prevent default action
    var sectionId = this.getAttribute("data-move"); //get section id from nav item
    var target = document.getElementById(sectionId); //set the target by section id
    target.scrollIntoView({behavior: "smooth" , block: "start"}); //scroll down effect
    //disable AOS when using the menu
    AOS.init({
      disable: true
    });
  }

  const menu = document.querySelectorAll('.menu');
  menu.forEach(menuItem => menuItem.addEventListener("click", scrollDown));

});
// Toggle menu for hamburger button
function toggleMenu(e) {
  e.classList.toggle("close");
  header = document.querySelector('.header');
  intro = document.querySelector('.intro');
  navList = document.querySelector('.nav__list');
  header.classList.toggle("header__close");
  intro.classList.toggle("intro__close");
  navList.classList.toggle("nav__list__close");
}
