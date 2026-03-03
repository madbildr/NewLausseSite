/**
 * Entry point for radio.html.
 * Extracted from inline <script> in radio.html.
 */
import '../../styles/main.css';
import { initMenu } from '../modules/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();

  // Elements
  const audio = document.getElementById('radio-stream');
  const playBtn = document.getElementById('radio-play-btn');
  const titleEl = document.getElementById('radio-song-title');
  const artistEl = document.getElementById('radio-artist-name');
  const artEl = document.getElementById('radio-art');
  const listenerEl = document.getElementById('listener-count');
  const volSlider = document.getElementById('radio-volume');

  const progressFill = document.getElementById('progress-fill');
  const timeElapsedEl = document.getElementById('time-elapsed');
  const timeTotalEl = document.getElementById('time-total');

  let isPlaying = false;
  let currentDuration = 0;
  let currentElapsed = 0;

  // Play Button Logic
  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = '▶';
      playBtn.classList.remove('playing');
    } else {
      const currentSrc = audio.querySelector('source').src;
      audio.src = currentSrc; // Reload to jump to live
      audio.play();
      playBtn.textContent = '❚❚';
      playBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  // Volume Logic
  volSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });

  // API Logic (Metadata + Progress)
  function updateMetadata() {
    fetch('https://radio.laussehub.co.uk/api/nowplaying/1?_=' + Date.now())
      .then(res => res.json())
      .then(data => {
        if (data.now_playing && data.now_playing.song) {
          titleEl.textContent = data.now_playing.song.title;
          artistEl.textContent = data.now_playing.song.artist;
          if (data.now_playing.song.art) {
            artEl.src = data.now_playing.song.art;
          }
        }

        if (data.listeners) {
          const count = data.listeners.unique || data.listeners.total;
          listenerEl.textContent = `👥 ${count} Locked In`;
        }

        if (data.now_playing) {
          currentElapsed = data.now_playing.elapsed;
          currentDuration = data.now_playing.duration;
          updateProgressBar();
        }
      })
      .catch(err => {
        console.log('Radio API Error:', err);
      });
  }

  function updateProgressBar() {
    const formatTime = (seconds) => {
      if (isNaN(seconds) || seconds === 0) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    timeElapsedEl.textContent = formatTime(currentElapsed);
    timeTotalEl.textContent = formatTime(currentDuration);

    if (currentDuration > 0) {
      const percent = (currentElapsed / currentDuration) * 100;
      progressFill.style.width = `${percent}%`;
    } else {
      progressFill.style.width = '0%';
    }
  }

  // Sync every 10s + initial
  setInterval(updateMetadata, 10000);
  updateMetadata();

  // Smooth local progress timer
  setInterval(() => {
    if (currentDuration > 0 && currentElapsed < currentDuration) {
      currentElapsed++;
      updateProgressBar();
    }
  }, 1000);
});
