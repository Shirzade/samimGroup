<template>
    <b-col cols="12" md="6" lg="4" id="item-product-page" @click="showSinglePage(image)">
        <router-link :to="{ name: 'product',
         params: {pid:image,title: cleanUrlPage(cleanUrl,title) } }" tag="a">
            <b-card
                    :class=classItem
                    :img-src=linkImage
                    @mouseleave="notHoverItem()"
                    @mouseover="hoverItem()"
                    :img-alt=title
                    img-top
                    tag="article">
                <!-- <b-card-title class="text-item-product">
                    {{title}}
                </b-card-title>
                <b-card-text class="text-item-product">
                    {{text}}
                </b-card-text> -->
                <!--<div v-if=showTagSection>-->
                <!--<b-badge variant="primary">3g</b-badge>-->
                <!--<b-badge variant="secondary">fiber</b-badge>-->
                <!--<b-badge variant="success">headend</b-badge>-->
                <!--<b-badge variant="danger">multi</b-badge>-->
                <!--</div>-->
                <div class="container-more-button">

                    <h2 class="item-product-title">
                        {{title}}
                    </h2>
                    <b-card-text class="item-product-text">
                        {{cleanUrl}}  
                    </b-card-text>
                    <b-img  left
                           src="../../assets/img/icons/img-left-product.png"></b-img>
                </div>
            </b-card>
        </router-link>
    </b-col>
</template>

<script>
    import {api} from "../../utils/api"
    import {mapActions, mapGetters} from 'vuex'
    import {ContentLoader} from 'vue-content-loader'

    export default {
        name: "ItemProductsPage",
        data() {
            return {
                showTagSection: false,
                linkImage: api.MAIN_URL + api.URL_IMAGE_PRODUCT_FIRST_SECTION + this.image + api.URL_IMAGE_PRODUCT_SECOND_SECTION,
                classItem: "container-item-product"
            }
        },
        components: {
            ContentLoader
        },
        computed: {
            ...mapGetters([
                'getShowLoading'
            ]),
        },
        methods: {
            ...mapActions([
                'getProductInformation',
                'setBreadcrumbItemsProductsPage'
            ]),
            cleanUrlPage(url,title) {
                if (url) {
                    return url.replace(/ /g, '-')
                } else {
                    return title.replace(/ /g, '-')
                }
            },
            showSinglePage(id) {
                this.setBreadcrumbItemsProductsPage({parentCategory: this.categoryName, categoryName: this.title})
                // this.$router.push({name: 'product', params: {pid: id}})
            },
            hoverItem() {
                this.classItem = "container-item-product-hover"
            },
            notHoverItem() {
                this.classItem = "container-item-product"
            },
        },
        props: {
            title: String,
            text: String,
            cleanUrl:String,
            image: String,
            categoryName: String,
            showTag: String
        },
        created() {
            if (this.showTag == 'true') {
                this.showTagSection = true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemProductPageStyle";

    slide-fade-enter {
        transition: all .3s ease;
    }

    .slide-fade-active, .slide-fade-leave-active {
        transition: opacity .2s;
    }

    .slide-fade-leave-to {
        transform: scale(0.8) translatey(-50px);
        opacity: 0;
    }
</style>
