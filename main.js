function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = window.innerHeight / 2 - section.offsetHeight / 2;
    const topPos = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: topPos,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        slideToClickedSlide: true,
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            }
        }
    });

    // Fonction pour ajuster la taille des slides en fonction de leur statut
    function adjustSlideSize() {
        swiper.slides.forEach(slide => {
            if (slide.classList.contains('active')) {
                slide.style.width = '50%'; // Ajuster la taille de la div active à 50%
                slide.style.height = '100%'; // Ajuster la hauteur de la div active à 100%
            } else {
                slide.style.width = '40%'; // Ajuster la taille des autres divs à 40%
                slide.style.height = '80%'; // Ajuster la hauteur des autres divs à 80%
            }
        });
    }

    // Lorsque le slide change, ajustez la taille des slides
    swiper.on('slideChange', function() {
        swiper.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        swiper.slides[swiper.activeIndex].classList.add('active');
        adjustSlideSize();
    });

    // Ajustez la taille des slides lors de l'initialisation
    swiper.slides[swiper.activeIndex].classList.add('active');
    adjustSlideSize();
});


