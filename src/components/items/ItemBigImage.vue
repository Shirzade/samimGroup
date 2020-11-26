<template>
    <b-col cols="12" id="item-big-image"
            data-aos="fade-up"
            data-aos-duration="1000"
    >
        <img :src="productImage" class= "img-fluid" alt="شرکت صمیم">
    </b-col>
</template>

<script>
    export default {
        name: "ItemBigImage",
        data() {
            return {
                productImage: require('../../assets/img/' + this.image),
            }
        },
        props: {
            image: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemBigImageStyle";
</style>
