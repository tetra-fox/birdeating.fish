const birdVideo = document.getElementById("bird");
const block = document.getElementById("no");

// i don't know if this actually works
birdVideo.play().then(e => {
    console.log("lets goooo");
}).catch(err => {
    // mute if the video cannot autoplay with audio (because it can if it's muted)
    birdVideo.muted = true;
    birdVideo.play();
    block.style.cursor = "hand";
}).finally( () => {
    restartAnimation();
});

birdVideo.addEventListener("seeked", e => {
    // restart animation on loop to keep it in time
    restartAnimation();
});

block.addEventListener("click", e => {
    birdVideo.muted = false;
    block.style.cursor = "unset";
});

const restartAnimation = () => {
    birdVideo.style.animation = "";
    birdVideo.style.animation = "flash .5s infinite";
}