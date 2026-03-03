/**
 * Entry point for the-mocking-stars.html (album page).
 */
import '../../styles/main.css';
import { initMenu } from '../modules/menu.js';
import { initBackToTop } from '../modules/back-to-top.js';
import { initPageTransitions } from '../modules/page-transitions.js';
import { initThemeToggle } from '../modules/theme-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initPageTransitions();
  initThemeToggle();

  // Lyrics accordion toggle
  const lyricItems = document.querySelectorAll('.song-lyric-item');
  lyricItems.forEach(item => {
    const title = item.querySelector('.song-title-toggle');
    if (title) {
      title.addEventListener('click', () => {
        lyricItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('open')) {
            otherItem.classList.remove('open');
          }
        });
        item.classList.toggle('open');
      });
    }
  });

  initBackToTop();
});
