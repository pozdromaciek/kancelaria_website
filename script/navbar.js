document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const scrollThreshold = 50; // Po jakiej wartości przewinięcia zmienić tło
    const navbarBrand = document.querySelector('.navbar-brand');

    function onScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    function toggleMenu() {
        navbarMenu.classList.toggle('active');
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function closeMenu() {
        navbarMenu.classList.remove('active');
    }

    window.addEventListener('scroll', onScroll);
    navbarToggle.addEventListener('click', toggleMenu);
    onScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
                if (navbarMenu.classList.contains('active')) {
                    closeMenu();
                }
            }
        });
    });

    if (navbarBrand) {
        navbarBrand.addEventListener('click', scrollToTop);
    }
});
