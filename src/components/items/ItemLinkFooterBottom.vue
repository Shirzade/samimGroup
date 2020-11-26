<template>
    <div id="item-link-footer-bottom" @click=navigationPage(link)>
        <router-link tag="a" :to=link :class=classStyle>
            {{titleLink}}
        </router-link>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "ItemLinkFooterBottom",
        props: {
            link: String,
            titleLink: String
        },
        methods: {
            ...mapActions([
                'addProductFilter',
                'changeNumberPage',
                'showPaginationButton',
                'setContactUsForm',
                'setLoginForm',
                'doSearch',
                'getListProducts'
            ]),
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            navigationPage(link) {
                this.scrollToTop()
                switch (link) {
                    case "blog": {
                        this.$router.push({name: 'blog', params: {tag: 'noTag', page: '1'}})
                    }
                        break
                    case "products": {
                        this.changeNumberPage(1)
                        this.getListProducts({page: 1, category: 'all'})
                        this.$router.push({name: 'products', params: {cat: 'all', page: '1'}})
                    }
                        break
                    case "contactUs": {
                        this.$router.push({name: 'contactUs'})
                    }
                        break
                    case "imam": {
                        this.$router.push({name: 'imam'})
                    }
                        break
                    case "about": {
                        this.$router.push({name: 'about'})
                    }

                        break
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemLinkFooterBottomStyle";
</style>
