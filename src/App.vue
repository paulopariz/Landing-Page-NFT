<template>
    <div class="container">

        <MyNav />

        <MyHeader />

        <div class="gallery">
            <h1>Super Hot Drop</h1>

            <MySlide />

            <div class="cards">
                <div class="container">
                    <img src="./assets/images/Cards/card1.png">
                    <img src="./assets/images/Cards/card2.png">
                    <img src="./assets/images/Cards/card3.png">
                    <img src="./assets/images/Cards/card5.png">
                    <img src="./assets/images/Cards/card5.png">
                    <img src="./assets/images/Cards/card6.png">
                    <img src="./assets/images/Cards/card7.png">
                    <img src="./assets/images/Cards/card8.png">
                </div>

                <button>View More</button>
            </div>
        </div>

    </div>

    <div class="live-aucition">

        <marquee scrollamount="20">
            <div>
                <section>
                    LIVE AUCITION
                    <img src="./assets/images/Star2.svg">
                </section>
                <section>
                    LIVE AUCITION
                    <img src="./assets/images/Star2.svg">
                </section>
                <section>
                    LIVE AUCITION
                    <img src="./assets/images/Star2.svg">
                </section>
                <section>
                    LIVE AUCITION
                    <img src="./assets/images/Star2.svg">
                </section>
            </div>
        </marquee>

    </div>


    <div class="partTwo">
        <div class="container">
            <h1>Create Your Sell NFT</h1>

            <section>
                <div class="cards-create-nft">
                    <img src="../src/assets/images/Wallet.svg">
                    <h2>Connect Wallet</h2>
                    <p>This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.</p>
                </div>
                <div class="cards-create-nft">
                    <img src="../src/assets/images/Buy.svg">
                    <h2>NFT Marketplace</h2>
                    <p>This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.</p>
                </div>
                <div class="cards-create-nft">
                    <img src="../src/assets/images/Category.svg">
                    <h2>Collect NFT</h2>
                    <p>This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.</p>
                </div>
            </section>

        </div>


        

    </div>

    <div>
        <div class="container">
            <CardMen />
        </div>
    </div>


    <div class="container">
        <JoinCommunity />
    </div>

</template>

<script>
    import MyNav from './components/Nav/MyNav.vue'
    import MyHeader from './components/Header/MyHeader.vue'
    import MySlide from './components/Slide/MySlide.vue'
    import CardMen from './components/CardMen/CardMen.vue'
    import JoinCommunity from './components/Join/JoinCommunity.vue'

    export default {
        name: 'App',

        components: {
            MyNav,
            MyHeader,
            MySlide,
            CardMen,
            JoinCommunity,
    
}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
    @import "./assets/scss/index.scss";

    /*RESET*/
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        color: #fff;
        font-family: 'Inter', sans-serif;
    }

    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    body {
        background: #110929;
    }

    /*CONTENT*/

    .gallery {
        margin-top: 9.0625rem;

        h1 {
            @include titles;
        }

        .cards {
            margin: auto;
            text-align: center;
            margin-top: 2.9375rem;

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                column-gap: 15px;
                row-gap: 22px;
                margin-bottom: 55px;
            }

            button {
                @include buttons;

            }
        }
    }

    .live-aucition {
        padding: 19px 0px;
        gap: 22px;
        position: relative;
        width: 100%;
        height: 184px;
        margin-top: 100px;
        background: linear-gradient(159deg, #8D1CFE 29.4%, #0038ED 105.15%);

        marquee {
            font-weight: 800;
            font-size: 150px;
            line-height: 146px;
            letter-spacing: -0.02em;
            -webkit-text-stroke-width: 5px;
            /* largura da borda */
            -webkit-text-stroke-color: #fff;
            /* cor da borda */
            -webkit-text-fill-color: transparent;

            div {
                display: flex;
                gap: 130px;

                section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 50px;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }
    }


    .partTwo {
        margin-top: 150px;
        .container{   
            h1 {
                @include titles;
            }
            section{
                margin-top: 2.1875rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .cards-create-nft{
                    @include createNft;
                }
            }
        }
    }

</style>