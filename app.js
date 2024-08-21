const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector ('.nav-links')

window.addEventListener('scroll',() => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

// Typed js
var   options = {
      strings: [
          'Creative Group', 
          'We are The Best'
      ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      typeSpeed: 10,
      backDelay: 2000,
    };

var typed = new Typed('#hero-titles', options);