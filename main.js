

// DOM

//abre e fecha o menu quando clicar no icone
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

//quando clicar em um item do menu, fechar o menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}

//mudar o header da pagina quando der um scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight){
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');

    }
})


// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, 
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true 
  });

// Scroll reveal: mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal (
    `#home .text, #home .image, 
    #about .image, #about .text
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    `,     
    {interval:100} )