<template>
    <b-card id="item-blog-other-news-link"
            :img-alt=this.text
            align="right"
            img-top
            tag="article"
            style="border: none;"
            class="card-box">
        <div @click="goToNewPost(text,postUrl)" class="container-more">
            <router-link :to="{ name: 'singleBlog', params: {id: cleanUrl(text,postUrl)} }" tag="a">
                <picture-sharesheet
                        style="text-align: center"
                        :alt=text
                        :src="linkImage" size="30px"
                        sheetcolor="#4c4b4bf2"
                        iconcolor="#fff"/>
                <b-card-title>
                    {{text}}
                </b-card-title>
                <!-- <div @click="goToNewPost(image)" class="container-more">
                    <router-link :to="{ name: 'singleBlog', params: {id: image } }" tag="a"> -->
                <!-- ادامه مطلب<span>&#62;</span> -->
            </router-link>
        </div>
        <div class="container-date">{{ date.substring(0,10) | moment("jYYYY/jM/jD")}}</div>
    </b-card>
</template>

<script>
    import {api} from "../../utils/api"
    import {mapActions} from 'vuex'

    export default {
        name: "ItemBlogOtherNewsLink",
        data() {
            return {
                linkImage: api.MAIN_URL + api.URL_IMAGE_BLOG_FIRST_SECTION + this.image + api.URL_IMAGE_BLOG_SECOND_SECTION
            }
        },
        props: {
            image: String,
            text: String,
            date: String,
            postUrl: String,
            linkMore: String
        },
        methods: {
            cleanUrl(title, url) {
                if (url) {
                    return url.replace(/ /g, '-')
                } else {
                    return title.replace(/ /g, '-')
                }

            },
            ...mapActions([
                'setContentBlogType',
                'setBlogPostContent',
            ]),
            goToNewPost(id, url) {
                if (url) {
                    this.setContentBlogType("SEO")
                    this.setBlogPostContent(url)
                } else {
                    this.setContentBlogType("TITLE")
                    this.setBlogPostContent(id)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/ItemBlogOtherNewsLinkStyle";
</style>
