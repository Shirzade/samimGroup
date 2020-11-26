<template>
    <b-col id="item-blog-page"
           cols="12"
           md="6"
           lg="6">
        <router-link :to="{ name: 'singleBlog', params: {id: cleanUrl(postTitle,postUrl)} }" tag="a">
            <b-card
                    @click="goSinglePage(postTitle,postType,postUrl)"
                    @click.middle="goSinglePage(postTitle,postType,postUrl)"
                    :img-src=linkImage
                    class="container-card"
                    :img-alt=postTitle
                    img-top
                    tag="article">
                <b-container>
                    <b-row align-v="start">
                        <h2 class="title-blog">
                            {{postTitle}}
                        </h2>
                    </b-row>


                    <b-row align-v="center">
                        <p class="text-blog">
                            {{postText}}
                        </p>
                    </b-row>
                    <b-row class="container-data" align-v="end" align-h="between">
                        <b-col cols="6">
                            <div class="container-date">
                                <span>  تاریخ انتشار :</span>
                                <span>{{ postDate.substring(0,10) | moment("jYYYY/jM/jD") }} </span>
                            </div>
                        </b-col>
                        <b-col cols="6" class="container-more">
                            <div class="more-link">ادامه مطلب</div>
                        </b-col>
                    </b-row>
                </b-container>

            </b-card>
        </router-link>
    </b-col>
</template>

<script>
    import {api} from "../../utils/api"
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ItemBlogPage",
        data() {
            return {
                linkImage: api.MAIN_URL + api.URL_IMAGE_BLOG_FIRST_SECTION + this.postImage + api.URL_IMAGE_BLOG_SECOND_SECTION + '/491x242'
            }
        },
        props: {
            postTitle: String,
            postText: String,
            postImage: String,
            postType: String,
            postDate: String,
            postUrl: String,
            during: Number
        },
        computed: {
            ...mapGetters([
                'getContentBlogType'
            ]),
        },
        methods: {
            ...mapActions([
                'setContentBlogType'
            ]),
            cleanUrl(title, url) {
                if (url) {
                    return url.replace(/ /g, '-')
                } else {
                    return title.replace(/ /g, '-')
                }
            },
            goSinglePage(postId, postType, postUrl) {


                if (postType == "WIKI") {
                    this.$router.push({name: 'singleWiki', params: {id: postId}})
                } else {
                    if (postUrl) {
                        this.setContentBlogType("SEO")
                        this.$router.push({name: 'singleBlog', params: {id: postUrl, title: this.postTitle}})
                    } else {
                        this.setContentBlogType("TITLE")
                        this.$router.push({name: 'singleBlog', params: {id: postId, title: this.postTitle}})
                    }

                }
            }

        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemBlogPageStyle";
</style>
