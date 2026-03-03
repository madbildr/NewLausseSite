/**
 * Entry point for index.html (the main timeline page).
 * Imports styles and wires up all modules.
 */
import '../../styles/main.css';
import { timelineData } from '../data/timeline-data.js';
import { initMenu } from '../modules/menu.js';
import { initBackToTop } from '../modules/back-to-top.js';
import { initKeyboard } from '../modules/keyboard.js';
import { initPageTransitions } from '../modules/page-transitions.js';
import { initThemeToggle } from '../modules/theme-toggle.js';
import { initPlayer } from '../modules/player.js';
import { initModals } from '../modules/modals.js';
import { initTimeline } from '../modules/timeline.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  const player = initPlayer(timelineData);
  const modals = initModals(timelineData);
  initTimeline(timelineData, {
    handleTrackClick: player.handleTrackClick,
    showInfoModal: modals.showInfoModal,
    showLyricsModal: modals.showLyricsModal,
  });

  // Sidebar lyrics button
  const playerLyricsBtn = document.getElementById('player-lyrics-btn');
  if (playerLyricsBtn) {
    playerLyricsBtn.addEventListener('click', () => {
      const idx = player.getCurrentIndex();
      if (idx !== null) {
        if (timelineData[idx].lyrics && timelineData[idx].lyrics.length) {
          modals.showLyricsModal(idx);
        } else {
          modals.showInfoModal(idx);
        }
      }
    });
  }
  initBackToTop();
  initKeyboard();
  initPageTransitions();
  initThemeToggle();

  // Stats bar
  const statsBar = document.getElementById('stats-bar');
  if (statsBar) {
    const songs = timelineData.filter(i => i.type === 'song');
    const eras = timelineData.filter(i => i.type === 'header');
    const withLyrics = songs.filter(i => i.lyrics && i.lyrics.length > 0);
    const years = new Set(songs.map(i => i.year ? i.year.match(/\\d{4}/)?.[0] : null).filter(Boolean));
    const yearSpan = years.size > 0 ? `${Math.min(...years)}\u2013${Math.max(...years)}` : '';
    statsBar.innerHTML = `
      <div class="stat-item"><span class="stat-num">${songs.length}</span><span class="stat-label">Tracks</span></div>
      <div class="stat-item"><span class="stat-num">${eras.length}</span><span class="stat-label">Eras</span></div>
      <div class="stat-item"><span class="stat-num">${withLyrics.length}</span><span class="stat-label">w/ Lyrics</span></div>
      <div class="stat-item"><span class="stat-num">${yearSpan}</span><span class="stat-label">Years Active</span></div>
    `;
  }

  // Random Track button — pick a random song, play it, and open lyrics
  const randomBtn = document.getElementById('random-track-btn');
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      const playable = timelineData
        .map((item, i) => (item.type === 'song' && item.audio) ? i : -1)
        .filter(i => i !== -1);
      if (!playable.length) return;
      const randomIndex = playable[Math.floor(Math.random() * playable.length)];
      player.handleTrackClick(randomIndex);
      // Small delay to let the player load, then open lyrics modal
      setTimeout(() => {
        if (timelineData[randomIndex].lyrics && timelineData[randomIndex].lyrics.length) {
          modals.showLyricsModal(randomIndex);
        } else {
          modals.showInfoModal(randomIndex);
        }
      }, 300);
    });
  }
});
