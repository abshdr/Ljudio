<template>
<div class="main-view">
  <div class="input">
  <input id="Search" 
          v-on:keyup.enter="setSearchPhraseAndFetchArtists(phrase)"
          type="text"
          placeholder="Search for artists"
          v-model="phrase"  /> 
          <button id= "SearchButton" @click="setSearchPhraseAndFetchArtists(phrase)">Search</button>
          </div>
          <ArtistsList />
  </div>
</template>

<script>
import ArtistsList from '../components/ArtistsList.vue'

export default {
  name:"Artists",
    props: ["object"],

  data(){},
  components:{
    ArtistsList
  },
  mounted(){},
  computed: { },
  methods:{

    setSearchPhraseAndFetchArtists(phrase){
      this.$store.commit("setSearchPhrase", phrase);
      this.$store.dispatch("fetchArtistsBySearchPhrase");

    }
  }
}
</script>

<style >


</style>