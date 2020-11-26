<template>
    <b-col cols="12" id="item-result-search" lg="12">
        <router-link v-if="type === 'BLOG'" :to="{ name: 'singleBlog', params: {id: cleanUrl(titleBlog,postUrlBlog)} }" tag="a">
            <b-card
                    class="container-item-search"
                    :img-src=linkImageBlogPost
                    :img-alt=titleBlog
                    img-left>
                <b-card-title>
                    {{titleBlog}}
                </b-card-title>
                <b-card-text>
                    {{textBlog}}
                </b-card-text>
            </b-card>
        </router-link>
        <router-link v-else :to="{ name: 'product', params: {pid:imageProduct,title:titleProduct }}" tag="a">
            <b-card class="container-item-search"
                    @click="showSinglePageProduct(titleProduct)"
                    :img-src=linkImageProduct
                    :img-alt=titleProduct
                    img-left>
                <b-card-text>
                    <b-card-title>
                        {{titleProduct}}
                    </b-card-title>
                    <b-card-text>
                        {{textProduct}}
                    </b-card-text>
                </b-card-text>
            </b-card>
        </router-link>
    </b-col>
</template>

<script>
    import {api} from "../../utils/api"
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ItemResultSearch",
        data() {
            return {
                linkImageBlogPost: api.MAIN_URL + api.URL_IMAGE_BLOG_FIRST_SECTION + this.imageBlog + api.URL_IMAGE_BLOG_SECOND_SECTION,
                linkImageProduct: api.MAIN_URL + api.URL_IMAGE_PRODUCT_FIRST_SECTION + this.imageProduct + api.URL_IMAGE_PRODUCT_SECOND_SECTION,
            }
        },
        props: {
            type: String,
            imageBlog: String,
            textBlog: String,
            titleBlog: String,
            imageProduct: String,
            textProduct: String,
            postUrlBlog: String,
            titleProduct: String,
            categoryName:String
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
                'setBreadcrumbItemsProductsPage'
            ]),
            showSinglePageProduct(titleProduct) {
                this.setBreadcrumbItemsProductsPage({parentCategory: 'جستجوی محصولات', categoryName: titleProduct})
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemResultSearchStyle";
</style>
