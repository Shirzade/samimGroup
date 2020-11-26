<template>
  <div id="app-breadcrumb-page">
    <span class="home-link" @click="showHomePage()">صفحه اصلی</span>
    <span :key="item" v-for="item in items">
      <span>/</span>
      <span @click="showCategoreis(item)" class="container-item-bread-crumb">{{item.text}}</span>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppBreadcrumbPage",
  data() {
    return {};
  },
  props: {
    items: Array
  },
  methods: {
      cleanUrl(title) {
             return title.replace(/ /g, '-')      
            },
    showHomePage(){
          this.$router.push({name: 'home'})
          this.$router.go()
    },
    showCategoreis(item) {
     if(item.id != "") {
            this.$router.push({
            name: "products",
            params: { page: "1", cat: item.id ,title: this.cleanUrl(item.text) }
            });
            this.setSelectedCategory(item.id);
            this.getListProducts({
            page: "1",
            category: item.id,
            categoryName: item.text,
            parentCategory: ""
            });     
     }


        if(item.parent == "")
          this.setBreadcrumbItemsProductsPage({
          parentCategory: "",
          parentCategoryId:"",
          categoryName:  item.id == "all" ? "": item.text,
          categoryId: item.id
        });
        else
        this.setBreadcrumbItemsProductsPage({
          parentCategory: item.parent.name,
          parentCategoryId:item.parent.id,
          categoryName: item.text,
          categoryId: item.id
        });
      
    },
    ...mapActions([
      "getListProducts",
      "addProductFilter",
      "emptyFilter",
      "showPaginationButton",
      "setSelectedCategory",
      "setBreadcrumbItemsProductsPage"
    ])
  }
};
</script>


<style scoped lang="scss">
@import "../../assets/styles/layoutStyles/breadcrumbPageStyle";
</style>
