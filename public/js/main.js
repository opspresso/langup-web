// LangUp.ai Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const ctaButtons = document.querySelector('.cta-buttons');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            ctaButtons.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    updateFaqIcon(otherItem.querySelector('.faq-icon'), false);
                }
            });

            // Toggle current FAQ item
            item.classList.toggle('active');
            updateFaqIcon(item.querySelector('.faq-icon'), item.classList.contains('active'));
        });
    });

    function updateFaqIcon(iconElement, isActive) {
        if (iconElement) {
            iconElement.textContent = isActive ? '-' : '+';
        }
    }

    // Scroll Animation for Elements
    const animatedElements = document.querySelectorAll('.feature-card, .language-card, .pricing-card');

    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.9) {
                element.classList.add('animate-in');
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    ctaButtons.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide header on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop;
    });

    // Add CSS class for animation after page load
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500);

    // Form Validation (for future forms)
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Demo purpose only - would be replaced with actual form submission
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = '성공적으로 제출되었습니다!';

            form.innerHTML = '';
            form.appendChild(successMessage);
        });
    });
});
