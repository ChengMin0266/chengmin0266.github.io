(function () {
  const STORAGE_KEY = 'site-lang';

  function detectDefault() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;
   return 'en';
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
    document.querySelectorAll('[data-en]').forEach((el) => {
      const text = el.getAttribute('data-' + lang);
      if (text != null) el.textContent = text;
    });
    document.querySelectorAll('.lang-toggle [data-lang]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-toggle [data-lang]').forEach((b) => {
      b.addEventListener('click', () => applyLang(b.dataset.lang));
    });
    applyLang(detectDefault());
  });
})();
