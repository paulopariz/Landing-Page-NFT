<template>
    <footer>  
        <div class="container">
            <div class="left" >
                <img src="../../assets/images/ApolloNFT.svg" 
                    alt="LOGO" 
                    class="logo"
                    data-aos="fade-right"
                >
                <p data-aos="fade-right" data-aos-delay="150">{{ text }}</p>
                <div class="icons">
                    <div
                        v-for="(obj) in footer"
                        v-bind:key="obj"
                    >
                        <img
                            v-if="obj"
                            :src="obj.logo"
                            :alt="obj.name"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                    </div>
                </div>
            </div>
            <div class="right" >
                <ul data-aos="fade-up">
                    <h2>Marketplace</h2>
                    <li>Buy Product</li>
                    <li>Sell Product</li>
                    <li>Our Creator</li>
                </ul>
                <ul data-aos="fade-up" data-aos-delay="150">
                    <h2>Resources</h2>
                    <li>About Us</li>
                    <li>Event</li>
                    <li>Tutorial</li>
                </ul>
                <ul data-aos="fade-up" data-aos-delay="200">
                    <h2>Company</h2>
                    <li>Media</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                </ul>
                <ul data-aos="fade-up" data-aos-delay="250">
                    <h2>Legal</h2>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>

        <div class="copyright">    
            <h1>© 2077 ApolloNFT. All rights reserved.</h1>
        </div>    
    </footer>
</template>

<script>
    export default {
        name: 'MyFooter',

        data() {
            return {
                text: 'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.',

                footer: [{
                    "logo": require("@/assets/images/Footer-icons/twitter.svg"),
                    "name": "Twitter"
                },
                {
                    "logo": require("@/assets/images/Footer-icons/linkedin.svg"),
                    "name": "Linkdin"
                },
                {
                    "logo": require("@/assets/images/Footer-icons/facebook.svg"),
                    "name": "Facebook"
                },
                {
                    "logo": require("@/assets/images/Footer-icons/github.svg"),
                    "name": "Github"
                },
                {
                    "logo": require("@/assets/images/Footer-icons/icon.svg"),
                    "name": ""
                },
                {
                    "logo": require("@/assets/images/Footer-icons/dribbble.svg"),
                    "name": "Dribbble"
                },
            ]
            }
        }
    }
</script>

<style src="./footer.scss" lang="scss" scoped />