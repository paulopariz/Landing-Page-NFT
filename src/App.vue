<template>
    <div class="container">

        <MyNav />

        <MyHeader />

        <div class="gallery">
            <h1 data-aos="fade-down">Super Hot Drop</h1>

            <MySlide />

            <div>
                <div class="cards">

                    <div class="container">
                        <div
                        v-for="(obj) in cards"
                        v-bind:key="obj"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        >
                        
                            <img
                            v-if="obj.card"
                            :src="obj.card"
                            >
                        </div>
                    </div>

                    <button>View More</button>
                </div>
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
            <h1 data-aos="fade-down">Create Your Sell NFT</h1>

            
                <section>

                    <div 
                        v-for="(obj) in createCards"
                        v-bind:key="obj"
                    >
                        <div class="cards-create-nft" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <img :src="obj.img">
                            <h2>{{ obj.title }}</h2>
                            <p>{{ obj.text }}</p>
                        </div>
                    
                    </div> 
                </section>
           

        </div>


        

    </div>

    <div>
        <div class="">
            <CardMen />
        </div>
    </div>


    <div class="container">
        <JoinCommunity 
            data-aos="fade-up" 
            data-aos-anchor-placement="center-bottom" 
        />

        <MyFooter />
    </div>

</template>

<script>
    import MyNav from './components/Nav/MyNav.vue'
    import MyHeader from './components/Header/MyHeader.vue'
    import MySlide from './components/Slide/MySlide.vue'
    import CardMen from './components/CardMen/CardMen.vue'
    import JoinCommunity from './components/Join/JoinCommunity.vue'
    import MyFooter from './components/Footer/MyFooter.vue'

    export default {
        name: 'App',

        components: {
    MyNav,
    MyHeader,
    MySlide,
    CardMen,
    JoinCommunity,
    MyFooter,
},

            data(){
                return{
                    cards: [{
                        "card": require("../src/assets/images/Cards/card1.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card2.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card3.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card4.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card5.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card6.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card7.svg"),
                        },
                        {
                        "card": require("../src/assets/images/Cards/card8.svg"),
                        },
                        
                    ],

                    createCards: [{
                        "img": require("../src/assets/images/Buy.svg"),
                        "title": "Connect Wallet",
                        "text": "This growth plan will help you reach your resolutions and achieve the goals you have been striving towards."
                    },
                    {
                        "img": require("../src/assets/images/Wallet.svg"),
                        "title": "NFT Marketplace",
                        "text": "This growth plan will help you reach your resolutions and achieve the goals you have been striving towards."
                    },
                    {
                        "img": require("../src/assets/images/Category.svg"),
                        "title": "Collect NFT",
                        "text": "This growth plan will help you reach your resolutions and achieve the goals you have been striving towards."
                    }
                ]
                }
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

        @media(max-width: 840px){
            .cards{
                .container{
                    grid-template-columns: 1fr 1fr 1fr;
                   
                    img{
                        margin: auto;
                    }
                }
                button {
                    width: 100% !important;
                    height: 58px;
                    font-size: 15px;
                }
            }
        }
        @media(max-width: 720px){
                .cards{
                    .container{
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;
                    }
                    
            }
        }
        @media(max-width: 576px){
            margin: auto;
            margin-top: 7rem;
            width: 95%;
            .cards{
                .container{
                    grid-template-columns: 1fr;
                    img{
                        width: 100%;
                    }
                }
                button {
                    width: 95% !important;
                    height: 51px;
                    font-size: 15px;
                }
            }
        }
    }

    .live-aucition {
        padding: 19px 0px;
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
            -webkit-text-stroke-color: #fff;
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

        @media(max-width: 768px){
            height: 146px;

            marquee{
                font-size: 88px;
                line-height: 110px;
            }
        }

        @media(max-width: 576px){
            height: 115px;

            marquee{
                font-size: 72px;
                line-height: 70px;
            }
        }
    }


    .partTwo {
        margin-top: 9.375rem;
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
        @media(max-width: 1200px){
            .container{
                section{
                    .cards-create-nft{
                        gap: 7px;
                        width: 19.5rem;
                        
                            h2{
                                font-size: 21px;
                            }
                            p{
                                font-size: 17px;
                            }
                        }
                    }
                }
            }

            @media(max-width: 992px){
                .container{
                    section{
                        display: grid;
                        gap: 20px;

                        .cards-create-nft{
                            gap: 17px;
                            margin: auto;
                            width: 90%;
                            padding: 35px;
                            h2{
                                font-size: 25px;
                            }
                            p{
                                font-size: 20px;
                            }
                        }
                    }
                }
            }

            @media(max-width: 576px){
                margin-top: 7rem;
                .container{
                    section{
                        flex-direction: column;
                        justify-content: center;

                        .cards-create-nft{
                            gap: 13px;
                            width: 95%;
                            height: 246px;
                            padding: 25px;

                            img{
                                width: 34px;
                                height: 34px;
                            }

                            h2{
                                font-size: 21px;
                            }
                            p{
                                font-size: 18px;
                            }
                        }
                    }
                    }
            }
        }
   


</style>