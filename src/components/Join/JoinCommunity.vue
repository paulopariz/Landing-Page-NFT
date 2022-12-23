<template>
    <div class="join">
        <div class="eclipseJoin1" />
        <div class="eclipseJoin2" />

        <section>
            <h1>Joint Our Community</h1>
            <button>Get Started</button>
        </section>

        <div class="eclipseJoin3" >
            <img class="bnb" :src="bnb">
            <img class="eth" :src="eth">
            <img class="btc" :src="btc">
        </div>

        
    </div>
</template>


<script>
export default{
    name: 'JoinCommunity',

    data(){
        return{
            btc: require("../../assets/images/BTC.svg"),
            eth: require("../../assets/images/ETH.svg"),
            bnb: require("../../assets/images/BNB.svg"),
        }
    }
}

</script>

<style src="./join.scss" lang="scss" scoped />