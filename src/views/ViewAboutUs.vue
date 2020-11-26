<template>
    <div id="about" class="wrapper">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <b-container-floid data-aos="fade-up" data-aos-duration="2000">
            <app-breadcrumb :breadcbItems=breadcrumbItemsAboutPage></app-breadcrumb>
            <app-page-main-title classStyle="main-title-page" :title=labelAboutUsPageMainTitle></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa" :title=labelAboutUsPageSubTitle></app-page-sub-title>
            <app-paragraph
                    text="گروه مهندسی صمیم طی دو دهه فعالیت خود در صنعت برودکست و رسانه با طراحی و تولید راهکارها و تجهیزات پیشرفته صدا و تصویر توانسته است با ارائه طیف بی‌نظیری از محصولات و خدمات در این حوزه، به عنوان یکی از تامین کنندگان شاخص سازمان صدا و سیمای جمهوری اسلامی ایران شناخته شود. با افتخار می‌گوییم در زندگی یک ببینده ایرانی سیگنالی نیست که به دست مخاطب برسد و از محصولات سخت‌افزاری و نرم‌افزاری صمیم عبور نکرده باشد."/>
            <!-- <b-row data-aos="fade-up" data-aos-duration="2000">
                <item-big-image image="pages/about/img-about-us.jpg"></item-big-image>
            </b-row> -->
            <app-paragraph
                    text="طراحی و تولید بیش از صد محصول رده حرفه‌ای برودکست از قبیل انواع پردازنده‌ها، توزیع کننده‌ها و مبدل‌های صدا و تصویر، مبدل‌های فیبر و IP، ویدئو سوییچرها، انواع روتر و کنترل پنل‌ها، مالتی ویوئر، گیرنده‌های ماهواره‌ای و ریماکس، اینترکام و... تنها بخشی از فعالیت‌های گروه صمیم می‌باشد که نشان از توانمندی گروه صمیم در به کارگیری ظرفیت علمی عظیم کشور در بومی‌سازی دانش روز دنیا دارد. توجه به استانداردهای بین المللی و همگام بودن با آخرین دستاوردهای تکنولوژی، باعث شده است که تمام محصولات صمیم قدرت رقابت با نمونه‌های خارجی را داشته باشد."/>
            <app-paragraph
                    text="علاوه بر طراحی و تولید تجهیزات استودیویی، گروه مهندسی صمیم طراحی و پیاده‌سازی پروژه‌های بزرگ ملی را نیز برعهده داشته است؛ پروژه‌ی بازار محتوا (مدیریت دارایی رسانه) به عنوان بزرگترین پروژه مدیا محور کشور، سامانه مدیریت و کنترل زمان در مناظره‌های انتخابات ریاست جمهوری کشور، سامانه مانیتورینگ دیداری و شنیداری سیگنال‌های صدا و تصویر و همچنین سامانه کنترل و مانیتورینگ ایستگاه‌های فرستنده و مانتیورینگ مراکز استان‌ها، نمونه‌هایی موفق از فعالیت گروه مهندسی صمیم طی این سال‌ها می‌باشند."/>
            <app-paragraph
                    text="در حال حاضر محصولات صمیم در بیش از یکصد شبکه تلویزیونی داخلی و خارجی به کارگرفته شده است و بسیاری از رسانه‌های تصویری، اپراتورها، استودیوها و... برای فعالیت یا بهبود کیفی و کمی خدمات خود از محصولات و راهکارهای این شرکت استفاده ‌‌می‌کنند."/>
        </b-container-floid>
    </div>
</template>

<script>
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppParagraph from "../components/layout/AppParagraph";
    import AppBreadcrumb from "../components/layout/AppBreadcrumb";
    import ItemBigImage from "../components/items/ItemBigImage";
    import {breadcrumbItems} from "../utils/breadcrumbItems";
    import {valueLabels} from "../utils/labels";
    import {metaTags} from "../utils/metaTages";

    export default {
        name: "AboutUs",
        data() {
            return {
                metaTitle: metaTags.ABOUT_PAGE.title,
                metaDescription: metaTags.ABOUT_PAGE.description,
                breadcrumbItemsAboutPage: breadcrumbItems.BREADCRUMB_ITEMS_ABOUT_PAGE,
                labelAboutUsPageMainTitle: valueLabels.LABEL_ABOUT_US_PAGE_MAIN_TITLE,
                labelAboutUsPageSubTitle: valueLabels.LABEL_ABOUT_US_PAGE_SUB_TITLE,
                labelSolutionImamPageMainTitle: valueLabels.LABEL_SOLUTION_IMAM_PAGE_MAIN_TITLE,
                labelSolutionImamPageSubTitle: valueLabels.LABEL_SOLUTION_IMAM_PAGE_SUB_TITLE,
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.ABOUT_PAGE.title},
                {property: 'og:description', content: metaTags.ABOUT_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com/about"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/about'}
            ],
        },
        components: {
            AppPageMainTitle,
            AppPageSubTitle,
            AppParagraph,
            AppBreadcrumb,
            ItemBigImage
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/styles/views/viewAboutUsStyle";
</style>
