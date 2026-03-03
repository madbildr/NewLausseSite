/**
 * Keyboard shortcuts module.
 * Space = play/pause, M = mute/unmute
 */
export function initKeyboard() {
  const audio = document.getElementById('player-audio');
  if (!audio) return;

  // Show toast the first time a shortcut is used
  let toastShown = localStorage.getItem('kbShortcutsShown');

  function showToast(msg) {
    if (toastShown) return;
    toastShown = true;
    localStorage.setItem('kbShortcutsShown', 'true');
    const toast = document.createElement('div');
    toast.className = 'kb-toast';
    toast.innerHTML = `<strong>Keyboard shortcuts:</strong> Space = play/pause &bull; M = mute`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  document.addEventListener('keydown', (e) => {
    // Don't hijack when user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (audio.src && audio.src !== window.location.href) {
        if (audio.paused) audio.play();
        else audio.pause();
        showToast();
      }
    }

    if (e.key === 'm' || e.key === 'M') {
      audio.muted = !audio.muted;
      showToast();
    }
  });
}
