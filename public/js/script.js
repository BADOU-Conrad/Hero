// Configuration de la redirection Telegram
// ⚠️ IMPORTANT : Remplacez cette URL par votre lien Telegram réel
const TELEGRAM_LINK = 'https://t.me/VOTRE_USERNAME'; // À personnaliser

// Fonction pour rediriger vers Telegram
function redirectToTelegram() {
    window.open(TELEGRAM_LINK, '_blank');
}

// Gestion des clics sur tous les boutons de contact
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les boutons avec l'attribut data-telegram
    const telegramButtons = document.querySelectorAll('[data-telegram]');
    
    telegramButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            redirectToTelegram();
        });
    });
    
    // Animation douce au scroll
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
    
    // Observer les sections pour animation au scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Smooth scroll pour les liens d'ancrage (si ajoutés plus tard)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ne pas bloquer les boutons Telegram
            if (this.hasAttribute('data-telegram')) {
                return;
            }
            
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Message dans la console pour le développeur
    console.log('✓ Site d\'écoute bienveillante chargé');
    console.log('⚠️ N\'oubliez pas de configurer le lien Telegram dans script.js');
});

// Protection contre le spam de clics
let lastClickTime = 0;
const CLICK_THROTTLE = 1000; // 1 seconde entre chaque clic

document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-telegram') || e.target.closest('[data-telegram]')) {
        const now = Date.now();
        if (now - lastClickTime < CLICK_THROTTLE) {
            e.preventDefault();
            return;
        }
        lastClickTime = now;
    }
});
