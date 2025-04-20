// Scroll transition
let hasScrolled = false;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    const scrollTop = window.scrollY;

    if (scrollTop > 0 && !hasScrolled) {
        hasScrolled = true;
        nav.classList.add('scrolled');
    } else if (scrollTop === 0 && hasScrolled) {
        hasScrolled = false;
        nav.classList.remove('scrolled');
    }
});

// Logo/hamburger periodic toggle
const navLogo = document.querySelector('.nav-logo');
const toggleLogo = () => {
    navLogo.classList.add('logo-hidden');
    setTimeout(() => {
        navLogo.classList.remove('logo-hidden');
    }, 2500); // Hamburger visible for 2.5s
};
setInterval(toggleLogo, 10000); // Every 10s

// Full-page menu toggle
const navToggle = document.querySelector('.nav-toggle');
const fullMenu = document.querySelector('.full-menu');
const menuClose = document.querySelector('.menu-close');

navToggle.addEventListener('click', () => {
    fullMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    fullMenu.classList.remove('active');
});

// Footer category toggle
const categoryToggles = document.querySelectorAll('.category-toggle');

categoryToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        // Collapse all categories
        categoryToggles.forEach(t => {
            t.setAttribute('aria-expanded', 'false');
            t.querySelector('.toggle-icon').textContent = '+';
        });
        // Expand clicked category if it wasn't already expanded
        if (!isExpanded) {
            toggle.setAttribute('aria-expanded', 'true');
            toggle.querySelector('.toggle-icon').textContent = '×';
        }
    });
});

// Back to top smooth scroll
document.querySelector('.back-to-top-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});