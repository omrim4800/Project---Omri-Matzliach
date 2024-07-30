
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('nav .right-nav a'); // Updated selector for navbar links

    function checkSection() {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLinks.forEach((link) => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', checkSection);

    checkSection();
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        alert('ניצור איתך קשר בקרוב!');
        
        form.reset();
    });
});