# 🚀 Guide de Déploiement du Portfolio

Ce guide vous explique comment déployer votre portfolio sur différentes plateformes.

## 📋 Pré-requis

- Tous les fichiers du portfolio
- Un compte sur la plateforme de déploiement choisie
- (Optionnel) Un nom de domaine personnalisé

## 🌐 Options de Déploiement

### 1. GitHub Pages (Gratuit et Recommandé)

#### Étapes :
1. Créez un repository GitHub nommé `username.github.io`
2. Uploadez tous les fichiers du portfolio
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` comme source
5. Votre site sera disponible sur `https://username.github.io`

#### Commandes Git :
```bash
git init
git add .
git commit -m "Initial commit - Portfolio"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### 2. Netlify (Gratuit)

#### Méthode 1 - Drag & Drop :
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte
3. Glissez-déposez le dossier du portfolio
4. Votre site est en ligne !

#### Méthode 2 - Git :
1. Connectez votre repository GitHub
2. Netlify déploiera automatiquement à chaque push

#### Configuration netlify.toml (optionnel) :
```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Vercel (Gratuit)

1. Allez sur [vercel.com](https://vercel.com)
2. Importez votre repository GitHub
3. Déployez en un clic
4. Domaine personnalisé gratuit inclus

### 4. Firebase Hosting (Gratuit)

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter
firebase login

# Initialiser
firebase init hosting

# Déployer
firebase deploy
```

### 5. Hébergement Traditionnel (cPanel, FTP)

1. Compressez tous les fichiers en .zip
2. Connectez-vous à votre cPanel
3. Allez dans File Manager
4. Uploadez et extrayez dans `public_html/`
5. Assurez-vous que `index.html` est à la racine

## 🔧 Configuration Post-Déploiement

### 1. Mettre à jour les URLs

Dans `script.js`, mettez à jour l'URL du QR Code :
```javascript
const currentUrl = 'https://votre-domaine.com';
```

### 2. Configurer le domaine personnalisé

#### GitHub Pages :
- Ajoutez un fichier `CNAME` avec votre domaine
- Configurez les DNS chez votre registrar

#### Netlify/Vercel :
- Allez dans les paramètres du site
- Ajoutez votre domaine personnalisé
- Suivez les instructions DNS

### 3. Activer HTTPS

Toutes les plateformes modernes offrent HTTPS gratuit via Let's Encrypt.
Activez-le dans les paramètres de votre plateforme.

### 4. Configurer Google Analytics (Optionnel)

Ajoutez dans `<head>` de `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Optimisations Avant Déploiement

### 1. Minifier les fichiers

```bash
# CSS
npx cssnano style.css style.min.css

# JavaScript
npx terser script.js -o script.min.js
```

### 2. Optimiser les images

- Utilisez [TinyPNG](https://tinypng.com) pour compresser les images
- Convertissez en WebP pour de meilleures performances

### 3. Tester les performances

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🔍 SEO Post-Déploiement

### 1. Soumettre à Google

- [Google Search Console](https://search.google.com/search-console)
- Soumettez votre sitemap
- Demandez l'indexation

### 2. Créer un sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-domaine.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Métadonnées Open Graph

Déjà incluses dans `index.html`, vérifiez-les avec :
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🛡️ Sécurité

### Headers de sécurité (déjà dans .htaccess)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### HTTPS
Toujours utiliser HTTPS en production.

## 📱 Test Multi-Navigateurs

Testez sur :
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile (iOS & Android)

## 🔄 Mises à Jour

Pour mettre à jour votre portfolio :

```bash
# Modifier les fichiers
git add .
git commit -m "Update: description des changements"
git push

# Le déploiement se fait automatiquement !
```

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Consultez les logs de la plateforme
3. Vérifiez que tous les fichiers sont uploadés
4. Testez en local d'abord

## ✅ Checklist de Déploiement

- [ ] Tous les fichiers sont présents
- [ ] Les images sont optimisées
- [ ] Les liens fonctionnent
- [ ] Le CV est à jour
- [ ] Les informations de contact sont correctes
- [ ] Les liens sociaux sont valides
- [ ] Le site est responsive
- [ ] HTTPS est activé
- [ ] Google Analytics configuré (optionnel)
- [ ] Sitemap soumis à Google
- [ ] Test sur mobile
- [ ] Test sur différents navigateurs
- [ ] Performance > 90 sur PageSpeed

---

🎉 **Félicitations ! Votre portfolio est maintenant en ligne !**

N'oubliez pas de partager le lien sur vos réseaux sociaux ! 🚀
