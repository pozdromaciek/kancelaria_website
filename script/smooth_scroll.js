document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Zapobiega domyślnemu przewijaniu

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjusting for fixed navbar height
                    behavior: 'smooth' // Płynne przewijanie
                });
            }
        });
    });
});