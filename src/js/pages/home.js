/**
 * Entry point for index.html (the main timeline page).
 * Imports styles and wires up all modules.
 */
import '../../styles/main.css';
import { timelineData } from '../data/timeline-data.js';
import { initMenu } from '../modules/menu.js';
import { initBackToTop } from '../modules/back-to-top.js';
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
  initBackToTop();
});
