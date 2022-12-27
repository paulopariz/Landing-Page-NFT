<template>

  <nav >
    <div class="container">
      <img src="../../assets/images/ApolloNFT.svg" 
      data-aos="fade-right">

      <div 
        v-for="(obj) in nav"
        v-bind:key="obj"
      >

        <div>
          <ul data-aos="fade-down">

            <li>{{ obj.li }}</li>
            
          </ul>
        </div>

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
        nav: [{
          "li": "Drop"
        },
        {
          "li": "Marketplace"
        },
        {
          "li": "Creator"
        },
        {
          "li": "Community"
        }
      ]
      }
    }
  }
</script>


<style src="./nav.scss" lang="scss" />