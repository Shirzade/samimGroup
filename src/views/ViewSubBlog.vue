<template>
    <b-container-floid>
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="wrapper">
            <b-row id="app-tabs">
                <b-col cols="12" :class=firstContainer>
                    <transition name="slide-fade">
                        <b-row>
                            <b-col cols="12" lg="3" order="12" order-md="12" order-lg="12">
                                <b-container data-aos="fade-up" data-aos-duration="3000">
                                    <b-row>
                                        <b-col cols="12" order="12" order-lg="12" lg="6"
                                               class="blog-title-line"></b-col>
                                        <b-col class="pb-4 pb-lg-0" cols="12" order="12" order-lg="1" lg="6">
                                            <app-title :title=labelTitleLastInstagram
                                                       classStyle="title-blog"></app-title>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <item-blog-instagram
                                                linkImage="1.jpg"
                                                link="1"
                                                text="ایده استفاده از #فیبر_نوری برای انتقال اطلاعات بیش از نیم قرن پیش مطرح شد، اما نزدیک به بیست سال طول کشید تا در سال 1976 این ایده شکل عملی به خود بگیرد"
                                                date="15 آبان 1398"></item-blog-instagram>
                                        <item-blog-instagram
                                                linkImage="2.jpg"
                                                link="2"
                                                text="50 سال پیش، در چنین روزی نخستین پیام توسط آنچه که امروزه ما به عنوان اینترنت می‌شناسیم، ارسال شد. به جرات می‌توان گفت"
                                                date="25 مهر 1398"></item-blog-instagram>
                                        <item-blog-instagram
                                                linkImage="3.jpg"
                                                link="3"
                                                text="محصول MIP-4005 (Multi-Image Processor)  گروه مهندسی صمیم که در آذرماه سال 1394 معرفی شده بود، با افزودن امکانات جدید #به‌روزرسانی گردید و پس از این با نام MIP-4806 ارائه می‌شود"
                                                date="10 آبان 1398"></item-blog-instagram>
                                    </b-row>
                                </b-container>
                                <b-container data-aos="fade-up" data-aos-duration="3000">
                                    <b-row>
                                        <b-col cols="12" order="12" order-lg="12" lg="8" md="6"
                                               class="blog-title-line"></b-col>
                                        <b-col class="pb-4 pb-lg-0" cols="12" order="1" md="6" order-lg="1" lg="4">
                                            <app-title :title=labelTitleLTages classStyle="title-blog"></app-title>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="12" lg="12" class="container-tags">
                                            <app-tag v-for="tag in getAllTags"
                                                     :title=tag.name
                                                     :id=tag.id></app-tag>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-col>
                            <b-col cols="12" lg="9" md="12" order="1" order-md="1" order-lg="1">
                                <b-container>
                                    <b-row v-if=getShowLoadingBlog>
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
                                                :postText=post.subtitle
                                                :postDate=post.createDate
                                                :postImage=post.id>
                                        </item-blog-page>
                                    </b-row>

                                    <b-row v-if="showPaginationBlog" class="container-pagination">
                                        <item-pagination
                                                v-for="page in getNumberPageBlog"
                                                :pageNumber=page
                                                page="blog"></item-pagination>
                                    </b-row>
                                </b-container>
                            </b-col>

                        </b-row>
                    </transition>
                </b-col>
                <b-col cols="12" :class=secondContainer>
                    <transition name="slide-fade">

                    </transition>
                </b-col>
                <b-col cols="12" :class=thirdContainer>
                    <transition name="slide-fade">

                    </transition>
                </b-col>
                <b-col cols="12" :class=fourthContainer>
                    <transition name="slide-fade">

                    </transition>
                </b-col>
                <b-col cols="12" :class=fiveContainer>
                    <transition name="slide-fade">

                    </transition>
                </b-col>
            </b-row>
        </div>
    </b-container-floid>
</template>

<script>
    import Flickity from 'vue-flickity';
    import ItemNewProduct from "../components/items/ItemNewProduct";
    import ItemBlogPage from "../components/items/ItemBlogPage";
    import AppTitle from "../components/titles/AppTitle";
    import {valueLabels} from "../utils/labels"
    import ItemBlogInstagram from "../components/items/ItemBlogInstagram";
    import ItemBlogLinken from "../components/items/ItemBlogLinken";
    import {mapActions, mapGetters} from 'vuex'
    import AppTag from "../components/layout/AppTag";
    import ItemPagination from "../components/items/ItemPagination";
    import {ContentLoader} from 'vue-content-loader'

    export default {
        name: "AppTabBlogPage",
        data() {
            return {
                mouseHoverClass: 'mouse-hover-in-active',
                labelTitleLastLinkdin: valueLabels.LABEL_BLOG_TITLE_LINK,
                labelTitleLastInstagram: valueLabels.LABEL_BLOG_TITLE_INSTAGRAM,
                labelTitleLTages: valueLabels.LABEL_BLOG_TITLE_TAGS,
                flickityOptions: {
                    initialIndex: 5,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                },
                firstContainer: 'show-display',
                secondContainer: 'hide-display',
                thirdContainer: 'hide-display',
                fourthContainer: 'hide-display',
                fiveContainer: 'hide-display',
                firstIsActive: true,
                secondIsActive: false,
                thirdIsActive: false,
                fourthIsActive: false,
                fiveIsActive: false,
                showFirst: true,
                showSecond: false,
                showThird: false,
                showFourth: false,
                showFive: false,
            }
        },
        head: {
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com'}
            ],
        },
        components: {
            ItemPagination,
            ContentLoader,
            AppTag, ItemBlogLinken, ItemBlogInstagram, AppTitle, ItemBlogPage, ItemNewProduct, Flickity
        },
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
                'setAllTags'
            ]),
            showContent(number) {
                switch (number) {
                    case 1: {
                        this.showFirst = true;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.fiveIsActive = false;
                        this.firstIsActive = true;
                        this.firstContainer = 'show-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display'
                    }
                        break
                    case 2: {
                        this.showFirst = false;
                        this.showSecond = true;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = true;
                        this.firstIsActive = false;
                        this.fiveIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'show-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display'
                    }
                        break
                    case 3: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = true;
                        this.showFourth = false;
                        this.showFive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = true;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.fiveIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'show-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display'
                    }
                        break
                    case 4: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = true;
                        this.showFive = false;
                        this.fourthIsActive = true;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.fiveIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'show-display';
                        this.fiveContainer = 'hide-display'
                    }
                        break
                    case 5: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = true;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.fiveIsActive = true;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display'
                        this.fiveContainer = 'show-display'
                    }
                }
            },
            showBottomBorder() {
                this.mouseHoverClass = 'mouse-hover-active'
            }
        },
        created() {
            this.setAllTags()
            // if (this.$route.params.tag == "noTag")
            this.getPostsBlog({numberPost: 20, tag: this.$route.params.tag})

            // else
            //     this.getPostsBlog({numberPost: 20, tag: this.$route.params.tag})
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/layoutStyles/tabsStyle";

    .svg-container {
        width: 150px;
        position: relative;
        top: 9px;
    }

    .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 400px;
        transition: all 0.8s ease-out 0s;
        stroke-width: 3px;
    }

    .button-tab:hover .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 0px;
    }

    .slide-fade-enter-active {
        transition: all .9s ease;
    }

    .slide-fade-leave-active {
        /*transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateY(12px);
        opacity: 0;
    }

</style>
