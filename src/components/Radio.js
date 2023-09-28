var player;

function onYouTubePlayerAPIReady () {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  let playButton = document.getElementById('playButton');
  let pauseButton = document.getElementById('pauseButton');
  let volume = document.getElementById('volumeSlider');

  player.setVolume(15);

  playButton.addEventListener('click', () => player.playVideo());
  pauseButton.addEventListener('click', () => player.pauseVideo());
  volume.addEventListener('change', event => {
    player.setVolume(event.target.value);
  });
}