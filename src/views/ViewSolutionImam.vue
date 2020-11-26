<template>
    <b-container-floid id="solutions">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="title-banner-imam"/>
        <!-- <app-tab-solutions-page :fourthIsActive=true></app-tab-solutions-page> -->
        <div class="wrapper">
            <app-page-main-title classStyle="main-title-page" title="iMAM"></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa" title="سامانه یکپارچه مدیریت محتوا"></app-page-sub-title>
            <app-paragraph
                    text="در دنیای پررقابت و پرسرعت امروزی، مدیریت دارایی محتوا از جمله مسائل مهمی است که بیش از پیش مورد توجه شرکت‌ها و افراد قرار گرفته است. از طرفی، حجم اطلاعات به سرعت در حال افزایش است و در مکان‌های مختلف و به صورت پراکنده ذخیره می‌شود. همچنین، حقوق و مجوزها بایستی قابل پیگیری و ردیابی بوده و امکان توزیع محتوا در سیستم‌عامل‌های مختلف وجود داشته باشد. از طرفی دیگر، در راستای افزایش بهره‌وری عملیاتی شرکت‌ها، کارمندان می‌بایست توانایی جست‌وجو، دسترسی، پیش‌نمایش، ویرایش و ارائه محتوا به پلتفرم‎‌های مختلف را در حداقل زمان و با سرعت بالا دارا باشند. از این رو، استفاده از یک ابزار کارآمد به منظور مدیریت دارایی محتوا و فرآیندهای مربوط به آن در حوزه‌های برودکست، سمعی و بصری امری مهم تلقی می‌شود."/>
            <app-paragraph
                    text="شرکت مهندسی صمیم به عنوان یک شرکت پیشرو در طراحی و تولید راه‌حل‌های نوین در صنعت برودکست، راهکاری را تحت عنوان «IMAM: سامانه یکپارچه مدیریت محتوا» ارائه کرده است. این سامانه که مبتنی بر BPMS و BPMN2 طراحی و پیاده‌سازی شده است، سامانه‌ای جهت سازمان‌دهی و هویت بخشی محتواهای صوتی و تصویری به روش متمرکز و با قابلیت پیوند با فراداده‌های مرتبط است که روند جست‌وجو، بازیابی و توزیع آن را با صرف حداقل هزینه و حداکثر کارآیی تسهیل می‌نماید."/>
        </div>
        <div align-h="center" class="imam-icons"
             data-aos="fade-up"
             data-aos-duration="2000">
            <div class="internal-wrapper">
                <b-card-group>
                    <b-card
                            title="سود بیشتر"
                            img-src="../assets/img/pages/solutions/imam/profit.png"
                            img-alt="TCP/IP"
                            img-top
                    >
                    </b-card>
                    <b-card
                            title="بهینه‌سازی گردش کار"
                            img-src="../assets/img/pages/solutions/imam/optimization.png"
                            img-alt="بهینه‌سازی گردش کار"
                            img-top
                    >
                    </b-card>
                    <b-card
                            title="افزایش بازدهی"
                            img-src="../assets/img/pages/solutions/imam/efficiency.png"
                            img-alt="افزایش بازدهی"
                            img-top
                    >
                    </b-card>
                    <b-card
                            title="افزایش تولید"
                            img-src="../assets/img/pages/solutions/imam/production.png"
                            img-alt="افزایش تولید"
                            img-top
                    >
                    </b-card>
                </b-card-group>
            </div>
        </div>
        <div class="wrapper"
             data-aos="fade-up"
             data-aos-duration="2000">
            <app-title
                    title="ویژگی‌‌های اصلی"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <ul class="fa-ul">
                <app-li listIcon="circle" classStyle="imam-features" title="مبتنی بر وب"
                        text="رابط کاربری تحت وب، به کاربر این امکان را می‌دهد تا بدون نیاز به نصب نرم‌افزارهای خاص، سریعا از آخرین تغییرات در روند عملیاتی‌سازی محتوای موردنظر باخبر شود."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="مبتنی بر BMPS و BPMN2"
                        text="از جمله مزایای موتور عملیاتی BPMS، می‌توان به مواردی همچون خودکارسازی انجام فرآیندها، مدیریت وظایف تخصیص یافته به کارمندان، مکانیزاسیون و حذف وظایف تکراری پرسنل و به طور کلی تجزیه و تحلیل کلی فرآیندهای کسب‌و‌کار اشاره کرد. این سیستم با انعطاف‌پذیری بالا و قابلیت سفارشی‌سازی به کمک داشبوردها و گزارش‌های متنوع، دید گسترده‌ای را نسبت به عملیات بزرگ به کاربر می‌دهد."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="فرآیند ورودی Ingest"
                        text="عملکرد اولیه این سیستم بدین گونه است که محتوا به صورت کنترل‌شده در یک محل واحد، ذخیره می‌شود. بعد از مهیا ساختن شرایط مدیریت و غنی‌سازی محتوا برای کاربران، به منظور افزایش کسب درآمد از این محتواها، هر یک از آن‌ها را از طرق مختلف توزیع و نشر می‌دهد."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="تولید پروکسی"
                        text="یک فایل پروکسی با دقتی در حد فریم، به عنوان مرجعی برای فایل اصلی تولید می‌کند. به محض ورود محتوا به سیستم، یک نسخه پروکسی از آن با نرخ‌بیت‌های متفاوت تولید می‌شود. بسته به اینکه کاربر در چه مرحله‌ای از فرآیند قرار دارد، از این نقطه به بعد، امکان مشاهده پیش‌نمایش محتوا، تهیه خروجی‌های EDL و ویرایش مبتنی بر وب با دقت فریم وجود دارد. هنگام انجام تمامی این اعمال، کاربر نیازی به دسترسی به فایل‌های اصلی با رزولوشن بالا ندارد."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="غنی‌سازی"
                        text="غنی‌سازی محتوا در سامانه مدیریت یکپارچه دارایی محتوا، شامل اضافه نمودن فراداده‌های متنوع از منابع گوناگون است."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="کنترل کیفیت مبتنی بر فایل"
                        text="از جمله مواردی که در خصوص کنترل کیفیت در این سامانه لحاظ شده است، می‌توان به مواردی همچون پشتیبانی از فرمت‌های مختلف، تشخیص پیشرفته پارامترهای متنوع، تجزیه و تحلیل همزمان و تکراری و گزارش‌گیری و اعلام هشدار قابل تنظیم اشاره نمود."></app-li>
                <b-row data-aos="fade-up" data-aos-duration="2000">
                    <item-big-image image="pages/solutions/imam/iMAM-business.jpg"></item-big-image>
                </b-row>
                <app-li listIcon="circle" classStyle="imam-features" title="قابلیت تبدیل فرمت"
                        text="ترنسکدر پیشرفته تلفیق شده با این سیستم به کاربر این امکان را می‌دهد که فایل‌های موردنظر خود را از هر فرمتی به فرمت دلخواه تبدیل کرده و نسخه‌های مختلف فایل اصلی را به منظور ارائه به پلتفرم‌های مختلف تهیه و تولید کند."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="جست‌وجوی پیشرفته"
                        text="موتور جستجو که به عنوان هسته اصلی سیستم iMAM است، امکان جستجوی سریع و نمایش محتوای موردنظر کاربر را فراهم می‌کند."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="پخش‌کننده و ویرایشگر مبتنی بر وب"
                        text="پخش کننده ویدئویی مبتنی بر وب، علاوه بر افزایش بهره‌وری سیستم مدیریت محتوا، می‌تواند در بسیاری از گردش‌کارها برای اهداف مختلف مانند نمایش، تگ‌گذاری، آمایش و ویرایش مورد استفاده قرار گیرد."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="کنترل متمرکز دسترسی"
                        text=" امکان ارائه دسترسی به کاربران موردنظر، جهت ایجاد دسترسی‌های دلخواه و در جریان قرار گرفتن فعالیت‌های تمامی این افراد توسط کاربران موردنظر فراهم گردیده است."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="نشانه‌گذاری"
                        text="تکنولوژی قدرتمند نشانه‌گذاری محتوا به منظور قرار دادن یک سری نشانه‌های نامرئی در فایل ویدیویی، در نظر گرفته شده است. این تکنولوژی به عنوان بخشی از DRM مورد استفاده قرار می‌گیرد."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="رمزنگاری و Hashing"
                        text="هر یک از الگوریتم‌های Hashing و رمزنگاری با قابلیت اطمینان بالا، در جهت محافظت از یکپارچگی و امنیت محتواها در نظر گرفته شده‌اند."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="امکان ادغام با سامانه‌های شخص ثالث"
                        text="معماری سیستم به گونه‌ای طراحی شده است که سیستم‌های جدید را می‌توان به راحتی به آن اضافه نمود."></app-li>
                <item-big-image image="pages/solutions/imam/iMAM-the-Best-MAM.jpg"></item-big-image>
                <app-li listIcon="circle" classStyle="imam-features" title="مدیریت فضای ذخیره‌سازی"
                        text="ذخیره‌ساز اصلی سامانه، وظیفه مدیریت انتقال محتوا را بین سایر فضاهای ذخیره‌سازی به عنوان بخشی از گردش‌کار بر عهده دارد."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title="آرشیو طولانی مدت محتوا"
                        text="این سامانه به طور کامل با ویژگی های درایوهای LTO با قابلیت پشتیبانی از LTFS منطبق شده است."></app-li>
                <app-li listIcon="circle" classStyle="imam-features" title=" انتشار و تحویل"
                        text="بهره‌گیری سیستم از میکروسرویس‌هایی از قبیل نشانه‌گذاری، تبدیل فرمت و ... امکان بهره‌گیری حداکثر از محتوا را در هنگام تولید نسخه‌های خروجی از آن فراهم می‌سازد."></app-li>
            </ul>
            <item-big-image image="pages/solutions/imam/iMAM-features-applications.png"></item-big-image>
            <app-button
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    pageLink="solution-imam"
                    :titleButton=labelTextButtonDownloadPDF
                    classButton="pdf-download-button"
                    iconButton=chevron-down></app-button>
        </div>
    </b-container-floid>
</template>

<script>
//     import AppTabSolutionsPage from "../components/layout/AppTabSolutionsPage";
import AppPageMainTitle from '../components/titles/AppPageMainTitle'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppParagraph from '../components/layout/AppParagraph'
import AppTitle from '../components/titles/AppTitle'
import ItemBigImage from '../components/items/ItemBigImage'
import AppLi from '../components/layout/AppLi'
import AppButton from '../components/buttons/AppButton'
import { valueLabels } from '../utils/labels'
import { metaTags } from '../utils/metaTages'

export default {
  name: 'Imam',
  data () {
    return {
      metaTitle: metaTags.SOLUTION_PAGE_IMAM.title,
      metaDescription: metaTags.SOLUTION_PAGE_IMAM.description,
      labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF
    }
  },
  head: {
    meta: [
      { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@samimgropco' },
      { name: 'twitter:type', content: 'website' },
      { property: 'og:title', content: metaTags.SOLUTION_PAGE_IMAM.title },
      { property: 'og:description', content: metaTags.SOLUTION_PAGE_IMAM.description },
      { property: 'og:url', content: 'https://www.samimgroup.com/سامانه-مدیریت-دارایی-محتوا' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.samimgroup.com/سامانه-مدیریت-دارایی-محتوا' }
    ]
  },
  components: {
    AppPageMainTitle,
    AppPageSubTitle,
    // AppTabSolutionsPage,
    AppParagraph,
    AppTitle,
    ItemBigImage,
    AppLi,
    AppButton
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewSolutionsStyle";
</style>
