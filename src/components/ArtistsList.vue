<template>
  <div class="list">
<div v-for="object in fetchSearchedArtists"
      :key="object.browseId">
   
      <div class="items"
        @click ="fetchArtistProfile(object.browseId)">
         <img class="image" v-bind:src="object.thumbnails[1].url" alt="" />  
        <span>{{ object.name }}</span> <br>

      </div>
    </div>
</div>
</template>

<script>
export default {
  name:"ArtistsList",
    props: ["object"],

  data(){},
  components:{},
 mounted(){},

  computed: {
    fetchSearchedArtists(){
      return this.$store.getters.getFetchedArtists;
    }
  },

  methods:{
    fetchArtistProfile(browseId){
      
      this.$router.push ({
      name: "ArtistProfile",
      params: { id:browseId}}) 
      this.$store.commit("setBrowseId", browseId)
      console.log( "state.browseId" , this.$store.state.browseId);
      this.$store.dispatch("fetchArtistProfile");

   
    }
  }
}
</script>

<style>

</style>