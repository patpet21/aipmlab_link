'use strict';
(function () {
  const languageButtons = Array.from(document.querySelectorAll('[data-lang]'));
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  function setLanguage(lang) {
    const language = lang === 'it' ? 'it' : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-it]').forEach(function (element) {
      const value = element.getAttribute('data-' + language);
      if (!value) return;
      if (element.tagName === 'H1' || (element.tagName === 'H2' && element.querySelector('em'))) {
        // Only hand-authored text attributes; no user inputs or external HTML.
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });
    languageButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === language));
    });
    try { localStorage.setItem('aipmlab-links-language', language); } catch (_) {}
  }

  languageButtons.forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.getAttribute('data-lang')); });
  });
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        toggle.focus();
      }
    });
  }
  let saved = 'en';
  try { saved = localStorage.getItem('aipmlab-links-language') || 'en'; } catch (_) {}
  setLanguage(saved);
})();
