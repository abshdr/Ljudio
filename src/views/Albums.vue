<template>
<div class="main-view">

 <div class="input">
  <input id="Search" 
          v-on:keyup.enter="setSearchPhraseAndFetchAlbums(phrase)"
          type="text"
          placeholder="Search for albums"
          v-model="phrase"  /> 
          <button id= "SearchButton" @click="setSearchPhraseAndFetchAlbums(phrase)">Search</button>
      </div>
          <AlbumsList />
  </div>
</template>

<script>
import AlbumsList from '../components/AlbumsList.vue'

export default {
  name:"Albumts",
  data(){},
  components:{
    AlbumsList
  },
  mounted(){},
  computed: { },
  methods:{

    setSearchPhraseAndFetchAlbums(phrase){
      this.$store.commit("setSearchPhrase", phrase);
      this.$store.dispatch("fetchAlbumsBySearchPhrase");

    }
  }
}
</script>

<style >

</style>