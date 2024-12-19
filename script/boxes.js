document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-box');

    accordions.forEach(box => {
        box.addEventListener('click', function () {
            const content = this.querySelector('.accordion-content');
            const icon = this.querySelector('.accordion-icon');

            // Zamknij wszystkie inne aktywne boxy
            accordions.forEach(otherBox => {
                if (otherBox !== this && otherBox.classList.contains('active')) {
                    const otherContent = otherBox.querySelector('.accordion-content');
                    const otherIcon = otherBox.querySelector('.accordion-icon');
                    otherContent.style.maxHeight = null;
                    otherIcon.textContent = '+';
                    otherBox.classList.remove('active');
                }
            });

            // Przełącz aktualny box
            if (this.classList.contains('active')) {
                // Zwinięcie aktualnego boxu
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                // Rozwinięcie aktualnego boxu
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '−';
            }

            this.classList.toggle('active');
        });
    });
});
