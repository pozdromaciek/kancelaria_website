document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-form-button');
    const contactForm = document.getElementById('contact-form');

    toggleButton.addEventListener('click', function () {
        if (contactForm.style.display === 'none' || contactForm.style.display === '') {
            contactForm.style.display = 'block';
            toggleButton.textContent = 'Zwiń formularz kontaktowy'; // Zmiana tekstu przycisku
        } else {
            contactForm.style.display = 'none';
            toggleButton.textContent = 'Rozwiń formularz kontaktowy'; // Zmiana tekstu przycisku
        }
    });
});
