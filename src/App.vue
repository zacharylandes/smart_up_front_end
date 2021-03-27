<template>
  <div id="app">
    <nav >
      <h4>Smart up! </h4>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Tinsel_the_cat%2C_wearing_glasses.jpg"/>
      <h4><router-link :to="{path: '/'}">Home</router-link></h4>
    </nav>
    <div class='container'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  margin-top:10rem;
}
nav{
 display:flex;
}
img{
  width:6rem;
}
</style>
