// ============================================
// CHAT PROJETS — ARCHITECTURE UNIFIÉE
// Base de connaissances · Moteur · UI
// Auteur : Mouhamed-Aziz Mhamdi · ESPRIT
// ============================================
'use strict';

/* ================================================
   1. BASE DE CONNAISSANCES
   ================================================ */
var PROJECTS_DB = {

  'studyflow-desktop': {
    name: 'StudyFlow Desktop',
    icon: 'fab fa-java',
    color: '#f89820',
    github: 'https://github.com/azizos210',
    tags: ['Java 17','JavaFX','Python','MySQL','OpenCV','ML','Stripe','WhatsApp Bot'],
    welcome: "Bonjour ! 👋 Je suis l'assistant de **StudyFlow Desktop**.\nApplication JavaFX complète avec IA intégrée. Que voulez-vous savoir ?",
    suggestions: ['Technologies utilisées','Fonctionnalités IA','Architecture','Comment lancer ?','Modèles ML','GitHub'],
    data: {
      description: "StudyFlow Desktop est une application de bureau développée en **Java 17** avec **JavaFX**. Elle aide les étudiants à gérer leur bien-être académique grâce à l'intelligence artificielle. Projet PIDEV 3ème année à ESPRIT.",
      technologies: {
        frontend:     ['JavaFX','FXML','CSS JavaFX','Scene Builder'],
        backend:      ['Java 17','Spring (modules)','Hibernate ORM'],
        ia:           ['Python','OpenCV','RandomForest','scikit-learn','Groq LLaMA API'],
        database:     ['MySQL 8','JDBC'],
        integrations: ['Stripe API','Twilio WhatsApp Bot','ZXing QR Code']
      },
      features: [
        'Détection de stress par vision (OpenCV + webcam)',
        'Reconnaissance faciale pour authentification',
        'Bot WhatsApp IA avec Groq LLaMA',
        'Paiement en ligne via Stripe',
        'Génération de QR codes dynamiques',
        'Modèle ML RandomForest (88% accuracy)',
        'Prédiction du niveau de bonheur',
        'Analyse du sommeil (sleep model)',
        'Dashboard analytique temps réel',
        'Gestion des tâches et planning'
      ],
      architecture: "Architecture **MVC** (Model-View-Controller) :\n• **Vue** : JavaFX + FXML\n• **Contrôleur** : Java 17\n• **Modèle** : Hibernate + MySQL\n• **IA** : Scripts Python appelés via ProcessBuilder",
      models: [
        'best_happiness_model.pkl — Prédiction bonheur (RandomForest)',
        'best_sleep_model.pkl — Analyse du sommeil',
        'stress_model.pkl — Détection de stress',
        'model.pkl — Modèle général',
        'label_encoder.pkl — Encodage des labels',
        'tfidf.pkl — Vectorisation texte'
      ],
      installation: "**Prérequis :** Java 17+, Python 3.8+, MySQL 8\n1. Lancer `install.bat` pour les dépendances Python\n2. Configurer MySQL dans `application.properties`\n3. Lancer : `mvn javafx:run`",
      performance: "Modèle **RandomForest** avec **88% de précision** sur la détection de stress. Reconnaissance faciale en temps réel à 30 FPS avec OpenCV.",
      team: "Projet **PIDEV 3A36** — ESPRIT Tunis. Développé en équipe dans le cadre du projet intégré de 3ème année ingénierie.",
      files: ['pom.xml','install.bat','ai/generate_java.py','ai/main.py','PredictionAi/app.py','python_scripts/face_recognizer.py','python_scripts/anomaly_detection.py']
    }
  },

  'studyflow-web': {
    name: 'StudyFlow Web',
    icon: 'fas fa-globe',
    color: '#22c55e',
    github: 'https://github.com/ihebayari123/StudyFlow',
    tags: ['Symfony 6','PHP 8','MySQL','Python','Keras','Stripe','WhatsApp'],
    welcome: "Bonjour ! 🌐 Je suis l'assistant de **StudyFlow Web**.\nApplication Symfony MVC pour la gestion du stress étudiant. Posez vos questions !",
    suggestions: ['Stack technique','Fonctionnalités','Modèles IA','Base de données','API REST','GitHub'],
    data: {
      description: "StudyFlow Web est une application web développée avec **Symfony 6** (PHP 8) suivant le pattern **MVC**. Elle aide les étudiants à gérer leur stress académique avec des outils IA. Projet PIDEV 3ème année ESPRIT.",
      technologies: {
        frontend:     ['Twig (templates)','Bootstrap 5','JavaScript','Chart.js','CSS3'],
        backend:      ['Symfony 6','PHP 8.1','Doctrine ORM','API Platform'],
        ia:           ['Python 3','Keras','TensorFlow','scikit-learn','Flask (microservice)'],
        database:     ['MySQL 8','Doctrine Migrations'],
        integrations: ['Stripe (paiement)','Twilio WhatsApp','Mailer','OAuth2']
      },
      features: [
        'Authentification sécurisée (OAuth2 + JWT)',
        'Suivi des tâches et objectifs académiques',
        'Quiz IA de bien-être personnalisé',
        'Prédiction du niveau de stress (Keras)',
        'Chatbot intelligent intégré',
        'Paiement abonnement via Stripe',
        'Notifications WhatsApp automatiques',
        'Dashboard analytique avec graphiques',
        'Gestion des utilisateurs et rôles',
        'API REST documentée (Swagger)'
      ],
      architecture: "Architecture **MVC Symfony** :\n• **Entity/Repository** : Doctrine ORM\n• **Controller** : Symfony Controllers\n• **Service** : Business Logic\n• **Microservice Python** : Flask pour les prédictions IA",
      database_schema: "Tables principales :\n• `User` (id, nom, email, role, password)\n• `Task` (id, user_id, titre, statut, deadline)\n• `Quiz` (id, questions, type)\n• `QuizResult` (id, user_id, score, date)\n• `Subscription` (id, user_id, plan, stripe_id)\n• `StressRecord` (id, user_id, niveau, date)",
      installation: "**Installation :**\n1. `composer install`\n2. `php bin/console doctrine:migrations:migrate`\n3. `symfony serve`\n\n**Python :**\n`pip install -r requirements.txt` → `python app.py`",
      api: "API REST sur `/api` avec Swagger.\nEndpoints principaux :\n• `POST /api/login` — Authentification\n• `GET /api/tasks` — Liste des tâches\n• `POST /api/quiz/submit` — Soumettre un quiz\n• `POST /api/predict/stress` — Prédiction IA",
      team: "Projet **PIDEV 3A36** — ESPRIT. Collaboration avec **ihebayari123** sur GitHub."
    }
  },

  'reseau': {
    name: 'Projet Réseau',
    icon: 'fas fa-network-wired',
    color: '#0077b6',
    github: 'https://github.com/azizos210',
    tags: ['GNS3','Cisco IOS','VLAN','OSPF','RIP','ACL','NAT','VPN'],
    welcome: "Bonjour ! 🌐 Je suis l'assistant du **Projet Réseau**.\nInfrastructure réseau complète simulée sous GNS3. Que souhaitez-vous savoir ?",
    suggestions: ['Topologie réseau','Protocoles utilisés','VLANs configurés','Sécurité réseau','Commandes Cisco','Objectifs'],
    data: {
      description: "Conception et simulation d'une **infrastructure réseau d'entreprise** complète sous GNS3. Inclut le routage dynamique, la segmentation VLAN, la sécurité réseau et la gestion des accès. Projet PI Réseau — ESPRIT.",
      technologies: {
        simulation: ['GNS3 2.x','Cisco IOS 15.x','Wireshark'],
        routing:    ['OSPF (Open Shortest Path First)','RIP v2','EIGRP','Routage statique'],
        switching:  ['VLANs (802.1Q)','STP (Spanning Tree)','EtherChannel','Inter-VLAN routing'],
        security:   ['ACL (Access Control Lists)','NAT/PAT','SSH v2','Port Security','DHCP Snooping'],
        services:   ['DHCP','DNS','HTTP/HTTPS','FTP','NTP']
      },
      topology: "Topologie **hiérarchique 3 couches** :\n• **Cœur (Core)** : Routeurs haute disponibilité\n• **Distribution** : Switches L3 avec routage inter-VLAN\n• **Accès** : Switches L2 + postes clients",
      vlans: [
        'VLAN 10 — Administration (192.168.10.0/24)',
        'VLAN 20 — Développement (192.168.20.0/24)',
        'VLAN 30 — Serveurs (192.168.30.0/24)',
        'VLAN 40 — DMZ (192.168.40.0/24)',
        'VLAN 99 — Management (10.0.99.0/24)'
      ],
      security_features: [
        'ACL étendues pour filtrage trafic inter-VLAN',
        'NAT overload pour accès Internet',
        'SSH v2 sur tous les équipements',
        'Désactivation des ports inutilisés',
        'Port Security sur switches accès',
        'DHCP Snooping anti-spoofing'
      ],
      commands: [
        'router ospf 1 → network 192.168.0.0 0.0.255.255 area 0',
        'vlan 10 → name ADMIN',
        'interface vlan 10 → ip address 192.168.10.1 255.255.255.0',
        'ip access-list extended BLOCK → deny tcp any any eq 23',
        'ip nat inside source list 1 interface Gi0/0 overload',
        'switchport mode trunk → switchport trunk allowed vlan 10,20,30'
      ],
      objectives: "Maîtrise des **protocoles de routage dynamique**, segmentation réseau par VLANs, sécurisation des accès, configuration NAT/PAT et mise en place de politiques de sécurité réseau.",
      team: "Projet **PI Réseau** — ESPRIT Tunis. Cours d'administration et sécurité des réseaux."
    }
  },

  'cancer': {
    name: 'Détection Cancer de la Peau',
    icon: 'fas fa-microscope',
    color: '#ec4899',
    github: 'https://github.com/azizos210',
    tags: ['Python','Flask','Deep Learning','CNN','MySQL','PHP','TensorFlow','HAM10000'],
    welcome: "Bonjour ! 🔬 Je suis l'assistant du projet **Détection Cancer de la Peau** (PFE).\nApplication médicale IA pour la détection automatique. Posez vos questions !",
    suggestions: ['Modèle IA utilisé','Précision du modèle','Technologies','Classes détectées','Base de données','Installation'],
    data: {
      description: "**Projet de Fin d'Études (PFE)** — Application web de détection automatique du cancer de la peau par Deep Learning. Analyse d'images dermatologiques via un modèle CNN entraîné sur le dataset **HAM10000**. Réalisé à ESPRIT en collaboration avec ISSAT.",
      technologies: {
        ia:       ['Python 3.8','TensorFlow 2.x','Keras','CNN (ResNet50)','OpenCV','PIL/Pillow','NumPy','scikit-learn'],
        backend:  ['Flask (API REST)','PHP 8','MySQL 8'],
        frontend: ['HTML5','CSS3','JavaScript','Bootstrap 5'],
        tools:    ['Jupyter Notebook','Google Colab','Matplotlib','Seaborn']
      },
      model: {
        architecture: "CNN basé sur **ResNet50** avec **Transfer Learning**. Fine-tuning sur dataset dermatologique HAM10000.",
        dataset:      "**HAM10000** — 10 015 images dermatoscopiques de lésions cutanées (7 classes)",
        accuracy:     "**~87% de précision** sur le jeu de test",
        preprocessing:"Redimensionnement 224×224, normalisation [0,1], augmentation de données (rotation, flip, zoom, brightness)"
      },
      classes: [
        'Mélanocytaire nevi (nv) — bénin',
        'Mélanome (mel) — malin',
        'Kératose actinique (akiec)',
        'Carcinome basocellulaire (bcc)',
        'Kératose bénigne (bkl)',
        'Dermatofibrome (df)',
        'Lésions vasculaires (vasc)'
      ],
      features: [
        'Inscription/connexion patient sécurisée',
        "Upload d'image dermatologique",
        'Analyse automatique par CNN ResNet50',
        'Résultat avec probabilité par classe',
        'Historique des analyses',
        'Interface médecin/patient',
        'Rapport PDF téléchargeable',
        'Base de données des analyses'
      ],
      database: "**MySQL** — Tables principales :\n• `users` (id, nom, email, role, password)\n• `analyses` (id, user_id, image_path, result, confidence, date)\n• `classes` (id, nom, description, traitement_recommande)",
      api_endpoints: [
        'POST /api/predict — Upload image + prédiction CNN',
        'GET /api/history/{user_id} — Historique analyses',
        'POST /api/register — Inscription patient',
        'POST /api/login — Connexion JWT'
      ],
      installation: "**Installation :**\n`pip install flask tensorflow keras opencv-python pillow`\n→ `python app.py`\n\n**PHP :** Configurer `config.php` avec credentials MySQL.",
      team: "**PFE** réalisé à **ESPRIT** en collaboration avec **ISSAT**. Encadré par des professeurs spécialisés en IA médicale."
    }
  }
};

/* ================================================
   2. MOTEUR DE RÉPONSE INTELLIGENT
   ================================================ */
function findAnswer(question, projectId) {
  var proj = PROJECTS_DB[projectId];
  if (!proj) return null;
  var d = proj.data;
  var q = question.toLowerCase();

  // Technologies / Stack
  if (/tech|stack|langage|framework|outil|utilis|construit|fait avec|développ/i.test(q)) {
    var t = d.technologies;
    var resp = '🛠️ **Stack technique de ' + proj.name + ' :**\n\n';
    if (t.frontend)     resp += '**Frontend :** ' + t.frontend.join(', ') + '\n';
    if (t.backend)      resp += '**Backend :** ' + t.backend.join(', ') + '\n';
    if (t.ia)           resp += '**IA / ML :** ' + t.ia.join(', ') + '\n';
    if (t.database)     resp += '**Base de données :** ' + t.database.join(', ') + '\n';
    if (t.integrations) resp += '**Intégrations :** ' + t.integrations.join(', ') + '\n';
    if (t.routing)      resp += '**Routage :** ' + t.routing.join(', ') + '\n';
    if (t.switching)    resp += '**Switching :** ' + t.switching.join(', ') + '\n';
    if (t.security)     resp += '**Sécurité :** ' + t.security.join(', ') + '\n';
    if (t.simulation)   resp += '**Simulation :** ' + t.simulation.join(', ') + '\n';
    if (t.tools)        resp += '**Outils :** ' + t.tools.join(', ') + '\n';
    return resp;
  }

  // Fonctionnalités
  if (/fonctionnalit|feature|fait quoi|capable|option|module|permet|propose/i.test(q)) {
    var feats = d.features || [];
    var resp = '✨ **Fonctionnalités de ' + proj.name + ' :**\n\n';
    feats.forEach(function(f, i) { resp += (i+1) + '. ' + f + '\n'; });
    return resp;
  }

  // Description générale
  if (/c.est quoi|qu.est.ce|présent|décri|about|description|projet|résumé|overview|explique/i.test(q)) {
    return '📋 **' + proj.name + '**\n\n' + d.description;
  }

  // Architecture
  if (/architect|structure|organis|pattern|mvc|design|comment.c.est.fait/i.test(q)) {
    return '🏗️ **Architecture :**\n\n' + (d.architecture || 'Architecture non spécifiée.');
  }

  // Installation / Lancement
  if (/install|lancer|démarr|setup|configur|prérequis|run|start|comment.utiliser/i.test(q)) {
    return '🚀 **Installation & Lancement :**\n\n' + (d.installation || 'Voir le README sur GitHub.');
  }

  // Base de données
  if (/base.de.données|database|mysql|table|schema|sql|donnée|bdd/i.test(q)) {
    if (d.database_schema) return '🗄️ **Base de données :**\n\n' + d.database_schema;
    if (d.database)        return '🗄️ **Base de données :**\n\n' + d.database;
    var db = d.technologies && d.technologies.database;
    if (db) return '🗄️ **Base de données :** ' + db.join(', ');
  }

  // Modèle IA / ML
  if (/modèle|model|ia|intelligence|ml|machine.learning|deep.learning|neural|réseau.de.neurone|précision|accuracy|cnn|random.forest|keras|tensorflow/i.test(q)) {
    if (d.model) {
      var m = d.model;
      return '🤖 **Modèle IA :**\n\n**Architecture :** ' + m.architecture + '\n**Dataset :** ' + m.dataset + '\n**Précision :** ' + m.accuracy + '\n**Prétraitement :** ' + m.preprocessing;
    }
    if (d.models) {
      var resp = '🤖 **Modèles ML utilisés :**\n\n';
      d.models.forEach(function(m) { resp += '• ' + m + '\n'; });
      return resp;
    }
    if (d.performance) return '🤖 **Performance IA :**\n\n' + d.performance;
  }

  // VLANs
  if (/vlan|segmentation|sous.réseau|subnet/i.test(q)) {
    if (d.vlans) {
      var resp = '🔀 **VLANs configurés :**\n\n';
      d.vlans.forEach(function(v) { resp += '• ' + v + '\n'; });
      return resp;
    }
  }

  // Protocoles réseau
  if (/protocole|ospf|rip|eigrp|bgp|routage|routing/i.test(q)) {
    var r = d.technologies && d.technologies.routing;
    if (r) return '📡 **Protocoles de routage :**\n\n• ' + r.join('\n• ');
  }

  // Sécurité réseau
  if (/sécurité|acl|nat|firewall|pare.feu|ssh|port.security|protection/i.test(q)) {
    if (d.security_features) {
      var resp = '🔒 **Sécurité réseau :**\n\n';
      d.security_features.forEach(function(s) { resp += '• ' + s + '\n'; });
      return resp;
    }
  }

  // Commandes Cisco
  if (/commande|command|cisco|ios|config|configure/i.test(q)) {
    if (d.commands) {
      var resp = '💻 **Commandes Cisco clés :**\n\n';
      d.commands.forEach(function(c) { resp += '`' + c + '`\n'; });
      return resp;
    }
  }

  // Topologie
  if (/topologie|topology|schéma|diagram/i.test(q)) {
    if (d.topology) return '🗺️ **Topologie réseau :**\n\n' + d.topology;
  }

  // API / Endpoints
  if (/api|endpoint|route|url|rest|http/i.test(q)) {
    if (d.api_endpoints) {
      var resp = '🔌 **Endpoints API :**\n\n';
      d.api_endpoints.forEach(function(e) { resp += '• `' + e + '`\n'; });
      return resp;
    }
    if (d.api) return '🔌 **API :**\n\n' + d.api;
  }

  // Classes cancer
  if (/classe|catégorie|type.de.cancer|lésion|mélanome|détect/i.test(q)) {
    if (d.classes) {
      var resp = '🔬 **Classes détectées :**\n\n';
      d.classes.forEach(function(c, i) { resp += (i+1) + '. ' + c + '\n'; });
      return resp;
    }
  }

  // Équipe / Contexte
  if (/équipe|team|collabor|esprit|pidev|pfe|contexte|cadre|qui.a.fait|auteur/i.test(q)) {
    return '👥 **Contexte du projet :**\n\n' + (d.team || d.context || d.objectives || 'Projet académique ESPRIT.');
  }

  // GitHub
  if (/github|git|code|source|repo|dépôt|lien/i.test(q)) {
    return '🐙 **GitHub :**\n\nCode source disponible sur :\n`' + proj.github + '`\n\nCliquez sur le bouton GitHub pour y accéder !';
  }

  // Fichiers
  if (/fichier|file|structure|dossier|folder/i.test(q)) {
    if (d.files) {
      var resp = '📁 **Fichiers principaux :**\n\n';
      d.files.forEach(function(f) { resp += '• `' + f + '`\n'; });
      return resp;
    }
  }

  // Performance
  if (/performance|vitesse|rapidité|benchmark|résultat/i.test(q)) {
    if (d.performance) return '⚡ **Performance :**\n\n' + d.performance;
    if (d.model && d.model.accuracy) return '⚡ **Précision du modèle :** ' + d.model.accuracy;
  }

  return null;
}

function defaultAnswer(projectId) {
  var proj = PROJECTS_DB[projectId];
  if (!proj) return "Je ne connais pas ce projet. 🤔";
  var suggs = proj.suggestions || [];
  return "Je n'ai pas trouvé de réponse précise. 🤔\n\nVoici ce que je peux vous expliquer sur **" + proj.name + "** :\n\n" + suggs.map(function(s){ return '• ' + s; }).join('\n') + "\n\nPosez une question plus précise !";
}

/* ================================================
   3. UTILITAIRES PARTAGÉS
   ================================================ */
function chatGetTime() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

function chatFmt(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');
}

/* ================================================
   4. CHAT INLINE — SECTION PROJETS (PAGE PRINCIPALE)
   ================================================ */
(function() {

  var wrapper  = null;
  var messages = null;
  var input    = null;
  var sendBtn  = null;
  var closeBtn = null;
  var tagsEl   = null;
  var suggsEl  = null;
  var nameEl   = null;
  var avatarEl = null;
  var githubBtn= null;
  var exportBtn= null;
  var currentProject = null;

  function init() {
    wrapper   = document.getElementById('inlineChatWrapper');
    messages  = document.getElementById('icpMessages');
    input     = document.getElementById('icpInput');
    sendBtn   = document.getElementById('icpSend');
    closeBtn  = document.getElementById('icpClose');
    tagsEl    = document.getElementById('icpTags');
    suggsEl   = document.getElementById('icpSuggestions');
    nameEl    = document.getElementById('icpName');
    avatarEl  = document.getElementById('icpAvatar');
    githubBtn = document.getElementById('icpGithub');
    exportBtn = document.getElementById('icpExport');

    if (!wrapper || !messages || !input) {
      console.warn('Chat Inline : éléments DOM manquants');
      return;
    }

    // Événements
    sendBtn  && sendBtn.addEventListener('click', function() { sendMsg(); });
    closeBtn && closeBtn.addEventListener('click', closeChat);
    exportBtn && exportBtn.addEventListener('click', exportChat);

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
      if (e.key === 'Escape') closeChat();
    });

    document.addEventListener('keydown', function(e) {
      if (!wrapper.classList.contains('open')) return;
      if (e.key === 'Escape') closeChat();
      if (e.ctrlKey && e.key === 'e') { e.preventDefault(); exportChat(); }
    });

    // Boutons sur les cartes
    attachCardButtons();

    console.log('✅ Chat Inline initialisé');
  }

  function attachCardButtons() {
    // Bouton "Discuter" dans le footer
    document.querySelectorAll('.pf-chat-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var pid = btn.getAttribute('data-project');
        if (!pid) return;
        if (currentProject === pid && wrapper.classList.contains('open')) {
          closeChat(); return;
        }
        document.querySelectorAll('.project-card').forEach(function(c) { c.classList.remove('chat-active'); });
        var card = btn.closest('.project-card');
        if (card) card.classList.add('chat-active');
        openChat(pid);
      });
    });

    // Bouton "Chat IA" dans l'overlay
    document.querySelectorAll('.pov-chat-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var pid = btn.getAttribute('data-project');
        if (!pid) return;
        document.querySelectorAll('.project-card').forEach(function(c) { c.classList.remove('chat-active'); });
        var card = btn.closest('.project-card');
        if (card) card.classList.add('chat-active');
        openChat(pid);
      });
    });
  }

  function openChat(projectId) {
    var proj = PROJECTS_DB[projectId];
    if (!proj) { console.warn('Projet introuvable:', projectId); return; }

    currentProject = projectId;

    // Header
    if (nameEl)    nameEl.textContent = proj.name;
    if (avatarEl)  {
      avatarEl.innerHTML = '<i class="' + proj.icon + '"></i>';
      avatarEl.style.background = 'linear-gradient(135deg, ' + proj.color + ', #6366f1)';
    }
    if (githubBtn) githubBtn.href = proj.github;

    // Tags
    if (tagsEl) {
      tagsEl.innerHTML = proj.tags.map(function(t) {
        return '<span class="icp-tag">' + t + '</span>';
      }).join('');
    }

    // Vider et afficher le message de bienvenue
    messages.innerHTML = '';
    addBot(proj.welcome);
    renderSuggs(proj.suggestions);

    // Ouvrir
    wrapper.setAttribute('aria-hidden', 'false');
    wrapper.classList.add('open');

    setTimeout(function() {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      input.focus();
    }, 350);
  }

  function closeChat() {
    if (!wrapper) return;
    wrapper.classList.remove('open');
    wrapper.setAttribute('aria-hidden', 'true');
    currentProject = null;
    document.querySelectorAll('.project-card.chat-active').forEach(function(c) {
      c.classList.remove('chat-active');
    });
  }

  function addBot(text) {
    var d = document.createElement('div');
    d.className = 'icp-msg icp-msg--bot';
    d.innerHTML =
      '<div class="icp-msg-av"><i class="fas fa-robot"></i></div>' +
      '<div>' +
        '<div class="icp-bubble">' + chatFmt(text) + '</div>' +
        '<span class="icp-time">' + chatGetTime() + '</span>' +
      '</div>';
    messages.appendChild(d);
    scrollBottom();
  }

  function addUser(text) {
    var d = document.createElement('div');
    d.className = 'icp-msg icp-msg--user';
    d.innerHTML =
      '<div>' +
        '<div class="icp-bubble">' + escapeHtml(text) + '</div>' +
        '<span class="icp-time">' + chatGetTime() + '</span>' +
      '</div>';
    messages.appendChild(d);
    scrollBottom();
  }

  function showTyping() {
    var d = document.createElement('div');
    d.className = 'icp-typing';
    d.id = 'icpTyping';
    d.innerHTML =
      '<div class="icp-msg-av"><i class="fas fa-robot"></i></div>' +
      '<div class="icp-typing-dots"><span></span><span></span><span></span></div>';
    messages.appendChild(d);
    scrollBottom();
    return d;
  }

  function renderSuggs(list) {
    if (!suggsEl) return;
    suggsEl.innerHTML = list.map(function(s) {
      return '<button class="icp-chip" data-q="' + s + '"><i class="fas fa-bolt"></i>' + s + '</button>';
    }).join('');
    suggsEl.querySelectorAll('.icp-chip').forEach(function(c) {
      c.addEventListener('click', function() { sendMsg(c.getAttribute('data-q')); });
    });
  }

  function sendMsg(text) {
    var q = (text || input.value).trim();
    if (!q || !currentProject) return;
    input.value = '';
    addUser(q);
    if (suggsEl) suggsEl.innerHTML = '';

    var typing = showTyping();
    var delay  = 500 + Math.random() * 600;

    setTimeout(function() {
      typing.remove();
      var answer = findAnswer(q, currentProject) || defaultAnswer(currentProject);
      addBot(answer);

      var proj = PROJECTS_DB[currentProject];
      if (proj) {
        var remaining = proj.suggestions.filter(function(s) {
          return s.toLowerCase() !== q.toLowerCase();
        }).slice(0, 4);
        renderSuggs(remaining);
      }
    }, delay);
  }

  function scrollBottom() {
    setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 60);
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function exportChat() {
    var projName = nameEl ? nameEl.textContent : 'Projet';
    var txt = '=== Chat — ' + projName + ' ===\nDate : ' + new Date().toLocaleDateString('fr-FR') + '\n\n';
    messages.querySelectorAll('.icp-msg').forEach(function(msg) {
      var isBot  = msg.classList.contains('icp-msg--bot');
      var bubble = msg.querySelector('.icp-bubble');
      var time   = msg.querySelector('.icp-time');
      if (!bubble) return;
      txt += '[' + (time ? time.textContent : '') + '] ' + (isBot ? '🤖 Assistant' : '👤 Vous') + ' :\n' + bubble.innerText + '\n\n';
    });
    var blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href = url;
    a.download = 'chat-' + projName.replace(/\s+/g,'-').toLowerCase() + '.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  // Exposer
  window.InlineChat = { open: openChat, close: closeChat };

  // Init au bon moment
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ================================================
   5. CHAT MODAL (overlay global — navbar Projets)
   ================================================ */
(function() {

  var overlay   = null;
  var messages  = null;
  var input     = null;
  var sendBtn   = null;
  var closeBtn  = null;
  var tagsEl    = null;
  var suggsEl   = null;
  var nameEl    = null;
  var avatarEl  = null;
  var githubBtn = null;
  var currentProject = null;

  function init() {
    overlay   = document.getElementById('projChatOverlay');
    messages  = document.getElementById('pcpMessages');
    input     = document.getElementById('pcpInput');
    sendBtn   = document.getElementById('pcpSendBtn');
    closeBtn  = document.getElementById('pcpCloseBtn');
    tagsEl    = document.getElementById('pcpTags');
    suggsEl   = document.getElementById('pcpSuggestions');
    nameEl    = document.getElementById('pcpProjectName');
    avatarEl  = document.getElementById('pcpAvatar');
    githubBtn = document.getElementById('pcpGithubBtn');

    if (!overlay) return; // Modal optionnel

    sendBtn  && sendBtn.addEventListener('click', function() { sendMsg(); });
    closeBtn && closeBtn.addEventListener('click', closeChat);

    input && input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
      if (e.key === 'Escape') closeChat();
    });

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeChat();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) closeChat();
    });

    // Boutons chat dans le modal projets (mpl-chat-btn)
    document.querySelectorAll('.mpl-chat-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var pid = btn.getAttribute('data-project');
        if (pid) openChat(pid);
      });
    });

    console.log('✅ Chat Modal initialisé');
  }

  function openChat(projectId) {
    var proj = PROJECTS_DB[projectId];
    if (!proj || !overlay) return;

    currentProject = projectId;

    if (nameEl)    nameEl.textContent = proj.name;
    if (avatarEl)  {
      avatarEl.innerHTML = '<i class="' + proj.icon + '"></i>';
      avatarEl.style.background = 'linear-gradient(135deg, ' + proj.color + ', #6366f1)';
    }
    if (githubBtn) githubBtn.href = proj.github;

    if (tagsEl) {
      tagsEl.innerHTML = proj.tags.map(function(t) {
        return '<span class="pcp-tag"><i class="fas fa-tag"></i>' + t + '</span>';
      }).join('');
    }

    if (messages) messages.innerHTML = '';
    addBot(proj.welcome);
    renderSuggs(proj.suggestions);

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(function() { if (input) input.focus(); }, 400);
  }

  function closeChat() {
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentProject = null;
  }

  function addBot(text) {
    if (!messages) return;
    var d = document.createElement('div');
    d.className = 'pcp-msg pcp-msg--bot';
    d.innerHTML =
      '<div class="pcp-msg-avatar"><i class="fas fa-robot"></i></div>' +
      '<div>' +
        '<div class="pcp-msg-bubble">' + chatFmt(text) + '</div>' +
        '<span class="pcp-msg-time">' + chatGetTime() + '</span>' +
      '</div>';
    messages.appendChild(d);
    scrollBottom();
  }

  function addUser(text) {
    if (!messages) return;
    var d = document.createElement('div');
    d.className = 'pcp-msg pcp-msg--user';
    d.innerHTML =
      '<div>' +
        '<div class="pcp-msg-bubble">' + text.replace(/</g,'&lt;') + '</div>' +
        '<span class="pcp-msg-time">' + chatGetTime() + '</span>' +
      '</div>';
    messages.appendChild(d);
    scrollBottom();
  }

  function showTyping() {
    if (!messages) return null;
    var d = document.createElement('div');
    d.className = 'pcp-typing';
    d.innerHTML =
      '<div class="pcp-msg-avatar" style="width:30px;height:30px;border-radius:10px;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;font-size:.75rem;color:white;">' +
        '<i class="fas fa-robot"></i>' +
      '</div>' +
      '<div class="pcp-typing-dots"><span></span><span></span><span></span></div>';
    messages.appendChild(d);
    scrollBottom();
    return d;
  }

  function renderSuggs(list) {
    if (!suggsEl) return;
    suggsEl.innerHTML = list.map(function(s) {
      return '<button class="pcp-suggestion-chip" data-question="' + s + '"><i class="fas fa-bolt"></i>' + s + '</button>';
    }).join('');
    suggsEl.querySelectorAll('.pcp-suggestion-chip').forEach(function(c) {
      c.addEventListener('click', function() { sendMsg(c.getAttribute('data-question')); });
    });
  }

  function sendMsg(text) {
    var q = (text || (input ? input.value : '')).trim();
    if (!q || !currentProject) return;
    if (input) input.value = '';
    addUser(q);
    if (suggsEl) suggsEl.innerHTML = '';

    var typing = showTyping();
    var delay  = 500 + Math.random() * 600;

    setTimeout(function() {
      if (typing) typing.remove();
      var answer = findAnswer(q, currentProject) || defaultAnswer(currentProject);
      addBot(answer);

      var proj = PROJECTS_DB[currentProject];
      if (proj) {
        var remaining = proj.suggestions.filter(function(s) {
          return s.toLowerCase() !== q.toLowerCase();
        }).slice(0, 3);
        renderSuggs(remaining);
      }
    }, delay);
  }

  function scrollBottom() {
    if (messages) setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 60);
  }

  // Exposer
  window.ProjectChat = { open: openChat, close: closeChat };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ================================================
   6. PREVIEW IMAGE DYNAMIQUE (modal projets navbar)
   ================================================ */
(function() {

  var glowClasses = {
    purple: 'modal-img-glow--purple',
    orange: 'modal-img-glow--orange',
    green:  'modal-img-glow--green',
    blue:   'modal-img-glow--blue',
    pink:   'modal-img-glow--pink'
  };

  function switchImage(item) {
    var img   = document.getElementById('proj-modal-img');
    var glow  = document.getElementById('proj-modal-glow');
    var label = document.getElementById('proj-modal-label');
    var frame = img ? img.closest('.modal-img-frame') : null;
    if (!img || !item) return;

    var newSrc   = item.getAttribute('data-img');
    var newLabel = item.getAttribute('data-label');
    var newGlow  = item.getAttribute('data-glow') || 'purple';
    var newStyle = item.getAttribute('data-style') || 'cover';

    document.querySelectorAll('.mpl-clickable').forEach(function(el) { el.classList.remove('active'); });
    item.classList.add('active');

    img.classList.add('swapping-out');

    setTimeout(function() {
      img.src = newSrc;
      img.alt = newLabel;
      img.style.objectFit  = newStyle === 'cover' ? 'cover' : 'contain';
      img.style.padding    = newStyle === 'cover' ? '0' : '1.5rem';
      img.style.background = newStyle === 'cover' ? 'transparent' : 'rgba(255,255,255,0.05)';

      if (frame) {
        newStyle === 'cover' ? frame.classList.add('has-photo') : frame.classList.remove('has-photo');
      }

      if (glow) {
        Object.values(glowClasses).forEach(function(c) { glow.classList.remove(c); });
        glow.classList.add(glowClasses[newGlow] || glowClasses.purple);
      }

      if (label) {
        label.innerHTML = '<i class="fas fa-check-circle"></i><span>' + newLabel + '</span>';
        label.classList.add('has-project');
      }

      img.classList.remove('swapping-out');
      img.classList.add('swapping-in');
      setTimeout(function() { img.classList.remove('swapping-in'); }, 450);
    }, 200);
  }

  function resetModal() {
    var img   = document.getElementById('proj-modal-img');
    var glow  = document.getElementById('proj-modal-glow');
    var label = document.getElementById('proj-modal-label');
    var frame = img ? img.closest('.modal-img-frame') : null;

    if (img) {
      img.src = 'image/esprit.png'; img.alt = 'ESPRIT';
      img.style.objectFit = 'contain'; img.style.padding = '1.5rem';
      img.style.background = 'rgba(255,255,255,0.05)';
    }
    if (glow) {
      Object.values(glowClasses).forEach(function(c) { glow.classList.remove(c); });
      glow.classList.add('modal-img-glow--purple');
    }
    if (label) {
      label.innerHTML = '<i class="fas fa-folder-open"></i><span>Sélectionnez un projet</span>';
      label.classList.remove('has-project');
    }
    if (frame) frame.classList.remove('has-photo');
    document.querySelectorAll('.mpl-clickable').forEach(function(el) { el.classList.remove('active'); });
  }

  function init() {
    document.querySelectorAll('.mpl-clickable').forEach(function(item) {
      item.addEventListener('click', function() { switchImage(item); });
    });

    var modalProjects = document.getElementById('modal-projects');
    if (modalProjects) {
      new MutationObserver(function() {
        if (!modalProjects.classList.contains('open')) setTimeout(resetModal, 400);
      }).observe(modalProjects, { attributes: true, attributeFilter: ['class'] });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ================================================
   7. SYSTÈME DE MODALS NAVIGATION (navbar)
   ================================================ */
(function() {

  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    document.body.style.overflow = 'hidden';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    // Animer les barres skills si présentes
    setTimeout(function() {
      modal.querySelectorAll('.msp-bar div').forEach(function(bar) {
        var w = bar.style.width;
        bar.style.width = '0%';
        setTimeout(function() { bar.style.width = w; }, 50);
      });
    }, 300);
  }

  function closeModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function init() {
    // Triggers navbar
    document.querySelectorAll('.nav-modal-trigger').forEach(function(link) {
      link.addEventListener('click', function(e) {
        var modalId = link.getAttribute('data-modal');
        if (!modalId) return;
        e.preventDefault();
        var hamburger = document.getElementById('hamburger');
        var navLinks  = document.getElementById('navLinks');
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks)  navLinks.classList.remove('active');
        openModal(modalId);
      });
    });

    // Boutons fermer
    document.querySelectorAll('[data-close]').forEach(function(el) {
      el.addEventListener('click', function() {
        closeModal(el.getAttribute('data-close'));
      });
    });

    // Boutons nav dans les modals
    document.querySelectorAll('.modal-nav-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var closeId = btn.getAttribute('data-close');
        var href    = btn.getAttribute('href');
        if (closeId) closeModal(closeId);
        if (href && href.startsWith('#')) {
          e.preventDefault();
          setTimeout(function() {
            var target = document.querySelector(href);
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
          }, 350);
        }
      });
    });

    // Échap
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.nav-modal.open').forEach(function(m) {
          m.classList.remove('open');
          m.setAttribute('aria-hidden', 'true');
        });
        document.body.style.overflow = '';
      }
    });

    // Parallax souris dans les modals
    document.querySelectorAll('.modal-panel').forEach(function(panel) {
      panel.addEventListener('mousemove', function(e) {
        var rect = panel.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width  - 0.5;
        var y = (e.clientY - rect.top)  / rect.height - 0.5;
        var photo = panel.querySelector('.modal-photo');
        if (photo) photo.style.transform = 'translateY(' + (y * -8) + 'px) translateX(' + (x * -8) + 'px) scale(1.03)';
        var glow = panel.querySelector('.modal-img-glow');
        if (glow) glow.style.transform = 'translate(' + (x * 20) + 'px, ' + (y * 20) + 'px)';
      });
      panel.addEventListener('mouseleave', function() {
        var photo = panel.querySelector('.modal-photo');
        if (photo) photo.style.transform = '';
        var glow = panel.querySelector('.modal-img-glow');
        if (glow) glow.style.transform = '';
      });
    });

    // Initialiser aria-hidden
    document.querySelectorAll('.nav-modal').forEach(function(m) {
      m.setAttribute('aria-hidden', 'true');
    });

    console.log('✅ Modals Navigation initialisés');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

console.log('✅ chat-projects.js — Chargement complet');
