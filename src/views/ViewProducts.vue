<template>
  <b-container-flouid id="products">
    <vue-headful :title="metaTitle" :description="metaDescription" />
    <div class="wrapper">
      <b-row>
        <!-- === tags and titles products === -->
        <b-col
          cols="12"
          lg="3"
          data-aos="fade-up"
          data-aos-duration="2000"
          order="12"
          order-lg="1"
          order-md="12"
        >
          <div class="side-bar">
            <app-filter :title="labelTitleAllProducts" catId="all"></app-filter>
            <app-collaps
              :key="category.id"
              :CategoryId="category.id"
              :titleHeader="category.name"
              classStyle="products-page"
              iconHeader="left"
              v-for="category in allCategories"
            >
              <b-col>
                <app-filter
                  :key="subCategory.id"
                  :parent="category.name"
                  :parentId="category.id"
                  :catId="subCategory.id"
                  :title="subCategory.name"
                  v-for="subCategory in category.subCategory"
                ></app-filter>
              </b-col>
            </app-collaps>
          </div>
        </b-col>
        <!-- === list of products === -->
        <b-col
          cols="12"
          lg="9"
          data-aos="fade-up"
          data-aos-duration="2000"
          order="1"
          order-lg="12"
          order-md="1"
        >
          <b-row>
            <b-col cols="12">
              <app-breadcrumb-page :items="getBreadcrumbItemsProductsPage"></app-breadcrumb-page>
            </b-col>
          </b-row>
          <b-row v-if="getShowLoading">
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <content-loader
                :height="475"
                :speed="2"
                :width="400"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect height="30.42" rx="4" ry="4" width="234" x="153.19" y="222.17" />
                <rect height="204" rx="5" ry="5" width="392" x="4" y="4.67" />
                <rect height="20.02" rx="4" ry="4" width="369" x="16.69" y="273.17" />
                <rect height="20.02" rx="4" ry="4" width="369" x="14.69" y="304.17" />
              </content-loader>
            </b-col>
          </b-row>
          <b-row>
            <item-products-page
              :image="product.id"
              :key="product.title"
              :text="product.description"
              :title="product.name"
              :cleanUrl="product.seo_url_friendly"
              :categoryName="product.category_id[0].name"
              class="project"
              showTag="true"
              v-for="product in getProducts"
            ></item-products-page>
          </b-row>
          <b-row class="container-pagination" v-if="showPagination">
              <item-pagination
                :key="page"
                :selectedCategory="getCategorySelected"
                v-for="page in getTotalProducts"
                :pageNumber="page"
              ></item-pagination>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container-flouid>
</template>

<script>
import { valueLabels } from '../utils/labels'
import AppBreadcrumb from '../components/layout/AppBreadcrumb'
import ItemProductsPage from '../components/items/ItemProductsPage'
import AppBreadcrumbPage from '../components/layout/AppBreadcrumbPage'
import ItemPagination from '../components/items/ItemPagination'
import AppCollaps from '../components/layout/AppCollaps'
import ItemLinkFooter from '../components/items/ItemLinkFooter'
import AppCheckBox from '../components/layout/AppCheckBox'
import AppFilter from '../components/layout/AppFilter'
import { mapActions, mapGetters } from 'vuex'
import { PaginationControl, PaginationPage } from 'vue-smart-pagination'
import axios from 'axios'
import { api } from '../../src/utils/api'
import { ContentLoader } from 'vue-content-loader'
import { metaTags } from '../utils/metaTages'
import AppPageMainTitle from '../components/titles/AppPageMainTitle'

export default {
  name: 'Products',
  components: {
    AppPageMainTitle,
    AppBreadcrumbPage,
    AppFilter,
    AppCheckBox,
    ItemLinkFooter,
    AppCollaps,
    ItemPagination,
    ItemProductsPage,
    AppBreadcrumb,
    ContentLoader,
    PaginationControl,
    PaginationPage
  },
  data () {
    return {
      metaTitle: metaTags.PRODUCTS_PAGE.title,
      metaDescription: metaTags.PRODUCTS_PAGE.description,
      allCategories: [],
      itemsBreadCrumb: ['ali', 'reza'],
      titleModularProduct:
        valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MODULAR_PRODUCTS,
      titleRouterAndControl:
        valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_ROUTERTERS_AND_CONTROL_PANELS,
      titleMultiviewers: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MUlTIVIEWER,
      titleIpInterCom: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_IP_INTERCOM,
      labelTitleLinkFirst1: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_1_EN,
      labelTitleLinkFirst2: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_2_EN,
      labelTitleLinkFirst3: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_3_EN,
      labelTitleLinkFirst4: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_4_EN,
      labelTitleLinkFirst5: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_5_EN,
      labelTitleLinkFirst6: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_6_EN,
      labelTitleLinkFirst7: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_7_EN,
      labelTitleLinkFirst8: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_8_EN,
      labelTitleLinkSecond1: valueLabels.LABEL_TITLE_LINK_FOOTER_SECOND_1_EN,
      labelTitleLinkSecond2: valueLabels.LABEL_TITLE_LINK_FOOTER_SECOND_2_EN,
      labelTitleLinkThree1: valueLabels.LABEL_TITLE_LINK_FOOTER_THREE_1_EN,
      labelTitleLinkThree2: valueLabels.LABEL_TITLE_LINK_FOOTER_THREE_2_EN,
      labelTitleLinkFourth1: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_1_EN,
      labelTitleLinkFourth2: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_2_EN,
      labelTitleLinkFourth3: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_3_EN,
      labelTitleLinkFourth4: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_3_EN,
      labelTitleTags: valueLabels.LABEL_TAGES,
      labelTitleAllProducts: valueLabels.LABEL_ALL_PRODUCT
    }
  },
  head: {
    meta: [
      { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@samimgropco' },
      { name: 'twitter:type', content: 'website' },
      { property: 'og:title', content: metaTags.PRODUCTS_PAGE.title },
      {
        property: 'og:description',
        content: metaTags.PRODUCTS_PAGE.description
      },
      { property: 'og:url', content: 'https://www.samimgroup.com/products' }
    ],
    link: [{ rel: 'canonical', href: 'https://www.samimgroup.com/products' }]
  },
  methods: {
    ...mapActions([
      'addProductFilter',
      'emptyFilter',
      'showPaginationButton',
      'setBreadcrumbItemsProductsPage',
      'getListProducts'
    ]),
    getAllCategories () {
      let data = {
        jsonrpc: '2.0',
        method: 'call',
        params: { lang: 'fa_IR' },
        id: '382893928'
      }
      axios
        .post(api.API_LIST_CATEGORIES, data)
        .then(res => {
          this.allCategories = res.data.result
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters([
      'getProducts',
      'getFilter',
      'getShowLoading',
      'showPagination',
      'getTotalProducts',
      'getBreadcrumbItemsProductsPage',
      'getCategorySelected'
    ]),
    settings: function () {
      return {
        arrayData: this.arrayData
      }
    }
  },
  created () {
    // this.addProductFilter('ALL')
    // alert(this.$route.params.cat)
    this.getAllCategories()
    this.showPaginationButton(true)
    this.getListProducts({
      page: this.$route.params.page,
      category: this.$route.params.cat
    })
    // this.setBreadcrumbItemsProductsPage({
    //   parentCategory: "",
    //   categoryName: ""
    // });
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/views/viewProductsStyle";
</style>
