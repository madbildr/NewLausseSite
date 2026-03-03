/**
 * Theme toggle — dark (default) / light mode.
 * Persists preference in localStorage.
 */
const STORAGE_KEY = 'lausseHubTheme';

export function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') {
    document.documentElement.classList.add('light-mode');
    toggle.textContent = '🌙';
  } else {
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '🌙' : '☀️';
  });
}
