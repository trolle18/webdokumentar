/*---------- VIDEO ----------*/

/* autoplay video når den er i viewport, pause udenfor viewport (OBS: bruger skal interegere m. dok) */
function videoHandler(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause(); /* video pauser udenfor viewport, fortsætter når i viewport */
        }
    }
}

const videoObserver = new IntersectionObserver(videoHandler, { 
    threshold: 0.3,
});
const video = document.getElementById("video");
videoObserver.observe(video);