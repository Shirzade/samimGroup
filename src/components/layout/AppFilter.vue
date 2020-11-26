<template>
  <div id="app-filter-product" @click="addFilter(catId,title,parent,parentId)">
    <div :class="this.getCategorySelected == catId ? 'filter-select' : 'filter-unselect'">{{title}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppFilter",
  props: {
    title: String,
    catId: String,
    parentId:String,
    parent: String
  },
  methods: {
    addFilter(catId, title, parent,parentId) {
      this.showPaginationButton(false);
      if (catId == "all") {
        this.$router.push({
          name: "products",
          params: { page: "1", cat: catId ,title: this.cleanUrl('همه محصولات')}
        });
        this.getListProducts({
          page: 1,
          category: "all",
          categoryName: ""
        });
        this.setBreadcrumbItemsProductsPage({
          parentCategory: "",
          parentCategoryId:"",
          categoryName: "",
          categoryId: catId
        });
      } else {
        this.setBreadcrumbItemsProductsPage({
          parentCategory: parent,
          parentCategoryId:parentId,
          categoryName: title,
          categoryId: catId
        });
        this.$router.push({
          name: "products",
          params: { page: "1", cat: catId , title: this.cleanUrl(title) }
        });
        this.setSelectedCategory(catId);
        this.getListProducts({
          page: "1",
          category: catId,
          categoryName: title,
          parentCategory: parent
        });
        // this.showPaginationButton(false)
      }
    },

    ...mapActions([
      "getListProducts",
      "addProductFilter",
      "emptyFilter",
      "showPaginationButton",
      "setSelectedCategory",
      "setBreadcrumbItemsProductsPage"
    ]),
    cleanUrl(title) {
             return title.replace(/ /g, '-')      
            },
  },
  computed: {
    ...mapGetters(["getCategorySelected"])
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/layoutStyles/filterProductStyle";
</style>
