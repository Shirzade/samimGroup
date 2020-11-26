<template>
    <b-card no-body class="overflow-hidden" @click="linkToLinkedin(link)" id="item-blog-instagram">
        <b-row no-gutters>
            <b-col cols="12" lg="7" md="7" order="12" order-lg="1">
                <b-card-body>
                    <b-card-text class="text-instagram">
                        {{text}}
                    </b-card-text>
                    <div class="container-date">{{date}}</div>
                </b-card-body>
            </b-col>
            <b-col cols="12" lg="5" md="5" order="1" order-lg="12">
                <b-card-img :src=linkPostImage :alt=text></b-card-img>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "ItemBlogInstagram",
        data() {
            return {
                linkPostImage: require("../../assets/img/pages/blog/instagram/" + this.linkImage)
            }
        },
        methods: {
            linkToLinkedin(link) {
                switch (link) {
                    case "1":
                        location.href = 'https://www.linkedin.com/posts/samimgroup_%DA%AF%D8%B1%D9%88%D9%87-%D8%B5%D9%85%DB%8C%D9%85-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-%D8%B1%D8%B3%D8%A7%D9%86%D9%87-%D9%88-%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7%D8%A7%D8%AA-%D8%B5%D9%85%DB%8C%D9%85-activity-6636974758879653888-WXBb'
                        break
                    case "2":
                        location.href = 'https://www.linkedin.com/feed/update/urn:li:activity:6637603689769037824/'
                        break
                    case "3":
                        location.href = 'https://www.linkedin.com/posts/samimgroup_%DA%AF%D8%B1%D9%88%D9%87-%D8%B5%D9%85%DB%8C%D9%85-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-%D8%B1%D8%B3%D8%A7%D9%86%D9%87-%D9%88-%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7%D8%A7%D8%AA-%D8%B5%D9%85%DB%8C%D9%85-activity-6639841571971874816--F8R'
                        break
                }
            }
        },
        props: {
            linkImage: String,
            text: String,
            link: String,
            date: String
        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemBlogInstagramStyle";
</style>
