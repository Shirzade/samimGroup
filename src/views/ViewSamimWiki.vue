<template>
    <b-container-floid id="app-tabs">
        <div class="wrapper">
            <b-row>
                <b-col cols="12" lg="3" order="12" order-md="12" order-lg="12">
                    <b-container data-aos="fade-up" data-aos-duration="3000">
                        <b-row>
                            <b-col cols="12" order="12" order-lg="12" lg="6" class="blog-title-line"></b-col>
                            <b-col class="pb-4 pb-lg-0" cols="12" order="12" order-lg="1" lg="6">
                                <app-title :title=labelTitleLastInstagram classStyle="title-blog"></app-title>
                            </b-col>
                        </b-row>
                        <b-row>
                            <item-blog-instagram
                                    linkImage="1.jpg"
                                    link="1"
                                    text="اشراف کامل بر برنامه‌های پخش شده از رسانه ملی
با معــرفـی سـامـانـه پنـجــره"
                                    date="29 آذر 1398"></item-blog-instagram>
                            <item-blog-instagram
                                    linkImage="2.jpg"
                                    link="2"
                                    text="هم زمان با #شـانزدهمین_اجلاس_فناوری_رسانه، کاتالـوگ‌ محصـولات گروه مهندسی صمـیـم بر اساس آخرین تغییرات #به_روزرسانی و منتشر گردید"
                                    date="25 آذر 1398"></item-blog-instagram>
                            <item-blog-instagram
                                    linkImage="3.jpg"
                                    link="3"
                                    text="رونمایی از 14 محصول جدید از مجموعه دستاوردهای بومی‌سازی بخش فناوری رسانه
با حضور رئیس رسانه ملی در نمایشگاه صنعت رسانه"
                                    date="10 آذر 1398"></item-blog-instagram>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col cols="12" lg="9" md="12" order="1" order-md="1" order-lg="1">
                    <b-container>

                        <b-row v-if="getShowLoadingBlog">
                            <b-col cols="12" lg="6" md="12">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="6">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="6" md="12">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="6" md="12">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="6" md="12">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                            <b-col cols="12" lg="6" md="12">
                                <content-loader
                                        :height="475"
                                        :width="400"
                                        :speed="2"
                                        primaryColor="#f3f3f3"
                                        secondaryColor="#ecebeb">
                                    <rect x="153.19" y="222.17" rx="4" ry="4" width="234" height="30.42"/>
                                    <rect x="4" y="4.67" rx="5" ry="5" width="392" height="204"/>
                                    <rect x="16.69" y="273.17" rx="4" ry="4" width="369" height="20.02"/>
                                    <rect x="14.69" y="304.17" rx="4" ry="4" width="369" height="20.02"/>
                                </content-loader>
                            </b-col>
                        </b-row>

                        <b-row class="container-blog">
                            <item-blog-page
                                    v-for="post in getBlogPosts"
                                    :key="post.id"
                                    :postTitle=post.title
                                    postType="WIKI"
                                    :postText=post.subtitle
                                    :postDate=post.createDate
                                    :postImage=post.id>
                            </item-blog-page>
                        </b-row>

                        <b-row v-if="showPaginationBlog" class="container-pagination">
                            <item-pagination
                                    v-for="page in getNumberPageBlog"
                                    blogType="WIKI"
                                    :pageNumber=page
                                    page="blog"></item-pagination>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
        </div>
    </b-container-floid>
</template>

<script>
    import AppTabBlogPage from "../components/layout/AppTabBlogPage";
    import {ContentLoader} from 'vue-content-loader'
    import ItemBlogPage from "../components/items/ItemBlogPage";
    import {mapActions, mapGetters} from 'vuex'
    import {valueLabels} from "../utils/labels"
    import ItemBlogInstagram from "../components/items/ItemBlogInstagram";
    import ItemPagination from "../components/items/ItemPagination";
    import AppTitle from "../components/titles/AppTitle";
    import AppTag from "../components/layout/AppTag";

    export default {
        name: "SamimWiki",
        data() {
            return {
                labelTitleLastLinkdin: valueLabels.LABEL_BLOG_TITLE_LINK,
                labelTitleLastInstagram: valueLabels.LABEL_BLOG_TITLE_INSTAGRAM,
                labelTitleLTages: valueLabels.LABEL_BLOG_TITLE_TAGS
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: "گروه صمیم | پست های سایت صمیم گروپ"},
                {property: 'og:description', content: "پست های سایت صمیم گروپ | گروه صمیم"},
                {property: 'og:url', content: "https://www.samimgroup.com/blog/samim-wiki-98/post"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/blog/samim-wiki-98/post'}
            ],
        },
        components: {AppTag, AppTitle,ItemBlogInstagram, ItemPagination, ItemBlogPage, AppTabBlogPage, ContentLoader},
        computed: {
            ...mapGetters([
                'getBlogPosts',
                'getAllTags',
                'getShowLoadingBlog',
                'showPaginationBlog',
                'getNumberPageBlog'
            ]),
        },
        methods: {
            ...mapActions([
                'getPostsBlog',
                'setPostBlogTypeId',
                'setAllTags'
            ]),

            showBottomBorder() {
                this.mouseHoverClass = 'mouse-hover-active'
            }
        },
        created() {
            this.setPostBlogTypeId(98)
            this.getPostsBlog({numberPost: 20, page: this.$route.params.page})
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/layoutStyles/tabsStyle";
</style>
