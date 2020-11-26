<template>
    <div>
        <slider id="menu-products-slider" animation="fade" :control-btn=false
                height="200px">
            <slider-item
                    v-for="product in getSubCategoryProducts"
                    :key="product.id"
                     @click="showSinglePage(product.id,product.seo_url_friendly)">
                <router-link :to="{ path: '/product/' + product.id +'/'+product.seo_url_friendly}" replace>
                    <div class="container-image">
                        <img style="height: 100px"
                             :src=linkProductImage+product.id+linkProductImageSecondSectionSmall
                             alt="">
                    </div>
                    <app-title
                            :title=product.name
                            classStyle="title-sub-menu"></app-title>
                    <app-title :title=product.description
                               classStyle="text-sub-menu"></app-title>
                </router-link>
            </slider-item>
        </slider>
        <app-button
                titleButton="همه محصولات"
                :categoryId=this.categoryId
                :categoryName=this.categoryName
                :parentCategory=this.parentCategory
                :parentCategoryId=this.parentCategoryId
                classButton="all-products-menu"
                pageLink="productsMenu"
        ></app-button>
    </div>

</template>

<script>
    import {Slider, SliderItem} from 'vue-easy-slider'
    import AppTitle from "../titles/AppTitle";
    import AppButton from "../buttons/AppButton";
    import {productsItems} from "../../utils/productsName"
    import {mapGetters, mapActions} from 'vuex'
    import {api} from "../../utils/api"

    export default {
        name: "ItemSubSubMenu",
        components: {
            AppButton, AppTitle, Slider,
            SliderItem
        },
        computed: {
            ...mapGetters([
                'getAllCategories',
                'getSubCategoryProducts',
            ]),
        },
        data() {
            return {
                slide: 0,
                sliding: null,
                linkProductImage: api.MAIN_URL + api.URL_IMAGE_PRODUCT_FIRST_SECTION,
                linkProductImageSecondSection: '/image',
                linkProductImageSecondSectionSmall: '/image/140x80',
                listProducts: productsItems.PRODUCTS_ITEMS_FRAMES,
                list: [
                    {backgroundColor: '#3f51b5', width: '100%'},
                    {backgroundColor: '#eee', width: '100%', height: '100%'},
                    {backgroundColor: '#f44336', width: '100%', height: '100%'},
                ],
            }
        },
        methods: {
            ...mapActions([
                'getProductInformation',
                'setEmptyBreadcrumbItemsProductSinglePage',
                'setBreadcrumbItemsProductsPage'
            ]),
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            },
            cleanUrlPage(url) {
                    return url.replace(/ /g, '-')
            },
            showSinglePage(selectedpid,productName) {
                this.$router.push({name: 'product', params: {pid: selectedpid,title:this.cleanUrlPage(productName)}})
                this.getProductInformation(this.$route.params.pid)
                this.setEmptyBreadcrumbItemsProductSinglePage()
            },
        },
        props: {
            listProducts: Array,
            category: String,
            categoryId: String,
            categoryName: String,
            parentCategory: String,
            parentCategoryId:String
        }
    }
</script>

<style scoped>
    a:hover {
        color: transparent;
    }

    .container-image {
        width: 100%;
        background-color: white;
    }
</style>
