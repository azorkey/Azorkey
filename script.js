// ---------- Golden particle field ----------
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const count = Math.min(90, Math.floor(canvas.width * canvas.height / 14000));
  particles = Array.from({ length: count }, () => newParticle());
}

function newParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.2 + 0.6,
    vx: (Math.random() - 0.5) * 0.4,
    vy: -Math.random() * 0.6 - 0.2,
    a: Math.random() * 0.6 + 0.2,
    t: Math.random() * Math.PI * 2
  };
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx + Math.sin(p.t) * 0.3;
    p.y += p.vy;
    p.t += 0.01;
    if (p.y < -10) {
      Object.assign(p, newParticle(), { y: canvas.height + 10 });
    }
    const glow = 0.5 + Math.sin(p.t * 2) * 0.5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.shadowBlur = 12;
    ctx.shadowColor = 'rgba(246,226,122,0.9)';
    ctx.fillStyle = `rgba(246,214,100,${p.a * (0.5 + glow * 0.5)})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  drawParticles();
}

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.1 + 's';
  observer.observe(el);
});

// ---------- Mobile menu ----------
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.innerHTML = nav.classList.contains('open') ? '&times;' : '&#9776;';
});

nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.innerHTML = '&#9776;';
  });
});

// ---------- Cart ----------
let cartCount = 0;
const toastEl = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    toastEl.textContent = btn.dataset.name + ' added to cart';
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2000);
  });
});
