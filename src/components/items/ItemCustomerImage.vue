<template>
    <b-col cols="6" md="3" lg="2" id="item-customer-image">
        <transition-group name="list">
            <div style="position: absolute" key="1" v-if=show>
                <img :src="firstCustomerImage" alt="مشتریان گروه صمیم" title="مشتریان گروه صمیم">
            </div>
            <div style="position: absolute" key="0" v-if=!show>
                <img :src="secondCustomerImage" alt="مشتریان گروه صمیم" title="مشتریان گروه صمیم">
            </div>
        </transition-group>
    </b-col>

</template>

<script>
    export default {
        name: "ItemCustomerImage",
        data() {
            return {
                firstCustomerImage: require('../../assets/img/customers/home-page/' + this.firstImage),
                secondCustomerImage: require('../../assets/img/customers/home-page/' + this.secondImage),
                show: true,
            }
        },
        methods: {
            changeState() {
                setInterval(() => {
                    if (this.show) {
                        this.show = false
                    } else {
                        this.show = true
                    }
                }, this.during);
            },
        },
        props: {
            firstImage: String,
            secondImage: String,
            animClass: String,
            during: Number
        },
        created() {
            this.changeState()
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemCustomerImageStyle";

    /*.slide-fade-enter-active {*/
    /*transition: all .600s ease;*/
    /*}*/

    /*.slide-fade-leave-active {*/
    /*transition: all .800s ease;*/
    /*}*/

    /*.slide-fade-leave {*/
    /*transform: translateY(50px);*/
    /*}*/

    /*.slide-fade-leave-to {*/
    /*transform: translateY(50px);*/
    /*opacity: 0;*/
    /*}*/

    /*.slide-fade-enter {*/
    /*transform: translateY(50px);*/
    /*opacity: 1;*/

    /*}*/


    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        /*opacity: 0;*/
        transform: translateY(120px);
    }

</style>



