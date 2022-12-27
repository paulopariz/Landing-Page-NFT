<template>
    <div class="NavMobile">
        <button 
            data-aos="flip-right"
            data-aos-delay="150" 
            type="button" 
            @click="toggle()"
        >
            <img src="../../assets/images/hambuguer.svg" alt="">

        </button>

        <div v-show="open">

                <ul class="drop">
                    <li>Drop</li>
                    <li>Marketplace</li>
                    <li>Creator</li>
                    <li>Community</li>
                    <li class="contactDrop">Contact Us</li>
                </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavMobile',

        data() {
            return {
                open: false,
            }
        },

        methods: {
            toggle() {
                this.open = !this.open;
            }
        },

    }
</script>


<style src="./nav.scss" lang="scss" />