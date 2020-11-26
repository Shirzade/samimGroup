<template>
    <div id="permissions" class="wrapper">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <b-container-floid >
            <app-breadcrumb :breadcbItems=breadcrumbItemsPermissionsPage></app-breadcrumb>
            <app-page-main-title classStyle="main-title-page" :title=labelPermissionsPageMainTitle></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa" :title=labelPermissionsPageSubTitle></app-page-sub-title>
            <app-paragraph
                    text="جهت سازماندهی و نظارت بر ایجاد، رشد و توسعه واحدهای فنی مهندسی و در راستای بهره‌برداری از توانمندی آنها، وزارت صنعت و معدن و سایر ارگان‌های متولی در امور مختلف، اقدام به صدور مجوزهای مختلفی می‌کنند که گروه مهندسی صمیم نیز بر اساس فعالیت‌ها، استعدادها و امکانات علمی و صنعتی خود، موفق به به دریافت آنها شده است."/>
            <section>
                <b-container>
                     <b-row>
                                <b-col cols="12" lg="3" md="3"
                                       v-for="(images, index) in this.permisssionImages"
                                       :key="index"
                                       style="display: inline-block">
                                    <b-img thumbnail fluid
                                           :alt=getBlogPostTitle
                                           v-lazy=images.thumb
                                           style="height: 200px;margin-bottom:20px;cursor: pointer"
                                           @click="openGallery(index)">
                                    </b-img>
                                    <div class="caption-style">
                                        {{images.caption}}
                                    </div>
                                </b-col>
                            </b-row>
                            <LightBox
                                    :images=this.permisssionImages
                                    ref="lightbox"
                                    :show-caption="false"
                                    :show-light-box="false">
                            </LightBox>
                </b-container>
            </section>
        </b-container-floid>
    </div>
</template>

<script>
import AppPageMainTitle from '../components/titles/AppPageMainTitle'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppParagraph from '../components/layout/AppParagraph'
import AppBreadcrumb from '../components/layout/AppBreadcrumb'
import LightBox from 'vue-image-lightbox'
import ItemImageBorderBox4 from '../components/items/ItemImageBorderBox4'
import { breadcrumbItems } from '../utils/breadcrumbItems'
import { valueLabels } from '../utils/labels'
import { metaTags } from '../utils/metaTages'

export default {
  name: 'Permissions',
  data () {
    return {
      permisssionImages:[
 {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/7.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/7.jpg",
        "caption":'گواهینامه ثبت نام مؤدیان مالیاتی از سازمان امور مالیاتی کشور'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/3.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/3.jpg",
        "caption":"پروانه بهره برداری صنایع نوین از سازمان صنعت، معدن و تجارت استان تهران"
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/2.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/2.jpg",
        "caption":'مجوز فعالیت سازمان نظام صنفی رایانه‌ای'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/4.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/4.jpg",
        "caption":'پروانه فنی مهندسی از وزارت صنعت، معدن و تجارت'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/1.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/1.jpg",
        "caption":'گواهینامه استاندارد مدیریت کیفیت ایزو ISO 9001:2008 از SGS کشور سوئیس'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/5.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/5.jpg",
        "caption":'پروانه تحقیق و توسعه از وزات صنعت، معدن و تجارت'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/6.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596258670/permissions/6.jpg",
        "caption":'پروانه پژوهش از وزات صنعت، معدن و تجارت'
}
],
      metaTitle: metaTags.PERMISSIONS_PAGE.title,
      metaDescription: metaTags.PERMISSIONS_PAGE.description,
      breadcrumbItemsPermissionsPage: breadcrumbItems.BREADCRUMB_ITEMS_PERMISSIONS_PAGE,
      labelPermissionsPageMainTitle: valueLabels.LABEL_PERMISSIONS_PAGE_MAIN_TITLE,
      labelPermissionsPageSubTitle: valueLabels.LABEL_PERMISSIONS_PAGE_SUB_TITLE
    }
  },
  methods:{
 openGallery(index) {
        this.$refs.lightbox.showImage(index)
        }
  },
  head: {
    meta: [
      { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@samimgropco' },
      { name: 'twitter:type', content: 'website' },
      { property: 'og:title', content: metaTags.HOME_PAGE.title },
      { property: 'og:description', content: metaTags.HOME_PAGE.description },
      { property: 'og:url', content: 'https://www.samimgroup.com/group-permissions' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.samimgroup.com/group-permissions' }
    ]
  },
  components: {
    AppPageMainTitle,
    AppPageSubTitle,
    AppParagraph,
    LightBox,
    AppBreadcrumb,
    ItemImageBorderBox4
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewPermissionStyle";
</style>
