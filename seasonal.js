/* ============================================================
   EYE FOCUS STUDIO — SEASONAL THEME
   ============================================================
   Detects today's date against SEASONAL_DATES (set in data.js)
   and, if we're within range of a festival, adds a body class
   and injects a small decorative effect:

     season-vesak      -> warm lantern glow, floating lantern
     season-poson       -> warm lantern glow, floating lantern
     season-avurudu     -> sun glow + soft rays
     season-christmas   -> falling snow

   Nothing renders outside these windows — the rest of the year
   the site looks exactly as it always does.
   ============================================================ */

(function(){

  if (typeof SEASONAL_DATES === 'undefined') return;

  function isWithinRange(today, cfg){
    if (!cfg) return false;
    const span = cfg.span || 0;
    // Check against the target date in the previous, current, and next
    // year so windows spanning a New Year's boundary (e.g. Christmas
    // Dec 25 + 7 days into January) still match correctly.
    for (const yearOffset of [-1, 0, 1]){
      const year = today.getFullYear() + yearOffset;
      const target = new Date(year, cfg.month - 1, cfg.day);
      const start = new Date(target); start.setDate(start.getDate() - span);
      const end = new Date(target); end.setDate(end.getDate() + span);
      if (today >= start && today <= end) return true;
    }
    return false;
  }

  const today = new Date();
  today.setHours(0,0,0,0);

  // Priority order matters if windows ever overlap.
  const order = ['christmas', 'avurudu', 'vesak', 'poson'];
  let active = null;
  for (const key of order){
    if (isWithinRange(today, SEASONAL_DATES[key])){
      active = key;
      break;
    }
  }

  if (!active) return;

  document.documentElement.classList.add('season-' + active);

  const layer = document.createElement('div');
  layer.className = 'seasonal-layer';
  layer.setAttribute('aria-hidden', 'true');

  if (active === 'christmas'){
    layer.classList.add('seasonal-snow');
    const flakeCount = window.innerWidth < 640 ? 28 : 50;
    for (let i = 0; i < flakeCount; i++){
      const flake = document.createElement('span');
      flake.className = 'snowflake';
      const size = 3 + Math.random() * 5;
      flake.style.left = Math.random() * 100 + 'vw';
      flake.style.width = size + 'px';
      flake.style.height = size + 'px';
      flake.style.animationDuration = (8 + Math.random() * 10) + 's';
      flake.style.animationDelay = (Math.random() * -18) + 's';
      flake.style.opacity = 0.35 + Math.random() * 0.55;
      layer.appendChild(flake);
    }
  }

  if (active === 'vesak' || active === 'poson'){
    layer.classList.add('seasonal-lantern');
    const lanternWrap = document.createElement('div');
    lanternWrap.className = 'lantern-wrap';
    lanternWrap.innerHTML = `
      <span class="lantern-glow"></span>
      <svg viewBox="0 0 64 100" class="lantern-svg">
        <line x1="32" y1="0" x2="32" y2="14" stroke="rgba(232,227,218,0.35)" stroke-width="1"/>
        <path d="M16 18 L48 18 L44 30 L20 30 Z" fill="#C9622B" opacity="0.9"/>
        <rect x="14" y="30" width="36" height="42" rx="3" fill="#E08A52"/>
        <path d="M14 30 L50 30 L50 36 L14 36 Z" fill="#C9622B" opacity="0.6"/>
        <path d="M14 50 L50 50 L50 56 L14 56 Z" fill="#C9622B" opacity="0.6"/>
        <path d="M20 72 L44 72 L48 84 L16 84 Z" fill="#C9622B" opacity="0.9"/>
        <line x1="32" y1="84" x2="32" y2="96" stroke="rgba(232,227,218,0.3)" stroke-width="1"/>
        <circle cx="32" cy="52" r="20" fill="#F3B26B" opacity="0.18"/>
      </svg>
    `;
    layer.appendChild(lanternWrap);

    const lanternWrap2 = lanternWrap.cloneNode(true);
    lanternWrap2.classList.add('lantern-wrap-2');
    layer.appendChild(lanternWrap2);
  }

  if (active === 'avurudu'){
    layer.classList.add('seasonal-avurudu');
    const sun = document.createElement('div');
    sun.className = 'avurudu-sun';
    sun.innerHTML = `
      <svg viewBox="0 0 200 200" class="avurudu-sun-svg">
        <circle cx="100" cy="100" r="38" fill="#F3B26B"/>
        <g stroke="#F3B26B" stroke-width="4" stroke-linecap="round" opacity="0.75">
          <line x1="100" y1="20" x2="100" y2="42"/>
          <line x1="100" y1="158" x2="100" y2="180"/>
          <line x1="20" y1="100" x2="42" y2="100"/>
          <line x1="158" y1="100" x2="180" y2="100"/>
          <line x1="44" y1="44" x2="60" y2="60"/>
          <line x1="140" y1="140" x2="156" y2="156"/>
          <line x1="156" y1="44" x2="140" y2="60"/>
          <line x1="60" y1="140" x2="44" y2="156"/>
        </g>
      </svg>
    `;
    layer.appendChild(sun);
  }

  document.body.appendChild(layer);

})();
