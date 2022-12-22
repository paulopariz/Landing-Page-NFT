<template>
  <div class="container">

    <MyNav />

    <MyHeader />


    <div class="gallery">
      <h1>Super Hot Drop</h1>

      <MySlide />
      
    </div>
    
  </div>
</template>

<script>
import MyNav from './components/Nav/MyNav.vue'
import MyHeader from './components/Header/MyHeader.vue'
import MySlide from './components/Slide/MySlide.vue'


export default {
  name: 'App',

  components: {
    MyNav,
    MyHeader,
    MySlide
  }
}
</script>




<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800&display=swap');

/*RESET*/
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


/*CONTENT*/

.gallery{
  margin-top: 9.0625rem;
  h1{
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -0.02em;
  }
}

</style>
