document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // Sticky Header Scroll Effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(2, 6, 23, 0.95)';
        } else {
            nav.style.padding = '0';
            nav.style.background = 'rgba(2, 6, 23, 0.7)';
        }
    });

    // Mobile Menu Toggle (Simplified)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-dark)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid var(--border)';
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
