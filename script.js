/* ============================================================
   EYE FOCUS STUDIO — SITE SCRIPT
   ============================================================ */

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- Hero background slideshow ---------------- */
const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 1){
  let heroSlideIndex = 0;
  setInterval(() => {
    heroSlides[heroSlideIndex].classList.remove('is-active');
    heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
    heroSlides[heroSlideIndex].classList.add('is-active');
  }, 5000);
}

/* ---------------- Header scroll state ---------------- */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
}, { passive: true });

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

/* ---------------- Aperture scroll-progress ---------------- */
const blades = document.querySelectorAll('.aperture-blades .blade');
function updateAperture(){
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
  // Each blade rotates outward as progress increases, opening the iris
  const maxOpen = 26; // degrees of "opening" rotation
  blades.forEach((blade, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    blade.style.transform = `rotate(${dir * progress * maxOpen}deg) scale(${1 - progress * 0.15})`;
    blade.style.opacity = String(1 - progress * 0.55);
  });
}
window.addEventListener('scroll', updateAperture, { passive: true });
updateAperture();

/* ---------------- Scroll reveal ---------------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  // Stagger hero reveals slightly for an orchestrated entrance
  if (el.closest('.hero-content')){
    el.style.transitionDelay = `${i * 90}ms`;
  }
  revealObserver.observe(el);
});

// Failsafe: if IntersectionObserver hasn't fired for above-the-fold content
// within a tick (some browsers delay first callback), force-check immediately.
requestAnimationFrame(() => {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0){
      el.classList.add('is-visible');
    }
  });
});

/* ---------------- Animated counters ---------------- */
const counters = document.querySelectorAll('.trust-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

function animateCounter(el){
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ============================================================
   GALLERY — rendered from SITE_DATA (see data.js)
   ============================================================ */
const galleryGrid = document.getElementById('galleryGrid');
const albumTabs = document.getElementById('albumTabs');

const playIconSVG = `<svg viewBox="0 0 24 24"><path d="M5 3l16 9-16 9V3z"/></svg>`;
const zoomIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="6.5"/><line x1="14.8" y1="14.8" x2="20" y2="20"/></svg>`;

function renderGallery(){
  galleryGrid.innerHTML = SITE_DATA.photos.map((p, i) => `
    <button type="button" class="gallery-item is-shown" data-album="${p.album}" data-index="${i}" style="transition-delay:${(i % 6) * 60}ms">
      <img src="${p.image}" alt="${p.title}" loading="lazy"
           onerror="this.closest('.gallery-item').classList.add('img-fallback'); this.style.display='none';">
      <span class="gallery-overlay-icon">${zoomIconSVG}</span>
      <span class="gallery-overlay">
        <span class="gallery-overlay-album">${albumLabel(p.album)}</span>
        <span class="gallery-overlay-title">${p.title}</span>
      </span>
    </button>
  `).join('');

  // Fallback visual for placeholder images that don't exist yet
  const style = document.createElement('style');
  style.textContent = `.gallery-item.img-fallback{ background: linear-gradient(135deg, #1c1c1f, #0e0e10); display:flex; }
  .gallery-item.img-fallback::before{ content:'Add Photo'; margin:auto; font-family:'Inter'; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#5B5650; }`;
  document.head.appendChild(style);

  observeGalleryItems();
}

function albumLabel(key){
  return { wedding:'Wedding', portrait:'Portrait', event:'Event', commercial:'Commercial', kids:'Kids' }[key] || key;
}

function observeGalleryItems(){
  const items = document.querySelectorAll('.gallery-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-shown');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => obs.observe(item));
}

renderGallery();

let currentAlbumFilter = 'all';

albumTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.album-tab');
  if (!btn) return;
  albumTabs.querySelectorAll('.album-tab').forEach(t => {
    t.classList.remove('is-active');
    t.setAttribute('aria-selected', 'false');
  });
  btn.classList.add('is-active');
  btn.setAttribute('aria-selected', 'true');

  currentAlbumFilter = btn.dataset.album;
  document.querySelectorAll('.gallery-item').forEach(item => {
    const match = currentAlbumFilter === 'all' || item.dataset.album === currentAlbumFilter;
    item.classList.toggle('is-hidden', !match);
  });
});

/* ============================================================
   LIGHTBOX — keeps photo viewing on-site (no redirect to social
   media). Cycles only through photos in the currently active
   album filter, matching what the visitor sees in the grid.
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxAlbum = document.getElementById('lightboxAlbum');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCount = document.getElementById('lightboxCount');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let lightboxSet = [];   // indices (into SITE_DATA.photos) currently navigable
let lightboxPos = 0;    // position within lightboxSet

function getVisiblePhotoIndices(){
  if (currentAlbumFilter === 'all'){
    return SITE_DATA.photos.map((_, i) => i);
  }
  return SITE_DATA.photos
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.album === currentAlbumFilter)
    .map(({ i }) => i);
}

function openLightbox(photoIndex){
  lightboxSet = getVisiblePhotoIndices();
  lightboxPos = lightboxSet.indexOf(photoIndex);
  if (lightboxPos === -1) lightboxPos = 0;
  renderLightboxSlide();
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(){
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}

function renderLightboxSlide(){
  const dataIndex = lightboxSet[lightboxPos];
  const photo = SITE_DATA.photos[dataIndex];
  lightboxImg.classList.remove('is-shown');
  const swap = () => {
    lightboxImg.src = photo.image;
    lightboxImg.alt = photo.title;
    lightboxAlbum.textContent = albumLabel(photo.album);
    lightboxTitle.textContent = photo.title;
    lightboxCount.textContent = `${lightboxPos + 1} / ${lightboxSet.length}`;
    requestAnimationFrame(() => lightboxImg.classList.add('is-shown'));
  };
  // Small delay lets the fade-out finish before swapping the image
  setTimeout(swap, 120);
}

function showNext(){
  lightboxPos = (lightboxPos + 1) % lightboxSet.length;
  renderLightboxSlide();
}
function showPrev(){
  lightboxPos = (lightboxPos - 1 + lightboxSet.length) % lightboxSet.length;
  renderLightboxSlide();
}

galleryGrid.addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  openLightbox(parseInt(item.dataset.index, 10));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNext);
lightboxPrev.addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

// Basic swipe support for mobile
let touchStartX = null;
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
lightbox.addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40){
    if (dx < 0) showNext(); else showPrev();
  }
  touchStartX = null;
}, { passive: true });

/* ============================================================
   FILMS GRID — rendered from SITE_DATA
   ============================================================ */
const filmsGrid = document.getElementById('filmsGrid');

const platformLabels = { facebook: 'Facebook', youtube: 'YouTube', tiktok: 'TikTok', instagram: 'Instagram' };

function renderFilms(){
  filmsGrid.innerHTML = SITE_DATA.videos.map((v, i) => `
    <a class="film-card" href="${v.link}" target="_blank" rel="noopener" style="transition-delay:${(i % 4) * 70}ms">
      <img src="${v.thumbnail}" alt="${v.title}" loading="lazy"
           onerror="this.closest('.film-card').classList.add('img-fallback'); this.style.display='none';">
      <span class="film-play">${playIconSVG}</span>
      <span class="film-meta">
        <span class="film-platform">▶ ${platformLabels[v.platform] || v.platform}</span>
        <span class="film-title">${v.title}</span>
      </span>
    </a>
  `).join('');

  const style = document.createElement('style');
  style.textContent = `.film-card.img-fallback{ background: linear-gradient(160deg, #1c1c1f, #0e0e10); }`;
  document.head.appendChild(style);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-shown');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.film-card').forEach(item => obs.observe(item));
}

renderFilms();

/* ============================================================
   TESTIMONIALS — rendered from SITE_DATA
   ============================================================ */
const testimonialsGrid = document.getElementById('testimonialsGrid');

function renderTestimonials(){
  testimonialsGrid.innerHTML = SITE_DATA.testimonials.map((t, i) => `
    <article class="testimonial-card" style="transition-delay:${(i % 3) * 80}ms">
      <div class="testimonial-photo">
        <img src="${t.photo}" alt="${t.name}" loading="lazy">
      </div>
      <div class="testimonial-body">
        <span class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</span>
        <p class="testimonial-quote">"${t.quote}"</p>
        <span class="testimonial-name">— ${t.name}</span>
      </div>
    </article>
  `).join('');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-shown');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.testimonial-card').forEach(item => obs.observe(item));
}

renderTestimonials();

/* ---------------- Testimonial submission modal ---------------- */
const testimonialModal = document.getElementById('testimonialModal');
const openTestimonialBtn = document.getElementById('openTestimonialForm');
const closeTestimonialBtn = document.getElementById('testimonialClose');
const testimonialForm = document.getElementById('testimonialForm');

function openTestimonialModal(){
  testimonialModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeTestimonialModal(){
  testimonialModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

openTestimonialBtn.addEventListener('click', openTestimonialModal);
closeTestimonialBtn.addEventListener('click', closeTestimonialModal);
testimonialModal.addEventListener('click', (e) => {
  if (e.target === testimonialModal) closeTestimonialModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && testimonialModal.classList.contains('is-open')) closeTestimonialModal();
});

/* ---------------- Clickable star rating ---------------- */
const starButtons = document.querySelectorAll('.star-btn');
const ratingValueInput = document.getElementById('ratingValue');

function setStarRating(value){
  ratingValueInput.value = value;
  starButtons.forEach(btn => {
    btn.classList.toggle('is-filled', parseInt(btn.dataset.value, 10) <= value);
  });
}

starButtons.forEach(btn => {
  btn.addEventListener('click', () => setStarRating(parseInt(btn.dataset.value, 10)));
  btn.addEventListener('mouseenter', () => {
    const hoverValue = parseInt(btn.dataset.value, 10);
    starButtons.forEach(b => {
      b.classList.toggle('is-filled', parseInt(b.dataset.value, 10) <= hoverValue);
    });
  });
});
document.getElementById('starRatingInput').addEventListener('mouseleave', () => {
  setStarRating(parseInt(ratingValueInput.value, 10));
});

// Default to 5 stars filled when the form opens
setStarRating(5);

testimonialForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(testimonialForm);
  const name = fd.get('name') || '';
  const review = fd.get('review') || '';
  const rating = fd.get('rating') || '5';

  const subject = `New Testimonial — ${name}`;
  const body =
`Name: ${name}
Rating: ${rating} / 5

Review:
${review}`;

  const mailto = `mailto:eyefocusphotography95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

/* ============================================================
   BOOKING FORM — opens a pre-filled email (no backend needed)
   ============================================================ */
const bookingForm = document.getElementById('bookingForm');
const STUDIO_EMAIL = 'eyefocusphotography95@gmail.com';

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(bookingForm);
  const name = fd.get('name') || '';
  const phone = fd.get('phone') || '';
  const email = fd.get('email') || '';
  const eventType = fd.get('eventType') || '';
  const eventDate = fd.get('eventDate') || '';
  const location = fd.get('location') || '';
  const message = fd.get('message') || '';

  const subject = `Booking Request — ${eventType} (${name})`;
  const body =
`Name: ${name}
Phone: ${phone}
Email: ${email}
Event type: ${eventType}
Event date: ${eventDate}
Location: ${location}

Message:
${message}`;

  const mailto = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

/* ============================================================
   IMAGE PROTECTION — discourages casual right-click "Save As"
   and drag-to-desktop on portfolio/gallery photos and videos.
   Note: this is a deterrent only. No website can block a
   screenshot, so determined visitors can always capture an
   image that way — this just stops the one-click easy path.
   ============================================================ */
const PROTECTED_SELECTOR = '.gallery-item img, .lightbox-img, .film-card img, .about-photo, .hero-slide';

document.addEventListener('contextmenu', (e) => {
  if (e.target.closest(PROTECTED_SELECTOR)){
    e.preventDefault();
  }
});

document.addEventListener('dragstart', (e) => {
  if (e.target.closest(PROTECTED_SELECTOR)){
    e.preventDefault();
  }
});
