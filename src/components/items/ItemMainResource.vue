<template>
    <b-card id="item-main-resource"
            class="overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000">
        <b-row no-gutters>
            <b-col md="1">
                <b-card-img :src=imageSrc class="rounded-0" :alt=title></b-card-img>
            </b-col>
            <b-col md="11">
                <b-card-body class="main-resrc">
                    <b-card-text>
                        <b-row style="">
                            <b-col md="5">
                                <app-title :title=title classStyle="resrc-title"></app-title>
                            </b-col>
                            <b-col md="7">
                                <span><a rel="nofollow" :href=resrcLink class="resrc-link">دریافت PDF کاتالوگ</a></span><span
                                    dir="ltr">{{size}}</span> - {{date}}
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    import AppTitle from "../titles/AppTitle";

    export default {
        name: "ItemMainResource",
        data() {
            return {
                imageSrc: require("../../assets/img/catalogs/" + this.image),
                resrcLink: 'https://res.cloudinary.com/samimco/image/upload/' + this.link
            }
        },
        components: {
            AppTitle,
        },
        props: {
            image: String,
            title: String,
            link: String,
            size: String,
            date: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemMainResourceStyle";
</style>
