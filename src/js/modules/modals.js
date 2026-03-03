/**
 * Modal module — info modal, lyrics modal, and welcome popup.
 */
export function initModals(timelineData) {
  const overlay = document.getElementById('modal-overlay');

  // --- Welcome Popup ---
  const welcomePopup = document.getElementById('welcome-popup');
  const closeWelcomePopupBtn = document.getElementById('close-welcome-popup-btn');

  // --- Info Modal ---
  const infoModal = document.getElementById('info-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalAlbumArt = document.getElementById('modal-album-art');
  const modalSongTitle = document.getElementById('modal-song-title');
  const modalArtistName = document.getElementById('modal-artist-name');
  const modalComment = document.getElementById('modal-comment');

  // --- Lyrics Modal ---
  const lyricsModal = document.getElementById('lyrics-modal');
  const closeLyricsModalBtn = document.getElementById('close-lyrics-modal-btn');
  const lyricsModalAlbumArt = document.getElementById('lyrics-modal-album-art');
  const lyricsModalSongTitle = document.getElementById('lyrics-modal-song-title');
  const lyricsModalArtistName = document.getElementById('lyrics-modal-artist-name');
  const modalLyricsContent = document.getElementById('modal-lyrics-content');

  function showInfoModal(index) {
    const itemData = timelineData[index];
    modalAlbumArt.src = itemData.image;
    modalSongTitle.textContent = itemData.song;
    modalArtistName.textContent = `${itemData.artist} (${itemData.year})`;
    modalComment.textContent = itemData.comment;
    overlay.classList.add('visible');
    infoModal.classList.add('visible');
  }

  function showLyricsModal(index) {
    const itemData = timelineData[index];
    lyricsModalAlbumArt.src = itemData.image;
    lyricsModalSongTitle.textContent = itemData.song;
    lyricsModalArtistName.textContent = itemData.artist;

    if (itemData.lyrics && itemData.lyrics.length > 0) {
      modalLyricsContent.textContent = itemData.lyrics.join('\n');
    } else {
      modalLyricsContent.textContent = 'No lyrics available for this track.';
    }

    overlay.classList.add('visible');
    lyricsModal.classList.add('visible');
  }

  function closeAllModals() {
    overlay.classList.remove('visible');
    infoModal.classList.remove('visible');
    lyricsModal.classList.remove('visible');
    if (welcomePopup) welcomePopup.classList.remove('visible');
  }

  // --- Welcome Popup Logic ---
  function showWelcomePopup() {
    const hasSeenWelcome = localStorage.getItem('seenWelcome');
    if (!hasSeenWelcome) {
      overlay.classList.add('visible');
      welcomePopup.classList.add('visible');
    }
  }

  if (closeWelcomePopupBtn) {
    closeWelcomePopupBtn.addEventListener('click', () => {
      closeAllModals();
      localStorage.setItem('seenWelcome', 'true');
    });
  }

  // Close button listeners
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeAllModals);
  if (closeLyricsModalBtn) closeLyricsModalBtn.addEventListener('click', closeAllModals);
  if (overlay) overlay.addEventListener('click', closeAllModals);

  // Show welcome on init
  showWelcomePopup();

  return { showInfoModal, showLyricsModal, closeAllModals };
}
