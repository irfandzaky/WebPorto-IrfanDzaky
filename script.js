function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggle(){
    var demo = document.querySelector(".demo");
    var video = document.querySelector("video");
    demo.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}

function toggleVideo(videoSrc) {
    var demo = document.querySelector(".demo");
    demo.classList.toggle("active");

    var videoPlayer = document.getElementById('videoPlayer');
    if (videoSrc) {
        videoPlayer.src = videoSrc;
        videoPlayer.load();
        videoPlayer.play();
    } else {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    }
}

function openNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }