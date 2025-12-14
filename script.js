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
            image: "https://assets.laussehub.co.uk/assets/scum_scum_scum.jpg",
            audio: "https://assets.laussehub.co.uk/assets/scum_scum_scum.mp3",
            comment: "This is Lausses' first known piece of content on soundcloud. It's a simple beat making use of a quote from Taxi Driver(1976) giving it it's title scum scum scum. It was released under Lausses first alias Blu Man. Take a moment to listen and enjoy, it's only a short piece.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/bluman2/i-burnt-my-kitchen"
        },
        {
            type: 'song',
            year: "9th April 2015",
            artist: "Blu Man",
            song: "Le Soir Bleu",
            image: "https://assets.laussehub.co.uk/assets/le_soir_bleu.jpg",
            audio: "https://assets.laussehub.co.uk/assets/le_soir_bleu.mp3",
            comment: "This is the first song Lausse posted with some lyrics, and him rapping. Press play, open the lyrics and listen. ",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/bluman2/le-soir-bleu",
            lyrics: [           
            "And Its been too sick",
            "too many times when I think that shit",
            "why did the time have to fly so quick",
            "why did your eyes have to lose that glint",
            "why did your lies choose me to collide with",
            "you were the person I chose to rely on",
            "you were the reason my life had purpose",
            "'nt seem like a person to burden and cursed it",
            "and I feel so fucked",
            "looks like my body fucked off in the darkness",
            "words of everybody walked up with the calmness",
            "calm as a cat and I feel like a dick",
            "guess why I'm fucked, I'm an ideal fit",
            "making me sick, making me trip",
            "down I fall with a dear and a grin",
            "down I fall in the darkest of pits"
        ]
        },
        {
            type: 'song',
            year: "27th April 2015",
            artist: "Don Papa 海賊",
            song: "タイトルなし、ありません日本語",
            image: "https://assets.laussehub.co.uk/assets/タイトルなしありません日本語.jpg",
            audio: "https://assets.laussehub.co.uk/assets/タイトルなしありません日本語.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/z4i4ygdlpshk"
        },
        {
            type: 'song',
            year: "15th June 2015",
            artist: "Don Papa 海賊",
            song: "ｓｌｅｅｐｙ ｌａｇｏｏｎ",
            image: "https://assets.laussehub.co.uk/assets/sleepylagoon.jpg",
            audio: "https://assets.laussehub.co.uk/assets/sleepylagoon.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/s-l-e-e-p-y-l-a-g-o-o-n-1"
        },
        {
            type: 'song',
            year: "13th July 2015",
            artist: "Don Papa 海賊",
            song: "ｉ'ｖｅ  ｍｉｓｓ",
            image: "https://assets.laussehub.co.uk/assets/ｉｖｅ_ｍｉｓｓ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｉｖｅ_ｍｉｓｓ.mp3",
            comment: "Personally, this is one of my favourite beats by Lausse. The sample is beautiful, chopping, slowing and pitching down the song Bless the telephone by Labi Siffre. It perfectly conveys that mood of missing someone you love, whether they are still yours or not, I suspect Lausse may have been missing a Lucy at this moment in time.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/ive-missed-you-bitch"
        },
        {
            type: 'song',
            year: "6th August 2015",
            artist: "Don Papa 海賊",
            song: "ｐｕｐｐｙ  ｌｏｖｅ",
            image: "https://assets.laussehub.co.uk/assets/ｐｕｐｐｙ_ｌｏｖｅ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｐｕｐｐｙ_ｌｏｖｅ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/puppy-love"
        },
        {
            type: 'song',
            year: "6th August 2015",
            artist: "Don Papa 海賊",
            song: "ｃｈｉｌｌ ｏｕｔ ｂｒｕｈ",
            image: "https://assets.laussehub.co.uk/assets/chilloutbruh.jpg",
            audio: "https://assets.laussehub.co.uk/assets/chilloutbruh.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/c-h-i-l-l-o-u-t-b-r-u-h"
        },
        {
            type: 'song',
            year: "23rd September 2015",
            artist: "Don Papa 海賊",
            song: "bａｍｂｏｏ",
            image: "https://assets.laussehub.co.uk/assets/bａｍｂｏｏ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/bａｍｂｏｏ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/bamboo"
        },
        {
            type: 'song',
            year: "12th October 2015",
            artist: "Don Papa 海賊",
            song: "青 ｋａｎｙｅ歌",
            image: "https://assets.laussehub.co.uk/assets/青_ｋａｎｙｅ歌.jpg",
            audio: "https://assets.laussehub.co.uk/assets/青_ｋａｎｙｅ歌.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/kanye"
        },
        {
            type: 'song',
            year: "31st December 2015",
            artist: "ayo im sleep tho",
            song: "Clutch Kid - w  i  n  t  e  r  [prod. Don Papa 海賊]",
            image: "https://assets.laussehub.co.uk/assets/clutch_kid_w_i_n_t_e_r_prod_don_papa_海賊_click_buy_to_download_its_free.jpg",
            audio: "https://assets.laussehub.co.uk/assets/clutch_kid_w_i_n_t_e_r_prod_don_papa_海賊_click_buy_to_download_its_free.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/ayoimsleeptho/clutch-kid-w-i-n-t-e-r-prod-don-papa"
        },
        {
            type: 'song',
            year: "4th January 2016",
            artist: "Don Papa 海賊",
            song: "tetsuo's nightmare",
            image: "https://assets.laussehub.co.uk/assets/tetsuos_nightmare.jpg",
            audio: "https://assets.laussehub.co.uk/assets/tetsuos_nightmare.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/tetsuos-nightmare"
        },
        {
            type: 'song',
            year: "13th January 2016",
            artist: "Don Papa 海賊",
            song: "Romance Dawn [tape]",
            image: "https://assets.laussehub.co.uk/assets/romance_dawn_tape.jpg",
            audio: "https://assets.laussehub.co.uk/assets/romance_dawn_tape.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/romance-dawn-tape"
        },
        {
            type: 'song',
            year: "22nd February 2016",
            artist: "Don Papa 海賊",
            song: "Lotus Blossom [tape 2]",
            image: "https://assets.laussehub.co.uk/assets/lotus_blossom_tape_2.jpg",
            audio: "https://assets.laussehub.co.uk/assets/lotus_blossom_tape_2.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/lotus-blossom-tape-2"
        },
        {
            type: 'song',
            year: "25th April 2016",
            artist: "Don Papa 海賊",
            song: "Roanapur [Tape 3]",
            image: "https://assets.laussehub.co.uk/assets/roanapur_tape_3.jpg",
            audio: "https://assets.laussehub.co.uk/assets/roanapur_tape_3.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/lemonade-tape-3"
        },
        {
            type: 'song',
            year: "16th May 2016",
            artist: "Don Papa 海賊",
            song: "﻿ｍｏｎｓｏｏｎ",
            image: "https://assets.laussehub.co.uk/assets/ｍｏｎｓｏｏｎ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｍｏｎｓｏｏｎ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/monsoon"
        },
        {
            type: 'song',
            year: "22nd May 2016",
            artist: "Don Papa 海賊",
            song: "ｄｏｒｏｔｈｙ",
            image: "https://assets.laussehub.co.uk/assets/ｄｏｒｏｔｈｙ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｄｏｒｏｔｈｙ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/dorothy"
        },
        {
            type: 'song',
            year: "31st May 2016",
            artist: "Don Papa 海賊",
            song: "﻿ｖｉｃｅ ｃｉｔｙ",
            image: "https://assets.laussehub.co.uk/assets/ｖｉｃｅ_ｃｉｔｙ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｖｉｃｅ_ｃｉｔｙ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/vice-city"
        },
        {
            type: 'song',
            year: "11th June 2016",
            artist: "front-left",
            song: "Wurlitzer Ready",
            image: "https://assets.laussehub.co.uk/assets/wurlitzer_ready.jpg",
            audio: "https://assets.laussehub.co.uk/assets/wurlitzer_ready.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/front-leftmusic/wurlitzer-ready",
            lyrics: [           
            "There's no rush, gotta take it easy",
            "There's no rush, gotta take it easy",
            "There's no rush, gotta take it easy",
            "Leave the dock and sail past the nonsense",
            "Dark seas murky like my conscience",
            "Its ba ba black sheep is one with the monsters",
            "Ho, after ho its a pirate's life for me",
            "bitter pied piper snaggin' all the rats you see",
            "Mellow little tunes bringin' all you brats to sleep",
            "Except for who's not comfy cause the tears have wet the sheets",
            "Move on and turn over the pillow",
            "Bit of bourbon and some wine",
            "She ain't yours, you know she mine",
            "I've been through this many times, make it lesser of a deal",
            "Set the sails, boy you're better off embelishing your skills",
        ]
        },
        {
            type: 'song',
            year: "12th June 2016",
            artist: "Don Papa 海賊",
            song: "ｐｒｉｍｒｏｓｅ",
            image: "https://assets.laussehub.co.uk/assets/ｐｒｉｍｒｏｓｅ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｐｒｉｍｒｏｓｅ.mp3",
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
            image: "https://assets.laussehub.co.uk/assets/go_back_to.jpg",
            audio: "https://assets.laussehub.co.uk/assets/go_back_to.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/go-back-to"
        },
        {
            type: 'song',
            year: "17th July 2016",
            artist: "LAUSSE THE CAT",
            song: "alone together",
            image: "https://assets.laussehub.co.uk/assets/alone_together.jpg",
            audio: "https://assets.laussehub.co.uk/assets/alone_together.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/alone-together",
            lyrics: [
                
                "Eyes glimmer in the window",
                "Looking at the lamp post flicker with a dim glow",
                "Admit i've been a bit low lately",
                "Since the pillow next to me lays crease-less",
                "Stay blessed ten seconds at a time",
                "I ain't hurting to the point where i'm sporting a chin strap",
                "Fall in love seven times in a day",
                "Stay at bay from the woman",
                "Wouldn't want another mishap",
                "Shit happens, make a bliss track an skeet",
                "See my pillow lays crease-less cause we topple in her sheets",
                "Blister in her heart",
                "I won't fix you in a week",
                "But we'll simmer in the dark till you figure what you need",
                "Guaranteed to bark once he figures you're with me",
                "Then ill scurry to the dark where the post flickers dimly",
                "Silhouette enhancing my figure on the streets",
                "Whilst my pillow lays crease-less still",

                
                "Lausse The Cat back at it again",
                "Marks a flag with the tip of his pen",
                "Lausse the cat bad habits and blems",
                "Handles gals who been ridden by men",
                "Lausse The Cat back at it again",
                "Marks a flag with the tip of his pen",
                "Lausse the cat bad habits and blems",
                "Attracts shallow girls ridden by men",

                
                "Your boy left you in a swift move",
                "You're done watching How Stella Got Her Grove Back",
                "Hurry bell the new cat",
                "Hes waiting at the door",
                "Grab your shoes and a bag",
                "Try excuse the cheeky rudeness",
                "Guess its best then just sitting in your blue nest",
                "Simmer with the cat and let him do what he do's best",
                "Lausse the king courting girls in ralph lauren",
                "Whiskers blowing in the wind bring your mood to a new best",
                "Keep you busy by contorting in the bed",
                "Kitty got the right moves to keep your boyfriend out your head",
                "Lausse the kitten got you smitten in the bed",
                "Keep your pussy cat amused like i just tossed a ball of thread",
                "Spend a little time let him wander with some dead yats",
                "Give a little time and he'll be off into a setback",
                "Busy in the streets well be busy in the sheets",
                "You'll be busy for a week we'll keep him waiting for a text back",
            ],
        },
        {
            type: 'song',
            year: "9th September 2016",
            artist: "Don Papa 海賊",
            song: "ｍｅｒｉｃａｎ  ｂｗｏｉ",
            image: "https://assets.laussehub.co.uk/assets/ｍｅｒｉｃａｎ_ｂｗｏｉ.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ｍｅｒｉｃａｎ_ｂｗｏｉ.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/don-pappa/merican-bwoi"
        },
        {
            type: 'song',
            year: "10th October 2016",
            artist: "LAUSSE THE CAT",
            song: "wag1 pelican",
            image: "https://assets.laussehub.co.uk/assets/wag1_pelican.jpg",
            audio: "https://assets.laussehub.co.uk/assets/wag1_pelican.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/wag1-pelican"
        },
        {
            type: 'song',
            year: "8th November 2016",
            artist: "LAUSSE THE CAT",
            song: "kitten blues",
            image: "https://assets.laussehub.co.uk/assets/kitten_blues.jpg",
            audio: "https://assets.laussehub.co.uk/assets/kitten_blues.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/kitten-blues"
        },
        {
            type: 'song',
            year: "26th November 2016",
            artist: "alejandringui",
            song: "Don Papa & Lausse The Cat - o o l o n g",
            image: "https://assets.laussehub.co.uk/assets/don_papa_lausse_the_cat_o_o_l_o_n_g.jpg",
            audio: "https://assets.laussehub.co.uk/assets/don_papa_lausse_the_cat_o_o_l_o_n_g.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/xrafaelalex/o-o-l-o-n-g"
        },
        {
            type: 'song',
            year: "7th December 2016",
            artist: "front-left",
            song: "Ca Va Bien (ft. lausse the cat)",
            image: "https://assets.laussehub.co.uk/assets/ca_va_bien_ft_lausse_the_cat_free_download.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ca_va_bien_ft_lausse_the_cat_free_download.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/front-leftmusic/ca-va-bien-ft-lausse-the-cat",
            lyrics: [
            "Roll up a zoot my friend",
            "I ain't got none left, she done answered",
            "it's cool you can use my blems",
            "I done ordered an uber, I got more at yard just",
            "make me some food I beg",
            "I'm in the mood for some noodles and after",
            "watch planet earth in the front room",
            "some CGI we don't argue, we google the answers",
            "laugh as I roll up a blem", 
            "pass the lighter my darling I beg",
            "lungs are tight and my carlings are dead",
            "might hit the park in a sec",
            "guess it's that time again", 
            "when the darkness arrives uninvited",
            "dark minds are light, the brightest",
            "nightmares alive in my iris",
            "stick like a bat on a site and say hi to my virus",
            "I get some DMs, it's a bit late now, carpe diem",
            "life's a peach, I just work at a beach bar and drink till PM",
            "ask if I'm good, I say ca va bien",
            "get some DMs, it's a bit late now",
            "carpe diem, life's a peach", 
            "I just work at a beach bar and drink till PM", 
            "ask if I'm good, I say ca va bien",
            "I ain't never been stressed out",
            "I ain't never been stressed out",
            "I ain't ever been stressed out",
            "I ain't ever been stressed out bitch",
            "I ain't never been stressed out",
            "I ain't ever been stressed out", 
            "I ain't never been stressed out but I never go to Uni either",
        ]
        },
        {
            type: 'song',
            year: "7th December 2016",
            artist: "TAMBALA",
            song: "broke n' tokin (ft Don Papa 海賊)",
            image: "https://assets.laussehub.co.uk/assets/broke_n_tokin_ft_don_papa_海賊.jpg",
            audio: "https://assets.laussehub.co.uk/assets/broke_n_tokin_ft_don_papa_海賊.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/tambalaproducer/broke-n-tokin-ft-don-papa"
        },
        {
            type: 'song',
            year: "14th January 2017",
            artist: "LAUSSE THE CAT",
            song: "the cat who came for tea",
            image: "https://assets.laussehub.co.uk/assets/the_cat_who_came_for_tea.jpg",
            audio: "https://assets.laussehub.co.uk/assets/the_cat_who_came_for_tea.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/the-cat-who-came-for-tea"
        },
        {
            type: 'song',
            year: "26th January 2017",
            artist: "LAUSSE THE CAT",
            song: "the cat and la lune",
            image: "https://assets.laussehub.co.uk/assets/the_cat_and_la_lune.jpg",
            audio: "https://assets.laussehub.co.uk/assets/the_cat_and_la_lune.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/the-cat-and-la-lune"
        },
        {
            type: 'song',
            year: "26th January 2017",
            artist: "Blaiz & Vaga",
            song: "Blaiz x Don Papa 海賊 - Amor #HorsSerie",
            image: "https://assets.laussehub.co.uk/assets/blaiz_x_don_papa_海賊_amor_horsserie.jpg",
            audio: "https://assets.laussehub.co.uk/assets/blaiz_x_don_papa_海賊_amor_horsserie.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz_vaga/blaiz-amor-don-papa"
        },
        {
            type: 'song',
            year: "12th February 2017",
            artist: "LAUSSE THE CAT",
            song: "zinfandel rosé",
            image: "https://assets.laussehub.co.uk/assets/zinfandel_rosé.jpg",
            audio: "https://assets.laussehub.co.uk/assets/zinfandel_rosé.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/zinfandel-rose"
        },
        {
            type: 'song',
            year: "13th February 2017",
            artist: "TAMBALA",
            song: "captain morgan's tale (ft. lausse the cat)",
            image: "https://assets.laussehub.co.uk/assets/captain_morgans_tale_ft_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/captain_morgans_tale_ft_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/tambalaproducer/captain-morgans-tale-ft-lausse-the-cat"
        },
        {
            type: 'song',
            year: "8th March 2017",
            artist: "Ross Wilson",
            song: "BlossomHillGang (ft. Lausse The Cat)",
            image: "https://assets.laussehub.co.uk/assets/blossomhillgang_ft_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/blossomhillgang_ft_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/rosswalterwilson/blossomhillgang-ft-lausse-the-cat"
        },
        {
            type: 'song',
            year: "1st May 2017",
            artist: "Blaiz & Vaga",
            song: "Blaiz x Don Papa 海賊 - Lune #HorsSerie2",
            image: "https://assets.laussehub.co.uk/assets/blaiz_x_don_papa_海賊_lune_horsserie2.jpg",
            audio: "https://assets.laussehub.co.uk/assets/blaiz_x_don_papa_海賊_lune_horsserie2.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz_vaga/blaiz-x-don-papa-lune-horsserie2"
        },
        {
            type: 'song',
            year: "29th September 2017",
            artist: "B-ahwe",
            song: "Blue print - B-ahwe (prod. Lausse the Cat)",
            image: "https://assets.laussehub.co.uk/assets/blue_print_b_ahwe_prod_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/blue_print_b_ahwe_prod_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/b-ahwe/blue-print-beth-prod-lausse-the-cat"
        },
        {
            type: 'song',
            year: "18th November 2017",
            artist: "illiterate.",
            song: "catching moths feat. lausse the cat",
            image: "https://assets.laussehub.co.uk/assets/catching_moths_feat_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/catching_moths_feat_lausse_the_cat.mp3",
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
            image: "https://assets.laussehub.co.uk/assets/3_toys_story.jpg",
            audio: "https://assets.laussehub.co.uk/assets/3_toys_story.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/3-toys-story"
        },
        {
            type: 'song',
            year: "1st May 2018",
            artist: "LAUSSE THE CAT",
            song: "BELLE BOUTEILLE",
            image: "https://assets.laussehub.co.uk/assets/6_belle_bouteille.jpg",
            audio: "https://assets.laussehub.co.uk/assets/6_belle_bouteille.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/6-belle-bouteille"
        },
        {
            type: 'song',
            year: "20th June 2018",
            artist: "LAUSSE THE CAT",
            song: "The Girl, The Cat And The Tree",
            image: "https://assets.laussehub.co.uk/assets/the_girl_the_cat_and_the_tree.jpg",
            audio: "https://assets.laussehub.co.uk/assets/the_girl_the_cat_and_the_tree.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/the-girl-the-cat-and-the-tree-out-now-on-spotify-etc"
        },
        {
            type: 'song',
            year: "6th July 2018",
            artist: "Nix Northwest",
            song: "Waves (Feat. LAUSSE THE CAT)",
            image: "https://assets.laussehub.co.uk/assets/waves_feat_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/waves_feat_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/nixnw/waves-feat-lausse-the-cat"
        },
        {
            type: 'song',
            year: "13th July 2018",
            artist: "LAUSSE THE CAT",
            song: "Ciao Bella",
            image: "https://assets.laussehub.co.uk/assets/ciao_bella.jpg",
            audio: "https://assets.laussehub.co.uk/assets/ciao_bella.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/ciao-bella"
        },
        {
            type: 'song',
            year: "11th September 2018",
            artist: "LAUSSE THE CAT",
            song: "Redstripe Rhapsody",
            image: "https://assets.laussehub.co.uk/assets/redstripe_rhapsody.jpg",
            audio: "https://assets.laussehub.co.uk/assets/redstripe_rhapsody.mp3",
            comment: "This is his most well known track, with around 28 million streams on Spotify. The song makes use of samples from 911 by Tyler the Creator, and a guitar cover of Passionfruit by Drake. He's largely speaking about his experiences living in Uni and describes very surrealy the experience of going to a party in Hyde Park.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/redstripe-rhapsody"
        },
        {
            type: 'song',
            year: "28th September 2018",
            artist: "LAUSSE THE CAT",
            song: "Coco Channel ft. B-ahwe",
            image: "https://assets.laussehub.co.uk/assets/coco_channel_ft_b_ahwe.jpg",
            audio: "https://assets.laussehub.co.uk/assets/coco_channel_ft_b_ahwe.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/lausse-the-cat/coco-channel-ft-b-ahwe"
        },
        {
            type: 'song',
            year: "7th October 2018",
            artist: "apltn",
            song: "apltn x MakOto - If It Was Easy(feat. B-ahwe & LAUSSE THE CAT)",
            image: "https://assets.laussehub.co.uk/assets/apltn_x_makoto_if_it_was_easyfeat_b_ahwe_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/apltn_x_makoto_if_it_was_easyfeat_b_ahwe_lausse_the_cat.mp3",
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
            image: "https://assets.laussehub.co.uk/assets/lausse_the_cat_intro.jpg",
            audio: "https://assets.laussehub.co.uk/assets/lausse_the_cat_intro.mp3",
            comment: "Similar to the previous tracks the exact date this track was released isn't know, so I've put the date it was uploaded to soundcloud.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/calvinvantsis/lausse-the-cat-intro"
        },
        {
            type: 'song',
            year: "30th May 2020",
            artist: "Blaiz",
            song: "Calin (feat. LAUSSE THE CAT)",
            image: "https://assets.laussehub.co.uk/assets/calin_feat_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/calin_feat_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz-scmusic/calin-feat-lausse-the-cat"
        },
        {
            type: 'song',
            year: "30th June 2021",
            artist: "Nix Northwest",
            song: "When It Rains (feat. B-ahwe & LAUSSE THE CAT)",
            image: "https://assets.laussehub.co.uk/assets/when_it_rains_feat_b_ahwe_lausse_the_cat.jpg",
            audio: "https://assets.laussehub.co.uk/assets/when_it_rains_feat_b_ahwe_lausse_the_cat.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/nixnorthwest/when-it-rains-feat-b-ahwe"
        },
        {
            type: 'song',
            year: "23rd August 2021",
            artist: "Max limbrick",
            song: "Lausse The Cat - Park bench (rare)",
            image: "https://assets.laussehub.co.uk/assets/lausse_the_cat_park_bench_rare.jpg",
            audio: "https://assets.laussehub.co.uk/assets/lausse_the_cat_park_bench_rare.mp3",
            comment: "One of the few found tracks we have, uploaded to soundcloud in 2021 but it was likely made earlier, it was found on a beat tape.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/max-limbrick/untitled"
        },
        {
            type: 'song',
            year: "12th January 2022",
            artist: "Blaiz",
            song: "Môme",
            image: "https://assets.laussehub.co.uk/assets/môme.jpg",
            audio: "https://assets.laussehub.co.uk/assets/môme.mp3",
            comment: "A comment about the track.",
            spotifyLink: "",
            soundcloudLink: "https://soundcloud.com/blaiz18765/mome"
        },
        // --- NEW SECTION: THE MOCKING STARS ---
        {
            type: 'header',
            title: 'The Mocking Stars Era'
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "BLUE BOSSA",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/blue_bossa.mp3",
            comment: "The opening track where Lausse compares himself to the mad, finding comfort in their company outside Sainsbury's.",
            spotifyLink: "", 
            soundcloudLink: "",
            lyrics: [
                "Intro",
                "(Children whispering) 'Shhh…'",
                "Lausse: 'Welcome back my dear children to the one and only Lausse The Cat Show!'",
                "(Yeeyyyy!)",
                "On narration back from the depths of hell itself please give it up for the one and only; Tree Wizard!",
                "...",
                "(See full lyrics on the Album Page)"
            ]
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "I.D.W.G.A.J",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/i_d_w_g_a_j.mp3",
            comment: "I Don't Wanna Get A Job. Lausse explores fantasies of wealth before settling on the freedom of a pirate's life.",
            spotifyLink: "",
            soundcloudLink: "",
            lyrics: [
                "Intro",
                "The Tree Wizard: 'The rising Sun looked up at Lausse and said this…'",
                "Sun to Lausse: 'Come hither, cat'",
                "...",
                "Prelude",
                "If I had some P's I'd pass my driving license",
                "Buy myself a Twingo",
                "...",
                "(See full lyrics on the Album Page)"
            ]
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "THE MIDNIGHT HOUR",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/the_midnight_hour.mp3",
            comment: "Lausse rejects the Sun and the day-to-day grind, choosing instead to hide behind the curtains and seek the moon.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "THE MOCKING STARS",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/the_mocking_stars.mp3",
            comment: "The 11-minute centerpiece. The sun abandons Earth, darkness falls, and Lausse sails to Mars to escape the chaos.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "SPACE CADET CAT",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/space_cadet_cat.mp3",
            comment: "Lausse arrives on Mars, hoping to leave his pain behind on Earth, only to realize his sadness followed him.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "TEA PARTY",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/tea_party.mp3",
            comment: "A surreal gathering with the Mad Hatter and friends on Mars, drinking gin and Guinness in limbo.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "KEEP ON WALKING",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/keep_on_walking.mp3",
            comment: "A flashback track detailing Lausse's travels through France and Berlin, living a bohemian life before returning.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "THE MOONLIGHT WALTZ",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/the_moonlight_waltz.mp3",
            comment: "Lausse finally meets the Moon. They dance, and a flower begins to bloom in his chest, signifying a return to feeling.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "PEONIES FOR BREAKFAST",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/peonies_for_breakfast.mp3",
            comment: "A beautiful track about finding love (a girl who sees the world through peonies) and the fear that comes with it.",
            spotifyLink: "",
            soundcloudLink: ""
        },
        {
            type: 'song',
            year: "6th November 2025",
            artist: "LAUSSE THE CAT",
            song: "LOTUS BLOSSOM",
            image: "https://assets.laussehub.co.uk/assets/the-mocking-stars.jpg",
            audio: "https://assets.laussehub.co.uk/assets/lotus_blossom.mp3",
            comment: "The finale. Lausse accepts impermanence, says goodbye to the moon, and falls back to Earth to live.",
            spotifyLink: "",
            soundcloudLink: ""
        }
    ];

// ===================================================================
    // STEP 2: BUILD THE TIMELINE (WITH SEARCH & FILTER)
    // ===================================================================
    
    const timelineContainer = document.getElementById('timeline-container');
    const searchInput = document.getElementById('timeline-search'); 

    // 1. Define the Image Observer ONCE here at the top scope
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

    // 2. Main Function to Render the Timeline
    function renderTimeline(dataToRender) {
        // Clear container
        timelineContainer.innerHTML = '';
        
        let songCounter = 0; 

        // Handle "No Results"
        if (dataToRender.length === 0) {
            timelineContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #888;">
                    <h3>No tracks found matching that search.</h3>
                    <p>Try searching for a different song or artist.</p>
                </div>`;
            return;
        }

        // Loop through data and build HTML
        dataToRender.forEach((item) => {
            // Find index in ORIGINAL data to ensure player works correctly
            const originalIndex = timelineData.indexOf(item);

            if (item.type === 'header') {
                const eraHeader = document.createElement('div');
                eraHeader.classList.add('era-header');
                eraHeader.innerHTML = `<h2>${item.title}</h2>`;
                timelineContainer.appendChild(eraHeader);
            } 
            else if (item.type === 'song') {
                const timelineItem = document.createElement('div');
                timelineItem.classList.add('timeline-item');
                
                // Alternate left/right
                if (songCounter % 2 === 0) {
                    timelineItem.classList.add('left-item');
                } else {
                    timelineItem.classList.add('right-item');
                }

                // Use originalIndex here
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
                            <button class="info-button">+</button>
                            <button class="lyrics-button">♪</button>
                        </div>
                    </div>
                `;
                timelineContainer.appendChild(timelineItem);
                songCounter++;
            }
        });

        // Re-attach the Image Observer to the newly created elements
        const newLazyImages = document.querySelectorAll('.lazy-image');
        newLazyImages.forEach(img => imageObserver.observe(img));
    }

    // 3. Search Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            if (searchTerm === '') {
                renderTimeline(timelineData);
            } else {
                const filteredData = timelineData.filter(item => {
                    if (item.type === 'header') return false; 
                    return (
                        item.song.toLowerCase().includes(searchTerm) ||
                        item.artist.toLowerCase().includes(searchTerm) ||
                        (item.year && item.year.toLowerCase().includes(searchTerm))
                    );
                });
                renderTimeline(filteredData);
            }
        });
    }

    // 4. Initial Render
    renderTimeline(timelineData);


    // ===================================================================
    // STEP 3: SET UP ALL INTERACTIVE FEATURES
    // ===================================================================
    
    // --- Menu Toggle ---
    const menuButton = document.getElementById('menu-button');
    if(menuButton) {
        menuButton.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    // --- Select Elements ---
    const overlay = document.getElementById('modal-overlay');
    const bottomPlayer = document.getElementById('bottom-player');
    const playerAudio = document.getElementById('player-audio');
    const playerLinks = document.getElementById('player-links');
    let currentlyPlayingIndex = null;

    // --- Welcome Popup Elements ---
    const welcomePopup = document.getElementById('welcome-popup');
    const closeWelcomePopupBtn = document.getElementById('close-welcome-popup-btn');
    
    // --- Info Modal Elements ---
    const infoModal = document.getElementById('info-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalAlbumArt = document.getElementById('modal-album-art');
    const modalSongTitle = document.getElementById('modal-song-title');
    const modalArtistName = document.getElementById('modal-artist-name');
    const modalComment = document.getElementById('modal-comment');

    // --- Lyrics Modal Elements ---
    const lyricsModal = document.getElementById('lyrics-modal');
    const closeLyricsModalBtn = document.getElementById('close-lyrics-modal-btn');
    const lyricsModalAlbumArt = document.getElementById('lyrics-modal-album-art');
    const lyricsModalSongTitle = document.getElementById('lyrics-modal-song-title');
    const lyricsModalArtistName = document.getElementById('lyrics-modal-artist-name');
    const modalLyricsContent = document.getElementById('modal-lyrics-content');


    // --- Track Click Handler ---
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
                playerLinks.innerHTML += `<a href="${itemData.soundcloudLink}" target="_blank" class="social-link soundcloud"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.53,8.71A7.27,7.27,0,0,0,15.1,6.56V15.3a2,2,0,0,1-2,2,2,2,0,0,1-2-2,2,2,0,0,1-2-2,1,1,0,0,0,1-1V9.56a4.4,4.4,0,0,0-4.4-4.4,4.36,4.36,0,0,0-4.07,2.83,1,1,0,0,0,1,1.17,1,1,0,0,0,1-.8,2.4,2.4,0,0,1,2.1-1.2,2.35,2.35,0,0,1,2.4,2.4V15.3a4,4,0,0,0,4,4,4,4,0,0,0,4-4,1,1,0,0,0-1-1,1,1,0,0,0-1,1,2,2,0,0,1-2,2,2,2,0,0,1-2-2V8.92a1,1,0,0,0-1-1V6.56A5.27,5.27,0,0,1,21.5,8a1,1,0,0,0,1.05.14A1,1,0,0,0,21.53,8.71Z"></path></svg><span>SoundCloud</span></a>`;
            }
            bottomPlayer.classList.add('visible');
            playerAudio.play();
        }
    }

    // --- Modal Functions ---
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
            modalLyricsContent.textContent = "No lyrics available for this track.";
        }
        
        overlay.classList.add('visible');
        lyricsModal.classList.add('visible');
    }

    function closeAllModals() {
        overlay.classList.remove('visible');
        infoModal.classList.remove('visible');
        lyricsModal.classList.remove('visible');
        welcomePopup.classList.remove('visible');
    }

    // --- Welcome Popup Logic (With LocalStorage Fix) ---
    function showWelcomePopup() {
        // Check local storage so we don't annoy users
        const hasSeenWelcome = localStorage.getItem('seenWelcome');
        if (!hasSeenWelcome) {
            overlay.classList.add('visible');
            welcomePopup.classList.add('visible');
        }
    }

    // Close button now saves the preference
    if(closeWelcomePopupBtn) {
        closeWelcomePopupBtn.addEventListener('click', () => {
            closeAllModals();
            localStorage.setItem('seenWelcome', 'true'); 
        });
    }

    // --- Event Listeners ---
    
    // Main Timeline Click Listener
    timelineContainer.addEventListener('click', (event) => {
        const target = event.target;
        const timelineItem = target.closest('.timeline-item');
        
        if (timelineItem) {
            const index = timelineItem.dataset.index;
            
            if (target.closest('.info-button')) {
                showInfoModal(index);
            } else if (target.closest('.lyrics-button')) {
                showLyricsModal(index);
            } else if (target.closest('.album-art-circle')) {
                handleTrackClick(index);
            }
        }
    });

    // Close Modal Listeners
    if(closeModalBtn) closeModalBtn.addEventListener('click', closeAllModals);
    if(closeLyricsModalBtn) closeLyricsModalBtn.addEventListener('click', closeAllModals);
    if(overlay) overlay.addEventListener('click', closeAllModals);

    // Audio Player Listeners
    playerAudio.addEventListener('play', () => {
        document.querySelectorAll('.album-art-circle').forEach(c => c.classList.remove('is-playing', 'spinning'));
        // Find the circle by data-index to animate the correct one
        const currentCircle = document.querySelector(`.timeline-item[data-index='${currentlyPlayingIndex}'] .album-art-circle`);
        if (currentCircle) { currentCircle.classList.add('is-playing', 'spinning'); }
    });

    playerAudio.addEventListener('pause', () => {
        const currentCircle = document.querySelector(`.timeline-item[data-index='${currentlyPlayingIndex}'] .album-art-circle`);
        if (currentCircle) { currentCircle.classList.remove('is-playing', 'spinning'); }
    });

    // --- Initialize ---
    showWelcomePopup();

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top-btn');
    if (backToTopButton) {
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
    }

    // --- Volume Button ---
    const volumeBtn = document.getElementById('volume-btn');
    if (volumeBtn) {
        volumeBtn.addEventListener('click', () => {
            playerAudio.muted = !playerAudio.muted;
            volumeBtn.textContent = playerAudio.muted ? "🔇" : "🔊";
        });
    }
});
