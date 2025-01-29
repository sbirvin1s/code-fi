/* ========== EXTERNAL MODULES ========== */
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { keyframes } from "@emotion/react";

/* ========== INTERNAL MODULES ========== */
import { Page } from '../stylesheets';
import styled from "@emotion/styled";
import { Button, Grid, Slider } from "@mui/material";
import { Pause, PlayArrow, VolumeDown, VolumeOff, VolumeUp } from "@mui/icons-material";

/* ========== EXPORTS ========== */
export default function Radio() {

  /* --- STATE HOOKS --- */
  const [ playPause, setPlayPause ] = useState(false);
  const [ mute, setMute ] = useState(false);
  const [ volume, setVolume ] = useState(0.15);
  const [ sliderColor, setSliderColor ] = useState('primary');

  /* --- LIFECYCLE METHODS --- */
  useEffect(() => {
    if (mute) setSliderColor('error');
    if (!mute) setSliderColor('primary');
  }, [mute]);

  /* --- EVENT HANDLERS --- */
  const handleVolume = ({ target: { value } }) => {
    setVolume(parseFloat(value));
  }

  const calculateVolume = volume => Math.floor(volume * 100);

  /* --- RENDER METHODS --- */
  const renderVolume = () => {
    if (mute) {
      return (
        <Button
          onClick={()=> setMute(prev => !mute)}
        >
          <VolumeOff fontSize='large' color='error'/>
        </Button>
      )
    } else {
      if (volume < 0.5) {
        return (
          <Button
            onClick={()=> setMute(prev => !mute)}
          >
            <VolumeDown fontSize='large' color='primary'/>
          </Button>
        )
      }
      if (volume > 0.41) {
        return (
          <Button
            onClick={()=> setMute(prev => !mute)}
          >
            <VolumeUp fontSize='large' color='primary'/>
          </Button>
        )
      }
    }
  }

  const renderPlayPause = () => {
    if (playPause) {
      return (
        <Button
          sx={{transform:'scale(3)'}}
          onClick={()=> setPlayPause(prev => !playPause)}
        >
          <Pause fontSize='large' color='primary'/>
        </Button>
      )
    } else {
      return (
        <Button
          sx={{transform:'scale(3)'}}
          onClick={()=> setPlayPause(prev => !playPause)}
        >
          <PlayArrow fontSize='large' color='primary'/>
        </Button>
      )
    }
  }

  /* --- RENDERER --- */
  return (
    <Page>
      <ReactPlayer
        style={{display: 'none'}}
        url={'https://youtu.be/pSbse1ekfrY?list=PL_azL6O8P64gaVhXjcxRRJWFL8RYLro0z'}
        playing={playPause}
        muted={mute}
        volume={volume}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}sx={{height:'16vh'}}></Grid>
        <Grid item xs={12} sx={{display:'flex', height: '33vh',justifyContent: 'center', alignItems: 'center'}}>
          <Image
            alt='code-fi logo danging to the music'
            src={require('../stylesheets/code-fi-dark.png')}
          />
        </Grid>
        <Grid item xs={12}sx={{height:'16vh'}}></Grid>
        <Grid item xs={12} sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          {renderPlayPause()}
        </Grid>
        <Grid item xs={2}>
          {renderVolume()}
        </Grid>
        <Grid item xs={8} sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Slider
            step={0.01}
            min={0}
            max={1}
            scale={calculateVolume}
            valueLabelDisplay="auto"
            value={volume}
            color={sliderColor}
            onChange={handleVolume}
          />
        </Grid>
      </Grid>
    </Page>
  )
}

/* ========== STYLES ========== */
const dance = keyframes`
  0% {
		transform: scale(1.75) rotate(0deg);
    animation-timing-function: ease-in;
	}
  25% {
    transform: scale(2) rotate(22deg);
    animation-timing-function: ease-out;
  }

	50% {
		transform: scale(1.75) rotate(0deg);
    animation-timing-function: ease-in;
	}
  75% {
    transform: scale(2) rotate(-22deg);
    animation-timing-function: ease-out;
  }

	100% {
		transform: scale(1.75) rotate(0deg);
    animation-timing-function: ease-in;
	}
`

const Image = styled.img`
  animation: ${dance} 6s infinite;
`;