<template>
  <img alt="Vue logo" src="./assets/images/logo.png">
  <MayNav msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MayNav from './components/Nav/MyNav.vue'

export default {
  name: 'App',
  components: {
    MayNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
