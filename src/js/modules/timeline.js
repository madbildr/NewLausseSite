import { isFavourite, toggleFavourite, getFavouriteIndices } from './favourites.js';

/**
 * Timeline rendering module — builds the timeline DOM, handles search & filtering.
 */
export function initTimeline(timelineData, { handleTrackClick, showInfoModal, showLyricsModal }) {
  const timelineContainer = document.getElementById('timeline-container');
  const searchInput = document.getElementById('timeline-search');
  const filterChipsContainer = document.getElementById('filter-chips');
  let activeEraFilter = null;
  let showFavouritesOnly = false;

  // Build era filter chips
  if (filterChipsContainer) {
    const eras = timelineData.filter(item => item.type === 'header');
    // "All" chip
    const allChip = document.createElement('button');
    allChip.className = 'filter-chip active';
    allChip.textContent = 'All';
    allChip.addEventListener('click', () => {
      activeEraFilter = null;
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      allChip.classList.add('active');
      applyFilters();
    });
    filterChipsContainer.appendChild(allChip);

    // Favourites chip
    const favChip = document.createElement('button');
    favChip.className = 'filter-chip filter-chip--fav';
    favChip.innerHTML = '❤ Favourites';
    favChip.addEventListener('click', () => {
      showFavouritesOnly = !showFavouritesOnly;
      if (showFavouritesOnly) {
        activeEraFilter = null;
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        favChip.classList.add('active');
      } else {
        favChip.classList.remove('active');
        allChip.classList.add('active');
      }
      applyFilters();
    });
    filterChipsContainer.appendChild(favChip);

    eras.forEach(era => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip';
      // Shorten label for display
      chip.textContent = era.title.replace(/^The\s+/, '').replace(/\s+Era$/, '');
      chip.addEventListener('click', () => {
        activeEraFilter = era.title;
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        applyFilters();
      });
      filterChipsContainer.appendChild(chip);
    });
  }

  function applyFilters() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let filtered = timelineData;

    // Era filter
    if (activeEraFilter) {
      const eraIndex = timelineData.findIndex(item => item.type === 'header' && item.title === activeEraFilter);
      const nextEraIndex = timelineData.findIndex((item, i) => i > eraIndex && item.type === 'header');
      const end = nextEraIndex === -1 ? timelineData.length : nextEraIndex;
      filtered = [timelineData[eraIndex], ...timelineData.slice(eraIndex + 1, end)];
    }

    // Favourites filter
    if (showFavouritesOnly) {
      const favIndices = getFavouriteIndices();
      filtered = filtered.filter((item) => {
        const idx = timelineData.indexOf(item);
        return item.type === 'header' ? false : favIndices.includes(idx);
      });
    }

    // Text search
    if (searchTerm) {
      filtered = filtered.filter(item => {
        if (item.type === 'header') return false;
        return (
          item.song.toLowerCase().includes(searchTerm) ||
          item.artist.toLowerCase().includes(searchTerm) ||
          (item.year && item.year.toLowerCase().includes(searchTerm))
        );
      });
    }

    renderTimeline(filtered);
  }

  // Lazy-load image observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-image');
        observer.unobserve(img);
      }
    });
  });

  // Render the timeline from data
  function renderTimeline(dataToRender) {
    timelineContainer.innerHTML = '';
    let songCounter = 0;

    if (dataToRender.length === 0) {
      timelineContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #888;">
          <h3>No tracks found matching that search.</h3>
          <p>Try searching for a different song or artist.</p>
        </div>`;
      return;
    }

    dataToRender.forEach((item) => {
      const originalIndex = timelineData.indexOf(item);

      if (item.type === 'header') {
        const eraHeader = document.createElement('div');
        eraHeader.classList.add('era-header');
        eraHeader.innerHTML = `<h2>${item.title}</h2>`;
        timelineContainer.appendChild(eraHeader);
      } else if (item.type === 'song') {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');

        if (songCounter % 2 === 0) {
          timelineItem.classList.add('left-item');
        } else {
          timelineItem.classList.add('right-item');
        }

        timelineItem.setAttribute('data-index', originalIndex);

        timelineItem.innerHTML = `
          <div class="timeline-date">${item.year}</div>
          <div class="timeline-point"></div>
          <div class="timeline-content">
            <div class="track-display">
              <div class="album-art-circle">
                <img data-src="${item.image}" class="lazy-image" alt="Album art for ${item.song} by ${item.artist}">
                <div class="play-icon">►</div>
                <div class="pause-icon">❚❚</div>
              </div>
              <div class="track-info">
                <div class="track-title">${item.song}</div>
                <div class="track-artist">${item.artist}</div>
              </div>
            </div>
            <div class="button-group">
              <button class="fav-button ${isFavourite(originalIndex) ? 'is-fav' : ''}" aria-label="Favourite">♥</button>
              <button class="info-button">+</button>
              <button class="lyrics-button">♪</button>
            </div>
          </div>
        `;
        timelineContainer.appendChild(timelineItem);
        songCounter++;
      }
    });

    // Re-attach lazy loading
    const newLazyImages = document.querySelectorAll('.lazy-image');
    newLazyImages.forEach(img => imageObserver.observe(img));
  }

  // Search filter
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyFilters();
    });
  }

  // Event delegation for timeline interactions
  timelineContainer.addEventListener('click', (event) => {
    const target = event.target;
    const timelineItem = target.closest('.timeline-item');

    if (timelineItem) {
      const index = timelineItem.dataset.index;

      if (target.closest('.fav-button')) {
        const nowFav = toggleFavourite(index);
        const btn = target.closest('.fav-button');
        btn.classList.toggle('is-fav', nowFav);
        if (showFavouritesOnly) applyFilters();
      } else if (target.closest('.info-button')) {
        showInfoModal(index);
      } else if (target.closest('.lyrics-button')) {
        showLyricsModal(index);
      } else if (target.closest('.album-art-circle')) {
        handleTrackClick(index);
      }
    }
  });

  // Initial render
  renderTimeline(timelineData);
}
