<template>
    
    <div class="cardsMen">
        <div class="container">
            <h1 data-aos="fade-down">Creator of The Week</h1>
            <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div
                v-for="(obj) in names"
                v-bind:key="obj">
                    <div class="group-creator">
                        <div class="">
                            <img v-if="obj.img" :src="obj.img" />
                        </div>
                        <div>
                            <h2>{{ obj.name }}</h2>
                            <span>{{ obj.numbers }}</span>
                        </div>
                    </div>
                </div>
            </section>
            <div class="btn">
                <button>Watch Video</button>
            </div>
        </div>
    </div>


</template>


<script>
    export default {
        name: 'CardMen',

        data() {
            return {
                names: [{
                        "name": "Eka Prakasa",
                        "img": require("../../assets/images/Mens/men1.png"),
                        "numbers": "14.5K"
                    },
                    {
                        "name": "Emil Tirtayasa Sinaga ",
                        "img": require("../../assets/images/Mens/men2.png"),
                        "numbers": "14.2K"
                    },
                    {
                        "name": "Dodo Opung Utama",
                        "img": require("../../assets/images/Mens/men3.png"),
                        "numbers": "13.7K"
                    },
                    {
                        "name": "Emil Nainggolan",
                        "img": require("../../assets/images/Mens/men4.png"),
                        "numbers": "13.2K"
                    },
                    {
                        "name": "Eja Nainggolan",
                        "img": require("../../assets/images/Mens/men5.png"),
                        "numbers": "13.1K"
                    },
                    {
                        "name": "Among Suryono",
                        "img": require("../../assets/images/Mens/men6.png"),
                        "numbers": "13.0K"
                    }
                ]
            }
        }
    }
</script>



<style src="./cardMen.scss" lang="scss" scoped />