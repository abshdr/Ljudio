<template>
  <div class="list">
<div v-for="object in fetchSearchedAlbums "
      :key="object.browseId">
   
      <div class="items" @click="fetchSongsByAlbum(object.browseId)">
        <span>Album title: {{ object.name }}</span> <br>
          <span>By : {{ object.artist }}</span> <br>
          <span>{{object.type}}</span> <br>
          <span>{{object.browseId}}</span> <br>

      </div>
    </div>
</div>
</template>

<script>
export default {
  name:"AlbumsList",
  data(){
    return{
      type:"album"
    }
  },
  components:{},
  mounted(){},

  computed: {
    fetchSearchedAlbums(){
      return this.$store.getters.getFetchedAlbums;
    },

   
  },

  methods:{

    fetchSongsByAlbum(browseId){
    
      this.$store.commit("setBrowseId", browseId);
      this.$store.dispatch("fetchSongsByAlbum");
      console.log(this.$store.state.browseId)
      this.$router.push ({
      name: "Songs",
      }) 
}}
}
</script>

<style scoped>
.items{
display: flex;
}
</style>