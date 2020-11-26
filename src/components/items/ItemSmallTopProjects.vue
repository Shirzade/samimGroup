<template>
    <b-row id="item-small-top-projects">
        <b-col cols="8">
            <app-title :title=title classStyle="item-small-top-projects-title"></app-title>
        </b-col>
        <b-col cols="4">
            <img :src=titleImage alt="گروه صمیم">
        </b-col>
    </b-row>
</template>

<script>
    import AppTitle from "../titles/AppTitle";

    export default {
        name: "ItemSmallTopProjects",
        components: {AppTitle},
        data() {
            return {
                titleImage: require("../../assets/img/top-projects/" + this.image)
            }
        },
        props: {
            image: String,
            title: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemSmallTopSectionStyle";
</style>
