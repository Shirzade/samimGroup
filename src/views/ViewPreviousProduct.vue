<template>
    <div>
        <b-container-flouid id="single-product">
            <vue-headful
                    :title=getProductMetaTitle
                    :description=getProductMetaDescription
            />
            <!--information product section-->
            <b-row align-h="center">
                <b-col cols="9">
                    <b-row>
                        <b-col cols="12" lg="12" class="breadcrumb">
                            <app-breadcrumb :breadcbItems=getBreadcrumbItemsProductsPage></app-breadcrumb>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" v-if=getShowLoading>
                            <content-loader
                                    :height="475"
                                    :speed="2"
                                    :width="400"
                                    primaryColor="#f3f3f3"
                                    secondaryColor="#ecebeb">
                                <rect x="199.67" y="14.4" rx="3" ry="3" width="191.34" height="19.26"/>
                                <rect x="271.67" y="46.67" rx="3" ry="3" width="106.82" height="18.44"/>
                                <rect x="8.67" y="17.67" rx="0" ry="0" width="172.05" height="156.09"/>
                                <rect x="217.67" y="84.83" rx="3" ry="3" width="171.91" height="10.11"/>
                                <rect x="222.51" y="110.83" rx="3" ry="3" width="166.9" height="10.11"/>
                                <rect x="131.67" y="182.67" rx="0" ry="0" width="42" height="30"/>
                                <rect x="299.67" y="135.67" rx="0" ry="0" width="0" height="0"/>
                                <rect x="84.67" y="183.67" rx="0" ry="0" width="42" height="30"/>
                                <rect x="37.67" y="183.67" rx="0" ry="0" width="42" height="30"/>
                                <rect x="219.51" y="138.83" rx="3" ry="3" width="166.9" height="10.11"/>
                            </content-loader>
                        </b-col>
                    </b-row>
                    <b-row>
                        <app-slider-product-image
                                firstImage="1.png"
                                secondImage="2.png"
                                thirdImage="3.png"></app-slider-product-image>
                        <b-col cols="12" lg="5" class="right-section">
                            <app-page-main-title :title=getProductDescription
                                                 classStyle="product-page-main-title"></app-page-main-title>
                            <app-page-sub-title :title=getProductName
                                                classStyle="product-page-sub-title"></app-page-sub-title>
                            <div class="main-description" v-html="getProductMainContent"></div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container-flouid>
        <section>
            <b-container-flouid>
                <b-row class="html-injection"
                       v-html="getProductContent"
                ></b-row>
            </b-container-flouid>
        </section>

        <!--Related products-->
        <section>
            <b-container-flouid>
                <!--<b-row class="container-related"-->
                <!--data-aos="fade-up"-->
                <!--data-aos-duration="3000"-->
                <!--data-aos-once="true"-->
                <!--data-aos-mirror="true">-->
                <!--<b-col cols="12" lg="10" md="10">-->
                <!--<app-title :title=labelRelatedItems classStyle="related-item"></app-title>-->
                <!--</b-col>-->
                <!--</b-row>-->
                <!--<b-row>-->
                <!--<b-container-->
                <!--data-aos="fade-up"-->
                <!--data-aos-duration="3000"-->
                <!--data-aos-once="true"-->
                <!--data-aos-mirror="true">-->
                <!--<b-row>-->
                <!--<item-products-page-->
                <!--showTag=false-->
                <!--image="10.png"-->
                <!--title="UDC-3455"-->
                <!--text="ASI/IP Gateway"></item-products-page>-->
                <!--<item-products-page-->
                <!--showTag=false-->
                <!--image="11.png"-->
                <!--title="IPG-1000-AES"-->
                <!--text="ASI/IP Gateway"></item-products-page>-->
                <!--<item-products-page-->
                <!--showTag=false-->
                <!--image="12.png"-->
                <!--title="IPG-1000-ASI"-->
                <!--text="ASI/IP Gateway"></item-products-page>-->
                <!--</b-row>-->
                <!--</b-container>-->
                <!--</b-row>-->
            </b-container-flouid>
        </section>
    </div>
</template>

<script>
import { breadcrumbItems } from '../utils/breadcrumbItems'
import AppBreadcrumb from '../components/layout/AppBreadcrumb'
import AppPageMainTitle from '../components/titles/AppPageMainTitle'
import AppParagragh from '../components/layout/AppParagraph'
import AppProductPage from '../components/layout/AppTapProductPage'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppButton from '../components/buttons/AppButton'
import { valueLabels } from '../utils/labels'
import AppTitle from '../components/titles/AppTitle'
import ItemProductsPage from '../components/items/ItemProductsPage'
import AppSliderProductImage from '../components/layout/AppSliderProductImage'
import { mapActions, mapGetters } from 'vuex'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'PreviousProduct',
  data () {
    return {
      productId: '',
      productContent: null,
      productName: '',
      productDescription: '',
      productImages: [],
      openGraphTitle: this.getProductMetaTitle,
      openGraphDescription: this.getProductMetaDescription,
      breadcrumbItemsProductsPage: breadcrumbItems.BREADCRUMB_PRODUCT_PAGE,
      labelTextButtonDataSheet: valueLabels.LABEL_TEXT_BUTTON_DATASHEET,
      labelTextButtonUserManual: valueLabels.LABEL_TEXT_BUTTON_USER_MANUAL,
      labelRelatedItems: valueLabels.LABEL_RELATED_ITEMS
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
        { property: 'og:url', content: 'https://www.samimgroup.com/shop/product/' + this.$route.params.pid }
      ]
    },
    link () {
      return [
        { rel: 'canonical', href: 'https://www.samimgroup.com/shop/product/' + this.$route.params.pid }
      ]
    }
  },
  components: {
    AppSliderProductImage,
    ItemProductsPage,
    AppTitle,
    AppButton,
    AppPageSubTitle,
    AppProductPage,
    AppParagragh,
    AppPageMainTitle,
    AppBreadcrumb,
    ContentLoader
  },
  computed: {
    ...mapGetters([
      'getProductContent',
      'getProductName',
      'getProductMetaDescription',
      'getProductDescription',
      'getProductMetaTitle',
      'getProductMainContent',
      'getBreadcrumbItemsProductsPage',
      'getShowLoading'
    ])
  },
  methods: {
    ...mapActions([
      'getProductInformation'
    ])

  },
  created () {
    this.productId = this.$route.params.pid
    this.getProductInformation(this.$route.params.pid)
  },
  updated () {
    let firstButtonShow = document.getElementById('firstButton')
    firstButtonShow.classList.remove('un-selected-item')
    firstButtonShow.classList.add('selected-item')
    const firstButton = document.querySelector('#firstButton')
    firstButton.addEventListener('click', () => {
      // buttons
      let firstButton = document.getElementById('firstButton')
      firstButton.classList.remove('un-selected-item')
      firstButton.classList.add('selected-item')
      let secondButton = document.getElementById('secondButton')
      secondButton.classList.remove('selected-item')
      secondButton.classList.add('un-selected-item')
      let threeButton = document.getElementById('threeButton')
      threeButton.classList.remove('selected-item')
      threeButton.classList.add('un-selected-item')
      let forthButton = document.getElementById('forthButton')
      forthButton.classList.remove('selected-item')
      forthButton.classList.add('un-selected-item')
      // contents
      let firstContent = document.getElementById('first-content')
      firstContent.classList.remove('do-not-show')
      firstContent.classList.add('do-show')
      let secondContent = document.getElementById('second-content')
      secondContent.classList.remove('do-show')
      secondContent.classList.add('do-not-show')
      let threeContent = document.getElementById('three-content')
      threeContent.classList.remove('do-show')
      threeContent.classList.add('do-not-show')
      let forthContent = document.getElementById('forth-content')
      forthContent.classList.remove('do-show')
      forthContent.classList.add('do-not-show')
    })
    const secondButton = document.querySelector('#secondButton')
    secondButton.addEventListener('click', () => {
      // button
      let secondButton = document.getElementById('secondButton')
      secondButton.classList.remove('un-selected-item')
      secondButton.classList.add('selected-item')
      let firstButton = document.getElementById('firstButton')
      firstButton.classList.remove('selected-item')
      firstButton.classList.add('un-selected-item')
      let threeButton = document.getElementById('threeButton')
      threeButton.classList.remove('selected-item')
      threeButton.classList.add('un-selected-item')
      let forthButton = document.getElementById('forthButton')
      forthButton.classList.remove('selected-item')
      forthButton.classList.add('un-selected-item')
      // content
      let secondContent = document.getElementById('second-content')
      secondContent.classList.remove('do-not-show')
      secondContent.classList.add('do-show')
      let firstContent = document.getElementById('first-content')
      firstContent.classList.remove('do-show')
      firstContent.classList.add('do-not-show')
      let threeContent = document.getElementById('three-content')
      threeContent.classList.remove('do-show')
      threeContent.classList.add('do-not-show')
      let forthContent = document.getElementById('forth-content')
      forthContent.classList.remove('do-show')
      forthContent.classList.add('do-not-show')
    })
    const threeButton = document.querySelector('#threeButton')
    threeButton.addEventListener('click', () => {
      // buttons
      let threeButton = document.getElementById('threeButton')
      threeButton.classList.remove('un-selected-item')
      threeButton.classList.add('selected-item')
      let firstButton = document.getElementById('firstButton')
      firstButton.classList.remove('selected-item')
      firstButton.classList.add('un-selected-item')
      let secondButton = document.getElementById('secondButton')
      secondButton.classList.remove('selected-item')
      secondButton.classList.add('un-selected-item')
      let forthButton = document.getElementById('forthButton')
      forthButton.classList.remove('selected-item')
      forthButton.classList.add('un-selected-item')
      // contents
      let threeContent = document.getElementById('three-content')
      threeContent.classList.remove('do-not-show')
      threeContent.classList.add('do-show')
      let secondContent = document.getElementById('second-content')
      secondContent.classList.remove('do-show')
      secondContent.classList.add('do-not-show')
      let firstContent = document.getElementById('first-content')
      firstContent.classList.remove('do-show')
      firstContent.classList.add('do-not-show')
      let forthContent = document.getElementById('forth-content')
      forthContent.classList.remove('do-show')
      forthContent.classList.add('do-not-show')
    })
    const forthButton = document.querySelector('#forthButton')
    forthButton.addEventListener('click', () => {
      // buttons
      let forthButton = document.getElementById('forthButton')
      forthButton.classList.remove('un-selected-item')
      forthButton.classList.add('selected-item')
      let threeButton = document.getElementById('threeButton')
      threeButton.classList.remove('selected-item')
      threeButton.classList.add('un-selected-item')
      let firstButton = document.getElementById('firstButton')
      firstButton.classList.remove('selected-item')
      firstButton.classList.add('un-selected-item')
      let secondButton = document.getElementById('secondButton')
      secondButton.classList.remove('selected-item')
      secondButton.classList.add('un-selected-item')
      // content
      let forthContent = document.getElementById('forth-content')
      forthContent.classList.remove('do-not-show')
      forthContent.classList.add('do-show')
      let threeContent = document.getElementById('three-content')
      threeContent.classList.remove('do-show')
      threeContent.classList.add('do-not-show')
      let secondContent = document.getElementById('second-content')
      secondContent.classList.remove('do-show')
      secondContent.classList.add('do-not-show')
      let firstContent = document.getElementById('first-content')
      firstContent.classList.remove('do-show')
      firstContent.classList.add('do-not-show')
    })
  }
}
</script>

<style scoped>
    /*@import "../assets/styles/views/viewSingleProductStyle";*/
    .html-injection >>> .class-content {
        font-family: IRANSans;
        width: 100%;
        background-color: #f2f2f2;
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }

    /* .html-injection >>> .container {
        width: 100%;
        max-width: 1440px;
    } */

    .html-injection >>> .class-content-main {
        width: 100%;
        max-width: 1440px;
        background-color: white;
        display: flex;
        justify-content: center
    }

    .html-injection >>> .container-tabs {
        width: 100%;
        max-width: 1440px;
        background-color: white;
    }

    .html-injection >>> .tab-first {
        width: 25%;
        background-color: white;
        float: right;
        font-family: IRANSans;
        text-align: center;
    }

    .html-injection >>> .tab-second {
        width: 25%;
        text-align: center;
        background-color: white;
        float: right;
    }

    .html-injection >>> .tab-three {
        width: 25%;
        text-align: center;
        background-color: white;
        float: right;
    }

    .html-injection >>> .tab-four {
        width: 25%;
        text-align: center;
        background-color: white;
        float: right;
    }

    .html-injection >>> .inner-class {
        font-family: IRANSans;
        margin-left: 2px;
        margin-right: 2px;
        text-align: center;
        cursor: pointer;
        font-size: 15px;
        padding-top: 10px;
        font-weight: bold;
        padding-bottom: 10px;
        background-color: #f2f2f2;
    }

    .html-injection >>> .disabled, div:disabled, div[disabled] {
        margin-left: 0px;
        margin-right: 0px;
        cursor: default;
        background-color: #f2f2f2 !important;
        color: #f2f2f2 !important;
    }

    .html-injection >>> .html-injection-container-content {
        font-family: IRANSans;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
    }

    .html-injection >>> .html-injection-content {
        width: 100%;
        max-width: 1440px;
        /* width: 1200px; */
        display: block;
        direction: rtl;
        text-align: right;
        padding-top: 16px;
        /* background-color: rgba(104, 104, 104, 0.01); */
    }

    .html-injection >>> .do-not-show {
        display: none;
    }

    .html-injection >>> .do-show {
        display: block;
    }

    .html-injection >>> .selected-item {
        background-color: white;
        color: #FF0000;
    }

    .html-injection >>> .un-selected-item {
        color: #767370;
    }

    .html-injection >>> .un-selected-item {
        background-color: #f2f2f2;
    }

    .html-injection >>> .download-button {
        font-family: IRANSans;
        width: 190px;
        height: 37px;
        align-items: center;
        display: flex;
        color: #FF0000;
        cursor: pointer;
        border: 2px solid #FF0000;
        justify-content: center;
    }

    .html-injection >>> .download-link {
        color: #FF0000;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
    }

    .html-injection >>> .list-icons {
        font-size: 16px;
        font-weight: bold;
        list-style: none;
        list-style-position: outside;
    }

    /* .html-injection >>> .list-icons li {
        padding: 10px 5px 10px 0px;
    } */

    .html-injection >>> .fa-circle::before {
        content: "\2022";
        color: #FF0000;
        display: inline-block;
        padding-left: 15px;
        font-size: 40px;
        vertical-align: middle;
    }

    .html-injection >>> .fa-circle2::before {
        content: "\25CB";
        color: #FF0000;
        display: inline-block;
        padding-left: 15px;
        padding-right: 30px;
        font-size: 16px;
        line-height: 35px;
        vertical-align: middle;
    }

    .html-injection >>> .pr50{
        padding-right: 50px;
    }

    /* .html-injection >>> li:before{
        content: '\1F95E';
        color: #FF0000;
        padding-left: 5px;
    } */

    .html-injection >>> .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .html-injection >>> .l-col {
        text-align: left;
        direction: ltr;
        font-family: Roboto;
        width:68%;
    }

    .html-injection >>> .text-left {
        text-align: left;
    }

    .html-injection >>> .font-roboto, .main-description >>> .font-roboto {
        font-family: Roboto;
    }

    .html-injection >>> .vc-hc {
        text-align: center;
        vertical-align: middle;
    }

    .html-injection >>> th {
        padding: 5px;
        background-color: #f2f2f2;
        border: 1px solid #cccfd2;
        vertical-align: inherit;
    }

    .html-injection >>> .table td {
        padding: 5px;
        vertical-align: middle;
        border: 1px solid #cccfd2;
    }

    /* .html-injection >>> .table-responsive-sm table{
        max-width: 576px;
    }

    .html-injection >>> .table-responsive-md table {
        max-width: 768px;
    }

    .html-injection >>> .table-responsive-lg table {
        max-width: 992px;
    }

    .html-injection >>> .table-responsive-xl table {
        max-width: 1120px;
    } */
    .html-injection >>> .download-link-title {
        margin-top: 30px;
        margin-bottom: 30px;
        font-family: Roboto;
    }

    .html-injection >>> .container-download h4 {
        font-weight: bold;
    }

    .html-injection >>> .container-download {
        border-top: 2px solid #dee2e6;
        text-align: right;
        direction: rtl;
    }

    .breadcrumb {
        margin-top: 60px;
        background-color: #fff;
    }

    .main-description {
        font-family: IRANSans;
        margin-top: 50px;
        direction: rtl;
        text-align: justify;
        line-height: 32px;
        font-size: 1.2em;
        color: #767370;
        padding-left: 5em;
    }

    .container-related {
        background-color: #f2f2f2;
        margin-top: 50px;
    }

    .container-related .container {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>
