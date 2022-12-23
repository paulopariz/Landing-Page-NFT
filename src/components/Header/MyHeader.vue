<template>
<div>
    <div class="eclipse1" />

    <header>

        <div class="left">
            <div class="title">
                <h1>
                    Create Your<br>
                    Own <span>NFT Dream</span>
                    <div class="star">
                        Gallery
                        <img src="../../assets/images/Star1.svg"></div>
                </h1>
            </div>
            <div class="button-text">
                <button>
                    Discover NFT
                </button>

                <p>The Larges NFT Marketplace. Automatic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technologi</p>
            </div>
        </div>

        <div class="right">
            <img src="../../assets/images/imgHeader.png" alt="">
        </div>

    </header>

    <div class="numbers">
        <ul>
            <li>
                <span>Artwork</span>
                <h2>25.1k</h2>
            </li>
            <li>
                <span>Artist</span>
                <h2>15.6k</h2>
            </li>
            <li>
                <span>Aucition</span>
                <h2>10.2k</h2>
            </li>
        </ul>
    </div>

    <div class="company">
        <div
        v-for="(obj) in companys"
        v-bind:key="obj"
        >
            <img
            v-if="obj.img"
            :src="obj.img">
        
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
                },
                {
                "img": require("../../assets/images/Company/spotifyLogo.svg"),
                },
                {
                "img": require("../../assets/images/Company/slackLogo.svg"),
                },
                {
                "img": require("../../assets/images/Company/dropboxLogo.svg"),
                },
                {
                "img": require("../../assets/images/Company/webflowLogo.svg"),
                },
                {
                "img": require("../../assets/images/Company/zoomLogo.svg"),
                },
            ]
        }
    }
}
</script>

<style src="./header.scss" lang="scss" />
