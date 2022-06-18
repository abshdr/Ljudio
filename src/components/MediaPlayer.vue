<template>
  <div class="MediaPlayer">
    <div class="buttons">
       <button class="otherButton" @click="PreviousSong()">
        <i class="fa fa-step-backward"></i>
      </button>
      
        <button id="playPauseButton" @click="ToggleAudioSwitch()">
        <i class="fa fa-play"></i>
        <i class="fa fa-pause"></i>
      </button>
      
    
      <button class="otherButton" @click="nextSong()">
        <i class="fa fa-step-forward"></i>
      </button>    
    </div>
    </div>
</template>

<script>
export default {
  name: "MediaPlayer",
  props: ["object"],
  data() {
    return {
      id: null,
    };
  },
  computed: {},

  methods: {
    ToggleAudioSwitch() {
      if (this.$store.state.audioSwitch == true) {
        window.player.playVideo();
        this.$store.commit("setAudioSwitch", false);
      } else {
        window.player.pauseVideo();
        this.$store.commit("setAudioSwitch", true);
        console.log(this.$store.state.audioSwitch);
      }
    },

    PreviousSong() {
      let playlist = this.$store.state.fetchedSongs;
      let index = playlist.findIndex(
        (object) => object === this.$store.state.currentSong
      );
      let previousSong = playlist[index - 1];
      window.player.loadVideoById(previousSong);
      window.player.playVideo(previousSong);
      this.$store.commit("setCurrentSong", previousSong);
      console.log(previousSong);
    },

    nextSong() {
      let playlist = this.$store.state.fetchedSongs;
      let index = playlist.findIndex(
        (object) => object == this.$store.state.currentSong
      );
      let nextSong = playlist[index + 1];
      window.player.loadVideoById(nextSong);
      window.player.playVideo(nextSong);
      this.$store.commit("setCurrentSong", nextSong);
    }
  },
};
</script>

<style>
.otherButton {
  margin: 2px;
  padding: 15px 25px;
  font-size: 15px;
  height: 50px;
  width: 8px;
  cursor: pointer;
  outline: none;
  color: #4575be;
  background-color: #02212b;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 10px 20px black, 1px 3px 10px #96b8df;
} .otherButton:active {
  background-color: #96b8df;
  color: #02212b;
  font-weight: bold;
  transform: translateY(3px);
}
#playPauseButton {
  padding: 15px 25px;
  font-size: 12px;
  height: 50px;
  width: 8vh;
  cursor: pointer;
  outline: none;
  color: #4575be;
  background-color: #02212b;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 5px 10px black, 0 2px 10px #96b8df;
} #playPauseButton:active {
  background-color: #96b8df;
  color: #02212b;
  font-weight: bold;
  transform: translateY(3px);
  }
.MediaPlayer {
  height: 10vh;
  width: 100%;
  position: relative;
  border-radius: 10px;
  align-items: center;
}
.buttons{
  display:flex;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
