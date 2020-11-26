<template>
    <b-col cols="6" md="3" lg="2" id="item-image-border-box-4"
           data-aos="zoom-in"
           data-aos-offset="120"
           data-aos-duration="500"
    >
        <b-card
                :img-src=linkImage
                :img-alt=this.text
                :img-title=this.text
                align="center"
                img-top
                tag="article"
                style="border: none;"
                class="image-box-shadow-style"
                :class="classStyle"
        >
            <b-card-text>
                {{text}}
            </b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "ItemImageBorderBox6",
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
