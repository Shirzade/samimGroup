<template>
  <div id="app-collapse">
    <b-button
      :aria-expanded="showCollapse ? 'true' : 'false'"
      :class="showCollapse ? 'collapsed' : null"
      :variant="classStyle"
      @click="toggleCollapseContent(CategoryId,titleHeader)"
      :aria-controls="CategoryId"
      block
    >
      <div class="image-button">
        <img :src="iconHeaderCollapse" alt="گروه صمیم" />
      </div>
      <div class="title-button">{{titleHeader}}</div>
    </b-button>
    <b-collapse class="mt-2" v-model="showCollapse">
      <b-card :class="classStyle">
        <slot></slot>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppCollaps",
  data() {
    return {
      showCollapse: this.show,
      iconHeaderCollapse: ""
    };
  },
  methods: {
    toggleCollapseContent(CategoryId,titleHeader) {
      this.setItemCollapseIdShow(CategoryId);
      this.$router.push({name: 'products', params: {page: '1', cat: CategoryId,title: this.cleanUrl(titleHeader)}})
      switch (this.iconHeader) {
        case "left":
          {
            this.setBreadcrumbItemsProductsPage({
              parentCategory: "",
              categoryName: this.titleHeader,
              categoryId:this.CategoryId
            });
            this.getListProducts({
              page: "1",
              category: this.CategoryId,
              categoryName: this.titleHeader,
              type: "parent"
            });
            if (this.showCollapse) {
              this.setImageHeaderIcon("img-left.png");
              this.showCollapse = !this.showCollapse;
            } else {
              this.setImageHeaderIcon("img-bottom.png");
              this.showCollapse = !this.showCollapse;
            }
          }
          break;
        case "menu":
          {
            if (this.showCollapse) {
              this.setImageHeaderIcon("img-sub-menu.png");
              this.showCollapse = !this.showCollapse;
            } else {
              this.setImageHeaderIcon("img-sub-menu_open.png");
              this.showCollapse = !this.showCollapse;
            }
          }
          break;
        case "plus":
          {
            if (this.showCollapse) {
              this.setImageHeaderIcon("img-collaps-plus.png");
              this.showCollapse = !this.showCollapse;
            } else {
              this.setImageHeaderIcon("img-collaps-mines.png");
              this.showCollapse = !this.showCollapse;
            }
          }
          break;
        default:
          this.showCollapse = !this.showCollapse;
      }
    },
    setImageHeaderIcon(image) {
      this.iconHeaderCollapse = require("../../assets/img/icons/" + image);
    },
    ...mapActions([
      "getListProducts",
      "addProductFilter",
      "emptyFilter",
      "setItemCollapseIdShow",
      "showPaginationButton",
      "setBreadcrumbItemsProductsPage"
    ]),
     cleanUrl(title) {
             return title.replace(/ /g, '-')      
            },
  },
  computed: {
    ...mapGetters(["getItemCollapseIdShow"])
  },
  props: {
    titleHeader: String,
    CategoryId: String,
    classStyle: String,
    iconHeader: String,
    show: Boolean
  },
  created() {
    switch (this.iconHeader) {
      case "down":
        {
          this.setImageHeaderIcon("img-collaps-down.png");
        }
        break;
      case "plus":
        {
          if (this.show) this.setImageHeaderIcon("img-collaps-mines.png");
          else this.setImageHeaderIcon("img-collaps-plus.png");
        }
        break;
      case "left":
        {
          if (this.show) this.setImageHeaderIcon("img-bottom.png");
          else this.setImageHeaderIcon("img-left.png");
        }
        break;
      case "menu":
        {
          if (this.show) this.setImageHeaderIcon("img-sub-menu_open.png");
          else this.setImageHeaderIcon("img-sub-menu.png");
        }
        break;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/layoutStyles/collapseStyle";
</style>
