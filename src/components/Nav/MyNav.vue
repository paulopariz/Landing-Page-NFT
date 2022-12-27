<template>

  <nav >
    <div class="container">
      <img src="../../assets/images/ApolloNFT.svg" 
      data-aos="fade-right">

      <div>
        <ul data-aos="fade-down">
          <li>Drop</li>
          <li>Marketplace</li>
          <li>Creator</li>
          <li>Community</li>
        </ul>
      </div>

      <section>
        <button class="contact" 
        data-aos="fade-left">
          Contact Us
        </button>
        <NavMobile />
      </section>
    </div>
  </nav>


</template>

<script>
  import NavMobile from './NavMobile.vue'

  export default {
    name: 'MyNav',

    components: {
      NavMobile
    },

    data() {
      return {

      }
    }
  }
</script>


<style src="./nav.scss" lang="scss" />