<template>
    <div id="item-pagination">
        <div  v-if="this.page != 'blog'">
            <div :class="this.getNumberPage == pageNumber ? 'link-page-select' : 'link-page'"
                 @click="changePage(pageNumber,selectedCategory)"
                 @mouseleave="notSelectItem()"
                 @mouseover="selectItem()">
                {{pageNumber}}
            </div>
        </div>
        <div v-else>
            <div :class="this.getNumberBlogPage == pageNumber ? 'link-page-select' : 'link-page'"
                 @click="changePageBlog(pageNumber)"
                 @mouseleave="notSelectItem()"
                 @mouseover="selectItem()">
                {{pageNumber}}
             </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'


    export default {
        name: "ItemPagination",
        data() {
            return {
                classPageLink: 'link-page',
            }
        },
        props: {
            pageNumber: Number,
            selected: Boolean,
            selectedCategory: String,
            blogType: String,
            page: String,
            selectedCategory: String
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            ...mapActions([
                'changeNumberPage',
                'emptyFilter',
                'addProductFilter',
                'getPostsBlog',
                'getListProducts',
                'showPaginationButton'
            ]),
            changePage(pageNumber, selectedCategory) {
                this.scrollToTop()
                this.showPaginationButton(true);
                this.$router.push({name: 'products', params: {cat: selectedCategory, page: pageNumber}})
                this.getListProducts({page: pageNumber, category: selectedCategory})
            },
            changePageBlog(pageNumber) {

                if (this.blogType == "WIKI") {
                    this.$router.push({name: 'samim-wiki', params: {tag: 'noTag', page: pageNumber}})
                } else {
                    if(pageNumber !== 1)
                      this.$router.push({name: 'blog-per-page', params: {tag: 'noTag', page: pageNumber}})
                      else
                       this.$router.push({name: 'blog', params: {tag: 'noTag', page: 1}})

                }

                this.scrollToTop()
                this.getPostsBlog({numberPost:10, page: pageNumber})
            },
            selectItem() {
                this.classPageLink = 'link-page-select'
            },
            notSelectItem() {
                this.classPageLink = 'link-page'
            }
        },
        computed: {
            ...mapGetters([
                'getNumberPage',
                'getNumberBlogPage',
                'getCategorySelected'
            ])
        },
        created() {
            if (this.pageNumber == this.getNumberPage)
                this.classPageLink = 'link-page';
            else
                this.classPageLink = 'link-page-select';

            if (this.pageNumber == this.getNumberBlogPage)
                this.classPageLink = 'link-page';
            else
                this.classPageLink = 'link-page-select'
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemPaginationStyle.scss";
</style>
