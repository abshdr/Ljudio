<template>
  <div class="Sidebar-Wrapper">
    <ul>
      <li class ="router-components">
        <router-link style="text-decoration: none;  color: inherit;" 
        to = '/songs'><span>Songs</span>
        </router-link>
      </li>
      
      
      <li class ="router-components"> 
        <router-link style="text-decoration: none; color: inherit;" 
        to = '/albums' ><span>Albums</span></router-link>
        </li>
        
      <li class ="router-components">
        <router-link style="text-decoration: none; color: inherit;" 
        to = '/artists'><span>Artists</span></router-link>    
      </li> 
     
      
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-left:5px;
    padding-top:100px;
}
li{
   list-style: none;
    position: relative;
    height: 50px;
    line-height: 50px;
    border-radius: 20px 0 0 20px;
    padding: 10px 0 10px 20px;
}
.Sidebar-Wrapper{
    position: relative;
    width: 150px;
    height: 100%;
    background: #000000;
    overflow-x: hidden;
    border-right: 10px solid #030303;
    transition: width 0.5s;
}:hover{
  width:200px;
}
.router-components{
  padding-bottom:10px; 
  height: 10px;
  margin-bottom: 30px;
  color: #4575be;
  font-weight: bold;
  font-size: 16px;
}:hover{
  color: rgb(255, 255, 255);
}


</style>