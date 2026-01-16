# Espace d'Écoute Bienveillante

Site vitrine pour un espace d'écoute confidentielle, humaine et non thérapeutique.

## 🌿 Description

Un site web minimaliste et chaleureux offrant un espace d'écoute bienveillante avec redirection vers Telegram pour les échanges. Le site respecte un cadre éthique strict : il s'agit d'un lieu d'écoute, pas d'une thérapie.

## 🛠️ Technologies utilisées

- **Backend** : Node.js + Express.js
- **Frontend** : HTML5, CSS3, JavaScript vanilla
- **Design** : Mobile-first, responsive, couleurs naturelles apaisantes

## 📦 Installation

1. **Cloner ou accéder au projet**
   ```bash
   cd c:\Users\alaro\OneDrive\Documents\HERO
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer le lien Telegram**
   - Ouvrir `public/js/script.js`
   - Remplacer `VOTRE_USERNAME` par votre identifiant Telegram
   ```javascript
   const TELEGRAM_LINK = 'https://t.me/VOTRE_USERNAME';
   ```

4. **Lancer le serveur**
   ```bash
   npm start
   ```

5. **Accéder au site**
   - Ouvrir votre navigateur sur : `http://localhost:3000`

## 🚀 Utilisation en développement

Pour le développement avec rechargement automatique :

```bash
npm run dev
```

## 📁 Structure du projet

```
HERO/
├── server.js              # Serveur Express
├── package.json           # Dépendances et scripts
├── README.md             # Documentation
└── public/               # Fichiers statiques
    ├── index.html        # Page principale
    ├── css/
    │   └── style.css     # Styles CSS
    └── js/
        └── script.js     # Script JavaScript
```

## 🎨 Charte graphique

- **Couleurs principales** :
  - Vert doux : `#7A9B76`
  - Beige chaleureux : `#D4C5B0`
  - Blanc naturel : `#FDFDFB`
  
- **Typographie** :
  - Titres : Libre Baskerville (serif)
  - Corps : Inter (sans-serif)

## ✨ Fonctionnalités

- ✅ Design épuré et apaisant
- ✅ Navigation one-page fluide
- ✅ Responsive (mobile-first)
- ✅ Redirection vers Telegram pour tous les boutons de contact
- ✅ Aucune collecte de données
- ✅ Cadre éthique clairement défini
- ✅ Animations douces au scroll

## ⚠️ Important

- Ce site ne remplace pas un suivi médical ou psychologique
- Aucune donnée personnelle n'est collectée
- Les échanges se font uniquement via Telegram
- Le cadre éthique doit être respecté scrupuleusement

## 📝 Licence

Projet personnel - Tous droits réservés

---

**Développé avec bienveillance** 🌿
