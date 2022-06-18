<template>
  
    <div class="main-view"  >

   <!-- <img class="image" v-bind:src="ArtistProfile.thumbnails[1].url"/>  -->
    <span id="title">{{ ArtistProfile.name }}</span> <br />
    <span class ="description">{{ ArtistProfile.description }}</span> <br />
    <span class ="description">Total views: {{ArtistProfile.views}}</span> <br />
    <div class="button-Wrapper"> 
<!--<router-link :to="'/songs/' + ArtistProfile.browseId">Get songs</router-link> -->
    <button class="fetch" @click="fetchAlbums(ArtistProfile.name)">Get Albums</button>
    <button class="fetch" @click ="fetchSongs(ArtistProfile.name)">Get random tracks</button>
   </div>
    </div>
</template>


<script>
export default {
  name: "ArtistProfile",
  props: ["object"],
  data() {
    return { 
      browseId : null,
      };
  },
    computed: {
    ArtistProfile() {
      return this.$store.getters.getArtistProfile;
    },
  },

  
  mounted(){
    if(this.$route.params.id){
  this.browseId = this.$route.params.id;
  console.log("this.id =>>> ", this.browseId);
  this.$store.commit("setBrowseId", this.browseId);


}
  },

  methods:{
    fetchSongs(name){
      console.log("button clicked");
      this.$store.commit("setSearchPhrase", name);
     this.$store.dispatch("fetchSongsBySearchPhrase");
      this.$router.push ({
      name: "Songs",
      }) 
},

 fetchAlbums(name){
    
      this.$store.commit("setSearchPhrase", name);
      this.$store.dispatch("fetchAlbumsBySearchPhrase");
      this.$router.push ({
      name: "Albums",
      params: { name:name}
      }) 
}


  }

};
</script>

<style scoped>


#title{
  font-weight: bold;
  font-size:40px;
  color:aliceblue;
}
.description{
  color:aliceblue;
}
.button-Wrapper{
  margin-top:5px;
}

.fetch{
      text-decoration: none;
      margin-left:5px;
      font-size: 100%;
      cursor: pointer;
      font-weight: bold;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 10px;
      height: 35px;
      background-color: #02212b;
      color: rgba(161, 210, 214, 0.973);
      box-shadow: #000000;
}

.fetch:hover{
  background-color: rgba(161, 210, 214, 0.973);
  color: #02212b;
  font-weight: bold;
}

</style>
