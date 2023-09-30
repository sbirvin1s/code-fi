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

  if (player.isMute) {
    muteOff.style.display = 'inline';
    muteOff.removeAttribute('disabled');
    muteOn.style.display = 'none'
    muteOn.disabled = true;
  } else {
    muteOn.style.display = 'inline';
    muteOn.removeAttribute('disabled');
    muteOff.style.display = 'none'
    muteOff.disabled = true;
  }

  playButton.addEventListener('click', () => {
    player.playVideo()
  });
  pauseButton.addEventListener('click', () => player.pauseVideo());
  volume.addEventListener('change', event => {
    player.setVolume(event.target.value);
  });
  muteOn.addEventListener('click', () => {
    player.unMute();
    muteOff.style.display = 'inline';
    muteOff.removeAttribute('disabled');
    muteOn.style.display = 'none';
    muteOn.disabled = true;
  });
  muteOff.addEventListener('click', () => {
    player.mute();
    muteOn.style.display = 'inline';
    muteOn.removeAttribute('disabled');
    muteOff.style.display = 'none'
    muteOff.disabled = true;
  });
}
