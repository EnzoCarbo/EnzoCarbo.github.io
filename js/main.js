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

    function adjustSlideSize() {
        swiper.slides.forEach(slide => {
            if (slide.classList.contains('active')) {
                slide.style.width = window.innerWidth <= 640 ? '100%' : '50%'; 
                slide.style.height = window.innerWidth <= 640 ? '100%' : '100%';
            } else {
                slide.style.width = window.innerWidth <= 640 ? '90%' : '40%';
                slide.style.height = window.innerWidth <= 640 ? '70%' : '80%';
            }
        });
    }

    swiper.on('slideChange', function() {
        swiper.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        swiper.slides[swiper.activeIndex].classList.add('active');
        adjustSlideSize();
    });

    swiper.slides[swiper.activeIndex].classList.add('active');
    adjustSlideSize();

    window.addEventListener('resize', adjustSlideSize);
});
