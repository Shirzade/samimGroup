<template>
    <div class="wrapper" id="achievements">
        <vue-headful
                :description=metaDescription
                :title=metaTitle
        />
        <b-container-floid data-aos="fade-up" data-aos-duration="2000">
            <app-breadcrumb :breadcbItems=breadcrumbItemsAchievementsPage></app-breadcrumb>
            <app-page-main-title :title=labelAchievementsPageMainTitle classStyle="main-title-page"></app-page-main-title>
            <app-page-sub-title :title=labelAchievementsPageSubTitle classStyle="sub-title-fa"></app-page-sub-title>
            <app-paragraph
                    text="در راستاي سیاست‌های کشور در خصوص ارج نهادن به توليدات برتر داخلی، گروه مهندسي صميم با کسب عناوین برتر در بسیاری از همایش‌ها و نمایشگاه‌های تخصصی، مفتخر به دریافت لوح تقدير از مدیران ارشد سازمان‌های مختلف شده است. "/>
            <section>
                <b-container>
                    <b-row>
                                <b-col cols="12" lg="3" md="3"
                                       v-for="(images, index) in this.permisssionImages"
                                       :key="index"
                                       style="display: inline-block">
                                      <div>
                                        <b-img thumbnail fluid
                                           :alt=getBlogPostTitle
                                           v-lazy=images.thumb
                                           style="height: 200px;margin-bottom:20px;cursor: pointer"
                                           @click="openGallery(index)">
                                          </b-img>
                                       <div class="caption-style">
                                          {{images.caption}}
                                       </div>
                                      </div>
                                </b-col>
                            </b-row>
                            <LightBox
                                    :images=this.permisssionImages
                                    ref="lightbox"
                                    :show-caption="true"
                                    :show-light-box="false">
                            </LightBox>
                </b-container>
            </section>
        </b-container-floid>
    </div>
</template>

<script>
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppParagraph from "../components/layout/AppParagraph";
    import AppBreadcrumb from "../components/layout/AppBreadcrumb";
    import ItemImageBorderBox4 from "../components/items/ItemImageBorderBox4";
    import {breadcrumbItems} from "../utils/breadcrumbItems";
    import {valueLabels} from "../utils/labels";
    import {metaTags} from "../utils/metaTages";
    import LightBox from 'vue-image-lightbox'

    export default {
        name: "Achievements",
        data() {
            return {
permisssionImages:[
 {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/1.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/1.jpg",
        "caption": 'تقدیرنامه انتخاب سیستم گیرنده دیکدر حرفه ای به عنوان طرح منتخب در سومين جشنواره علم تا عمل از معاونت علمی و فناوری ریاست جمهوری'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/2.jpg",
	"src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/2.jpg",
        "caption": 'تقديرنامه برای ارائه سمينار HDTV از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/3.jpg",
	"src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/3.jpg",
        "caption": 'تقديرنامه برگزیده بهترین محصول داخلی استودیوئی نمایشگاه فناوری رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/4.jpg",
	"src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/4.jpg",
        "caption": 'تقديرنامه توليد علم در زمينه رسانه و ساخت دستگاه فريم سينکرونايزر از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/5.jpg",
	"src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/5.jpg",
        "caption": 'تقديرنامه حمایت از خوداتکايي تجهيزات فني رسانه در دهمین جشنواره توسعه و فناوري رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/6.jpg",
	"src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/6.jpg",
        "caption": 'تقديرنامه حمایت از خودکفایی در تولید تجهيزات فني رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/7.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/7.jpg",
        "caption": 'تقدیرنامه دستاوردهای شرکت های دانش بنیان و فن آور دانشگاه صنعتی شریف'

}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/8.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/8.jpg",
        "caption": 'تقدیرنامه سومین کنفرانس بین المللی رسانه های نوین از صدا و سیمای جمهوری اسلامی ایران'

}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/9.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/9.jpg",
        "caption":'تقدیرنامه دومین کنفرانس ملی دفاع سایبری از انجمن علمی پژوهشی جنگ الکترونیک و دفاع سایبری ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/10.jpg",
	"src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/10.jpg"
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/11.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/11.jpg",
        "caption":'تقدیرنامه سیزدهمین اجلاس سراسری فناوری رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/12.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/12.jpg",
        "caption":'تقدیرنامه صندوق نوآوری و شکوفایی ریاست جمهوری در پنجمین رونمایی از دستاوردهای شرکت های دانش بنیان'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/13.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/13.jpg",
        "caption":'تقدیرنامه نهمین جشنواره توسعه و فناوري رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/14.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/14.jpg",
        "caption":'تندیس تولید ملی، حمایت از کار و سرمایه ایرانی در سومین جشنواره ملی علم تا عمل از معاونت علمی و فناوری ریاست جمهوری'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/15.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/15.jpg",
        "caption":'تندیس تولیدکننده برتر در دهمین جشنواره فناوری رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/16.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/16.jpg",
        "caption":'تندیس غرفه برتر در چهارمین کنفرانس مهندسی رسانه از دانشکده صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/17.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/17.jpg",
        "caption":'تندیس غرفه برتر در سیزدهمین اجلاس سراسری فناوری رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/18.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/18.jpg",
        "caption":'تندیس ویژه اولین نشست تولیدکنندگان برتر صنعت رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/19.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/19.jpg",
        "caption":'تندیس یازدهمین اجلاس سراسری فناوری رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/20.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/20.jpg",
        "caption":'گواهینامه سومین دوره همایش رعایت حقوق مصرف کنندگان استان تهران از وزارت صنعت، معدن و تجارت'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/21.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/21.jpg",
        "caption":'لوح تقدیر پنجمین نمایشگاه بین المللی اختراع و تکنولوژی (اینوتکس)'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/22.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/22.jpg",
        "caption":'لوح تقدیر دومین کنفراس مهندسی رسانه از دانشکده صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/23.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/23.jpg",
        "caption":'لوح تقدیر محصول برتر تحقیق و توسعه واحدهای تولیدی و صنعتی کشور در هفتمین جشنواره پژوهش و فناوری وزارت صنعت، معدن و تجارت'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/24.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/24.jpg",
        "caption":'لوح تقدیر نمایشگاه تخصصی صنعت برودکست چهارمین کنفرانس مهندسی رسانه از صدا و سیمای جمهوری اسلامی ایران'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/25.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/25.jpg",
        "caption":'لوح تقدیر هشتمین نمایشگاه بین المللی لوازم و تجهیزات، پلیسی، امنیتی و ایمنی'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/26.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/26.jpg",
        "caption":'لوح سپاس بیست و پنجمین نمایشگاه بین المللی ارتباطات و فناوری اطلاعات جمهوری آذربایجان؛ باکوتل'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/27.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/27.jpg",
        "caption":'لوح سپاس پنجمین نمایشگاه بین المللی امنیت پایدار از سازمان حراست صنعت نفت'
}, {
	"thumb": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/28.jpg",
        "src": "https://res.cloudinary.com/samimco/image/upload/v1596259817/achievements/28.jpg",
        "caption":'لوح سپاس چهاردهمین اجلاس سراسری فناوری رسانه'
}
],
                metaTitle: metaTags.ACHIEVEMENTS_PAGE.title,
                metaDescription: metaTags.ACHIEVEMENTS_PAGE.description,
                breadcrumbItemsAchievementsPage: breadcrumbItems.BREADCRUMB_ITEMS_ACHIEVEMENTS_PAGE,
                labelAchievementsPageMainTitle: valueLabels.LABEL_ACHIEVEMENTS_PAGE_MAIN_TITLE,
                labelAchievementsPageSubTitle: valueLabels.LABEL_ACHIEVEMENTS_PAGE_SUB_TITLE,
            }
        },
        methods:{
           openGallery(index) {
        this.$refs.lightbox.showImage(index)
        }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.ACHIEVEMENTS_PAGE.title},
                {property: 'og:description', content: metaTags.ACHIEVEMENTS_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com/achievements"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/achievements'}
            ],
        },
        components: {
            AppPageMainTitle,
            AppPageSubTitle,
            AppParagraph,
            AppBreadcrumb,
            LightBox,
            ItemImageBorderBox4
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewAchievementsStyle";
</style>
