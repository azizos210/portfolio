// ========================================
// PORTFOLIO EXTRAORDINAIRE - JAVASCRIPT
// Animations & Interactivité
// ========================================

// ===== CONFIGURATION =====
const CONFIG = {
  particleCount: 80,
  typingSpeed: 100,
  typingDelay: 2000,
  loaderDuration: 2000
};

// ===== LOADER =====
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  const loaderProgress = document.getElementById('loaderProgress');
  
  // Animation de la barre de progression
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 100) progress = 100;
    loaderProgress.style.width = progress + '%';
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 500);
    }
  }, 200);
});

// ===== CURSEUR PERSONNALISÉ =====
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  if (cursorDot) {
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  }
});

// Animation fluide du ring
function animateRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  
  if (cursorRing) {
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
  }
  
  requestAnimationFrame(animateRing);
}
animateRing();

// Effet hover sur les liens et boutons
const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursorRing) cursorRing.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    if (cursorRing) cursorRing.classList.remove('hover');
  });
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Menu mobile
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Fermer le menu au clic sur un lien
  const navLinksItems = navLinks.querySelectorAll('a');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[data-nav]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-nav') === current) {
      link.classList.add('active');
    }
  });
});

// ===== PARTICULES CANVAS =====
const canvas = document.getElementById('particleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function initParticles() {
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Connecter les particules proches
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animateParticles);
  }
  
  initParticles();
  animateParticles();
  
  // Redimensionnement
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===== EFFET DE TYPING =====
const typedRole = document.getElementById('typedRole');
if (typedRole) {
  const roles = [
    'Ingénieur Polyvalent',
    'Licence Sécurité / Réseau',
    'Expert en IA & ML',
    'Maîtrise Administration Réseaux',
    'Passionné de Technologie'
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typedRole.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedRole.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = CONFIG.typingSpeed;
    
    if (isDeleting) {
      typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = CONFIG.typingDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }
    
    setTimeout(typeRole, typeSpeed);
  }
  
  typeRole();
}

// ===== ANIMATIONS DE RÉVÉLATION AU SCROLL =====
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// ===== COMPTEURS ANIMÉS (STATS) =====
const statNumbers = document.querySelectorAll('.stat-number');

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
  statsObserver.observe(stat);
});

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const duration = 2000;
  const stepTime = duration / 50;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, stepTime);
}

// ===== ONGLETS SKILLS =====
const skillTabs = document.querySelectorAll('.stab');
const skillPanels = document.querySelectorAll('.skills-panel');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    
    // Retirer active de tous les onglets
    skillTabs.forEach(t => t.classList.remove('active'));
    skillPanels.forEach(p => p.classList.remove('active'));
    
    // Ajouter active à l'onglet cliqué
    tab.classList.add('active');
    document.getElementById(`tab-${targetTab}`).classList.add('active');
    
    // Animer les barres de compétences
    animateSkillBars();
  });
});

// Animation des barres de compétences
function animateSkillBars() {
  const activePanel = document.querySelector('.skills-panel.active');
  if (activePanel) {
    const skillItems = activePanel.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('revealed');
        const skillFill = item.querySelector('.skill-fill');
        if (skillFill) {
          const width = skillFill.getAttribute('data-w');
          skillFill.style.width = width + '%';
        }
      }, index * 100);
    });
  }
}

// Observer pour animer les skills au scroll
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  skillsObserver.observe(skillsSection);
}

// ===== FILTRES PROJETS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    
    // Retirer active de tous les boutons
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filtrer les projets
    projectCards.forEach((card, index) => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ===== QR CODE =====
const qrCodeImg = document.getElementById('qrCodeImg');
const qrLoading = document.getElementById('qrLoading');
const portfolioUrl = document.getElementById('portfolioUrl');
const downloadQR = document.getElementById('downloadQR');
const copyUrl = document.getElementById('copyUrl');

// Générer le QR Code
function generateQRCode() {
  const currentUrl = window.location.href;
  
  if (portfolioUrl) {
    portfolioUrl.textContent = currentUrl;
  }
  
  // Utiliser l'API QR Code gratuite
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}`;
  
  if (qrCodeImg && qrLoading) {
    qrCodeImg.onload = () => {
      qrLoading.style.display = 'none';
      qrCodeImg.style.display = 'block';
    };
    
    qrCodeImg.src = qrApiUrl;
  }
}

// Télécharger le QR Code
if (downloadQR) {
  downloadQR.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = qrCodeImg.src;
    link.download = 'portfolio-qrcode.png';
    link.click();
  });
}

// Copier l'URL
if (copyUrl) {
  copyUrl.addEventListener('click', async () => {
    const url = window.location.href;
    
    try {
      await navigator.clipboard.writeText(url);
      
      // Feedback visuel
      const originalText = copyUrl.innerHTML;
      copyUrl.innerHTML = '<i class="fas fa-check"></i> Copié !';
      copyUrl.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      
      setTimeout(() => {
        copyUrl.innerHTML = originalText;
        copyUrl.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Erreur de copie:', err);
      alert('URL: ' + url);
    }
  });
}

// Générer le QR Code au chargement
if (qrCodeImg) {
  generateQRCode();
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Parallax pour le hero
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
  
  // Parallax pour les orbites
  const orbits = document.querySelectorAll('.orbit');
  orbits.forEach((orbit, index) => {
    orbit.style.transform = `rotate(${scrolled * (0.05 + index * 0.02)}deg)`;
  });
});

// ===== EFFET TILT SUR LES CARTES =====
const cards = document.querySelectorAll('.project-card, .stat-card, .skill-item');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===== EASTER EGG - KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Effet arc-en-ciel sur tout le portfolio
  document.body.style.animation = 'rainbow 3s linear infinite';
  
  // Créer l'animation rainbow si elle n'existe pas
  if (!document.getElementById('rainbow-style')) {
    const style = document.createElement('style');
    style.id = 'rainbow-style';
    style.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Message de félicitations
  setTimeout(() => {
    alert('🎉 Bravo ! Vous avez trouvé l\'Easter Egg ! 🎉');
    document.body.style.animation = '';
  }, 3000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy loading des images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== DÉTECTION DE THÈME SYSTÈME =====
function detectSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // L'utilisateur préfère le mode clair
    // Vous pouvez ajouter une logique pour basculer vers un thème clair si nécessaire
    console.log('Mode clair détecté');
  }
}

detectSystemTheme();

// ===== ANALYTICS & TRACKING (Optionnel) =====
// Tracker les clics sur les projets
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectName = card.querySelector('h3').textContent;
    console.log('Projet consulté:', projectName);
    // Vous pouvez ajouter Google Analytics ou autre ici
  });
});

// ===== ACCESSIBILITÉ =====
// Focus visible pour la navigation au clavier
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// ===== CONSOLE MESSAGE =====
console.log('%c🚀 Portfolio Extraordinaire', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c✨ Développé avec passion par Mouhamed-Aziz Mhamdi', 'font-size: 14px; color: #ec4899;');
console.log('%c💼 ESPRIT - École Supérieure Privée d\'Ingénierie et de Technologie', 'font-size: 12px; color: #14b8a6;');
console.log('%c🔗 GitHub: https://github.com/azizos210', 'font-size: 12px; color: #a1a1aa;');

// ===== INITIALISATION FINALE =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Portfolio chargé avec succès !');
  
  // Ajouter une classe pour indiquer que le JS est chargé
  document.body.classList.add('js-loaded');
  
  // Précharger les images importantes
  const importantImages = [
    'image/esprit.png',
    'image/584622665_1367406038111748_8021135782824956619_n.jpg'
  ];
  
  importantImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

// ===== GESTION DES ERREURS =====
window.addEventListener('error', (e) => {
  console.error('Erreur détectée:', e.message);
});

// ===== EXPORT POUR UTILISATION EXTERNE =====
window.PortfolioApp = {
  generateQRCode,
  animateSkillBars,
  animateCounter
};

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== TOAST NOTIFICATIONS =====
const toast = document.getElementById('toast');

function showToast(message, type = 'info', duration = 3000) {
  if (!toast) return;
  
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validation simple
    if (!data.name || !data.email || !data.message) {
      showToast('Veuillez remplir tous les champs', 'error');
      return;
    }
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showToast('Veuillez entrer un email valide', 'error');
      return;
    }
    
    // Simuler l'envoi (vous devrez implémenter votre propre backend)
    const submitBtn = contactForm.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
    submitBtn.disabled = true;
    
    // Simulation d'envoi
    setTimeout(() => {
      showToast('Message envoyé avec succès ! 🎉', 'success');
      contactForm.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Log pour développement
      console.log('Données du formulaire:', data);
    }, 2000);
  });
}

// ===== ANNÉE DYNAMIQUE DANS LE FOOTER =====
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===== ANIMATION DES ÉLÉMENTS AU SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer tous les éléments avec animation
document.querySelectorAll('.project-card, .skill-item, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeInObserver.observe(el);
});

// ===== DÉTECTION DE NAVIGATION AU CLAVIER =====
let isTabbing = false;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    isTabbing = true;
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  if (isTabbing) {
    isTabbing = false;
    document.body.classList.remove('keyboard-nav');
  }
});

// ===== LAZY LOADING AMÉLIORÉ =====
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback pour les navigateurs qui ne supportent pas loading="lazy"
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===== COPIE RAPIDE DES LIENS =====
document.querySelectorAll('.pf-link, .social-link').forEach(link => {
  link.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const url = link.href;
    
    navigator.clipboard.writeText(url).then(() => {
      showToast('Lien copié ! 📋', 'success', 2000);
    }).catch(() => {
      showToast('Erreur de copie', 'error', 2000);
    });
  });
});

// ===== DÉTECTION DE CONNEXION INTERNET =====
window.addEventListener('online', () => {
  showToast('Connexion rétablie ! 🌐', 'success', 2000);
});

window.addEventListener('offline', () => {
  showToast('Connexion perdue ⚠️', 'error', 3000);
});

// ===== PRÉCHARGEMENT DES IMAGES =====
function preloadImages() {
  const images = [
    'image/esprit.png',
    'image/584622665_1367406038111748_8021135782824956619_n.jpg',
    'image/java.jpg',
    'image/symfony.jpg',
    'image/rx.png',
    'image/pfe.png'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Précharger après le chargement initial
window.addEventListener('load', () => {
  setTimeout(preloadImages, 1000);
});

// ===== GESTION DES ERREURS D'IMAGES =====
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    if (!this.dataset.errorHandled) {
      this.dataset.errorHandled = 'true';
      
      // Afficher un placeholder si l'image ne charge pas
      const placeholder = this.nextElementSibling;
      if (placeholder && placeholder.classList.contains('project-placeholder')) {
        this.style.display = 'none';
        placeholder.style.display = 'flex';
      }
    }
  });
});

// ===== ANALYTICS & TRACKING =====
function trackEvent(category, action, label) {
  console.log(`📊 Event: ${category} - ${action} - ${label}`);
  
  // Vous pouvez intégrer Google Analytics ici
  // gtag('event', action, {
  //   'event_category': category,
  //   'event_label': label
  // });
}

// Tracker les clics sur les projets
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectName = card.querySelector('h3')?.textContent || 'Unknown';
    trackEvent('Projects', 'View', projectName);
  });
});

// Tracker les téléchargements de CV
document.querySelectorAll('a[download]').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('Downloads', 'CV', 'PDF');
    showToast('Téléchargement du CV... 📄', 'info', 2000);
  });
});

// Tracker les clics sur les réseaux sociaux
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', () => {
    const platform = link.getAttribute('aria-label') || 'Social';
    trackEvent('Social', 'Click', platform);
  });
});

// ===== EFFET DE TYPING AMÉLIORÉ =====
class TypeWriter {
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = options.typeSpeed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseDelay = options.pauseDelay || 2000;
    
    this.type();
  }
  
  type() {
    const currentWord = this.words[this.wordIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
    }
    
    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
    
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      speed = this.pauseDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      speed = 500;
    }
    
    setTimeout(() => this.type(), speed);
  }
}

// Initialiser le TypeWriter si l'élément existe
const typedRoleElement = document.getElementById('typedRole');
if (typedRoleElement) {
  new TypeWriter(typedRoleElement, [
    'Ingénieur Polyvalent',
    'Licence Sécurité / Réseau',
    'Expert en IA & ML',
    'Maîtrise Administration Réseaux',
    'Passionné de Technologie'
  ]);
}

// ===== EFFET PARALLAX AVANCÉ =====
class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.init();
  }
  
  init() {
    if (this.elements.length === 0) return;
    
    window.addEventListener('scroll', () => {
      this.update();
    });
    
    this.update();
  }
  
  update() {
    const scrolled = window.pageYOffset;
    
    this.elements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }
}

// Initialiser l'effet parallax
new ParallaxEffect();

// ===== SYSTÈME DE THÈME (OPTIONNEL) =====
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }
  
  init() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
  
  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
    showToast(`Thème ${this.theme === 'dark' ? 'sombre' : 'clair'} activé`, 'info', 2000);
  }
}

const themeManager = new ThemeManager();

// Ajouter un bouton de thème si nécessaire
// const themeToggle = document.getElementById('themeToggle');
// if (themeToggle) {
//   themeToggle.addEventListener('click', () => themeManager.toggle());
// }

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log('⚡ Performance:', {
          'Temps de chargement': `${entry.loadEventEnd - entry.fetchStart}ms`,
          'DOM Ready': `${entry.domContentLoadedEventEnd - entry.fetchStart}ms`,
          'First Paint': `${entry.responseStart - entry.fetchStart}ms`
        });
      }
    }
  });
  
  try {
    perfObserver.observe({ entryTypes: ['navigation'] });
  } catch (e) {
    console.log('Performance Observer non supporté');
  }
}

// ===== DÉTECTION DE VITESSE DE CONNEXION =====
if ('connection' in navigator) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    console.log('📶 Connexion:', {
      'Type': connection.effectiveType,
      'Downlink': `${connection.downlink} Mbps`,
      'RTT': `${connection.rtt}ms`
    });
    
    // Adapter la qualité des animations selon la connexion
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      document.body.classList.add('low-performance');
      console.log('⚠️ Mode performance réduite activé');
    }
  }
}

// ===== RACCOURCIS CLAVIER =====
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K : Focus sur la recherche (si vous en ajoutez une)
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    console.log('Raccourci: Recherche');
  }
  
  // Ctrl/Cmd + H : Retour à l'accueil
  if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Échap : Fermer le menu mobile
  if (e.key === 'Escape') {
    if (navLinks && navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  }
});

// ===== COPIE DE CODE (SI VOUS AJOUTEZ DES SNIPPETS) =====
document.querySelectorAll('pre code').forEach(block => {
  const button = document.createElement('button');
  button.className = 'copy-code-btn';
  button.innerHTML = '<i class="fas fa-copy"></i>';
  button.title = 'Copier le code';
  
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(block.textContent).then(() => {
      button.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-copy"></i>';
      }, 2000);
    });
  });
  
  block.parentElement.style.position = 'relative';
  block.parentElement.appendChild(button);
});

// ===== STATISTIQUES DE VISITE =====
function trackVisit() {
  const visits = parseInt(localStorage.getItem('visits') || '0') + 1;
  localStorage.setItem('visits', visits);
  localStorage.setItem('lastVisit', new Date().toISOString());
  
  console.log(`👋 Bienvenue ! Visite n°${visits}`);
  
  if (visits === 1) {
    showToast('Bienvenue sur mon portfolio ! 🎉', 'success', 4000);
  } else if (visits % 10 === 0) {
    showToast(`Merci pour votre ${visits}ème visite ! 🙏`, 'success', 3000);
  }
}

trackVisit();

// ===== DÉTECTION DE SCREENSHOT =====
document.addEventListener('keyup', (e) => {
  // Détection de Print Screen (approximative)
  if (e.key === 'PrintScreen') {
    console.log('📸 Screenshot détecté');
    trackEvent('Engagement', 'Screenshot', 'Portfolio');
  }
});

// ===== EASTER EGG SUPPLÉMENTAIRE - DOUBLE CLICK SUR LE LOGO =====
const logo = document.querySelector('.nav-logo');
if (logo) {
  let clickCount = 0;
  let clickTimer = null;
  
  logo.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 500);
    } else if (clickCount === 3) {
      clearTimeout(clickTimer);
      clickCount = 0;
      
      // Easter egg : Mode disco
      document.body.style.animation = 'rainbow 2s linear infinite';
      showToast('🎉 Mode Disco activé ! 🎉', 'success', 3000);
      
      setTimeout(() => {
        document.body.style.animation = '';
      }, 5000);
    }
  });
}

// ===== SMOOTH REVEAL ON SCROLL =====
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Appel initial

// ===== EXPORT DES FONCTIONS UTILES =====
window.PortfolioUtils = {
  showToast,
  trackEvent,
  themeManager,
  generateQRCode,
  animateSkillBars,
  animateCounter
};

// ===== MESSAGE DE BIENVENUE DANS LA CONSOLE =====
console.log('%c╔═══════════════════════════════════════════════════════════╗', 'color: #6366f1');
console.log('%c║                                                           ║', 'color: #6366f1');
console.log('%c║        🚀 PORTFOLIO EXTRAORDINAIRE 🚀                     ║', 'color: #6366f1; font-weight: bold');
console.log('%c║                                                           ║', 'color: #6366f1');
console.log('%c║        Développé par: Mouhamed-Aziz Mhamdi               ║', 'color: #ec4899');
console.log('%c║        École: ESPRIT - Tunis, Tunisie                    ║', 'color: #14b8a6');
console.log('%c║        GitHub: https://github.com/azizos210                ║', 'color: #a1a1aa');
console.log('%c║        Email: azizmhamdi2030@gmail.com                    ║', 'color: #a1a1aa');
console.log('%c║                                                           ║', 'color: #6366f1');
console.log('%c║        💡 Astuce: Essayez le code Konami !               ║', 'color: #f59e0b');
console.log('%c║        ↑ ↑ ↓ ↓ ← → ← → B A                              ║', 'color: #f59e0b');
console.log('%c║                                                           ║', 'color: #6366f1');
console.log('%c╚═══════════════════════════════════════════════════════════╝', 'color: #6366f1');

// ===== FIN DU FICHIER JAVASCRIPT =====
console.log('✅ Portfolio chargé et prêt à impressionner ! 🎨');

// ============================================
// COMPLÉTION FINALE — FONCTIONNALITÉS JS
// ============================================

// ===== SCROLL PROGRESS BAR =====
(function() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.id = 'scrollProgress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

// ===== QR CODE CUSTOM INPUT =====
const qrUrlInput  = document.getElementById('qrUrlInput');
const generateQRBtn = document.getElementById('generateQR');

if (qrUrlInput && generateQRBtn) {
  generateQRBtn.addEventListener('click', () => {
    const url = qrUrlInput.value.trim();
    if (!url) {
      showToast('Entrez une URL valide', 'error', 2500);
      return;
    }
    try { new URL(url); } catch {
      showToast('URL invalide — ex: https://mon-site.com', 'error', 2500);
      return;
    }
    const qrImg = document.getElementById('qrCodeImg');
    const qrLoad = document.getElementById('qrLoading');
    const urlDisplay = document.getElementById('portfolioUrl');
    if (qrImg && qrLoad) {
      qrLoad.style.display = 'flex';
      qrImg.style.display  = 'none';
      qrImg.onload = () => {
        qrLoad.style.display = 'none';
        qrImg.style.display  = 'block';
        showToast('QR Code généré ! 🎉', 'success', 2000);
      };
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
      if (urlDisplay) urlDisplay.textContent = url;
    }
  });

  // Générer au Enter
  qrUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') generateQRBtn.click();
  });
}

// ===== CONTACT FORM — VALIDATION AMÉLIORÉE =====
const contactFormEl = document.getElementById('contactForm');
if (contactFormEl) {
  // Retirer l'erreur quand l'utilisateur tape
  contactFormEl.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-group')?.classList.remove('error');
    });
  });

  contactFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'name',    msg: 'Veuillez entrer votre nom' },
      { id: 'email',   msg: 'Veuillez entrer votre email' },
      { id: 'subject', msg: 'Veuillez entrer un sujet' },
      { id: 'message', msg: 'Veuillez entrer votre message' }
    ];

    fields.forEach(({ id, msg }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const group = el.closest('.form-group');
      let errEl = group?.querySelector('.error-message');
      if (!errEl && group) {
        errEl = document.createElement('span');
        errEl.className = 'error-message';
        group.appendChild(errEl);
      }
      if (!el.value.trim()) {
        group?.classList.add('error');
        if (errEl) errEl.textContent = msg;
        valid = false;
      }
    });

    // Validation email
    const emailEl = document.getElementById('email');
    if (emailEl && emailEl.value.trim()) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value);
      if (!emailOk) {
        const group = emailEl.closest('.form-group');
        group?.classList.add('error');
        let errEl = group?.querySelector('.error-message');
        if (!errEl && group) {
          errEl = document.createElement('span');
          errEl.className = 'error-message';
          group.appendChild(errEl);
        }
        if (errEl) errEl.textContent = 'Email invalide';
        valid = false;
      }
    }

    if (!valid) return;

    // Envoi simulé
    const submitBtn = contactFormEl.querySelector('[type="submit"]');
    const successEl = document.getElementById('formSuccess');
    if (submitBtn) {
      const orig = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = orig;
        submitBtn.disabled = false;
        contactFormEl.reset();
        if (successEl) {
          successEl.classList.add('show');
          setTimeout(() => successEl.classList.remove('show'), 5000);
        }
        showToast('Message envoyé avec succès ! 🎉', 'success', 4000);
      }, 2000);
    }
  });
}

// ===== EFFET MAGNÉTIQUE SUR LES BOUTONS =====
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-3px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ===== EFFET TILT 3D AVANCÉ SUR LES CARTES =====
function applyTilt(selector, intensity = 15) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform =
        `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(20px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

applyTilt('.project-card', 8);
applyTilt('.skill-item', 10);
applyTilt('.stat-card', 12);
applyTilt('.contact-item', 6);
applyTilt('.qr-card', 5);

// ===== PARALLAX SOURIS SUR LE HERO =====
const heroSection = document.querySelector('.hero');
if (heroSection) {
  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth  - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;

    const avatarScene = document.querySelector('.avatar-scene');
    if (avatarScene) {
      avatarScene.style.transform = `perspective(1200px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
    }

    document.querySelectorAll('.tech-badge').forEach((badge, i) => {
      const factor = (i + 1) * 0.3;
      badge.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    const avatarScene = document.querySelector('.avatar-scene');
    if (avatarScene) avatarScene.style.transform = '';
    document.querySelectorAll('.tech-badge').forEach(b => b.style.transform = '');
  });
}

// ===== ANIMATION D'ENTRÉE DES SECTIONS =====
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => sectionObserver.observe(s));

// ===== COMPTEUR DE MOTS DANS LE TEXTAREA =====
const msgTextarea = document.getElementById('message');
if (msgTextarea) {
  const counter = document.createElement('div');
  counter.style.cssText = 'text-align:right;font-size:0.8rem;color:var(--text-muted);margin-top:0.4rem;';
  counter.textContent = '0 / 500 caractères';
  msgTextarea.parentElement?.after(counter);

  msgTextarea.addEventListener('input', () => {
    const len = msgTextarea.value.length;
    counter.textContent = `${len} / 500 caractères`;
    counter.style.color = len > 450 ? 'var(--warning)' : 'var(--text-muted)';
    if (len > 500) {
      msgTextarea.value = msgTextarea.value.substring(0, 500);
      counter.style.color = 'var(--danger)';
    }
  });
}

// ===== ANIMATION DES ORBITES AU SCROLL =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.orbit').forEach((orbit, i) => {
    const speed = (i + 1) * 0.02;
    orbit.style.transform = `rotate(${scrolled * speed}deg)`;
  });
}, { passive: true });

// ===== MISE À JOUR ANNÉE FOOTER =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== LOG FINAL =====
console.log('%c✅ Portfolio complet & opérationnel !', 'color:#22c55e;font-size:14px;font-weight:bold;');
