document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menu Toggle Logic (Reused from previous fix) ---
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    // --- Lyrics Toggle Accordion Logic ---
    const lyricItems = document.querySelectorAll('.song-lyric-item');

    lyricItems.forEach(item => {
        const title = item.querySelector('.song-title-toggle');
        
        title.addEventListener('click', () => {
            // Close any other open lyrics item
            lyricItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                }
            });

            // Toggle the 'open' class on the clicked item
            item.classList.toggle('open');
        });
    });

    // --- Back to Top Button Logic (Reused from script.js) ---
    const backToTopButton = document.getElementById('back-to-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});