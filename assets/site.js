// ── GA4 + COOKIE CONSENT ──
    const GA_ID = 'G-BG39YM5SN8';

    function loadGA() {
      if (window._gaLoaded) return;
      window._gaLoaded = true;
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID, { anonymize_ip: true });
    }

    function acceptCookies() {
      localStorage.setItem('covr_cookie_consent', 'accepted');
      hideBanner(); loadGA();
    }
    function declineCookies() {
      localStorage.setItem('covr_cookie_consent', 'declined');
      hideBanner();
    }
    function hideBanner() {
      const b = document.getElementById('cookie-banner');
      b.style.transform = 'translateY(100%)';
      setTimeout(() => b.style.display = 'none', 400);
    }

    window.addEventListener('DOMContentLoaded', () => {
      const consent = localStorage.getItem('covr_cookie_consent');
      if (consent === 'accepted') { loadGA(); }
      else if (!consent) {
        setTimeout(() => {
          document.getElementById('cookie-banner').classList.add('visible');
        }, 1500);
      }
    });

    // ── MOBILE MENU ──
    const hamburger   = document.getElementById('hamburger');
    const mobileMenu  = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }

    // ── WAITLIST FORM ──
    async function handleWaitlist(e) {
      e.preventDefault();
      const btn   = document.getElementById('wl-btn');
      const name  = document.getElementById('wl-name').value.trim();
      const email = document.getElementById('wl-email').value.trim();

      btn.textContent = 'Sending…';
      btn.disabled = true;

      const body = new URLSearchParams({
        'EMAIL': email, 'FIRSTNAME': name,
        'email_address_check': '', 'locale': 'en', 'html_type': 'simple'
      });

      try {
        await fetch('https://ac0771fc.sibforms.com/serve/MUIFAByY_9TWXYyARED1tY-BAvuCI9iZnmRd6wbUMQXblmzJ6USyT_buaDpfpFWP5eU7NpiYmfh6_Qke3h8agXLzslSRxWQG8gqj6sHAIlwisCEuuzWE5AIYcA9PXIowljnW5gW8LmNufUe1NC0u6fI89oCrVgh0q6Cp0NGgMyMK6YWc0ZM4ri02_OKzbyudBPJT_Hrcz9e3pewjDQ==', {
          method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString()
        });
        document.getElementById('waitlist-form').style.display = 'none';
        document.getElementById('success-msg').style.display   = 'block';
      } catch {
        btn.textContent = 'Try again';
        btn.disabled = false;
      }
    }

    // ── SCROLL ANIMATIONS ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.delay || 0;
          setTimeout(() => e.target.classList.add('visible'), parseInt(delay));
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.step, .case-card, .partner-card').forEach(el => observer.observe(el));

    // ── NOTIFY BAR ──
    // Shows once the hero scrolls away; hidden while the waitlist itself or the cookie banner is on screen.
    (function () {
      const bar  = document.getElementById('notify-bar');
      const hero = document.getElementById('hero');
      const wl   = document.getElementById('waitlist');
      if (!bar || !hero) return;
      const KEY = 'covr_notify_dismissed';
      try { if (localStorage.getItem(KEY)) return; } catch {}

      let pastHero = false, atWaitlist = false, done = false;
      const cookieOpen = () => document.getElementById('cookie-banner')?.classList.contains('visible')
                              && document.getElementById('cookie-banner').style.display !== 'none';
      function update() {
        const show = !done && pastHero && !atWaitlist && !cookieOpen();
        if (show) { bar.hidden = false; requestAnimationFrame(() => bar.classList.add('visible')); }
        else { bar.classList.remove('visible'); }
      }
      function dismiss() {
        done = true; update();
        try { localStorage.setItem(KEY, '1'); } catch {}
      }

      new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting; update(); }).observe(hero);
      if (wl) new IntersectionObserver(([e]) => { atWaitlist = e.isIntersecting; update(); }).observe(wl);
      window.addEventListener('scroll', update, { passive: true });

      bar.querySelector('.notify-bar-close').addEventListener('click', dismiss);
      bar.querySelector('.notify-bar-cta').addEventListener('click', () => { done = true; update(); });
      document.getElementById('waitlist-form')?.addEventListener('submit', dismiss);
    })();
