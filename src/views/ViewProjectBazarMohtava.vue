<template>
    <b-container-floid id="top-projects">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <b-row class="title-banner-bazar-mohtava"/>
        <app-tab-top-project-page :secondIsActive="true"></app-tab-top-project-page>
        <b-row align-h="center">
            <b-col cols="9">
                <app-page-main-title
                        classStyle="main-title-page"
                        title="بازار محتوا"></app-page-main-title>
                <app-page-sub-title
                        classStyle="sub-title-fa"
                        title="به سفارش معاونت فضای مجازی سازمان صدا و سیما"></app-page-sub-title>
                <app-paragraph
                        text="امروزه هر اثر ديداري-شنيداري یك سند فرهنگي به شمار می‌آید که می‌توان آن را در امتداد اسناد مکتوب و میراث غیرملموس به شمار آورد. سازمان صدا و سیما به عنوان بزرگترین آرشیو ملی کشور، در بستر دیداری-شنیداری موجودی بسیار غنی و گرانبهایی در اختیار داشته و در کنار آن، با حجم عظیم برنامه‌سازی برای شبکه‎های مختلف، هر روزه بر غنا و حجم این آرشیو افزوده می‌گردد. "></app-paragraph>
                <app-paragraph
                        text="حفظ و نگهداری این منابع ارزشمند و ایجاد بستر مناسب جهت دسترسی سریع و آسان، وجود یک سامانه قدرتمند آرشیوی را ایجاب می‌کند. اما آنچه که در کنار این موضوع، این نیاز را برجسته‌تر نمود، گسترش تلویزیون‌های اینترنتی (IPTV) و شروع فعالیت‌ آن‌ها در کشور بود؛ که طبق قانون، سازمان صدا و سیما تنها مرجع رسمی صدور مجوز و تنظیم مقررات صوت و تصویر فراگیر در فضای مجازی و نظارت بر آن معرفی گردید."></app-paragraph>
                <app-paragraph
                        text="برای ساماندهی مجموعه این فعالیت‌ها، سازمان صدا و سیما به ابزار قدرتمندی نیاز داشت تا بتواند محتوای فاخر از آرشیو برنامه‎های رسانه ملی را تجمیع و انتخاب نموده و برای نشر در فضای مجازی در اختیار اپراتورهای تلویزیون اینترنتی قرار دهد. موضوع دیگر، ممیزی و فرآوری محتواهای ارائه شده از منابع مختلف و صدور مجوز بهره‌برداری بود که نیاز به تلاشی گسترده و فراگیر داشت "></app-paragraph>
                <app-paragraph
                        text="این مهم، با تعریف پروژه‌ای با عنوان 'بازار محتوا'  صورت گرفت که طراحی، پیاده‌سازی و پشتیبانی آن به گروه مهندسی صمیم واگذار گردید."></app-paragraph>
                <app-paragraph text="چند  قابلیت اساسی برای طراحی این سامانه باید در نظر گرفته می‌شد: "></app-paragraph>
            </b-col>
        </b-row>
        <div class="main-features-scm">
            <div class="internal-wrapper">
                <b-row>
                    <b-col cols="12" md="12" lg="12"
                           data-aos="fade-up"
                           data-aos-duration="2000">
                        <app-title title="ویژگی‌‌های اصلی" classStyle="solutions-sub-title-in-texts"></app-title>
                        <ul class="fa-ul">
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="قابلیت تجمیع، نگهداری و مدیریت محتوا از منابع پراکنده در حجم‌های بالا"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="امکان پیگیری حقوق و ردیابی مجوزها"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="امکان توزیع محتوا در سیستم‌های مختلف"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="تعیین و مدیریت وظایف کارکنان"></app-li>
                        </ul>
                    </b-col>
                </b-row>
            </div>
        </div>
        <b-row align-h="center" class="container-content">
            <b-col cols="9">
                <app-paragraph
                        text="سامانه بازار محتوا باید به صورت یکپارچه، پاسخگوی تمام نیازهای مطرح شده باشد. ایجاد بستر مناسب جهت تعامل با اداره كل آرشیو سازمان و اداره كل ممیزی در کنار ارائه محتوای رسانه‌ای با فراداده‌های کاربردی و تهیه فهرست‌های مناسب و به روز، تهیه عنوان‎‌های موضوعی، نگهداری بهینه منابع و دارایی‌های دیجیتال با امکان بازبینی، ممیزی، تگ‌گذاری و... تنها بخشی از قابلیت‌های مورد نیاز می‌باشد که در سامانه بازار محتوا فراهم آمده است. علاوه بر این، سامانه بازارمحتوا امکان جستجو، دسترسی، پیش نمایش، ویرایش و ارائه محتوا را به پلتفرم‌های مختلف در کمترین زمان و بیشترین سرعت را دارا بوده و رابط کاربری مناسبی جهت تعامل و هم‌افزایی بین تولیدکنندگان محتوا، سرویس دهندگان به مخاطب و نهادهای انتشار محتوا را مهیا نموده است."></app-paragraph>
                <app-paragraph
                        text="نکته دیگری که باید در طراحی مد نظر قرار می‌گرفت این بود که در سامانه بازار محتوا،‌ بخشی از محتوا از طریق ضبط شبکه‌های تلویزیونی تامین می‌شود، اما بخش دیگر از طریق آرشیو مرکزی سازمان، آرشیو معاونت فضای مجازی و آرشیو مراکز استان‌ها به سیستم اضافه می‌گردد. همچنین سرویس دهندگان دیداری-شنیداری در فضای مجازی نیز برای دریافت مجوز انتشار، ملزم به ارائه محتوای خود در بستر این سامانه خواهند بود. به عنوان Media Asset Management بخش آورندگان در سامانه بازار محتوا، شامل تمام ورودی‌های ممکن می‌گردد و حتی شخص نیز می‌تواند آورنده محتوا باشد."></app-paragraph>
                <app-paragraph
                        text="بر اساس این تعریف، تامین محتوا از سوی آورنده محتوا صورت می‌گیرد و سپس توسط اداره کل بازار محتوا طبقه‌بندی شده و اصلاحات لازم انجام می‌گردد. پس از آنکه محتوا واجد شرایط انتشار برای عموم مردم شناخته شد، در اختیار دو گروه از مخاطبان قرار می‌گیرد. مردم عادی که از طریق سایت -به عنوان ویترین بازار محتوا- قادرند به محتوای موجود در دسترسی داشته باشند، گروه اول را تشکیل داده و اپراتورهای تلویزیون اینترنتی دیگر گروه مخاطبان بازار محتوا هستند که می‌توانند محتوا را به سیستم زیر ساخت خود اضافه نمایند."></app-paragraph>
                <app-paragraph
                        text="وجود انبوهی از محتوای رسانه‌ای در کنار طیف گسترده کاربران، مستلزم ایجاد رابط‌های کاربری متنوع و فرآیندهای اختصاصی با لایه‌های مختلف مدیریتی و نظارتی می‌باشد، که در عین پوشش نیازهای هر واحد، ارتباط منسجم و منطقی آنها نیز با یکدیگر برقرار باشد."></app-paragraph>
                <app-paragraph
                        text="طراحی پروژه بازار محتوا در اوایل سال 1395 طی مناقصه‌ای به گروه مهندسی صمیم واگذار گردید و از بهمن ماه 1395 به بهره‌برداری رسید. پیاده‌سازی و توسعه این پروژه به نحوی بود که هم‌زمان با توسعه، سامانه زیر بار بوده و به مرور با اضافه شدن فرآیندها، جداول اطلاعاتی و بخش‌های مختلف تکمیل شدند و در حال حاضر، یک دیتابانک غنی با بیش از 9 میلیون و سیصدهزار رکورد در دسترس می‌باشد."></app-paragraph>
                <app-paragraph
                        text="این سامانه با هدف ساماندهی و هویت بخشی به محتواهای دیداری-شنیداری به صورت متمرکز و با قابلیت پیوند با فراداده‌های مرتبط بر اساس استاندارهای BPMS و BPMN2 ارائه شده است؛ که روند جست‌و‌جو، بازیابی و توزیع آن را با صرف حداقل هزینه و حداکثر کارایی تسهیل می‌نماید."></app-paragraph>
                <item-big-image image="pages/top-product/bazar-mohtava/1.jpg"></item-big-image>
                <app-paragraph
                        text="از مزایای موتور عملیاتی BPMS می‌توان به خودکارسازی انجام فرآیندها، مدیریت وظایف تخصیص یافته به کارمندان، مکانیزاسیون و حذف وظایف تکراری پرسنل و به طور کلی تجزیه و تحلیل کلی فرآیندها اشاره کرد. این سیستم با انعطاف‌پذیری بالا و قابلیت سفارشی‌سازی به کمک داشبوردها و گزارش‌های متنوع، دید جامعی به کاربر می‌دهد. همچنین مدیران به کمک این سیستم به آسانی می‌توانند بر روند اجرای فعالیت‌های جاری در زیرمجموعه خود نظارت دقیق داشته و برای بهینه‌سازی مستمر فرآیندها، گزارش‌های آماری این سیستم را به کار گیرند."></app-paragraph>
                <app-paragraph
                        text="سامانه بازار محتوا به عنوان بزرگترین پروژه مدیا محور در کشور (یک اَبَر بازار چند رسانه‌ای)، با تلاش‌های مستمر و خستگی ناپذیر جمعی از متخصصین نخبه در گروه مهندسی صمیم طراحی و اجرا شده و در حال بهره‌برداری می‌باشد و آنچه در این گفتار گذشت، تنها اشاره‌ای کوتاه به گوشه‌ای از زیرساخت‌ها و قابلیت‌های آن بود."></app-paragraph>
                <app-paragraph
                        text="با توجه به تحولات رسانه در عرصه‌های جهانی و ملی، اصلی‌ترین رویکرد گروه مهندسی صمیم در اجرای این پروژه استفاده از روش‌های متنوع و ابتکاری در پیشبرد اهداف و بهینه‌سازی زیرساخت‌ها بود و بازار محتوا با داشتن استانداردهای جهانی در تمام حلقه‌های زنجیره ارزش رسانه، علاوه بر پاسخ به نیازهای داخلی، به عنوان ویترین تولیدات رسانه می‎تواند همچون بازوی انتشار و توزیع عمل نموده؛ با حفظ حقوق معنوی آثار، زمینه‌های حضور در بازار جهانی محتوای رسانه‌ای را فراهم نماید."></app-paragraph>
                <app-title data-aos="fade-up"
                           data-aos-duration="2000" title="لینک های مرتبط :"
                           classStyle="solutions-sub-title-in-texts"></app-title>
                <ul class="fa-ul">
                    <app-li listIcon="circle"
                            classStyle="top-projects-bazar-mohtava-links"
                            title="قانون تاسیس شبکه های خصوصی تلویزیون در مجلس"
                            link="http://www.medianews.ir/fa/2013/12/13/tv.html"></app-li>
                    <app-li listIcon="circle"
                            classStyle="top-projects-bazar-mohtava-links"
                            link="https://www.samimgroup.com/blog/1/post/66"
                            title="انتصاب مدیرکل بازار محتوا "></app-li>
                    <app-li listIcon="circle"
                            classStyle="top-projects-bazar-mohtava-links"
                            link="https://www.samimgroup.com/blog/1/post/66"
                            title="رونمایی از بزرگترین پروژه آرشیو محتوایی کشور با عنوان 'بازار محتوا' توسط گروه مهندسی صمیم-مرکز همایش‌های سازمان"></app-li>
                    <app-li listIcon="circle"
                            classStyle="top-projects-bazar-mohtava-links"
                            link="https://www.isna.ir/news/97020201380/%D9%85%D8%B3%D8%A6%D9%88%D9%84%DB%8C%D8%AA-%D8%B5%D8%AF%D9%88%D8%B1-%D9%85%D8%AC%D9%88%D8%B2-%D9%88-%D8%AA%D9%86%D8%B8%DB%8C%D9%85-%D9%85%D9%82%D8%B1%D8%B1%D8%A7%D8%AA-%D8%B1%D8%A7%D8%AF%DB%8C%D9%88%DB%8C%DB%8C-%D9%88-%D8%AA%D9%84%D9%88%DB%8C%D8%B2%DB%8C%D9%88%D9%86%DB%8C-%D8%A8%D8%B1-%D8%B9%D9%87%D8%AF%D9%87"
                            title="مسئولیت صدور مجوز و تنظیم مقررات رادیویی و تلویزیونی بر عهده صداوسیما است"></app-li>
                </ul>
                <app-button
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        pageLink="bazar-mohtava"
                        :titleButton=labelTextButtonDownloadPDF
                        classButton="pdf-download-button"
                        iconButton=chevron-down></app-button>
            </b-col>
        </b-row>
    </b-container-floid>
</template>

<script>
    import AppTabSolutionsPage from "../components/layout/AppTabSolutionsPage";
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppParagraph from "../components/layout/AppParagraph";
    import AppTitle from "../components/titles/AppTitle";
    import ItemBigImage from "../components/items/ItemBigImage";
    import AppLi from "../components/layout/AppLi";
    import AppButton from "../components/buttons/AppButton";
    import {valueLabels} from "../utils/labels";
    import AppTabTopProjectPage from "../components/layout/AppTabTopProjectPage";
    import {metaTags} from "../utils/metaTages";

    export default {
        name: "BazarMohtava",
        data() {
            return {
                metaTitle: metaTags.PROJECTS_PAGE_BAZAR.title,
                metaDescription: metaTags.PROJECTS_PAGE_BAZAR.description,
                labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF,
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.PROJECTS_PAGE_BAZAR.title},
                {property: 'og:description', content: metaTags.PROJECTS_PAGE_BAZAR.description},
                {property: 'og:url', content: "https://www.samimgroup.com/بازار-محتوا"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/بازار-محتوا'}
            ],
        },
        components: {
            AppTabTopProjectPage,
            AppPageMainTitle,
            AppPageSubTitle,
            AppTabSolutionsPage,
            AppParagraph,
            AppTitle,
            ItemBigImage,
            AppLi,
            AppButton
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewTopProductsStyle";
</style>
