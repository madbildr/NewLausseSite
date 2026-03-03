/**
 * Audio player module — handles the bottom sticky player.
 * Returns functions for track playback control.
 */
export function initPlayer(timelineData) {
  const bottomPlayer = document.getElementById('bottom-player');
  const playerAudio = document.getElementById('player-audio');
  const playerLinks = document.getElementById('player-links');
  const playBtn = document.getElementById('player-play-btn');
  const prevBtn = document.getElementById('player-prev-btn');
  const nextBtn = document.getElementById('player-next-btn');
  const progressRing = document.getElementById('player-progress-ring');
  const CIRCUMFERENCE = 2 * Math.PI * 29; // r=29
  let currentlyPlayingIndex = null;

  // Progress ring setup
  if (progressRing) {
    progressRing.style.strokeDasharray = CIRCUMFERENCE;
    progressRing.style.strokeDashoffset = CIRCUMFERENCE;
  }

  function handleTrackClick(index) {
    const isSameTrack = (currentlyPlayingIndex === index);
    if (isSameTrack) {
      if (playerAudio.paused) {
        playerAudio.play();
      } else {
        playerAudio.pause();
      }
    } else {
      currentlyPlayingIndex = index;
      const itemData = timelineData[index];
      playerAudio.src = itemData.audio;
      document.getElementById('player-album-art').style.backgroundImage = `url(${itemData.image})`;
      document.getElementById('player-song-title').textContent = itemData.song;
      document.getElementById('player-artist-name').textContent = itemData.artist;
      playerLinks.innerHTML = '';

      if (itemData.spotifyLink) {
        playerLinks.innerHTML += `<a href="${itemData.spotifyLink}" target="_blank" class="social-link spotify"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.193 14.122c-.22.359-.684.48-1.043.26l-3.35-2.043c-.359-.22-.48-.684-.26-1.043.22-.359.684-.48 1.043-.26l3.35 2.043c.359.22.48.684.26 1.043zm.85-2.306c-.274.444-.84.59-1.283.315l-3.84-2.35c-.444-.274-.59-.84-.315-1.283.274-.444.84-.59 1.283-.315l3.84 2.35c.444.274.59.84.315 1.283zm.13-2.923c-.332.534-1.01.713-1.544.38l-4.43-2.704c-.534-.332-.713-1.01-.38-1.544s1.01-.713 1.544-.38l4.43 2.704c.534.332.713 1.01.38 1.544z"></path></svg><span>Spotify</span></a>`;
      }
      if (itemData.soundcloudLink) {
        playerLinks.innerHTML += `<a href="${itemData.soundcloudLink}" target="_blank" class="social-link soundcloud"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.53,8.71A7.27,7.27,0,0,0,15.1,6.56V15.3a2,2,0,0,1-2,2,2,2,0,0,1-2-2,2,2,0,0,1-2-2,1,1,0,0,0,1-1V9.56a4.4,4.4,0,0,0-4.4-4.4,4.36,4.36,0,0,0-4.07,2.83,1,1,0,0,0,1,1.17,1,1,0,0,0,1-.8,2.4,2.4,0,0,1,2.1-1.2,2.35,2.35,0,0,1,2.4,2.4V15.3a4,4,0,0,0,4,4,4,4,0,0,0,4-4,1,1,0,0,0-1-1,1,1,0,0,0-1,1,2,2,0,0,1-2,2,2,2,0,0,1-2-2V8.92a1,1,0,0,0-1-1V6.56A5.27,5.27,0,0,1,21.5,8a1,1,0,0,0,1.05.14A1,1,0,0,0,21.53,8.71Z"></path></svg><span>SoundCloud</span></a>`;
      }
      bottomPlayer.classList.add('visible');
      playerAudio.play();
    }
  }

  // Play/pause visual feedback
  playerAudio.addEventListener('play', () => {
    if (playBtn) playBtn.textContent = '⏸';
    document.querySelectorAll('.album-art-circle').forEach(c => c.classList.remove('is-playing', 'spinning'));
    const currentCircle = document.querySelector(`.timeline-item[data-index='${currentlyPlayingIndex}'] .album-art-circle`);
    if (currentCircle) currentCircle.classList.add('is-playing', 'spinning');
  });

  playerAudio.addEventListener('pause', () => {
    if (playBtn) playBtn.textContent = '▶';
    const currentCircle = document.querySelector(`.timeline-item[data-index='${currentlyPlayingIndex}'] .album-art-circle`);
    if (currentCircle) currentCircle.classList.remove('is-playing', 'spinning');
  });

  // Progress ring update
  playerAudio.addEventListener('timeupdate', () => {
    if (progressRing && playerAudio.duration) {
      const pct = playerAudio.currentTime / playerAudio.duration;
      progressRing.style.strokeDashoffset = CIRCUMFERENCE * (1 - pct);
    }
  });

  // Play/pause button
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (playerAudio.paused) playerAudio.play();
      else playerAudio.pause();
    });
  }

  // Prev/Next (skip through timeline items that have audio)
  function getPlayableIndices() {
    return timelineData
      .map((item, i) => item.audio ? i : -1)
      .filter(i => i !== -1);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const playable = getPlayableIndices();
      if (!playable.length || currentlyPlayingIndex === null) return;
      const pos = playable.indexOf(currentlyPlayingIndex);
      const prev = pos > 0 ? playable[pos - 1] : playable[playable.length - 1];
      handleTrackClick(prev);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const playable = getPlayableIndices();
      if (!playable.length || currentlyPlayingIndex === null) return;
      const pos = playable.indexOf(currentlyPlayingIndex);
      const next = pos < playable.length - 1 ? playable[pos + 1] : playable[0];
      handleTrackClick(next);
    });
  }

  // Auto-play next track when current ends
  playerAudio.addEventListener('ended', () => {
    const playable = getPlayableIndices();
    if (!playable.length || currentlyPlayingIndex === null) return;
    const pos = playable.indexOf(currentlyPlayingIndex);
    const next = pos < playable.length - 1 ? playable[pos + 1] : playable[0];
    handleTrackClick(next);
  });

  return { handleTrackClick, getCurrentIndex: () => currentlyPlayingIndex };
}
