<template>
<div>
    <div class="eclipse1" />
    <div class="eclipse2" />


    <header>

        <div class="left">
            <div class="title">
                <h1 data-aos="fade-right">
                    Create Your<br>
                    Own <span>NFT Dream</span>
                    <div class="star">
                        Gallery
                        <img 
                            src="../../assets/images/Star1.svg"
                            data-aos="flip-right"  data-aos-delay="700"
                        >
                    </div>
                </h1>
            </div>
            <div class="button-text">
                <button data-aos="fade-right" data-aos-delay="650">
                    Discover NFT
                </button>

                <p data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000">The Larges NFT Marketplace. Automatic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technologi</p>
            </div>
        </div>

        <div class="right">
            <img 
                src="../../assets/images/imgHeader.png"
                data-aos="fade-left"
            >
        </div>

    </header>

    <div class="numbers" >
        <ul >
            <li>
                <span>Artwork</span>
                <h2>{{ percent }}k</h2>
            </li>
            <li>
                <span>Artist</span>
                <h2>{{ percentTwo }}k</h2>
            </li>
            <li>
                <span>Aucition</span>
                <h2>{{ percentThree }}k</h2>
            </li>
        </ul>
    </div>

    <div class="company" data-aos="fade-up">
        <div 
        v-for="(obj) in companys"
        v-bind:key="obj"
        >

            <img 
            v-if="obj.img" 
            :src="obj.img" 
            :alt="obj.name">

        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'MyHeader',

    data() {
        return {
            companys: [{
                    "img": require("../../assets/images/Company/coinbaseLogo.svg"),
                    "name": "Coinbase"
                },
                {
                    "img": require("../../assets/images/Company/spotifyLogo.svg"),
                    "name": "Spotify"
                },
                {
                    "img": require("../../assets/images/Company/slackLogo.svg"),
                    "name": "Slack"
                },
                {
                    "img": require("../../assets/images/Company/dropboxLogo.svg"),
                    "name": "Dropbox"
                },
                {
                    "img": require("../../assets/images/Company/webflowLogo.svg"),
                    "name": "Webflow"
                },
                {
                    "img": require("../../assets/images/Company/zoomLogo.svg"),
                    "name": "Zoom"
                },
            ],
            percentage: 0,
            percentagetwo: 0,
            percentagethree: 0,

        }
    },
    computed: {
        percent(){
            return this.percentage.toFixed();
        },
        percentTwo(){
            return this.percentagetwo.toFixed();
        },
        percentThree(){
            return this.percentagethree.toFixed();
        },
        
    },
    created() {

        var intval = setInterval(() => {
            if(this.percentage <= 74)
                this.percentage += .3200
                else
                    clearInterval(intval);
        }, 20);


        var intvalTwo = setInterval(() => {
            if(this.percentagetwo <= 82)
                this.percentagetwo += .3600
                else
                    clearInterval(intvalTwo);
        }, 20);


        var intvalThree = setInterval(() => {
            if(this.percentagethree <= 85)
                this.percentagethree += .3800
                else
                    clearInterval(intvalThree);
        }, 20);
        
        
    },
}
</script>

<style src="./header.scss" lang="scss" />
