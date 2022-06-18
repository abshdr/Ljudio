import { createStore } from "vuex";
import axios from 'axios';


export default createStore({
  state: {
    searchPhrase:'',
    fetchedSongs:[],
    fetchedArtists:[],
    fetchedAlbums:[],
    browseId: '',
    artistProfile:[],
    currentSong:'',
    audioSwitch: true,


  },

  mutations: {
    setSearchPhrase(state, payload){
      state.searchPhrase = payload;
    },
    setSongsBySearchPhrase(state, payload){
      state.fetchedSongs = payload;
    },
    setSongsByAlbum(state, payload){
      state.fetchedSongs = payload;
    },
    setArtistsBySearchPhrase(state, payload){
      state.fetchedArtists = payload;
    },
    setAlbumsBySearchPhrase(state, payload){
      state.fetchedAlbums = payload;
    },
    setBrowseId(state, payload){
      state.browseId = payload;
    },
    setArtistProfile(state, payload){
      state.artistProfile = payload;
    },
    setCurrentSong(state, payload){
      state.currentSong = payload;
    },
    setAudioSwitch(state,payload){
      state.audioSwitch = payload;
     },
     



  },
  getters: {
    getFetchedSongs(state){
      return state.fetchedSongs;
    },
    getFetchedArtists(state){
      return state.fetchedArtists;
    },
    getFetchedAlbums(state){
      return state.fetchedAlbums;
    },
    getArtistProfile(state){
      return state.artistProfile;
    },
    getCurrentSong(state){
      return state.currentSong
   },
   

            

  },


  actions: {
    async fetchSongsBySearchPhrase() {
      await axios.get("http://localhost:4000/api/yt/songs/" + this.state.searchPhrase)
        .then(response => {
          this.commit("setSongsBySearchPhrase", response.data.content)
          console.log(response.data.content);
        })
    },




    

    async fetchSongsByAlbum() {
      await axios.get("http://localhost:4000/api/yt/album/" + this.state.browseId)
        .then(response => {
          this.commit("setSongsByAlbum", response.data.tracks)
          console.log(response.data.tracks);
        })
    },
    async fetchAlbumsBySearchPhrase() {
      await axios.get("http://localhost:4000/api/yt/albums/" + this.state.searchPhrase)
        .then(response => {
          this.commit("setAlbumsBySearchPhrase", response.data.content)
          console.log(response.data.content);
        })
    },




    async fetchArtistsBySearchPhrase() {
      await axios.get("http://localhost:4000/api/yt/artists/" + this.state.searchPhrase)
        .then(response => {
          this.commit("setArtistsBySearchPhrase", response.data.content)
          console.log(response.data.content);
        })
    },

    

    async fetchArtistProfile() {
      await axios.get("http://localhost:4000/api/yt/artist/" + this.state.browseId)
        .then(response => {
          this.commit("setArtistProfile", response.data)
          console.log(response.data);
        })
    },
  },
  
});
