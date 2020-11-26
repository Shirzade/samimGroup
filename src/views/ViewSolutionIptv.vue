<template>
    <b-container-floid id="solutions">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="title-banner-iptv"/>
        <div class="wrapper">
            <app-page-main-title classStyle="main-title-page" title="تلویزیون‌های تعاملی OTT/VOD"></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa"
                                title="راهکار شهری / هتلی / حمل‌و‌نقل"></app-page-sub-title>
            <app-paragraph
                    text="تلویزیون و رسانه یکی از بزرگترین سرگرمی‌های بشر در سال‌های اخیر بوده است. با پیشرفت روزافزون تکنولوژی به ویژه اینترنت، تولیدکنندگان محتوا همواره در تلاش بوده‌اند تا با ایجاد امکانات جذاب، تعداد مخاطبان و میزان بازدید از برنامه‌هایشان را افزایش دهند. با استفاده از تلویزیون‌های تعاملی شرکت صمیم، مخاطب می‌تواند برنامه‌ تلویزیون‌های داخلی و خارجی را علاوه بر موعد پخش، به صورت انتخابی در زمان و مکان دلخواه خود تماشا نماید. در این سیستم‌ها آرشیو جامعی از فیلم و سریال، موسیقی، کتاب الکترونیکی، اخبار و ... وجود دارد که از طریق نمایشگر تلویزیون یا حتی سایر دستگاه‌ها مانند گوشی تلفن همراه، تبلت، رایانه و ... قابل دسترسی می‌باشد. مدیریت کامل محتوای در حال پخش، امکان سفارشی‌سازی و شخصی‌سازی خدمات و پشتیبانی از چند زبان مختلف از مهم‌ترین ویژگی‌های این محصولات می‌باشند."/>
        </div>
        <div class="iptv-facilities-section"
            data-aos="fade-up"
            data-aos-duration="2000">
            <div class="internal-wrapper">
                <app-title
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        title="امکانات محصول"
                        classStyle="solutions-sub-title-in-texts">
                </app-title>
                <app-tab-iptv-solution-page
                        data-aos="fade-up"
                        data-aos-duration="2000">
                </app-tab-iptv-solution-Page>
            </div>
        </div>
        <div class="wrapper">
            <app-title
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                    title="ویژگی‌های فنی"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <app-paragraph class="mb50"
                    text="با توجه به اینکه تمام مراحل طراحی و پیاده‌سازی سامانه تلویزیون‌های تعاملی OTT صمیم به دست نیروهای متخصص ایرانی و در شرکت صمیم انجام گرفته است، این سامانه در تمام قسمت‌ها امکان سفارشی‌سازی و حتی افزودن امکانات جدید را دارا می‌باشد. از جمله امکانات دیگری که قابلیت اضافه شدن به سامانه را دارند، می‌توان به موارد زیر اشاره نمود:"/>
            <b-row align-h="" class="features">
                                <b-col cols="12" md="6" class="pl-md-5"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                    <ul class="fa-ul mr-md-0">
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="شیفت زمانی و شیفت برنامه‌ای (Time-shift) که امکان جستجوی برنامه‌ها را براساس شبکه، تاریخ و زمان پخش فراهم می‌نماید و کاربر می‌تواند به آرشیو برنامه‌های پخش شده شبکه‌های مختلف داخلی و خارجی بدون محدودیت زمانی و در هر ساعتی از شبانه روز دسترسی داشته باشند."></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="پخش زنده شبکه‌های تلویزیونی و تولیدی "></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="پخش درخواستی محتوای صوتی و تصویری به صورت Full HD با امکان ایجاد لیست پخش دلخواه، ارائه گزارش از تعداد مشاهدات خرید و پخش همزمان فیلم و موسیقی"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="دسترسی چند صفحه نمایشی (Multiscreen) به منظور نمایش همزمان چندین محتوا"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="سازگاری با تمامی سکوهای نرم‌افزاری و سیستم عامل‌ها"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text=" ارائه سرویس‌های ارزش افزوده همچون نمایش لوگو، آب و هوا، اوقات شرعی، تقویم روز و دسترسی به نقشه و آدرس‌یابی مکان‌های مختلف و جاذبه‌های توریستی"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="دسترسی به تلویزیون خطی (Linear TV) با عضویت در سامانه "></app-li>
                   </ul>
                </b-col>
                <b-col cols="12" md="6" class="pr-md-5"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                    <ul class="fa-ul ml-md-0">
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="امکان تغییر فرمت و انکودرهای مبتنی بر ابر آنلاین و آفلاین (Cloud Transcoding) توسط اپراتور سرویس دهنده"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="مدیریت جامع محتوا (ترنسکودر آفلاین محتوا، تگ گذاری جهت تولید متادیتا، چرخه اتوماتیک تولید محتوا و ...)"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="مدیریت جامع کاربران و دسترسی‌ها (مدیریت مشترکین - CRM) همچون مدیریت تعیین محدودیت‌های سنی و parental control"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="مدیریت محتوای متنی شامل زیرنویس خبری، زیرنویس تبلیغاتی و سرویس‌های محلی"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="تجزیه و تحلیل آمار و داده‌های جمع‌شونده در سیستم (Big Data Analytics)"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="مدیریت صورت حساب و شارژینگ"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="خصوصی‌سازی محتوا (Channel Branding) از طریق ایجاد کانال‌های اختصاصی"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="پخش دوربین‌های مدار بسته (مشاهده مناظر بیرون، ازدحام رستوران و...)"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="اتاق گفتگو (چت)"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="امکان ارائه اینترنت در نقاط تحت پوشش اینترنت سراسری"></app-li>
                        <app-li listIcon="circle" classStyle="iptv-features" title=""
                                text="امکان ثبت رکورد در بازی به نام فرد و بازیهای دو نفره جهت ایجاد حس رقابت"></app-li>
                    </ul>
                </b-col>
                <item-big-image
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        image="pages/solutions/iptv/iptv-features.jpg" class="features-img"></item-big-image>
            </b-row>
        </div>
        <div class="iptv-security-section">
            <div class="internal-wrapper">
                <app-title
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        title="امنیت"
                        classStyle="solutions-sub-title-in-texts">
                </app-title>
                <app-paragraph
                    text="به منظور تامین امنیت این سیستم، از بهترین راهکارهای امنیتی روز دنیا استفاده شده است. این سامانه به نحوی طراحی شده است که محتوای آماده برای بارگذاری، توسط نرم‌افزار مدیریتی کدگذاری و رمزنگاری شده و سپس در سامانه بارگذاری می‌شود و دستگاه فقط محتوای رمزنگاری شده را به کاربر نمایش می‌دهد. بدین ترتیب هر گونه رخنه و نفوذ در سیستم توسط افراد متفرقه جهت تغییر محتوا غیرممکن می‌باشد."/>

            </div>
        </div>
        <div class="wrapper">
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="انواع تلویزیون‌های تعاملی ارائه شده توسط شرکت صمیم "
                    classStyle="solutions-sub-title-in-texts mb50">
            </app-title>
            <app-tab-types-iptv-solution-page
                    data-aos="fade-up"
                    data-aos-duration="2000">
            </app-tab-types-iptv-solution-page>
        </div>
    </b-container-floid>
</template>

<script>
    // import AppTabSolutionsPage from "../components/layout/AppTabSolutionsPage";
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppParagraph from "../components/layout/AppParagraph";
    import AppTitle from "../components/titles/AppTitle";
    import ItemBigImage from "../components/items/ItemBigImage";
    import AppLi from "../components/layout/AppLi";
    import AppTabIptvSolutionPage from "../components/layout/AppTabIptvSolutionPage";
    import AppTabTypesIptvSolutionPage from "../components/layout/AppTabTypesIptvSolutionPage";
    import AppButton from "../components/buttons/AppButton";
    import {valueLabels} from "../utils/labels";
    import {metaTags} from "../utils/metaTages";
    import VueHeadful from "vue-headful";

    export default {
        name: "Iptv",
        data() {
            return {
                metaTitle: metaTags.SOLUTION_PAGE_IPTV.title,
                metaDescription: metaTags.SOLUTION_PAGE_IPTV.description,
                labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF,
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.SOLUTION_PAGE_IPTV.title},
                {property: 'og:description', content: metaTags.SOLUTION_PAGE_IPTV.description},
                {property: 'og:url', content: "https://www.samimgroup.com/تلویزیون-تعاملی-آی-پی-تی-وی"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/تلویزیون-تعاملی-آی-پی-تی-وی'}
            ],
        },
        components: {
            VueHeadful,
            AppPageMainTitle,
            AppPageSubTitle,
            // AppTabSolutionsPage,
            AppParagraph,
            AppTitle,
            ItemBigImage,
            AppLi,
            AppTabIptvSolutionPage,
            AppTabTypesIptvSolutionPage,
            AppButton,
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewSolutionsStyle";
</style>
