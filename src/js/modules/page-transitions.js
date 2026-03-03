/**
 * View Transitions API — smooth cross-page fades.
 * Progressive enhancement: only runs where supported.
 */
export function initPageTransitions() {
  if (!document.startViewTransition) return;

  // Intercept internal navigation links
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;

    const url = new URL(anchor.href, window.location.origin);

    // Only for same-origin, non-external, non-hash links
    if (url.origin !== window.location.origin) return;
    if (anchor.target === '_blank') return;
    if (url.pathname === window.location.pathname) return;

    e.preventDefault();

    document.startViewTransition(() => {
      window.location.href = anchor.href;
    });
  });
}
