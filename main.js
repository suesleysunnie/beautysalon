/* onclick in show/close icons show/hide menu */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* onclick in li option close menu */
const links = document.querySelectorAll("nav ul li a");

for (const element of links) {
  element.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* Swiper : carousel slider */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mouseWheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* ScrollReveal: onscroll show page elements */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 500,
  reset: true,
});
scrollReveal.reveal(
  `#home .image, #home .text, 
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
  { interval: 100 }
);

/* onscroll add shadow on page header */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/* Back-to-top buttom: onscroll show floating buttom */

function backToTop() {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY >= 560) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

/* Active link on menu: onscroll add "active" class on menu li a item current */
const sections = document.querySelectorAll('main section[id');

function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for(const section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    }else{
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}



window.addEventListener("scroll", function () {
  changeHeaderOnScroll();
  backToTop();
  activateMenuAtCurrentSection();
});