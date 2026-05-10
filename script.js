'use strict';

/* 1. PAGE LOADER */
(function(){
  var loader=document.getElementById('pageLoader');
  var bar=document.getElementById('loaderProgress');
  if(!loader) return;
  var p=0;
  var iv=setInterval(function(){
    p+=Math.random()*18;
    if(p>=100){p=100;clearInterval(iv);setTimeout(function(){loader.classList.add('hidden');},300);}
    bar.style.width=p+'%';
  },80);
})();

/* 2. CUSTOM CURSOR */
(function(){
  var dot=document.getElementById('cursorDot');
  var ring=document.getElementById('cursorRing');
  if(!dot||!ring) return;
  var mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){
    mx=e.clientX;my=e.clientY;
    dot.style.left=mx+'px';dot.style.top=my+'px';
  });
  (function lerp(){
    rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    requestAnimationFrame(lerp);
  })();
  document.querySelectorAll('a,button').forEach(function(el){
    el.addEventListener('mouseenter',function(){ring.classList.add('hovered');});
    el.addEventListener('mouseleave',function(){ring.classList.remove('hovered');});
  });
})();

/* 3. NAVBAR SCROLL */
(function(){
  var nav=document.getElementById('navbar');
  if(!nav) return;
  function fn(){nav.classList.toggle('scrolled',window.scrollY>20);}
  window.addEventListener('scroll',fn,{passive:true});fn();
})();

/* 4. HAMBURGER */
(function(){
  var btn=document.getElementById('hamburger');
  var links=document.getElementById('navLinks');
  var nav=document.getElementById('navbar');
  if(!btn||!links) return;
  btn.addEventListener('click',function(){
    var open=links.classList.toggle('open');
    btn.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',String(open));
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      links.classList.remove('open');btn.classList.remove('open');
    });
  });
  document.addEventListener('click',function(e){
    if(!nav.contains(e.target)){links.classList.remove('open');btn.classList.remove('open');}
  });
})();

/* 5. SMOOTH SCROLL */
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('href');if(id==='#') return;
      var t=document.querySelector(id);if(!t) return;
      e.preventDefault();
      var h=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))||72;
      window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-h,behavior:'smooth'});
    });
  });
})();

/* 6. ACTIVE NAV */
(function(){
  var secs=document.querySelectorAll('section[id]');
  var links=document.querySelectorAll('.nav-links a[href^="#"]');
  if(!secs.length||!links.length) return;
  function update(){
    var h=(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'))||72)+60;
    var cur='';
    secs.forEach(function(s){if(window.scrollY+h>=s.offsetTop) cur=s.id;});
    links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+cur);});
  }
  window.addEventListener('scroll',update,{passive:true});update();
})();

/* 7. SCROLL REVEAL */
(function(){
  var els=document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');
  if(!els.length) return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){obs.observe(el);});
})();

/* 8. COUNTER ANIMATION */
(function(){
  var counters=document.querySelectorAll('.stat-number[data-target]');
  if(!counters.length) return;
  function animate(el){
    var target=parseInt(el.getAttribute('data-target'),10);
    var inc=target/(1600/16);var cur=0;
    var iv=setInterval(function(){
      cur+=inc;
      if(cur>=target){el.textContent=target;clearInterval(iv);}
      else el.textContent=Math.floor(cur);
    },16);
  }
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){animate(e.target);obs.unobserve(e.target);}});
  },{threshold:0.5});
  counters.forEach(function(c){obs.observe(c);});
})();

/* 9. TYPING EFFECT */
(function(){
  var el=document.getElementById('typedRole');
  if(!el) return;
  var roles=['Mouhamed-Aziz Mhamdi','Ingenieur Polyvalent','Connaissances en Developpement','Maitrise Administration Reseaux','Etudiant ESPRIT'];
  var ri=0,ci=0,del=false,paused=false;
  function tick(){
    if(paused) return;
    var r=roles[ri];
    if(del){
      ci--;el.textContent=r.substring(0,ci);
      if(ci===0){del=false;ri=(ri+1)%roles.length;paused=true;setTimeout(function(){paused=false;tick();},400);return;}
      setTimeout(tick,40);
    } else {
      ci++;el.textContent=r.substring(0,ci);
      if(ci===r.length){del=true;paused=true;setTimeout(function(){paused=false;tick();},2200);return;}
      setTimeout(tick,80);
    }
  }
  setTimeout(tick,1000);
})();

/* 10. SKILLS TABS */
(function(){
  var tabs=document.querySelectorAll('.stab');
  if(!tabs.length) return;
  function animateBars(panel){
    panel.querySelectorAll('.skill-fill').forEach(function(fill){
      fill.style.width='0';
      setTimeout(function(){fill.style.width=fill.getAttribute('data-w')+'%';},50);
    });
  }
  tabs.forEach(function(tab){
    tab.addEventListener('click',function(){
      tabs.forEach(function(t){t.classList.remove('active');});
      tab.classList.add('active');
      document.querySelectorAll('.skills-panel').forEach(function(p){p.classList.remove('active');});
      var panel=document.getElementById('tab-'+tab.getAttribute('data-tab'));
      if(panel){panel.classList.add('active');animateBars(panel);}
    });
  });
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var active=document.querySelector('.skills-panel.active');
        if(active) animateBars(active);
        obs.disconnect();
      }
    });
  },{threshold:0.2});
  var sec=document.getElementById('skills');
  if(sec) obs.observe(sec);
})();

/* 11. PROJECTS FILTER */
(function(){
  var btns=document.querySelectorAll('.filter-btn');
  var cards=document.querySelectorAll('.project-card');
  if(!btns.length||!cards.length) return;
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      btns.forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      var f=btn.getAttribute('data-filter');
      cards.forEach(function(c){
        var show=f==='all'||c.getAttribute('data-category')===f;
        c.classList.toggle('hidden',!show);
      });
    });
  });
})();

/* 12. QR CODE */
(function(){
  var img=document.getElementById('qrCodeImg');
  var loading=document.getElementById('qrLoading');
  var urlSpan=document.getElementById('portfolioUrl');
  var dlBtn=document.getElementById('downloadQR');
  var cpBtn=document.getElementById('copyUrl');
  var input=document.getElementById('qrUrlInput');
  var genBtn=document.getElementById('generateQR');
  if(!img) return;
  var API='https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=';

  // URL publique du portfolio (GitHub Pages)
  // Si le site est hebergé, cette URL sera automatiquement détectée
  var PORTFOLIO_URL = (function(){
    var loc = window.location.href;
    // Si c'est un fichier local, utiliser l'URL GitHub Pages
    if(loc.startsWith('file:') || loc.includes('localhost') || loc.includes('127.0.0.1')){
      return 'https://azizos210.github.io/portfolio/';
    }
    // Sinon utiliser l'URL réelle du navigateur
    return loc.split('#')[0].split('?')[0];
  })();

  var currentUrl = PORTFOLIO_URL;
  function generate(url){
    currentUrl=url;
    if(loading) loading.classList.remove('hidden');
    img.classList.remove('loaded');
    if(urlSpan) urlSpan.textContent=url;
    var src=API+encodeURIComponent(url);
    var tmp=new Image();
    tmp.onload=function(){img.src=src;if(loading)loading.classList.add('hidden');img.classList.add('loaded');};
    tmp.onerror=function(){if(loading)loading.classList.add('hidden');};
    tmp.src=src;
  }
  generate(currentUrl);
  if(dlBtn) dlBtn.addEventListener('click',function(){
    fetch(API+encodeURIComponent(currentUrl))
      .then(function(r){return r.blob();})
      .then(function(b){
        var u=URL.createObjectURL(b);
        var a=document.createElement('a');a.href=u;a.download='portfolio-qr.png';
        document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);
        showToast('QR Code telecharge !');
      }).catch(function(){showToast('Erreur de telechargement');});
  });
  if(cpBtn) cpBtn.addEventListener('click',function(){
    if(navigator.clipboard){
      navigator.clipboard.writeText(currentUrl).then(function(){
        showToast('Lien copie !');
        var orig=cpBtn.innerHTML;
        cpBtn.innerHTML='<i class="fas fa-check"></i> Copie !';
        setTimeout(function(){cpBtn.innerHTML=orig;},2000);
      });
    }
  });
  if(genBtn&&input) genBtn.addEventListener('click',function(){
    var url=input.value.trim();if(!url) return;
    try{new URL(url);generate(url);}
    catch(e){input.style.borderColor='#e63946';setTimeout(function(){input.style.borderColor='';},2000);}
  });
  if(input) input.addEventListener('keydown',function(e){if(e.key==='Enter'&&genBtn)genBtn.click();});
})();

/* 13. CONTACT FORM */
(function(){
  var form=document.getElementById('contactForm');
  var success=document.getElementById('formSuccess');
  if(!form) return;
  function validate(input){
    var v=input.value.trim();
    if(!v){input.classList.add('error');return false;}
    if(input.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){input.classList.add('error');return false;}
    input.classList.remove('error');return true;
  }
  form.querySelectorAll('input,textarea').forEach(function(f){
    f.addEventListener('blur',function(){validate(f);});
    f.addEventListener('input',function(){if(f.classList.contains('error'))validate(f);});
  });
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=true;
    form.querySelectorAll('[required]').forEach(function(f){if(!validate(f))ok=false;});
    if(!ok) return;
    var btn=form.querySelector('[type=submit]');
    var orig=btn.innerHTML;
    btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Envoi...';btn.disabled=true;
    setTimeout(function(){
      btn.innerHTML=orig;btn.disabled=false;form.reset();
      if(success){success.classList.add('show');setTimeout(function(){success.classList.remove('show');},4000);}
      showToast('Message envoye avec succes !');
    },1500);
  });
})();

/* 14. BACK TO TOP */
(function(){
  var btn=document.getElementById('backToTop');
  if(!btn) return;
  window.addEventListener('scroll',function(){btn.classList.toggle('show',window.scrollY>300);},{passive:true});
  btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
})();

/* 15. FOOTER YEAR */
(function(){
  var el=document.getElementById('year');
  if(el) el.textContent=new Date().getFullYear();
})();

/* 16. TOAST */
function showToast(msg){
  var t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},3000);
}

/* 17. PARTICLE CANVAS */
(function(){
  var canvas=document.getElementById('particleCanvas');
  if(!canvas) return;
  var ctx=canvas.getContext('2d');
  var W,H,particles=[];
  function resize(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight;}
  resize();
  window.addEventListener('resize',function(){resize();init();});
  function Particle(){
    this.x=Math.random()*W;this.y=Math.random()*H;
    this.vx=(Math.random()-.5)*.4;this.vy=(Math.random()-.5)*.4;
    this.r=Math.random()*1.5+.5;this.alpha=Math.random()*.4+.1;
  }
  function init(){particles=[];for(var i=0;i<80;i++)particles.push(new Particle());}
  init();
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<particles.length;i++){
      var p=particles[i];
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(230,57,70,'+p.alpha+')';ctx.fill();
      for(var j=i+1;j<particles.length;j++){
        var b=particles[j];
        var dx=p.x-b.x,dy=p.y-b.y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){
          ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle='rgba(230,57,70,'+(0.06*(1-dist/120))+')';
          ctx.lineWidth=.5;ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
