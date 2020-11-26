<template>
    <b-container-floid id="solutions">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="title-banner-smartcastmanager"/>
        <!-- <app-tab-solutions-page :thirdIsActive=true></app-tab-solutions-page> -->
        <div class="wrapper">
            <app-page-main-title classStyle="main-title-page" title="SmartCast Manager"></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-2-fa"
                                title="سامانه مانیتورینگ سیگنال با طراحی ماژولار برای پیشگیری از خرابی ها"></app-page-sub-title>
            <app-page-sub-title classStyle="sub-title-fa"
                                title="و به حداقل رساندن زمان قطعی ها"></app-page-sub-title>
            <app-paragraph
                    text="راهکار SmartCast Manager شرکت مهندسی صمیم، یک سامانه مدیریت شبکه هوشمند است که می‌تواند سیگنال‌های موجود در کل زنجیره صدا و تصویر، ارسال و پخش ماهواره‌ای و زمینی، و به طور کلی هرگونه ارتباطات مبتنی بر شبکه‌های کامپیوتری و مخابراتی پراکنده را به صورت متمرکز و یکپارچه پایش کرده و نمای جامعی از آنها ارائه دهد. با سفارشی‌سازی‌هایی که برای هر مشتری انجام می‌شود، محدودیتی در اتصال به تجهیزات از لحاظ نوع یا شرکت سازنده آنها وجود نخواهد داشت. این سیستم علاوه بر این که تجهیزات و سامانه‌های مربوط به ارائه محتوای دیجیتال را جهت پخش ماهواره‌ای، زمینی و شبکه‌های کابلی پوشش می‌دهد، می‌تواند با پوشش دادن تجهیزات دیگر، نمای کاملی از کل سیستم را به شما ارائه دهد."/>
            <app-paragraph
                    text="در کنار قوانین و روابطی که هر مجموعه برای برقرای ارتباط بین قسمت‌های مختلف شبکه خود تعریف می‌‎کند؛ در این سامانه یک سیستم رابطه‌یابی قدرتمند وجود دارد که قادر به تحلیل و کشف علت ریشه‌ای خطاها می‌باشد. یعنی رخدادهای مختلفی که باهم مرتبط هستند؛ تحت عنوان یک هشدار تجمیع کرده و به کاربر ارائه می‌دهد. بدین ترتیب، کاربر در مواجهه با حجم وسیع اطلاعاتی که از دستگاه‌های مختلف ارسال می‌گردد دچار سردرگمی نمی‌شود و در صورت بروز مشکل و یا خطا، برای برطرف نمودن آن، اقدامات لازم به سرعت صورت می‌گیرد. در سامانه SmartCast Manager صمیم این امکان وجود دارد که تمام هشدارها به صورت تیکت، ایمیل و یا پیامک برای افراد از پیش تعیین شده ارسال گردد. همچنین این هشدارها به صورت لاگ در سامانه ثبت ‌می‌شود تا در صورت نیاز برای پیگیری‌های بعدی به آنها مراجعه گردد."/>
            <item-big-image image="pages/solutions/smartcastmanager/smartcast-manager-diagram.png"></item-big-image>
            <app-paragraph
                    text="در کنار این سامانه، برای ارزیابی عملکرد در کل زنجیره تولید و پخش، شرکت مهندسی صمیم محصولات متنوعی دارد که می‌تواند از استودیو تا ایستگاه فرستنده و بعد در نقطه دریافت نهایی، مورد استفاده قرار گیرد. ترکیب این محصولات با سامانه SmartCast Manager نمای کامل و دقیقی از زنجیره تولید و پخش به شما ارائه خواهد داد."/>
        </div>
        <div class="main-features-scm">
            <div class="internal-wrapper">
                <b-row>
                    <b-col cols="12" md="6"
                           data-aos="slide-left"
                           data-aos-duration="2000">
                        <app-title title="ویژگی‌‌های اصلی" classStyle="solutions-sub-title-in-texts"></app-title>
                        <ul class="fa-ul">
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="مقیاس‌پذیری بالا و متناسب با نیاز و بودجه کاربر"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="امکان اتصال به درایورها و پروتکل‌های سازندگان مختلف"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="دسترسی به اطلاعات لحظه‌ای و همچنین امکان دسترسی به تاریخچه اطلاعات گذشته"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="واسط کاربری متمرکز تحت وب برای مدیریت کل سامانه (قابل استفاده در موبایل)"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="مدیریت هشدارها و اطلاع‌رسانی‌ها"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="هشدار‌های هوشمند با در نظر گرفتن وابستگی‌ها و ساختار قرار گرفتن تجهیزات"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="ارسال اتوماتیک ایمیل و پیامک به هنگام خرابی و مشکل در سیستم"></app-li>
                            <app-li listIcon="circle" classStyle="smartcastmanager-features"
                                    text="قابلیت یکپارچه‌سازی با سامانه‌های Ticketing، ERP و BSS"></app-li>
                        </ul>
                    </b-col>
                    <b-col cols="12" md="6"
                           data-aos="slide-right"
                           data-aos-duration="2000">
                        <img src="../assets/img/pages/solutions/smartcastmanager/smartcastmanager-key-features.jpg" alt="شرکت صمیم"/>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div class="wrapper">
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="سفارشی‌سازی"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <app-paragraph
                    text="پیکربندی داشبوردها، نقشه‌ها‌، هشدارها و گزارش‌ها در سامانه SmartCast Manager به گونه‌ای می‌باشد که مدیران و اپرتورها به راحتی محتوای مورد نیاز خود را مشاهده کنند. در داشبورد این سامانه، از طریق ویجت‌هایی که قابلیت شخصی‌سازی دارند، اپراتور می‌تواند اطلاعات حجیمی از داده‌های لحظه‌ای و پیشین را مشاهده نماید."
            />
            <item-big-image
                    image="pages/solutions/smartcastmanager/smartcast-manager-customizability.jpg"></item-big-image>
            <app-paragraph
                    text="وجود نقشه‌ و نمایش آسان و قابل درک در این سامانه، این امکان را برای اپراتورها فراهم می‎کند که در صورت بروز هر نوع خطا، با شناخت صحیح مکان و ارتباطات دستگاه‎ها، محل وقوع مشکل را ردیابی نموده و برای رفع آن اقدام نمایند. نقشه‎ها را می‎توان با سطوح دسترسی متفاوت و متناسب با وظایف مختلف، پیکربندی کرد."
            />
            <b-card-group
                    class="scm-views"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                <b-card
                        title="نمای Geographic"
                        img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-geographic-view.jpg"
                        img-alt="Geographic View"
                        img-top>
                    <b-card-text>
                        نمای Multisite
                    </b-card-text>
                </b-card>
                <b-card
                        title="نمای Operational"
                        img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-operatonal-view.jpg"
                        img-alt="Operational View"
                        img-top>
                    <b-card-text>
                        نمایی دقیق تر از یک فعالیت
                    </b-card-text>
                </b-card>
                <b-card
                        title="نمای Maintenance"
                        img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-maintenance-view.jpg"
                        img-alt="Maintenance View"
                        img-top>
                    <b-card-text>
                        مانیتورینگ سطح سیگنال و تجهیزات
                    </b-card-text>
                </b-card>
            </b-card-group>
            <app-paragraph
                    text="نمایش داده‌ها به صورت گرافیکی و تجمیع شده، به شما کمک می‌کند تا راحت‌تر و سریع‌تر مشکلات موجود در سیستم را ریشه‌یابی کنید."
            />
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="معماری مقیاس پذیر و مستحکم"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <app-paragraph
                    text="ساختار سلسله مراتبی این محصول باعث شده تا اجزا و قسمت‌های مختلف سیستم در عین یکپارچگی، به صورت مستقل نیز مورد ارزیابی و درجه‌بندی قرار‌گیرد. در واقع اپراتور می‌تواند در صورت بروز مشکل در هر قسمت، با توجه به مقیاس و میزان اهمیت و اثرگذاری آن، درصدد رفع آن برآید."
            />
            <app-paragraph
                    text="در ساختار سلسله مراتبی، هر گره تحلیل و آنالیز اطلاعات دریافتی از گره‌ها و دستگاه‌های زیر مجموعه‌اش را بر عهده دارد و زمانی که سیستم دچار مشکل جدی شود، خلاصه این اطلاعات را در اختیار گره بالا دستی قرار می‌دهد. در این ساختار اگر گره‌ای دچار مشکل شود، گره‌های دیگر به صورت مستقل قادر به انجام عملیات خود هستند."
            />
            <b-card-group class="scm-deployment-graphs">
                <b-card
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        title="centralized deployment"
                        img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-robust-and-scalable-architecture-centralized-deployment.png"
                        img-alt="centralized deployment"
                        img-top>
                </b-card>
                <b-card
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        title=" &amp; Grid deployment for decentralized monitoring"
                        img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-robust-and-scalable-architecture-grid-deployment.png"
                        img-alt="Grid deployment"
                        img-top>
                    <b-card-text>
                        management
                    </b-card-text>
                </b-card>
            </b-card-group>
            <app-paragraph
                    text="به منظور ایجاد افزونگی در سیستم کنترل و مانیتورینگ، هر گره پایین دستی دارای چندین گره بالا دستی است. به همین دلیل سیستم کنترل و مانیتورینگ در برابر وقوع مشکل در برخی نقاط، مقاوم است."/>
        </div>
        <div class="scm-icons"
             data-aos="fade-up"
             data-aos-duration="2000">
            <div class="internal-wrapper">
                <app-title title="کنترل و مانیتورینگ مستقل، از ابتدا تا انتهای زنجیره"
                           classStyle="solutions-sub-title-in-texts"></app-title>
                <app-paragraph
                        text="SmartCast Manager به صورت کاملا مستقل از پروتکل و رسانه ارتباطی خاص، قابلیت برقراری ارتباط با هردستگاهی رادارا می‌باشد. مدیر سیستم می‌تواند تمام سیستم‌ها را تنها با استفاده از یک نرم افزار، در یک نمای کلی مشاهده نماید."/>
                <b-card-group>
                    <b-card
                            title="SNMP"
                            img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-SNMP.png"
                            img-alt="SNMP"
                            img-top>
                    </b-card>
                    <b-card
                            title="XML"
                            img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-XML.png"
                            img-alt="XML"
                            img-top>
                    </b-card>
                    <b-card
                            title="JSON"
                            img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-JSON.png"
                            img-alt="JSON"
                            img-top>
                    </b-card>
                    <b-card
                            title="TCP/IP"
                            img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-TCPIP.png"
                            img-alt="TCP/IP"
                            img-top>
                    </b-card>
                    <b-card
                            title="Serial"
                            img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-serial.png"
                            img-alt="Serial"
                            img-top>
                    </b-card>
                    <b-card
                            title="Modbus"
                            img-src="../assets/img/pages/solutions/smartcastmanager/smartcast-manager-modbus.png"
                            img-alt="Modbus"
                            img-top>
                    </b-card>
                </b-card-group>
            </div>
        </div>
        <div class="wrapper scm-security">
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="امنیت"
                    classStyle="solutions-sub-title-in-texts"
            ></app-title>
            <app-paragraph
                    text="استفاده از متدها و پروتکل‌های به‌روز امنیتی در لایه‌های مختلف این نرم‌افزار، مدیر سیستم را از امنیت بالای آن مطمئن می‌سازد. در این محصول، با توجه به معماری سلسله مراتبی و توزیع شده، یک روش استاندارد برای مدیریت سطح دسترسی طراحی شده است که دارای ویژگیهای زیر است:"/>
            <ul class="fa-ul">
                <app-li listIcon="circle" classStyle="smartcastmanager-security"
                        text="دارای ابزارهای قوی برای مدیریت کاربران و تنظیم دسترسی‌ها"></app-li>
                <app-li listIcon="circle" classStyle="smartcastmanager-security"
                        text="قابلیت تعیین محدوده جغرافیایی برای دسترسی کاربران"></app-li>
                <app-li listIcon="circle" classStyle="smartcastmanager-security"
                        text="امکان تعیین سطوح مختلف دسترسی"></app-li>
                <app-li listIcon="circle" classStyle="smartcastmanager-security"
                        text="ارائه گزارش‌های دقیق از ریز عملکرد کاربران"></app-li>
                <app-li listIcon="circle" classStyle="smartcastmanager-security"
                        text="یکپارچه شدن با مکانیزم‌های احراز هویت موجود در سازمان (مانند Active Directory و LDAP)"></app-li>
            </ul>
            <app-button
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    pageLink="solution-smart-caster"
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
  name: 'SmartCastManager',
  data () {
    return {
      metaTitle: metaTags.SOLUTION_PAGE_SMART_CASTER.title,
      metaDescription: metaTags.SOLUTION_PAGE_SMART_CASTER.description,
      labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF
    }
  },
  head: {
    meta: [
      { name: 'twitter:site_name', content: 'گروه صمیم | samimgroup' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@samimgropco' },
      { name: 'twitter:type', content: 'website' },
      { property: 'og:title', content: metaTags.SOLUTION_PAGE_SMART_CASTER.title },
      { property: 'og:description', content: metaTags.SOLUTION_PAGE_SMART_CASTER.description },
      { property: 'og:url', content: 'https://www.samimgroup.com/سامانه-مانیتورینگ-شبکه' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.samimgroup.com/سامانه-مانیتورینگ-شبکه' }
    ]
  },
  components: {
    AppPageMainTitle,
    AppPageSubTitle,
    //     AppTabSolutionsPage,
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
