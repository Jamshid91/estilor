const video = document.querySelector('.video-box');
const playBtn = document.querySelector('.play-video');

video.addEventListener('click', () => {
    playVideo()
});

playBtn.addEventListener('click', () => {
    playVideo()
});

function playVideo() {
    video.classList.add('view-video');
    video.children[0].play();
    video.children[0].setAttribute('controls', '')
}