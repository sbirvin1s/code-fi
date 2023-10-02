var player;

function onYouTubePlayerAPIReady () {
  player = new YT.Player('player', {
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  const playButton = document.getElementById('playButton');
  const pauseButton = document.getElementById('pauseButton');
  const volume = document.getElementById('volumeSlider');
  const muteOn = document.getElementById('muteOn');
  const muteOff = document.getElementById('muteOff');

  const frequencyArray = Array.from({length: 10}, () => {
    Math.floor(Math.random() * 256)
  });

  const visualizerData = new Uint8Array(frequencyArray);

  player.setVolume(15);

  playButton.addEventListener('click', () => {
    player.playVideo()
    playButton.disabled = true;
    pauseButton.disabled = false;
    playButton.style.visibility = 'hidden';
    pauseButton.style.visibility = 'visible';
  });
  pauseButton.addEventListener('click', () => {
    player.pauseVideo()
    pauseButton.disabled = true;
    playButton.disabled = false;
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
  });
  volume.addEventListener('change', event => {
    player.setVolume(event.target.value);
  });
  muteOn.addEventListener('click', () => {
    player.unMute();
    muteOff.style.visibility = 'visible';
    muteOff.removeAttribute('disabled');
    muteOn.style.visibility = 'hidden';
    muteOn.disabled = true;
  });
  muteOff.addEventListener('click', () => {
    player.mute();
    muteOn.style.visibility = 'visible';
    muteOn.removeAttribute('disabled');
    muteOff.style.visibility = 'hidden'
    muteOff.disabled = true;
  });
}
