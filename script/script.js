let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex === totalSlides) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 5000);
    // Smooth scroll effect for the entire website
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reveal elements on scroll
    function revealOnScroll() {
        var reveals = document.querySelectorAll(".reveal");
        
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener('resize', updateSlider);
    window.addEventListener("scroll", revealOnScroll);

    const profileCont = document.querySelector('.profile-cont');
const cards = document.querySelectorAll('.profile-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let setIndex = 0;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 400; // Width of card plus margin
    profileCont.style.transform = `translateX(-${setIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    if (setIndex > 0) {
        setIndex--;
    }
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    if (setIndex < cards.length - 1) {
        setIndex++;
    }
    updateSlider();
});