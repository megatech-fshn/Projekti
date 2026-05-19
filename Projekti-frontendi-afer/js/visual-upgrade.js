/* ═══════════════════════════════════════════════════════════════
   Telecom Albania — Visual Upgrade JS
   Safe UI-only enhancements: loader, reveal-on-scroll, pointer glow,
   ripple feedback, gentle tilt, number count-up, and page transitions.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const ready = (fn) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  };

  const reduceMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = () => window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  ready(() => {
    document.body.classList.add('tc-visual-upgrade');
    injectLoader();
    injectAmbientOrbs();
    markVisualGroups();
    initPointerBackground();
    initCardGlow();
    initRevealAnimations();
    initRippleFeedback();
    initSoftTilt();
    initCountUpNumbers();
    initChartDelays();
    initPageTransitions();
    initDynamicEnhancements();

    requestAnimationFrame(() => document.body.classList.add('tc-ready'));
  });

  function injectLoader() {
    if (reduceMotion() || document.querySelector('.tc-visual-loader')) return;

    const loader = document.createElement('div');
    loader.className = 'tc-visual-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = `
      <div class="tc-loader-card">
        <div class="tc-loader-logo">TA</div>
        <div class="tc-loader-text">Telecom Albania</div>
        <div class="tc-loader-bar"></div>
      </div>`;
    document.body.prepend(loader);

    const finish = () => {
      loader.classList.add('is-done');
      setTimeout(() => loader.remove(), 700);
    };

    if (document.readyState === 'complete') setTimeout(finish, 260);
    else window.addEventListener('load', () => setTimeout(finish, 260), { once: true });
    setTimeout(finish, 1200);
  }

  function injectAmbientOrbs() {
    if (reduceMotion() || document.querySelector('.tc-visual-orbs')) return;

    const container = document.createElement('div');
    container.className = 'tc-visual-orbs';
    container.setAttribute('aria-hidden', 'true');

    ['one', 'two', 'three'].forEach((name) => {
      const orb = document.createElement('span');
      orb.className = `tc-orb tc-orb--${name}`;
      container.appendChild(orb);
    });

    document.body.prepend(container);
  }

  function markVisualGroups() {
    document.querySelectorAll('.simple-chart-row').forEach((row, index) => {
      row.style.setProperty('--tc-chart-delay', `${Math.min(index * 70, 350)}ms`);
    });

    document.querySelectorAll('.notification-item').forEach((item) => {
      const unread = item.textContent && /pa lexuar|unread/i.test(item.textContent);
      if (unread) item.classList.add('unread');
    });
  }

  function initPointerBackground() {
    if (reduceMotion() || !finePointer()) return;

    let rafId = 0;
    let lastEvent = null;

    const update = () => {
      rafId = 0;
      if (!lastEvent) return;
      const x = Math.round((lastEvent.clientX / Math.max(window.innerWidth, 1)) * 100);
      const y = Math.round((lastEvent.clientY / Math.max(window.innerHeight, 1)) * 100);
      document.documentElement.style.setProperty('--pointer-x', `${x}%`);
      document.documentElement.style.setProperty('--pointer-y', `${y}%`);
    };

    window.addEventListener('pointermove', (event) => {
      lastEvent = event;
      if (!rafId) rafId = window.requestAnimationFrame(update);
    }, { passive: true });
  }

  function initCardGlow(root = document) {
    if (!finePointer()) return;

    const selector = [
      '.hero-card', '.feature-card', '.dashboard-card', '.auth-card', '.plan-card',
      '.timeline-card', '.search-result-card', '.mini-box', '.notification-item',
      '.store-map-wrapper', '.support-channel-btn'
    ].join(',');

    root.querySelectorAll(selector).forEach((card) => {
      if (card.dataset.visualGlowReady === 'true') return;
      card.dataset.visualGlowReady = 'true';

      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--tc-card-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--tc-card-y', `${event.clientY - rect.top}px`);
      }, { passive: true });
    });
  }

  function initRevealAnimations(root = document) {
    const selector = [
      '.hero-section h1', '.hero-section .lead', '#heroActionArea', '.hero-card',
      '.mini-stat', '.section-title', '.feature-card', '.info-panel', '.dashboard-card',
      '.auth-card', '.plan-card', '.timeline-card', '.search-result-card', '.store-map-shell',
      '.city-btn', '.support-channel-btn', '.notification-item', '.hero-bill-item',
      '.invoice-meta-item', '.mini-box', '.demo-hint', '.error-page'
    ].join(',');

    const elements = Array.from(root.querySelectorAll(selector)).filter((element) => !element.classList.contains('tc-reveal'));

    elements.forEach((element, index) => {
      element.classList.add('tc-reveal');
      if (index % 5 === 1) element.classList.add('tc-reveal-left');
      if (index % 5 === 2) element.classList.add('tc-reveal-right');
      element.style.setProperty('--tc-reveal-delay', `${Math.min(index % 8, 5) * 55}ms`);
    });

    if (reduceMotion() || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    if (!initRevealAnimations.observer) {
      initRevealAnimations.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          initRevealAnimations.observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    }

    elements.forEach((element) => initRevealAnimations.observer.observe(element));
  }

  function initRippleFeedback() {
    if (reduceMotion()) return;

    document.addEventListener('click', (event) => {
      const target = event.target.closest('.btn, .city-btn, .faq-chip, .action-btn, .support-channel-btn');
      if (!target || target.disabled) return;

      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'tc-ripple';
      ripple.style.setProperty('--tc-ripple-x', `${event.clientX - rect.left}px`);
      ripple.style.setProperty('--tc-ripple-y', `${event.clientY - rect.top}px`);
      target.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    });
  }

  function initSoftTilt(root = document) {
    if (reduceMotion() || !finePointer() || window.innerWidth < 900) return;

    root.querySelectorAll('.hero-card, .feature-card, .stat-card, .plan-card, .auth-card').forEach((card) => {
      if (card.dataset.visualTiltReady === 'true') return;
      card.dataset.visualTiltReady = 'true';

      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
        const y = (event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
        const rotateX = (-y * 3.8).toFixed(2);
        const rotateY = (x * 4.6).toFixed(2);
        card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }, { passive: true });

      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  function initCountUpNumbers(root = document) {
    if (reduceMotion()) return;

    const selector = '.stat-card h3, .mini-stat h3, .info-panel-item strong, .plan-price';
    const elements = Array.from(root.querySelectorAll(selector));

    const animate = (el) => {
      if (el.dataset.visualCounted === 'true') return;
      const original = (el.textContent || '').trim();
      if (!original || /[A-Za-z]/.test(original.replace(/ALL|GB|Mbps|TV|HD|Smart|Fast/gi, ''))) return;
      if (original.includes('/')) return;

      const match = original.match(/^([^0-9-]*)(-?[0-9][0-9.,]*)(.*)$/);
      if (!match) return;

      const prefix = match[1] || '';
      const numberText = match[2] || '';
      const suffix = match[3] || '';
      const target = Number(numberText.replace(/,/g, ''));
      if (!Number.isFinite(target) || Math.abs(target) > 100000000) return;

      const decimals = /\.[0-9]+/.test(numberText) ? Math.min((numberText.split('.')[1] || '').length, 2) : 0;
      const formatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

      el.dataset.visualCounted = 'true';
      const start = performance.now();
      const duration = 900 + Math.min(Math.abs(target) / 35, 500);

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${prefix}${formatter.format(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = original;
      };

      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      elements.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    elements.forEach((el) => observer.observe(el));
  }

  function initChartDelays(root = document) {
    root.querySelectorAll('.simple-chart-row').forEach((row, index) => {
      row.style.setProperty('--tc-chart-delay', `${Math.min(index * 80, 420)}ms`);
    });
  }

  function initPageTransitions() {
    if (reduceMotion() || document.querySelector('.tc-page-transition')) return;

    const layer = document.createElement('div');
    layer.className = 'tc-page-transition';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target && link.target !== '_self') return;
      if (link.hasAttribute('download')) return;

      const href = link.getAttribute('href') || '';
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;

      let url;
      try { url = new URL(href, window.location.href); } catch (error) { return; }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      if (url.href === window.location.href) return;

      event.preventDefault();
      layer.classList.add('is-active');
      setTimeout(() => { window.location.href = url.href; }, 180);
    });
  }

  function initDynamicEnhancements() {
    if (!('MutationObserver' in window)) return;

    let timer = 0;
    const observer = new MutationObserver((mutations) => {
      if (!mutations.some((mutation) => mutation.addedNodes && mutation.addedNodes.length)) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        initCardGlow();
        initRevealAnimations();
        initSoftTilt();
        initChartDelays();
        markVisualGroups();
      }, 90);
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
