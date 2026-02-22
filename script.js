// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar atributos data-i18n nos project footers
    const projectFooters = document.querySelectorAll('.project-footer span');
    projectFooters.forEach(span => {
        if (!span.hasAttribute('data-i18n')) {
            // Se o texto contém "ao vivo" ou "live", usar tradução específica
            if (span.textContent.includes('ao vivo') || span.textContent.includes('live')) {
                span.setAttribute('data-i18n', 'project.viewLive');
            } else {
                span.setAttribute('data-i18n', 'project.viewCase');
            }
        }
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const message = formData.get('message');
            const email = formData.get('email');
            
            // Create mailto link
            const mailtoLink = `mailto:gabrielregomelo@gmail.com?subject=Contato do Portfólio&body=${encodeURIComponent(`E-mail do visitante: ${email}\n\nMensagem:\n${message}`)}`;
            
            // Open mail client
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(() => {
                alert('Seu cliente de e-mail foi aberto. Obrigado pelo contato!');
                contactForm.reset();
            }, 500);
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
    
    // Company logos fill animation on scroll
    const logoObserverOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const logoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('filled');
            }
        });
    }, logoObserverOptions);
    
    const companyLogos = document.querySelectorAll('.company-logo');
    companyLogos.forEach((logo, index) => {
        logo.style.transitionDelay = `${index * 0.15}s`;
        logoObserver.observe(logo);
    });

    // Hover effect on avatar - 3D tilt
    const avatar = document.querySelector('.hero-avatar');
    if (avatar) {
        avatar.addEventListener('mousemove', (e) => {
            const rect = avatar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = -(x - centerX) / 10;
            
            avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = '';
        });
    }

    // Floating particles in hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = i % 2 === 0 ? 'floating-particle' : 'floating-particle purple';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            hero.appendChild(particle);
        }
    }

    // Scroll Progress Bar
    const updateScrollProgress = () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Tech Badges Animation
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.6s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, index * 100);
    });

    console.log('%c👋 Olá, Desenvolvedor Curioso!', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
    console.log('%cSe você está lendo isso, deve gostar de código tanto quanto eu!', 'font-size: 14px; color: #666;');
    console.log('%cVamos conversar? Entre em contato! 🚀', 'font-size: 14px; color: #666;');
});
