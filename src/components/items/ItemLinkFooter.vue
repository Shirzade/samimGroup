<template>
    <div id="item-link-footer" @click=filterProducts(cat,titleLink,parent)>
        <router-link tag="a" :to=link :class=classStyle>
            {{titleLink}}
        </router-link>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "ItemLinkFooter",
        props: {
            titleLink: String,
            link: String,
            parent: String,
            classStyle: String,
            cat: String
        },
        methods: {
            filterProducts(cat, titleLink, parent) {

                this.setBreadcrumbItemsProductsPage({parentCategory: parent, categoryName: titleLink})
                this.$router.push({name: 'products', params: {page: '1', cat: cat}})
                this.setSelectedCategory(cat)
                this.getListProducts({page: '1', category: cat, categoryName: titleLink, parentCategory: parent})
                this.showPaginationButton(false)

            },
            ...mapActions([
                'addProductFilter',
                'emptyFilter',
                'showPaginationButton',
                'getListProducts',
                'setSelectedCategory',
                'setBreadcrumbItemsProductsPage'
            ])
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemLinkFooterStyle";
</style>
