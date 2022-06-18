<template>
  <div>
    <div class="main-Wrapper">
      <SideNavbar />

      <div class="Logo">
        <Logo />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from "./components/SideNavbar.vue";
import Logo from "./components/Logo.vue";

export default {
  name: "App",
  components: {
    SideNavbar,
    Logo,
  },
};
</script>

<style>
.main-Wrapper {
  display: flex;
  flex-direction: row;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-image: linear-gradient(to right,  #01030b, #04071f);  
  min-height: 100vh;
}

.Logo {
  padding-left: 0;
  width: 100%;

}
</style>
