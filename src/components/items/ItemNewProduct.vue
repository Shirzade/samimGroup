<template>
    <b-col cols="12" id="item-new-product">
        <b-img :src="productImage" fluid :alt=subTitle :title=subTitle></b-img>
        <h3>{{title}}</h3>
        <h4>{{subTitle}}</h4>
        <!--<p>-->
            <!--{{description}}-->
        <!--</p>-->
    </b-col>
</template>

<script>
    export default {
        name: "ItemNewProduct",
        data() {
            return {
                show: false,
                productImage: require('../../assets/img/' + this.category + '/' + this.image),
            }
        },
        methods: {
            getProductImage() {
                this.show = true
            }
        },
        props: {
            title: String,
            subTitle: String,
            description: String,
            image: String,
            category: String,
            during: Number
        },
        created() {
            setTimeout(this.getProductImage(), 10000);
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemNewProductStyle";

    .slide-fade-enter-active {
        transition: all .80s ease-out;
    }


    .slide-fade-enter-to{
        opacity: 1;
    }

    .slide-fade-leave{
        transform: translateY(-50px);
        opacity: 1;
    }

    .slide-fade-leave-active {
        /*transition: all .80s ease-out;*/
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateY(50px);
        opacity: 0;
    }

</style>
