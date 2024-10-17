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
        // Function to check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top < window.innerHeight && rect.bottom >= 0
            );
        }
    
        // Function to add the 'visible' class when an element is in view
        function handleScroll() {
            const sections = document.querySelectorAll('table');
            sections.forEach(section => {
                if (isInViewport(section)) {
                    section.classList.add('visible');
                }
            });
        }
    
        // Initial check to see if sections are visible
        document.addEventListener('DOMContentLoaded', handleScroll);
    
        // Add event listener to check when the user scrolls
        window.addEventListener('scroll', handleScroll);

let totalDonations = 112000;  // Example value, this should come from your database
document.getElementById('total-donations').innerText = `Rs. ${totalDonations.toLocaleString()}`;


document.querySelectorAll('.faq-title').forEach(faq => {
    faq.addEventListener('click', function() {
        faq.parentElement.classList.toggle('active');
    });
});


let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 4000);



const eventDate = new Date('November 30, 2024 09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById('countdown-timer').innerText = "Event has started!";
    }
}

setInterval(updateCountdown, 1000);



const healthTips = [
    "Stay hydrated: Drink at least 8 glasses of water every day.",
    "Eat more fruits and vegetables: Include a variety of colorful fruits and vegetables in your diet.",
    "Get enough sleep: Aim for 7-8 hours of sleep every night.",
    "Exercise regularly: Engage in at least 30 minutes of physical activity daily.",
    "Limit processed foods: Opt for whole, unprocessed foods to improve your nutrition.",
    "Practice portion control: Avoid overeating by paying attention to portion sizes.",
    "Take short breaks: If you’re working or studying, take a 5-minute break every hour to stretch and move around.",
    "Avoid sugary drinks: Opt for water or unsweetened beverages to reduce your sugar intake.",
    "Limit screen time: Take breaks from screens to reduce eye strain and improve focus.",
    "Wash your hands frequently: Practice good hygiene to prevent the spread of germs.",
    "Get regular checkups: Visit your doctor for annual checkups and preventive screenings.",
    "Reduce salt intake: Too much salt can lead to high blood pressure—try to limit it in your diet.",
    "Practice deep breathing: Take a few minutes each day to focus on deep breathing to reduce stress.",
    "Snack on nuts and seeds: They are rich in healthy fats and can keep you full longer.",
    "Use sunscreen: Protect your skin from harmful UV rays by applying sunscreen daily.",
    "Maintain good posture: Sit and stand up straight to prevent back and neck pain.",
    "Get vaccinated: Keep up with recommended vaccines for protection against diseases.",
    "Eat more fiber: Foods rich in fiber, like oats and whole grains, promote healthy digestion.",
    "Avoid smoking: If you smoke, consider quitting to improve your lung and overall health.",
    "Practice gratitude: Reflect on the positives in your life to boost mental well-being.",
    "Limit alcohol consumption: Drink in moderation to maintain good liver health.",
    "Include healthy fats: Incorporate sources of omega-3 fatty acids like fish or flaxseeds in your diet.",
    "Stay socially connected: Engage with friends and family to support mental health.",
    "Practice mindfulness: Spend a few minutes daily practicing mindfulness to reduce stress.",
    "Stretch regularly: Stretching can improve flexibility and reduce muscle tension.",
    "Monitor your mental health: Seek help if you’re feeling anxious, depressed, or overwhelmed.",
    "Eat breakfast daily: A healthy breakfast jump-starts your metabolism and provides energy for the day.",
    "Limit caffeine: Too much caffeine can disrupt your sleep and cause anxiety.",
    "Try strength training: Incorporating strength exercises can improve muscle tone and metabolism.",
    "Keep learning: Engage in new activities or hobbies to keep your brain active and healthy."
];

const today = new Date().getDate(); // Use the date to change the tip daily
document.getElementById('daily-tip').innerText = healthTips[today % healthTips.length];
