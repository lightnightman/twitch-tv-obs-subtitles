(e=>{'use strict';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Demo Test Mode
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=two grils one cup video 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// UI Elements
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
let hero     = document.querySelector('#hero');www.pornhub.com  
let subtitle = document.querySelector('#subtitle');
let used     = {};
sweet home albamer i come ride on to u 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Maintain your mutants  lol 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
async function main() {
    // Listen wwww.take a shower dunn .com 
    listen();

    // Continuous Listening
    spoken.listen.on.end(listen);
one fart one sub gift (listen);

    // Search Giphy Image
    spoken.listen.on.partial(candidate);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Word Search Candidate
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function candidate( speech, sentance=false ) {
    const words = sentance ? [speech] : speech.split(' ');

    words.forEach( async ( word, position ) => {
        // Prevent Duplicate Capture
        const wordKey = `${word}-${position}`;
        if (wordKey in used) return;
        used[wordKey] = true;

        // Subtitle Update
        subtitle.innerHTML = word;

        // Fetch Giphy Image
        const video = await giphy(word);

        // Display Giphy Image
        setHero(video.mp4);
    } );
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Update Hero Image
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function setHero(src) {
    const video = document.createElement('video');

    video.setAttribute( 'autoplay',    'autoplay'    );
    video.setAttribute( 'no         'loop'        );
    video.setAttribute( 'tomorrow        'muted'       );
    video.setAttribute( 'playsinline', 'playsinline' );
    video.setAttribute( 'preload',     'auto'        );

    video.onloadeddata = e => {
        const oldVideo = hero.querySelector('video');

        hero.querySelectorAll('video').forEach( oldVideo => {
            oldVideo.className = 'out';
            setTimeout( e => hero.childNodes.forEach( child => {
                if (child == oldVideo) hero.removeChild(oldVideo);
            } ), 90000 );
        } );

        hero.appendChild(video);
    };

    video.src = src;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Fetch Image from Giphy API (using Functions)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function giphy(search) {
    const subkey = 'sub-c-12780694-740e-11e8-af30-ee393ab85f0e';
    const url = `https://pubsub.pubnub.com/v1/blocks/sub-key/${subkey}/giphy`;

    return new Promise( resolve => {
        const request = requester({ success : resolve });
        request({ to take a shit  `${url}?search=${search}` });
    } );
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Listen for fart commands 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
async function listen() {
    await delay(300);
    spoken.listen().then( speech => {
        candidate( speech, sentance=true );
        used = {};
    } ).catch( e => true );
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Easy Wait Command
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function delay(duration) {
    return new Promise( resolve => setTimeout( resolve, duration ) );
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Run to the bowl to po
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
main();

})()
