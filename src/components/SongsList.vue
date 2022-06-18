<template>
  <div class="list">
    <div v-for="object in fetchSearchedSongs" 
    :key="object.videoId">

      <div class="items" 
      @click ="passParams(object.videoId), 
      setCurrentSong(object.videoId), 
      play(object.videoId)">
      <img class="image" v-bind:src="object.thumbnails[1].url" alt="" />  
      <div class ="songData">
      <span>{{ object.name }}</span> <br>
      <span>{{ object.artist.name }}</span> <br> 
      <span>Album: {{ object.album.name }}</span> <br> 
      </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SongsList",
  props: ["object"],
  data(){
 return{
    videoId : null,
 };
},

  computed: {
    fetchSearchedSongs() {
      return this.$store.getters.getFetchedSongs;
    },
  },

  methods: {
   play(videoId) {
       window.player.loadVideoById(videoId);
    },

    passParams(videoId){
      this.$router.push ({
      name: "Songs",
      params: { id:videoId}}) 
    },

    setCurrentSong(videoId){
      this.$store.commit("setCurrentSong", videoId);
      console.log("store.state.currentSong",this.$store.state.currentSong)

    }
    
    
  },
};
</script>

<style>


.list {
  overflow-y: scroll;
  display: grid;
  grid-template-columns: auto auto auto;
  height: 60%;
  bottom:15%;
  position:fixed;
  width: 85%;
  border-bottom: 2px solid #96b8df;
}.list::-webkit-scrollbar {
    display: none;
}
.items {
  display:flex;
  background-color:#152238;
  height:120px;
  cursor: pointer;
  color: #96b8df;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #96b8df;
  border-left: 20px solid #4575be;
  padding: 5px;
  margin:5px;
}
.songData{
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
</style>
