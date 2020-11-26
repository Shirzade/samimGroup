<template>
    <div id="item-small-customer" data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-sine"
         data-aos-mirror="true"
         data-aos-offset="300"
         data-aos-once="true">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <img :src="customerImage" alt="گروه صمیم" class="img-fluid">
                    <app-title :title=firstTitle classStyle="first-title-small-customer"></app-title>
                    <app-title :title=secondTitle class-style="second-title-small-customer"></app-title>
                    <p>
                        {{text}}
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import AppTitle from "../titles/AppTitle";

    export default {
        components: {AppTitle},
        data() {
            return {
                customerImage: require('../../assets/img/customers/person/' + this.image),
            }
        },
        props: {
            image: String,
            firstTitle: String,
            secondTitle: String,
            text: String
        },
        name: "ItemSmallCustomer"
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemSmallCustomerStyle";
</style>
