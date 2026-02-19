// ===========================================
// CONFIGURATION WHATSAPP
// ===========================================
// ⚠️ IMPORTANT : Remplacez par votre numéro WhatsApp réel
const WHATSAPP_NUMBER = '+2290147370010';

// ===========================================
// INITIALISATION
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // ===========================================
    // GESTION DES BOUTONS WHATSAPP
    // ===========================================
    const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Créer le lien WhatsApp
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`;
            
            // Ouvrir WhatsApp dans un nouvel onglet
            window.open(whatsappLink, '_blank', 'noopener,noreferrer');
            
            // Feedback visuel
            const originalText = button.innerHTML;
            button.innerHTML = '<span class="material-symbols-outlined" style="font-size: 1rem; vertical-align: middle;">check_circle</span> Ouverture de WhatsApp...';
            button.style.opacity = '0.7';
            button.style.pointerEvents = 'none';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.opacity = '1';
                button.style.pointerEvents = 'auto';
            }, 2000);
        });
    });
    
    // ===========================================
    // SMOOTH SCROLL POUR NAVIGATION
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ne pas bloquer les boutons WhatsApp
            if (this.hasAttribute('data-whatsapp') || href === '#') {
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
    const cards = document.querySelectorAll('.card, [class*="rounded-lg"]');
    cards.forEach(card => {
        // Vérifier que c'est bien un élément cliquable
        if (card.matches('.bg-white, .dark\\:bg-slate-800')) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
    
    // ===========================================
    // PROTECTION ANTI-SPAM DES CLICS
    // ===========================================
    let lastClickTime = 0;
    const CLICK_THROTTLE = 1500; // 1.5 secondes entre chaque clic
    
    document.addEventListener('click', (e) => {
        const whatsappButton = e.target.closest('[data-whatsapp]');
        if (whatsappButton) {
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
    const hero = document.querySelector('section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            if (scrolled < 500) {
                hero.style.transform = `translateY(${parallax}px)`;
                hero.style.opacity = Math.max(0.3, 1 - (scrolled / 700));
                hero.style.transition = 'transform 0.1s ease-out';
            }
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
    console.log('%c� Espace d\'écoute bienveillante', 'color: #B19CD9; font-size: 20px; font-weight: bold;');
    console.log('%c⚠️ N\'oubliez pas de configurer le numéro WhatsApp dans script.js', 'color: #D4C5F9; font-size: 14px;');
    console.log('%c📱 Numéro actuel : ' + WHATSAPP_NUMBER, 'color: #6B6B6B; font-size: 12px;');
    
    // ===========================================
    // VÉRIFICATION DE LA CONFIGURATION
    // ===========================================
    if (WHATSAPP_NUMBER === 'VOTRE_NUMERO') {
        // Afficher un avertissement discret pour le développeur
        console.warn('⚠️ Le numéro WhatsApp n\'a pas encore été configuré. Veuillez modifier script.js');
        
        // Optionnel : ajouter un indicateur visuel temporaire
        const buttons = document.querySelectorAll('[data-whatsapp]');
        buttons.forEach(btn => {
            btn.style.cursor = 'not-allowed';
            btn.title = 'Veuillez configurer le numéro WhatsApp dans script.js';
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
