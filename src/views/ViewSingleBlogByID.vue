<template>
    <div id="single-blog">
        <vue-headful
                :title=getPostMetaTitle
                :description=getPostMetaDescription
        />
        <b-container-floid data-aos="fade-up" data-aos-duration="2000">
            <b-row class="internal-wrapper">
                <app-breadcrumb :breadcbItems=breadcrumbItemsSingleBlogPage></app-breadcrumb>
                <b-col class="vertical-devider" cols="12" md="3" lg="3" order="12" order-md="12" order-lg="12">
                    <b-container data-aos="fade-up" data-aos-duration="3000">
                        <b-row class="other-news-section-last-news">
                            <b-col cols="auto">
                                <app-title title="آخرین اخبار"
                                           classStyle="title-other-news-section-in-single-blog"></app-title>
                            </b-col>
                            <b-col col class="blog-title-line"></b-col>
                        </b-row>
                        <b-row class="">
                            <b-col cols="12" lg="12" md="12">
                                <item-blog-other-news-link
                                        v-for="post in getBlogPosts"
                                        :image=post.id
                                        :key=post.id
                                        :text=post.title
                                        :date=post.createDate>
                                </item-blog-other-news-link>
                            </b-col>
                        </b-row>
                        <b-row class="other-news-section">
                            <b-col cols="auto">
                                <app-title title="برچسب‌ها"
                                           classStyle="title-other-news-section-in-single-blog"></app-title>
                            </b-col>
                            <b-col col class="blog-title-line">
                            </b-col>
                        </b-row>
                        <b-row class="container-tags">
                            <b-col cols="12" lg="12" md="12">
                                <app-tag v-for="tag in getBlogPostTags"
                                         :title=tag.name
                                         :key="tag.id"
                                         :id=tag.id></app-tag>
                            </b-col>
                        </b-row>
                    </b-container>
                    <!--<b-container data-aos="fade-up"-->
                    <!--data-aos-duration="2000"-->
                    <!--data-aos-once="true"-->
                    <!--data-aos-mirror="true">-->
                    <!--<b-row class="other-news-section">-->
                    <!--<app-title title="اخبار مرتبط" classStyle="title-other-news-section-in-single-blog"></app-title>-->
                    <!--<b-col cols="12" md="8" class="blog-title-line">-->
                    <!--</b-col>-->
                    <!--</b-row>-->
                    <!--<b-row>-->
                    <!--<app-title title="برگزاری سمینار تخصصی-آموزشی سامانه بازار محتوا"-->
                    <!--classStyle="single-blog-title"></app-title>-->
                    <!--</b-row>-->
                    <!--</b-container>-->
                </b-col>
                <b-col cols="12" lg="8" md="8" offset-md="1" offset-lg="1">
                    <!-- <app-breadcrumb :breadcbItems=breadcrumbItemsSingleBlogPage></app-breadcrumb> -->
                    <!-- Title of Post -->
                    <app-page-main-title :title=getBlogPostTitle classStyle="main-title-page"></app-page-main-title>
                    <app-page-sub-title :title=getBlogPostSubTitle classStyle="sub-title-page"></app-page-sub-title>
                    <b-row class="container-date-single-blog">
                        <div class="container-calender">
                            <img src='../assets/img/icons/img-calender.png'>
                        </div>
                        <div class="container-date">
                            {{ getBlogPostDate.substring(0,10) | moment("jYYYY/jM/jD") }}
                        </div>
                        <!--<div class="container-view">-->
                        <!--بازدید: 84-->
                        <!--</div>-->
                    </b-row>
                    <!-- Data of Post -->
                    <b-row v-if=getShowLoading>
                        <b-col cols="12" lg="12" md="12" class="container-loading">
                            <Spinner name="fading-circle" color="#161A1E"/>
                        </b-col>
                    </b-row>
                    <div v-if=!getShowLoading>
                        <div class="content-of-post">
                            <div class="container-tip-image">
                                <picture-sharesheet
                                        :src=linkProductImage+$route.params.id+linkProductImageSecondSection
                                        :key=this.getBlogPostId
                                        size="40px" sheetcolor="#4c4b4bf2" iconcolor="#fff" sharemessage="OK!"/>
                            </div>
                            <div class="html-injection" cols="12">
                                <v-runtime-template :template=getBlogPostContent></v-runtime-template>
                            </div>
                            <b-row>
                                <b-col cols="12" lg="4" md="4"
                                       v-for="(images, index) in this.getImageGallery"
                                       style="display: inline-block">
                                    <b-img thumbnail fluid
                                           v-lazy="images.thumb"
                                           style="height: 200px;margin-bottom:20px;cursor: pointer"
                                           @click="openGallery(index)">
                                    </b-img>
                                </b-col>
                            </b-row>
                            <LightBox
                                    :images=this.getImageGallery
                                    ref="lightbox"
                                    :show-caption="false"
                                    :show-light-box="false">
                            </LightBox>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container-floid>
    </div>
</template>

<script>
import Vue from 'vue'
import VRuntimeTemplate from 'v-runtime-template'
// import PictureSharesheet from 'vue-picture-sharesheet'
import LightBox from 'vue-image-lightbox'
// import vuePlayer  from  '@algz098/vue-player'
// import myVideo from 'vue-video'
import { BEmbed } from 'bootstrap-vue'
import AppBreadcrumb from '../components/layout/AppBreadcrumb'
import { breadcrumbItems } from '../utils/breadcrumbItems'
import AppTitle from '../components/titles/AppTitle'
import ItemBlogOtherNewsLink from '../components/items/ItemBlogOtherNewsLink'
import AppTag from '../components/layout/AppTag'
import { mapActions, mapGetters } from 'vuex'
import { api } from '../utils/api'
import ItemOurSolution from '../components/items/ItemOurSolution'
// import AppButton from "../components/buttons/AppButton";
import ItemBlogPostDownloadBtn from '../components/items/ItemBlogPostDownloadBtn'
import ItemBlogPostSourceBtn from '../components/items/ItemBlogPostSourceBtn'
import AppMainTitle from '../components/titles/AppMainTitle'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppPageMainTitle from '../components/titles/AppPageMainTitle'

Vue.component('b-embed', BEmbed)

export default {
  name: 'SingleBlogById',
  components: {
    AppPageMainTitle,
    AppPageSubTitle,
    AppMainTitle,
    AppTag,
    ItemBlogOtherNewsLink,
    AppBreadcrumb,
    VRuntimeTemplate,
    AppTitle,
    LightBox,
    ItemOurSolution,
    ItemBlogPostDownloadBtn,
    ItemBlogPostSourceBtn
  },

  data () {
    return {
      HTMLcontent: null,
      listTags: [],
      openGraphTitle: this.getBlogPostTitle,
      openGraphDescription: this.getBlogPostSubTitle,
      datePost: this.$route.params.date,
      // linkImage: require("../assets/img/pages/blog/posts/post-image.jpg"),
      breadcrumbItemsSingleBlogPage: breadcrumbItems.BREADCRUMB_SINGLE_BLOG_PAGE,
      linkProductImage: api.MAIN_URL + api.URL_IMAGE_BLOG_FIRST_SECTION,
      linkProductImageSecondSection: api.URL_IMAGE_SINGLE_BLOG_SECOND_SECTION,
      images: []
    }
  },
  head: {
    meta () {
      return [
        { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@samimgropco' },
        { name: 'twitter:type', content: 'website' },
        { property: 'og:title', content: this.openGraphTitle },
        { property: 'og:description', content: this.openGraphDescription },
        { property: 'og:url', content: 'https://www.samimgroup.com/blog/1/post/' + this.cleanUrl(this.$route.params.id) }
      ]
    },
    link () {
      return [
        { rel: 'canonical', href: 'https://www.samimgroup.com/blog/1/post/' + this.cleanUrl(this.$route.params.id) }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getBlogPosts',
      'getBlogPostContent',
      'getBlogPostTags',
      'getShowLoading',
      'getBlogPostDate',
      'getBlogPostTitle',
      'getBlogPostId',
      'getImageGallery',
      'getPostMetaDescription',
      'getPostMetaTitle',
      'getBlogPostSubTitle'])
  },
  methods: {
    ...mapActions([
      'getPostsBlog',
      'setBlogPostContentPrevious',
      'setAllTags'
    ]),
    cleanUrl (url) {
      return url.replace(/ /g, '-')
    },
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  },
  created () {
    this.getPostsBlog({ numberPost: 3, page: 1 })
    this.setBlogPostContentPrevious(this.$route.params.id)
  }

}
</script>

<style scoped>
    /* @import "../assets/styles/views/viewSingleBlogStyle"; */
    /* The Modal (background) */
    #single-blog {
        font-family: IRANSans;
    }

    #app-breadcrumb {
        margin-right: 15px;
    }

    .html-injection {
        margin-bottom: 50px;
    }

    .container-tip-image {
        margin-bottom: 40px;
        /* width: max-content; */
        display: flex;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
        justify-content: center;
    }

    .sharesheet-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .html-injection >>> .card-title {
        font-size: 14px;
    }

    .html-injection >>> .font-roboto {
        font-family: Roboto;
    }

    .html-injection >>> .mt100 {
        margin-top: 100px;
    }

    .html-injection >>> .mt50 {
        margin-top: 50px;
    }

    .html-injection >>> .mb50 {
        margin-bottom: 50px;
    }

    .html-injection >>> .pl50 {
        padding-left: 50px;
    }

    .html-injection >>> .pr50 {
        padding-right: 50px;
    }

    .html-injection >>> .pl25 {
        padding-left: 25px;
    }

    .html-injection >>> .pr25 {
        padding-right: 25px;
    }

    .html-injection >>> .center {
        display: block;
        margin: 0px auto;
    }

    .html-injection >>> .list-icons {
        list-style-position: inside;
        list-style-image: url('../assets/img/icons/icon-circle.png');
    }

    .html-injection >>> li ::marker {
        list-style-position: inside;
        color: red;
    }

    /* ---------------------------------------------------------------------------------------------------- */
    .html-injection >>> .center-img-container {
        display: flex;
        margin: 25px auto 40px auto;
        width: 80%;
        align-items: center;
        justify-content: center;
    }

    .html-injection >>> .link-button-container {
        display: block;
    }

    .html-injection >>> .container-img-table {
        width: 100%;
        margin: 10px 10px;
        border: 1px solid lightgray 4px;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.16);
    }

    .html-injection >>> td {
        text-align: center;
        vertical-align: middle;
        direction: rtl;
    }

    .html-injection >>> .image-gallery {
        padding: 10px;
    }

    .html-injection >>> .row > .column {
        padding: 8px 8px;
    }

    .container-loading {
        text-Align: center;
        display: flex;
        justify-content: center;
        height: 400px;
        align-items: center;
    }

    .vertical-devider {
        direction: rtl;
        margin: 0px -15px 0px -15px;
        /* padding-right: 100px; */
    }

    .post-banner {
        margin: 30px -15px -15px 30px;
    }

    .container-calender {
        width: 40px;
        height: 40px;
        font-size: 11px;
        border-radius: 30px;
        background: #FCE0DE;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0;
    }

    .container-date, .container-view, .container-read {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 10px 0px 0px;
    }

    .other-news-section-last-news {
        direction: rtl;
        margin-bottom: 15px;
    }

    .other-news-section {
        direction: rtl;
        margin-top: 50px;
        margin-bottom: 15px;
    }

    .blog-title-line {
        margin-top: 0;
        margin-right: auto;
        margin-left: 0;
        margin-bottom: 10px;
        border-right: 0 solid #edf0f5;
        border-left: 0 solid #edf0f5;
        border-bottom: 0 solid #edf0f5;
        border-top: 6px solid #edf0f5;
        /* border-right: 0 solid
        #edf0f5;
        border-left: 0 solid
        #edf0f5;
        border-bottom: 6px solid
        #edf0f5; */
    }

    .container-tags {
        margin: 20px -15px 50px -15px;
        word-wrap: break-word;
    }

    .container-tags::-webkit-scrollbar {
        width: 3px;
    }

    .container-tags::-webkit-scrollbar-track {
        /* -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.18); */
        border-radius: 3px;
    }

    .container-tags::-webkit-scrollbar-thumb {
        border-radius: 5px;
        /* -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.18); */
    }

    .content-of-post {
        text-Align: justify;
        color: #707070;
        font-size: 18px;
        line-height: 40px;
        font-weight: normal;
        margin-bottom: 200px;
    }

    .html-injection >>> p {
        text-align: justify;
        /* font-family: IRANSans; */
    }

    .html-injection >>> h2 {
        font-size: 22px;
        color: black;
        font-size: 22px;
        color: black;
        margin-top: 55px;
        margin-bottom: 15px;
    }

    .html-injection >>> a, .html-injection >>> a:hover {
        color: #e11a27;
        text-decoration: none;
    }

    .container-tags {
        display: flex;
        justify-content: right;
    }

    .mostly-customized-scrollbar::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #aaa; /* or add it to the track */
    }

    #app-breadcrumb {
        margin-top: 40px;
    }

    .container-date-single-blog {
        margin: 18px 0px 30px 0px;
    }
</style>
