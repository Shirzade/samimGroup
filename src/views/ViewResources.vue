<template>
    <div id="resources" class="wrapper">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <b-container-floid data-aos="fade-up" data-aos-duration="2000">
            <app-breadcrumb :breadcbItems=breadcrumbItemsResourcesPage></app-breadcrumb>

            <app-page-main-title classStyle="main-title-page" title="منابع"></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa"
                title="دریافت کاتالوگ محصولات و راهکارهای صمیم"></app-page-sub-title>
            <app-title title="راهکارها" classStyle="resources-part-title"
                data-aos="fade-up" data-aos-duration="1000">
            </app-title>
            <item-main-resource
                    image="imam.jpg"
                    :title=labelMenuSolution1
                    link="catalog98-fa/SAMIM-iMAM.pdf"
                    size="681 KB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="monitoring.jpg"
                    :title=labelMenuSolution2
                    link="catalog98-fa/SAMIM-SmartCast-Manager.pdf"
                    size="1.67 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="ipgateway.jpg"
                    :title=labelMenuSolution3
                    link="catalog98-fa/SAMIM-Over-IP-web.pdf"
                    size="1.80 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="bitcaster.jpg"
                    :title=labelMenuSolution4
                    link="catalog98-fa/SAMIM-BitCaster.pdf"
                    size="1.08 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>

            <app-title title="محصولات" classStyle="resources-part-title"
                data-aos="fade-up" data-aos-duration="1000">
            </app-title>

            <item-main-resource
                    image="AVconverters.jpg"
                    title="مبدل‌های صدا و تصویر"
                    link="catalog98-fa/SAMIM-Audio-and-Video-Converters.pdf"
                    size="1.96 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="AVprocessors.jpg"
                    title="پردازنده‌های صدا و تصویر"
                    link="catalog98-fa/SAMIM-Audio-and-Video-Processors.pdf"
                    size="1.57 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="frames.jpg"
                    title="فریم‌ها و تجهیزات جانبی"
                    link="catalog98-fa/SAMIM-SubRack.pdf"
                    size="429.55 KB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="hedend.jpg"
                    title="هدند(Headend)"
                    link="catalog98-fa/SAMIM-Headend.pdf"
                    size="1.78 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="intercom.jpg"
                    title="اینترکام"
                    link="catalog98-fa/SAMIM-IPIntercom.pdf"
                    size="1.21 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-main-resource
                    image="mip.jpg"
                    title="مالتی ویوئر"
                    link="catalog98-fa/SAMIM-MIP.pdf"
                    size="543.29 KB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>
            <item-sub-resources catId="20"></item-sub-resources>
            <item-main-resource
                    image="roters.jpg"
                    title="روترها و کنترل‌پنل‌ها"
                    link="catalog98-fa/SAMIM-Routers.pdf"
                    size="1.9 MB"
                    date="بروزرسانی آبان 98">
            </item-main-resource>

        </b-container-floid>
    </div>
</template>

<script>
import AppBreadcrumb from '../components/layout/AppBreadcrumb'
import { breadcrumbItems } from '../utils/breadcrumbItems'
import ItemMainResource from '../components/items/ItemMainResource'
import AppTitle from '../components/titles/AppTitle'
import { valueLabels } from '../utils/labels'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppParagraph from '../components/layout/AppParagraph'
import { metaTags } from '../utils/metaTages'
import AppPageMainTitle from '../components/titles/AppPageMainTitle'
// import ItemSubResources from "../components/items/ItemSubResources";
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import { api } from '../../src/utils/api'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'ViewResources',
  components: {
    AppBreadcrumb,
    AppTitle,
    ItemMainResource,
    AppPageSubTitle,
    AppParagraph
    // ItemSubResources,
  },
  data () {
    return {
      breadcrumbItemsResourcesPage: breadcrumbItems.BREADCRUMB_ITEMS_RESOURCES_PAGE,
      metaTitle: metaTags.RESOURCE_PAGE.title,
      metaDescription: metaTags.RESOURCE_PAGE.description
    }
  },
  head: {
    meta () {
      return [
        { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@samimgropco' },
        { name: 'twitter:type', content: 'website' },
        { property: 'og:title', content: this.openGraphTitle },
        { property: 'og:description', content: this.openGraphDescription },
        { property: 'og:url', content: 'https://www.samimgroup.com/resources' }
      ]
    },
    link () {
      return [
        { rel: 'canonical', href: 'https://www.samimgroup.com/resources' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'addProductFilter',
      'emptyFilter',
      'showPaginationButton',
      'getListProducts'
    ])
    // getAllCategories() {
    //     let data = {
    //         jsonrpc: '2.0',
    //         method: 'call',
    //         params: {"lang": "fa_IR"},
    //         id: '382893928'
    //     };
    //     axios.post(api.API_LIST_CATEGORIES, data).then((res) => {
    //         this.allCategories = res.data.result
    //     })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
  },
  computed: {
    // ...mapGetters([
    //     'getProducts',
    //     'getFilter',
    //     'getShowLoading',
    //     'showPagination',
    //     'getTotalProducts',
    //     'getBreadcrumbItemsProductsPage',
    //     'getCategorySelected'
    // ]),
    settings: function () {
      return {
        // arrayData: this.arrayData
      }
    }
  },
  created () {
    // this.getAllCategories();
    // this.showPaginationButton(true);
    // this.getListProducts({page: this.$route.params.page, category: this.$route.params.cat})
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewResourcesStyle";
</style>
