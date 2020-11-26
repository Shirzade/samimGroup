<template>
    <b-col cols= "12" md= "6" lg= "3" id="item-image-border-box-4"
            data-aos= "fade-up"
            data-aos-offset= "200"
            data-aos-duration= "1000"
            >
        <b-card
            :img-src= linkImage
            :img-alt= this.text
            align= "center"
            img-top
            tag= "article"
            style= "border: none;"
            class= "image-box-shadow-style"
            :class= "classStyle"
        >
            <b-card-text>
                {{text}}
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "ItemImageBorderBox4",
        data() {
            return {
                linkImage: require("../../assets/img/pages/" + this.image)
            }
        },
        props: {
            text: String,
            image: String,
            classStyle: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemImageBorderBoxStyle";
</style>
