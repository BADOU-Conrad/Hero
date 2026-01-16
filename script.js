// ===========================================
// CONFIGURATION TELEGRAM
// ===========================================
// ⚠️ IMPORTANT : Remplacez par votre lien Telegram réel
const TELEGRAM_LINK = 'https://t.me/+22969357887';

// ===========================================
// INITIALISATION AOS (Animation On Scroll)
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser AOS pour les animations au scroll
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
    
    // ===========================================
    // GESTION DES BOUTONS TELEGRAM
    // ===========================================
    const telegramButtons = document.querySelectorAll('[data-telegram]');
    
    telegramButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ouvrir Telegram dans un nouvel onglet
            window.open(TELEGRAM_LINK, '_blank', 'noopener,noreferrer');
            
            // Feedback visuel
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="bi bi-check-circle me-2"></i>Ouverture de Telegram...';
            button.classList.add('disabled');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('disabled');
            }, 2000);
        });
    });
    
    // ===========================================
    // SMOOTH SCROLL POUR NAVIGATION
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ne pas bloquer les boutons Telegram
            if (this.hasAttribute('data-telegram') || href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===========================================
    // ANIMATION DES CARTES AU SURVOL
    // ===========================================
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===========================================
    // PROTECTION ANTI-SPAM DES CLICS
    // ===========================================
    let lastClickTime = 0;
    const CLICK_THROTTLE = 1500; // 1.5 secondes entre chaque clic
    
    document.addEventListener('click', (e) => {
        const telegramButton = e.target.closest('[data-telegram]');
        if (telegramButton) {
            const now = Date.now();
            if (now - lastClickTime < CLICK_THROTTLE) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            lastClickTime = now;
        }
    });
    
    // ===========================================
    // EFFET DE PARALLAXE SUBTIL SUR LE HERO
    // ===========================================
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
            hero.style.opacity = 1 - (scrolled / 700);
        });
    }
    
    // ===========================================
    // DÉTECTION DU SCROLL POUR NAVBAR (si ajoutée)
    // ===========================================
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Ajouter une classe au body si on a scrollé
        if (currentScroll > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===========================================
    // CONSOLE LOG POUR DÉVELOPPEUR
    // ===========================================
    console.log('%c🌿 Espace d\'écoute bienveillante', 'color: #7A9B76; font-size: 20px; font-weight: bold;');
    console.log('%c⚠️ N\'oubliez pas de configurer le lien Telegram dans script.js', 'color: #FFC107; font-size: 14px;');
    console.log('%c📱 Lien actuel : ' + TELEGRAM_LINK, 'color: #6B6B6B; font-size: 12px;');
    
    // ===========================================
    // VÉRIFICATION DE LA CONFIGURATION
    // ===========================================
    if (TELEGRAM_LINK === 'https://t.me/VOTRE_USERNAME') {
        // Afficher un avertissement discret pour le développeur
        console.warn('⚠️ Le lien Telegram n\'a pas encore été configuré. Veuillez modifier script.js');
        
        // Optionnel : ajouter un indicateur visuel temporaire
        const buttons = document.querySelectorAll('[data-telegram]');
        buttons.forEach(btn => {
            btn.style.cursor = 'not-allowed';
            btn.title = 'Veuillez configurer le lien Telegram dans script.js';
        });
    }
});

// ===========================================
// GESTION DU CHARGEMENT DE LA PAGE
// ===========================================
window.addEventListener('load', () => {
    // Masquer le loader si présent
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
    
    // Ajouter classe pour animations
    document.body.classList.add('loaded');
});

// ===========================================
// FONCTION UTILITAIRE : COPIER DANS PRESSE-PAPIER
// ===========================================
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('✓ Copié dans le presse-papier');
        }).catch(err => {
            console.error('Erreur de copie:', err);
        });
    }
}

// ===========================================
// AMÉLIORATION DE L'ACCESSIBILITÉ
// ===========================================
// Gestion du focus clavier
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// ===========================================
// ANALYTICS (optionnel - à activer si besoin)
// ===========================================
function trackEvent(category, action, label) {
    // Remplacer par votre code analytics si nécessaire
    // Exemple : Google Analytics, Matomo, etc.
    console.log('Event:', category, action, label);
}
