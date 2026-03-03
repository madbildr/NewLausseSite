/**
 * Shared menu toggle logic - used on every page.
 */
export function initMenu() {
  const menuButton = document.getElementById('menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }
}
