document.addEventListener('DOMContentLoaded', () => {
    // ===================================================================
    // STEP 1: DEFINE YOUR TIMELINE DATA
    // ===================================================================
    const timelineData = [
        {
            type: 'header',
            title: 'The Blu Man & Don Papa 海賊 Era'
        },
        {
            type: 'song',
            year: "8th April 2015",
            artist: "Blu Man",
            song: "Scum scum scum",
            image: "assets/scum_scum_scum.jpg",
            audio: "assets/scum_scum_scum.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/bluman2/i-burnt-my-kitchen"
        },
        {
            type: 'song',
            year: "9th April 2015",
            artist: "Blu Man",
            song: "Le Soir Bleu",
            image: "assets/le_soir_bleu.jpg",
            audio: "assets/le_soir_bleu.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/bluman2/le-soir-bleu"
        },
        {
            type: 'song',
            year: "27th April 2015",
            artist: "Don Papa 海賊",
            song: "タイトルなし、ありません日本語",
            image: "assets/タイトルなしありません日本語.jpg",
            audio: "assets/タイトルなしありません日本語.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/z4i4ygdlpshk"
        },
        {
            type: 'song',
            year: "13th July 2015",
            artist: "Don Papa 海賊",
            song: "ｉ'ｖｅ  ｍｉｓｓ",
            image: "assets/ｉｖｅ_ｍｉｓｓ.jpg",
            audio: "assets/ｉｖｅ_ｍｉｓｓ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/ive-missed-you-bitch"
        },
        {
            type: 'song',
            year: "6th August 2015",
            artist: "Don Papa 海賊",
            song: "ｐｕｐｐｙ  ｌｏｖｅ",
            image: "assets/ｐｕｐｐｙ_ｌｏｖｅ.jpg",
            audio: "assets/ｐｕｐｐｙ_ｌｏｖｅ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/puppy-love"
        },
        {
            type: 'song',
            year: "23rd September 2015",
            artist: "Don Papa 海賊",
            song: "bａｍｂｏｏ",
            image: "assets/bａｍｂｏｏ.jpg",
            audio: "assets/bａｍｂｏｏ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/bamboo"
        },
        {
            type: 'song',
            year: "12th October 2015",
            artist: "Don Papa 海賊",
            song: "青 ｋａｎｙｅ歌",
            image: "assets/青_ｋａｎｙｅ歌.jpg",
            audio: "assets/青_ｋａｎｙｅ歌.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/kanye"
        },
        {
            type: 'song',
            year: "31st December 2015",
            artist: "ayo im sleep tho",
            song: "Clutch Kid - w  i  n  t  e  r  [prod. Don Papa 海賊]",
            image: "assets/clutch_kid_w_i_n_t_e_r_prod_don_papa_海賊_click_buy_to_download_its_free.jpg",
            audio: "assets/clutch_kid_w_i_n_t_e_r_prod_don_papa_海賊_click_buy_to_download_its_free.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/ayoimsleeptho/clutch-kid-w-i-n-t-e-r-prod-don-papa"
        },
        {
            type: 'song',
            year: "4th January 2016",
            artist: "Don Papa 海賊",
            song: "tetsuo's nightmare",
            image: "assets/tetsuos_nightmare.jpg",
            audio: "assets/tetsuos_nightmare.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/tetsuos-nightmare"
        },
        {
            type: 'song',
            year: "13th January 2016",
            artist: "Don Papa 海賊",
            song: "Romance Dawn [tape]",
            image: "assets/romance_dawn_tape.jpg",
            audio: "assets/romance_dawn_tape.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/romance-dawn-tape"
        },
        {
            type: 'song',
            year: "22nd February 2016",
            artist: "Don Papa 海賊",
            song: "Lotus Blossom [tape 2]",
            image: "assets/lotus_blossom_tape_2.jpg",
            audio: "assets/lotus_blossom_tape_2.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/lotus-blossom-tape-2"
        },
        {
            type: 'song',
            year: "25th April 2016",
            artist: "Don Papa 海賊",
            song: "Roanapur [Tape 3]",
            image: "assets/roanapur_tape_3.jpg",
            audio: "assets/roanapur_tape_3.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/lemonade-tape-3"
        },
        {
            type: 'song',
            year: "16th May 2016",
            artist: "Don Papa 海賊",
            song: "﻿ｍｏｎｓｏｏｎ",
            image: "assets/ｍｏｎｓｏｏｎ.jpg",
            audio: "assets/ｍｏｎｓｏｏｎ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/monsoon"
        },
        {
            type: 'song',
            year: "22nd May 2016",
            artist: "Don Papa 海賊",
            song: "ｄｏｒｏｔｈｙ",
            image: "assets/ｄｏｒｏｔｈｙ.jpg",
            audio: "assets/ｄｏｒｏｔｈｙ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/dorothy"
        },
        {
            type: 'song',
            year: "31st May 2016",
            artist: "Don Papa 海賊",
            song: "﻿ｖｉｃｅ ｃｉｔｙ",
            image: "assets/ｖｉｃｅ_ｃｉｔｙ.jpg",
            audio: "assets/ｖｉｃｅ_ｃｉｔｙ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/vice-city"
        },
        {
            type: 'song',
            year: "11th June 2016",
            artist: "front-left",
            song: "Wurlitzer Ready",
            image: "assets/wurlitzer_ready.jpg",
            audio: "assets/wurlitzer_ready.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/front-leftmusic/wurlitzer-ready"
        },
        {
            type: 'song',
            year: "12th June 2016",
            artist: "Don Papa 海賊",
            song: "ｐｒｉｍｒｏｓｅ",
            image: "assets/ｐｒｉｍｒｏｓｅ.jpg",
            audio: "assets/ｐｒｉｍｒｏｓｅ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/primrose"
        },
        {
            type: 'header',
            title: 'The Lausse The Cat Era'
        },
        {
            type: 'song',
            year: "24th June 2016",
            artist: "LAUSSE THE CAT",
            song: "go back to",
            image: "assets/go_back_to.jpg",
            audio: "assets/go_back_to.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/go-back-to"
        },
        {
            type: 'song',
            year: "17th July 2016",
            artist: "LAUSSE THE CAT",
            song: "alone together",
            image: "assets/alone_together.jpg",
            audio: "assets/alone_together.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/alone-together"
        },
        {
            type: 'song',
            year: "9th September 2016",
            artist: "Don Papa 海賊",
            song: "ｍｅｒｉｃａｎ  ｂｗｏｉ",
            image: "assets/ｍｅｒｉｃａｎ_ｂｗｏｉ.jpg",
            audio: "assets/ｍｅｒｉｃａｎ_ｂｗｏｉ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/merican-bwoi"
        },
        {
            type: 'song',
            year: "10th October 2016",
            artist: "LAUSSE THE CAT",
            song: "wag1 pelican",
            image: "assets/wag1_pelican.jpg",
            audio: "assets/wag1_pelican.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/wag1-pelican"
        },
        {
            type: 'song',
            year: "8th November 2016",
            artist: "LAUSSE THE CAT",
            song: "kitten blues",
            image: "assets/kitten_blues.jpg",
            audio: "assets/kitten_blues.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/kitten-blues"
        },
        {
            type: 'song',
            year: "26th November 2016",
            artist: "alejandringui",
            song: "Don Papa & Lausse The Cat - o o l o n g",
            image: "assets/don_papa_lausse_the_cat_o_o_l_o_n_g.jpg",
            audio: "assets/don_papa_lausse_the_cat_o_o_l_o_n_g.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/xrafaelalex/o-o-l-o-n-g"
        },
        {
            type: 'song',
            year: "7th December 2016",
            artist: "front-left",
            song: "Ca Va Bien (ft. lausse the cat)",
            image: "assets/ca_va_bien_ft_lausse_the_cat.jpg",
            audio: "assets/ca_va_bien_ft_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/front-leftmusic/ca-va-bien-ft-lausse-the-cat"
        },
        {
            type: 'song',
            year: "7th December 2016",
            artist: "TAMBALA",
            song: "broke n' tokin (ft Don Papa 海賊)",
            image: "assets/broke_n_tokin_ft_don_papa_海賊.jpg",
            audio: "assets/broke_n_tokin_ft_don_papa_海賊.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/tambalaproducer/broke-n-tokin-ft-don-papa"
        },
        {
            type: 'song',
            year: "14th January 2017",
            artist: "LAUSSE THE CAT",
            song: "the cat who came for tea",
            image: "assets/the_cat_who_came_for_tea.jpg",
            audio: "assets/the_cat_who_came_for_tea.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/the-cat-who-came-for-tea"
        },
        {
            type: 'song',
            year: "26th January 2017",
            artist: "LAUSSE THE CAT",
            song: "the cat and la lune",
            image: "assets/the_cat_and_la_lune.jpg",
            audio: "assets/the_cat_and_la_lune.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/the-cat-and-la-lune"
        },
        {
            type: 'song',
            year: "26th January 2017",
            artist: "Blaiz & Vaga",
            song: "Blaiz x Don Papa 海賊 - Amor #HorsSerie",
            image: "assets/blaiz_x_don_papa_海賊_amor_horsserie.jpg",
            audio: "assets/blaiz_x_don_papa_海賊_amor_horsserie.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz_vaga/blaiz-amor-don-papa"
        },
        {
            type: 'song',
            year: "12th February 2017",
            artist: "LAUSSE THE CAT",
            song: "zinfandel rosé",
            image: "assets/zinfandel_rosé.jpg",
            audio: "assets/zinfandel_rosé.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/zinfandel-rose"
        },
        {
            type: 'song',
            year: "13th February 2017",
            artist: "TAMBALA",
            song: "captain morgan's tale (ft. lausse the cat)",
            image: "assets/captain_morgans_tale_ft_lausse_the_cat.jpg",
            audio: "assets/captain_morgans_tale_ft_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/tambalaproducer/captain-morgans-tale-ft-lausse-the-cat"
        },
        {
            type: 'song',
            year: "8th March 2017",
            artist: "Ross Wilson",
            song: "BlossomHillGang (ft. Lausse The Cat)",
            image: "assets/blossomhillgang_ft_lausse_the_cat.jpg",
            audio: "assets/blossomhillgang_ft_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/rosswalterwilson/blossomhillgang-ft-lausse-the-cat"
        },
        {
            type: 'song',
            year: "1st May 2017",
            artist: "Blaiz & Vaga",
            song: "Blaiz x Don Papa 海賊 - Lune #HorsSerie2",
            image: "assets/blaiz_x_don_papa_海賊_lune_horsserie2.jpg",
            audio: "assets/blaiz_x_don_papa_海賊_lune_horsserie2.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz_vaga/blaiz-x-don-papa-lune-horsserie2"
        },
        {
            type: 'song',
            year: "29th September 2017",
            artist: "B-ahwe",
            song: "Blue print - B-ahwe (prod. Lausse the Cat)",
            image: "assets/blue_print_b_ahwe_prod_lausse_the_cat.jpg",
            audio: "assets/blue_print_b_ahwe_prod_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/b-ahwe/blue-print-beth-prod-lausse-the-cat"
        },
        {
            type: 'song',
            year: "18th November 2017",
            artist: "illiterate.",
            song: "catching moths feat. lausse the cat",
            image: "assets/catching_moths_feat_lausse_the_cat.jpg",
            audio: "assets/catching_moths_feat_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/illiteratebeats/catching-moths-feat-lausse-the-cat"
        },
        {
            type: 'header',
            title: 'The Album + Mainstream'
        },
        {
            type: 'song',
            year: "22nd March 2018",
            artist: "LAUSSE THE CAT",
            song: "TOY'S STORY",
            image: "assets/3_toys_story.jpg",
            audio: "assets/3_toys_story.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/3-toys-story"
        },
        {
            type: 'song',
            year: "1st May 2018",
            artist: "LAUSSE THE CAT",
            song: "BELLE BOUTEILLE",
            image: "assets/6_belle_bouteille.jpg",
            audio: "assets/6_belle_bouteille.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/6-belle-bouteille"
        },
        {
            type: 'song',
            year: "20th June 2018",
            artist: "LAUSSE THE CAT",
            song: "The Girl, The Cat And The Tree",
            image: "assets/the_girl_the_cat_and_the_tree.jpg",
            audio: "assets/the_girl_the_cat_and_the_tree.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/the-girl-the-cat-and-the-tree-out-now-on-spotify-etc"
        },
        {
            type: 'song',
            year: "6th July 2018",
            artist: "Nix Northwest",
            song: "Waves (Feat. LAUSSE THE CAT)",
            image: "assets/waves_feat_lausse_the_cat.jpg",
            audio: "assets/waves_feat_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/nixnw/waves-feat-lausse-the-cat"
        },
        {
            type: 'song',
            year: "13th July 2018",
            artist: "LAUSSE THE CAT",
            song: "Ciao Bella",
            image: "assets/ciao_bella.jpg",
            audio: "assets/ciao_bella.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/ciao-bella"
        },
        {
            type: 'song',
            year: "11th September 2018",
            artist: "LAUSSE THE CAT",
            song: "Redstripe Rhapsody",
            image: "assets/redstripe_rhapsody.jpg",
            audio: "assets/redstripe_rhapsody.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/redstripe-rhapsody"
        },
        {
            type: 'song',
            year: "28th September 2018",
            artist: "LAUSSE THE CAT",
            song: "Coco Channel ft. B-ahwe",
            image: "assets/coco_channel_ft_b_ahwe.jpg",
            audio: "assets/coco_channel_ft_b_ahwe.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/coco-channel-ft-b-ahwe"
        },
        {
            type: 'song',
            year: "7th October 2018",
            artist: "apltn",
            song: "apltn x MakOto - If It Was Easy(feat. B-ahwe & LAUSSE THE CAT)",
            image: "assets/apltn_x_makoto_if_it_was_easyfeat_b_ahwe_lausse_the_cat.jpg",
            audio: "assets/apltn_x_makoto_if_it_was_easyfeat_b_ahwe_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/apltn/if-it-was-easyfeat-b-ahwe-lausse-the-cat"
        },
        {
            type: 'header',
            title: 'Recent Features & Singles'
        },
        {
            type: 'song',
            year: "16th January 2020",
            artist: "calvin",
            song: "Lausse The Cat - Intro",
            image: "assets/lausse_the_cat_intro.jpg",
            audio: "assets/lausse_the_cat_intro.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/calvinvantsis/lausse-the-cat-intro"
        },
        {
            type: 'song',
            year: "30th May 2020",
            artist: "Blaiz",
            song: "Calin (feat. LAUSSE THE CAT)",
            image: "assets/calin_feat_lausse_the_cat.jpg",
            audio: "assets/calin_feat_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz-scmusic/calin-feat-lausse-the-cat"
        },
        {
            type: 'song',
            year: "30th June 2021",
            artist: "Nix Northwest",
            song: "When It Rains (feat. B-ahwe & LAUSSE THE CAT)",
            image: "assets/when_it_rains_feat_b_ahwe_lausse_the_cat.jpg",
            audio: "assets/when_it_rains_feat_b_ahwe_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/nixnorthwest/when-it-rains-feat-b-ahwe"
        },
        {
            type: 'song',
            year: "23rd August 2021",
            artist: "Max limbrick",
            song: "Lausse The Cat - Park bench (rare)",
            image: "assets/lausse_the_cat_park_bench_rare.jpg",
            audio: "assets/lausse_the_cat_park_bench_rare.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/max-limbrick/untitled"
        },
        {
            type: 'song',
            year: "12th January 2022",
            artist: "Blaiz",
            song: "Môme",
            image: "assets/môme.jpg",
            audio: "assets/môme.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz18765/mome"
        }
    ];

    // ===================================================================
    // STEP 2: BUILD THE TIMELINE HTML FROM THE DATA
    // ===================================================================
    const timelineContainer = document.getElementById('timeline-container');
    let songCounter = 0; // Counter for songs only

    timelineData.forEach((item, index) => {
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

            timelineItem.setAttribute('data-index', index); 
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
                    <button class="info-button">+</button>
                </div>
            `;
            timelineContainer.appendChild(timelineItem);
            songCounter++;
        }
    });

    // ===================================================================
    // STEP 3: SET UP ALL INTERACTIVE FEATURES
    // ===================================================================
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
    });

    const overlay = document.getElementById('modal-overlay');
    const infoModal = document.getElementById('info-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const bottomPlayer = document.getElementById('bottom-player');
    const playerAudio = document.getElementById('player-audio');
    const playerLinks = document.getElementById('player-links');
    let currentlyPlayingIndex = null;

    function handleTrackClick(index) {
        const isSameTrack = (currentlyPlayingIndex === index);
        if (isSameTrack) {
            if (playerAudio.paused) { playerAudio.play(); } else { playerAudio.pause(); }
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
                playerLinks.innerHTML += `<a href="${itemData.soundcloudLink}" target="_blank" class="social-link soundcloud"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.53,8.71A7.27,7.27,0,0,0,15.1,6.56V15.3a2,2,0,0,1-2,2,2,2,0,0,1-2-2,2,2,0,0,1,2-2,1,1,0,0,0,1-1V9.56a4.4,4.4,0,0,0-4.4-4.4,4.36,4.36,0,0,0-4.07,2.83,1,1,0,0,0,1,1.17,1,1,0,0,0,1-.8,2.4,2.4,0,0,1,2.1-1.2,2.35,2.35,0,0,1,2.4,2.4V15.3a4,4,0,0,0,4,4,4,4,0,0,0,4-4,1,1,0,0,0-1-1,1,1,0,0,0-1,1,2,2,0,0,1-2,2,2,2,0,0,1-2-2V8.92a1,1,0,0,0-1-1V6.56A5.27,5.27,0,0,1,21.5,8a1,1,0,0,0,1.05.14A1,1,0,0,0,21.53,8.71Z"></path></svg><span>SoundCloud</span></a>`;
            }
            bottomPlayer.classList.add('visible');
            playerAudio.play();
        }
    }
    function showInfoModal(index) {
        const itemData = timelineData[index];
        const modalArt = document.getElementById('modal-album-art');
        modalArt.src = itemData.image;
        document.getElementById('modal-song-title').textContent = itemData.song;
        document.getElementById('modal-artist-name').textContent = `${itemData.artist} (${itemData.year})`;
        document.getElementById('modal-comment').textContent = itemData.comment;
        overlay.classList.add('visible');
        infoModal.classList.add('visible');
    }
    function closeInfoModal() {
        overlay.classList.remove('visible');
        infoModal.classList.remove('visible');
    }
    timelineContainer.addEventListener('click', (event) => {
        const target = event.target;
        const timelineItem = target.closest('.timeline-item');
        if (timelineItem) {
            const index = timelineItem.dataset.index;
            if (target.closest('.info-button')) {
                showInfoModal(index);
            } else if (target.closest('.album-art-circle')) {
                handleTrackClick(index);
            }
        }
    });
    closeModalBtn.addEventListener('click', closeInfoModal);
    overlay.addEventListener('click', closeInfoModal);
    playerAudio.addEventListener('play', () => {
        document.querySelectorAll('.album-art-circle').forEach(c => c.classList.remove('is-playing', 'spinning'));
        const currentCircle = document.querySelector(`.timeline-item[data-index='${currentlyPlayingIndex}'] .album-art-circle`);
        if (currentCircle) { currentCircle.classList.add('is-playing', 'spinning'); }
    });
    playerAudio.addEventListener('pause', () => {
        const currentCircle = document.querySelector(`.timeline-item[data-index='${currentlyPlayingIndex}'] .album-art-circle`);
        if (currentCircle) { currentCircle.classList.remove('is-playing', 'spinning'); }
    });
    const lazyImages = document.querySelectorAll('.lazy-image');
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
    lazyImages.forEach(img => { imageObserver.observe(img); });

    const backToTopButton = document.getElementById('back-to-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const volumeBtn = document.getElementById('volume-btn');

        if (volumeBtn) {
            volumeBtn.addEventListener('click', () => {
            playerAudio.muted = !playerAudio.muted;
            volumeBtn.textContent = playerAudio.muted ? "🔇" : "🔊";
        });
        }      

});
