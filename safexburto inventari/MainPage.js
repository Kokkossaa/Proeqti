let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;
    showSlide();
}

function showSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex = (currentIndex + totalSlides) % totalSlides;

    slides.style.transform = `translateX(${-currentIndex * 20}%)`;
}

showSlide();
