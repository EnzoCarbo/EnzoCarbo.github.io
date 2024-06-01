function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = window.innerHeight / 2 - section.offsetHeight / 2;
    const topPos = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: topPos,
        behavior: 'smooth'
    });
}