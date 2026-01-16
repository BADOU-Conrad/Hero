# Configuration Telegram

⚠️ **ACTION REQUISE AVANT DE LANCER LE SITE**

## Étape à suivre :

1. Ouvrez le fichier : `public/js/script.js`

2. Localisez la ligne suivante (ligne 3) :
   ```javascript
   const TELEGRAM_LINK = 'https://t.me/VOTRE_USERNAME';
   ```

3. Remplacez `VOTRE_USERNAME` par votre identifiant Telegram réel

### Exemples :

**Si votre identifiant Telegram est "nancy_ecoute" :**
```javascript
const TELEGRAM_LINK = 'https://t.me/nancy_ecoute';
```

**Si vous avez un groupe ou canal Telegram :**
```javascript
const TELEGRAM_LINK = 'https://t.me/joinchat/XXXXXXXXXXXXX';
```

**Si vous préférez un bot Telegram :**
```javascript
const TELEGRAM_LINK = 'https://t.me/votre_bot_name';
```

## Comment trouver votre lien Telegram ?

1. Ouvrez Telegram
2. Allez dans Paramètres → Modifier le profil
3. Définissez un nom d'utilisateur si ce n'est pas déjà fait
4. Votre lien sera : `https://t.me/votre_nom_utilisateur`

---

Une fois configuré, tous les boutons du site redirigeront automatiquement vers ce lien Telegram.
