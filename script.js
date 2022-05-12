
window.addEventListener("load", startup, false);
let video;
let logs;

function startup() {
    video = document.getElementById("video");

    if (document.pictureInPictureEnabled) {
        const togglePipButton = document.getElementById("button");
        togglePipButton.addEventListener("click", togglePictureInPicture, false);
    }
}

function togglePictureInPicture() {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        if (document.pictureInPictureEnabled) {
            video.requestPictureInPicture();
        }
    }
}