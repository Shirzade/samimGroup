<template>
    <b-container id="result-search">
        <b-row>
            <app-main-title :title=labelTitleResultSearch></app-main-title>
        </b-row>

        <b-row v-if="showMessageSearchResult">
            <b-col cols="12">
                <b-img src="../assets/img/img_not_result.png"></b-img>
                <app-main-title :title=labelTitleNotResultSearch></app-main-title>
            </b-col>
        </b-row>
        <b-row>
            <app-title v-if=getShowResultSearchPost :title=labelTitleResultSearchInBlog
                       classStyle="title-result-search"></app-title>
            <b-col v-if="getShowLoading" cols="12" lg="12" md="12">
                <content-loader
                        :height="40"
                        :width="431"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb">
                    <rect x="252.94" y="16.49" rx="3" ry="3" width="120.12" height="6"/>
                    <rect x="116" y="29.42" rx="3" ry="3" width="258.4" height="5.81"/>
                    <rect x="50.67" y="22.67" rx="0" ry="0" width="1" height="0"/>
                    <rect x="383.85" y="10.33" rx="0" ry="0" width="42.77" height="30.91"/>
                </content-loader>
                <content-loader
                        :height="40"
                        :width="431"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                >
                    <rect x="252.94" y="16.49" rx="3" ry="3" width="120.12" height="6"/>
                    <rect x="116" y="29.42" rx="3" ry="3" width="258.4" height="5.81"/>
                    <rect x="50.67" y="22.67" rx="0" ry="0" width="1" height="0"/>
                    <rect x="383.85" y="10.33" rx="0" ry="0" width="42.77" height="30.91"/>
                </content-loader>
                <content-loader
                        :height="40"
                        :width="431"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                >
                    <rect x="252.94" y="16.49" rx="3" ry="3" width="120.12" height="6"/>
                    <rect x="116" y="29.42" rx="3" ry="3" width="258.4" height="5.81"/>
                    <rect x="50.67" y="22.67" rx="0" ry="0" width="1" height="0"/>
                    <rect x="383.85" y="10.33" rx="0" ry="0" width="42.77" height="30.91"/>
                </content-loader>
                <content-loader
                        :height="40"
                        :width="431"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                >
                    <rect x="252.94" y="16.49" rx="3" ry="3" width="120.12" height="6"/>
                    <rect x="116" y="29.42" rx="3" ry="3" width="258.4" height="5.81"/>
                    <rect x="50.67" y="22.67" rx="0" ry="0" width="1" height="0"/>
                    <rect x="383.85" y="10.33" rx="0" ry="0" width="42.77" height="30.91"/>
                </content-loader>
            </b-col>
            <b-col cols="12" lg="12" md="12">
                <item-result-search
                        type="BLOG"
                        v-for="post in getResultSearchPost"
                        :imageBlog=post.id
                        :textBlog=post.subtitle
                        :postUrl=post.url_friendly
                        :titleBlog=post.title>
                </item-result-search>
            </b-col>
        </b-row>
        <b-row>
            <app-title v-if=getShowResultSearchProduct
                       :title=labelTitleResultSearchInProducts
                       classStyle="title-result-search"></app-title>
            <b-col v-if="getShowLoading" cols="12" lg="12" md="12">
                <content-loader
                        :height="40"
                        :width="431"
                        :speed="2"
                        primaryColor="#f3f3f3">
                    <rect x="252.94" y="16.49" rx="3" ry="3" width="120.12" height="6"/>
                    <rect x="116" y="29.42" rx="3" ry="3" width="258.4" height="5.81"/>
                    <rect x="50.67" y="22.67" rx="0" ry="0" width="1" height="0"/>
                    <rect x="383.85" y="10.33" rx="0" ry="0" width="42.77" height="30.91"/>
                </content-loader>
                <content-loader
                        :height="40"
                        :width="431"
                        :speed="2"
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb">
                    <rect x="252.94" y="16.49" rx="3" ry="3" width="120.12" height="6"/>
                    <rect x="116" y="29.42" rx="3" ry="3" width="258.4" height="5.81"/>
                    <rect x="50.67" y="22.67" rx="0" ry="0" width="1" height="0"/>
                    <rect x="383.85" y="10.33" rx="0" ry="0" width="42.77" height="30.91"/>
                </content-loader>
            </b-col>
            <b-col cols="12" lg="12" md="12">
                <item-result-search
                        type="PRODUCT"
                        v-for="product in getResultSearchProduct"
                        :imageProduct=product.id
                        :textProduct=product.description
                        :key="product.id"
                        :titleProduct=product.name>
                </item-result-search>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {valueLabels} from '../utils/labels'
    import AppMainTitle from "../components/titles/AppMainTitle";
    import {mapGetters} from 'vuex'
    import ItemBlogHomePage from "../components/items/ItemBlogHomePage";
    import ItemProductsPage from "../components/items/ItemProductsPage";
    import ItemResultSearch from "../components/items/ItemResultSearch";
    import AppTitle from "../components/titles/AppTitle";
    import {ContentLoader} from "vue-content-loader"

    export default {
        name: "ResultSearch",
        components: {AppTitle, ContentLoader, ItemResultSearch, ItemProductsPage, ItemBlogHomePage, AppMainTitle},
        data() {
            return {
                labelTitleResultSearch: valueLabels.LABEL_TITLE_RESULT_SEARCH,
                labelTitleResultSearchInBlog: valueLabels.LABEL_TITLE_RESULT_SEARCH_IN_BLOG,
                labelTitleResultSearchInProducts: valueLabels.LABEL_TITLE_RESULT_SEARCH_IN_PRODUCTS,
                labelTitleNotResultSearch: valueLabels.LABEL_TITLE_NOT_RESULT_SEARCH_IN_BLOG
            }
        },
        computed: {
            ...mapGetters([
                'getResultSearchPost',
                'getResultSearchProduct',
                'getShowResultSearchProduct',
                'showMessageSearchResult',
                'getShowResultSearchPost',
                'getShowLoading'
            ]),
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewResultSearchStyle";
</style>
