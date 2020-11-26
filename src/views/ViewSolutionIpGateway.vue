<template>
    <b-container-floid id="solutions">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="title-banner-ipgateway"/>
        <!-- <app-tab-solutions-page :secondIsActive=true></app-tab-solutions-page> -->
        <div class="wrapper">
            <app-page-main-title classStyle="main-title-page" title="راهکارهای حوزه IP"></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa"
                                title="استودیوهای مبتنی بر IP با راهکارهایی ماژولار"></app-page-sub-title>
            <app-paragraph
                    text="SDI به عنوان یک استاندارد شناخته شده در طول سه دهه اخیر در زنجیره تولید، توزیع و پخش برودکست نقش بسزایی را ایفا کرده است. در این استاندارد ارتباطات نقطه به نقطه (Point to Point) باعث ایجاد یک زیرساخت امن و بهبود کیفیت صدا و تصویر ارسالی می‌شود. اما از طرفی به دلیل انعطاف‌پذیری اندک، در هنگام تغییر تکنولوژی، به صرف هزینه‌های بالایی جهت تعویض کلیه تجهیزات و سخت‌افزارهای اصلی نیاز می‌باشد. همچنین مشکلات دیگر مانند حجم بالای کابل‌کشی و صرف زمان زیاد برای ایجاد زیرساخت لازم، باعث شده است تا استفاده از زیرساخت IP به عنوان بستر اصلی سیگنال‌رسانی مورد توجه واقع شود."/>
            <app-paragraph
                    text="با توجه به حجم سرمایه‌گذاری انجام شده در استودیوهای فعلی برودکست، گذار ناگهانی به IP عملا مقدور نمی‌باشد و لازم است این موضوع به صورت تدریجی عملیاتی شود. با توجه به اهمیت موضوع گذار از SDI به IP در صنعت برودکست و افق روشن پیش روی آن، شرکت مهندسی صمیم با ارائه راهکاری با عنوان &quot;راهکارهای حوزه IP&quot;، محصولات مرتبط خود را در راستای ایجاد یک استودیوی مبتنی بر IP معرفی نموده است."/>
        </div>
        <div class="main-features-ipgateway"
             data-aos="fade-up"
             data-aos-duration="2000">
            <div class="internal-wrapper">
                <app-title title="ویژگی‌‌های اصلی" classStyle="solutions-sub-title-in-texts"></app-title>
                <b-row>
                    <b-col cols="12" md="6"
                           data-aos="fade-up"
                           data-aos-offset="0"
                           data-aos-duration="2000">
                        <ul class="fa-ul">
                            <app-li listIcon="circle" classStyle="ipgateway-features" title="ساده‌سازی زیرساخت‌های لازم"
                                    text="استفاده از اینترفیس IP به عنوان جایگزین سیگنال‌های صدا و تصویر از قبیل AES و SDI، این امکان را فراهم کرده که به جای استفاده از سخت‌افزارهای خاص صنعت برودکست از ادوات و سرورهای رایج در IT استفاده شود. با رشد روزافزون سرویس‌های مبتنی بر Cloud، می‌توان بدون نیاز به تامین کلیه سخت‌افزارها، بخشی از پردازش‌ها را در قالب سرویس دریافت نمود."></app-li>
                            <app-li listIcon="circle" classStyle="ipgateway-features"
                                    title="مانیتورینگ ساده سیگنال‌های ویدیویی"
                                    text="استفاده از بستر IP موجب می‌شود تا مانیتورینگ سیگنال‌های ویدیویی به راحتی انجام پذیرد."></app-li>
                        </ul>
                    </b-col>
                    <b-col cols="12" md="6"
                           data-aos="fade-up"
                           data-aos-offset="0"
                           data-aos-duration="2000">
                        <ul class="fa-ul">
                            <app-li listIcon="circle" classStyle="ipgateway-features" title="مقیاس‌پذیری بالا"
                                    text="استفاده از بستر IP، این امکان را فراهم می‌آورد که با تغییرات تکنولوژی، (به عنوان مثال گذار از فرمت HD به 4K) نیازی به تغییرات زیرساخت و سخت‌افزارها وجود نداشته باشد و با به‌روزرسانی نرم‌افزاری بتوان از فرمت‌ها و کدک‌های جدید پشتیبانی نمود."></app-li>
                            <app-li listIcon="circle" classStyle="ipgateway-features" title="مقرون به صرفه"
                                    text="پهنای باند بالا در استودیوهای مبتنی بر IP، باعث کاهش هزینه و حجم کابل‌کشی جهت انتقال سیگنال‌های صدا و تصویر شده است."></app-li>
                        </ul>
                    </b-col>
                </b-row>
                <b-row align-h="center" class="ipgateway-icons"
                       data-aos="fade-up"
                       data-aos-offset="0"
                       data-aos-duration="2000">
                    <b-col cols="9" md="9">
                        <b-card-group>
                            <b-card
                                    title="انعطاف‌پذیری"
                                    img-src="../assets/img/pages/solutions/imam/profit.png"
                                    img-alt="انعطاف‌پذیری"
                                    img-top>
                            </b-card>
                            <b-card
                                    title="سازگاری زیرساخت های شبکه"
                                    img-src="../assets/img/pages/solutions/imam/optimization.png"
                                    img-alt="سازگاری زیرساخت های شبکه"
                                    img-top>
                            </b-card>
                            <b-card
                                    title="مقرون به صرفه"
                                    img-src="../assets/img/pages/solutions/imam/efficiency.png"
                                    img-alt="مقرون به صرفه"
                                    img-top>
                            </b-card>
                        </b-card-group>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div class="wrapper sdi-to-ip">
            <app-title
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                    title="چالش‌های پیش‌رو در گذار از SD به IP"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <b-row>
                <b-col cols="12" md="6"
                       data-aos="fade-up"
                       data-aos-offset="0"
                       data-aos-duration="2000">
                    <ul class="fa-ul">
                        <app-li listIcon="circle" classStyle="ipgateway-features" title="ساده‌سازی زیرساخت‌های لازم"
                                text="استفاده از اینترفیس IP به عنوان جایگزین سیگنال‌های صدا و تصویر از قبیل AES و SDI، این امکان را فراهم کرده که به جای استفاده از سخت‌افزارهای خاص صنعت برودکست از ادوات و سرورهای رایج در IT استفاده شود. با رشد روزافزون سرویس‌های مبتنی بر Cloud، می‌توان بدون نیاز به تامین کلیه سخت‌افزارها، بخشی از پردازش‌ها را در قالب سرویس دریافت نمود."></app-li>
                    </ul>
                </b-col>
                <b-col cols="12" md="6"
                       data-aos="fade-up"
                       data-aos-offset="0"
                       data-aos-duration="2000">
                    <ul class="fa-ul">
                        <app-li listIcon="circle" classStyle="ipgateway-features" title="مقیاس‌پذیری بالا"
                                text="استفاده از بستر IP، این امکان را فراهم می‌آورد که با تغییرات تکنولوژی، (به عنوان مثال گذار از فرمت HD به 4K) نیازی به تغییرات زیرساخت و سخت‌افزارها وجود نداشته باشد و با به‌روزرسانی نرم‌افزاری بتوان از فرمت‌ها و کدک‌های جدید پشتیبانی نمود."></app-li>
                    </ul>
                </b-col>
            </b-row>
        </div>
        <div class="ipgateway-stodio">
            <div class="internal-wrapper"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000">
                <app-title title="استودیو مبتنی بر IP(Video over IP)"
                        classStyle="solutions-sub-title-in-texts"></app-title>
                <item-big-image image="pages/solutions/ipgateway/ip-gateway-video-over-ip.png"></item-big-image>
                <app-title title="استودیو مبتنی بر IP(Auido over IP)"
                        classStyle="solutions-sub-title-in-texts"></app-title>
                <item-big-image image="pages/solutions/ipgateway/ip-gateway-audio-over-ip.png"></item-big-image>
            </div>
        </div>
        <div class="wrapper">
            <app-title
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    title="محصولات حوزه IP"
                    classStyle="solutions-sub-title-in-texts">
            </app-title>
            <app-tab-ip-gateway-solution-page
                    data-aos="fade-up"
                    data-aos-duration="2000">
            </app-tab-ip-gateway-solution-Page>
            <app-button
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        pageLink="solution-ip-gateway"
                        :titleButton=labelTextButtonDownloadPDF
                        classButton="pdf-download-button"
                        iconButton=chevron-down>
            </app-button>
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
    import AppTabIpGatewaySolutionPage from "../components/layout/AppTabIpGatewaySolutionPage";
    import AppButton from "../components/buttons/AppButton";
    import {valueLabels} from "../utils/labels";
    import {metaTags} from "../utils/metaTages";
    import VueHeadful from "vue-headful";

    export default {
        name: "IPGateway",
        data() {
            return {
                metaTitle: metaTags.SOLUTION_PAGE_IP_GATEWAY.title,
                metaDescription: metaTags.SOLUTION_PAGE_IP_GATEWAY.description,
                labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF,
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.SOLUTION_PAGE_IP_GATEWAY.title},
                {property: 'og:description', content: metaTags.SOLUTION_PAGE_IP_GATEWAY.description},
                {property: 'og:url', content: "https://www.samimgroup.com/گیتوی-IP"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/گیتوی-IP'}
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
            AppTabIpGatewaySolutionPage,
            AppButton,
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewSolutionsStyle";
</style>
