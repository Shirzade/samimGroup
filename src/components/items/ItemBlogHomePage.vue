<template>
    <div id="item-blog-samim"
         data-aos="fade-up"
         data-aos-duration="2000">
        <router-link :to="{ name: 'singleBlog', params: {id:cleanUrl(title,postUrl)} }" tag="a">
            <b-card
                    @click="goSinglePage(title,postUrl)"
                    @click.middle="goSinglePage(title,postUrl)"
                    class="item-blog-home"
                    :title=title
                    :img-src=linkImage
                    :img-alt=title
                    :img-title=title
                    img-top
                    tag="article">
                <b-card-text>
                    {{text}}
                </b-card-text>
                <app-button
                        pageLink="singleBlog"
                        :postId=this.image
                        :postTitle=this.title
                        :postUrl=this.postUrl
                        :titleButton=labelTopTitleMoreButton
                        classButton="more-button-blog-home"></app-button>
            </b-card>
        </router-link>
    </div>
</template>

<script>
    import {valueLabels} from "../../utils/labels";
    import AppButton from "../buttons/AppButton";
    import {api} from "../../utils/api"
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ItemBlogHomePage",
        components: {AppButton},
        data() {
            return {
                labelTopTitleMoreButton: valueLabels.LABEL_MAIN_HOME_PAGE_MORE_BUTTON_BLOG,
                linkImage: api.MAIN_URL + api.URL_IMAGE_BLOG_FIRST_SECTION + this.image + api.URL_IMAGE_BLOG_SECOND_SECTION + "/386x190"
            }
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
            goSinglePage(postTitle, postUrl) {
                if (postUrl) {
                    this.setContentBlogType("SEO")
                    this.$router.push({name: 'singleBlog', params: {id: postUrl, title: this.postTitle}})
                } else {
                    this.setContentBlogType("TITLE")
                    this.$router.push({name: 'singleBlog', params: {id: postId, title: this.postTitle}})
                }
                this.$router.push({name: 'singleBlog', params: {id: postId}})
            }
        },
        props: {
            title: String,
            text: String,
            postUrl: String,
            image: String,
            data: String
        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemBlogSamimMainPage";
</style>
