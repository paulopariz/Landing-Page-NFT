<template>
  <div class="container">
    <MayNav />
  </div>
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


<!--RESET-->
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color: #fff;
    font-family: 'Inter', sans-serif;
}

button{
    border:0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
}

a{
    text-decoration: none;
}

img{
    max-width: 100%;
    display: block;
}

body{
  background: #110929;
}
</style>
