<template>
    <b-container-floid id="careers">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="wrapper">
            <app-breadcrumb :breadcbItems=breadcrumbItemsJobsPage></app-breadcrumb>
            <app-page-main-title classStyle="title-fa" :title=labelCareersPageMainTitle></app-page-main-title>
            <app-page-sub-title classStyle="sub-title-fa" :title=labelCareersPageSubTitle></app-page-sub-title>
            <app-paragragh
                    text="شرکت مهندسی تحقیق و توسعه ارتباطات صميم رايانه، يکی از شرکت های پيشرو و دانش بنيان کشور در زمينه طراحی و ساخت انواع سيستم ها و راهکارهای نرم افزاری و سخت افزاری در حوزه های ذيل می باشد:"></app-paragragh>
            <ul data-aos="fade-up"
                data-aos-duration="2000">
                <li>Broadcast (تجهیزات پیشرفته صدا و تصویر)</li>
                <li>IPTV/OTT (سیستم های تلویزیون تعاملی)</li>
                <li>ITS (سیستم های هوشمند پلاک خوان،کنترل تردد و سرعت)</li>
                <li>ERP (سیستم برنامه ریزی منابع سازمانی)</li>
                <li>NMS (سیستم مدیریت شبکه)</li>
            </ul>
            <app-paragragh
                    text="این شرکت توانسته است با استفاده از پتانسيل های داخلی کشور، طيف گسترد ه ای از محصولات و راه حل های گوناگون را در زمينه های فوق ارائه نمايد. با توجه به اينکه تداوم و توسعه اين مسير تنها با همکاری نخبگان و متخصصين داخلی امکان پذير خواهد بود لذا شرکت صميم از ميان کليه افراد واجد شرايط ذيل دعوت به همکاری می نمايد:"></app-paragragh>
            <ul data-aos="fade-up"
                data-aos-duration="2000">
                <li>روحيه پيگيری و حل مساله</li>
                <li>جديت و پشتکار</li>
                <li>خلاقیت و نوآوری</li>
                <li>مشارکت در کار گروهی و تعامل مناسب با همکاران</li>
                <li>علاقه مند به يادگيری و بهبود مستمر</li>
            </ul>
            <app-paragragh
                    text="دوست عزیز ، در صورتی که تمایل به پر کردن فرم استخدام برای چند عنوان شغلی دارید می توانید با انتخاب عناوین و فشردن دکمه ارسال درخواست فقط یکبار فرم استخدام را تکمیل نمایید در غیر این صورت کافی است بر روی هر کدام از عناوین شغلی کلیک نمایید. "></app-paragragh>
        </div>

        <div class="container-skills">
            <div class="wrapper">
                <b-row class="container-items">
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="برنامه نویس جاوا"></app-check-box>
                    </b-col>
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="برنامه چند سکویی"></app-check-box>
                    </b-col>
                </b-row>
                <b-row class="container-items">
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="برنامه نویس دات نت"></app-check-box>
                    </b-col>
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title=" برنامه نویس #C"></app-check-box>
                    </b-col>
                </b-row>
                <b-row class="container-items">
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="متخصص تست و تضمین کیفیت نرم افزار"></app-check-box>
                    </b-col>
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title=" سرپرست تيم نرم افزارهای Embedded"></app-check-box>
                    </b-col>
                </b-row>
                <b-row class="container-items">
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="مدیر توسعه کسب و کار"></app-check-box>
                    </b-col>
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="مدیر منابع انسانی"></app-check-box>
                    </b-col>
                </b-row>
                <b-row class="container-items">
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="Front-End Developer"></app-check-box>
                    </b-col>
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title=" کارشناس DevOps"></app-check-box>
                    </b-col>
                </b-row>
                <b-row class="container-items">
                    <b-col cols="12" lg="6" md="6">
                        <app-check-box title="برنامه نويس Embedded Linux"></app-check-box>
                    </b-col>
                </b-row>
            </div>
        </div>
        <app-button
                :titleButton=labelTitleButton
                classButton="apply-button"
                pageLink="jobApplyForm"></app-button>
    </b-container-floid>
</template>

<script>
    import {valueLabels} from "../utils/labels";
    import {breadcrumbItems} from "../utils/breadcrumbItems";
    import AppBreadcrumb from "../components/layout/AppBreadcrumb";
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppParagragh from "../components/layout/AppParagraph";
    import AppCheckBox from "../components/layout/AppCheckBox";
    import AppButton from "../components/buttons/AppButton";
    import {metaTags} from "../utils/metaTages";

    export default {
        name: "Careers",
        components: {AppButton, AppParagragh, AppPageSubTitle, AppCheckBox, AppPageMainTitle, AppBreadcrumb},
        data() {
            return {
                metaTitle: metaTags.CAREERS_PAGE.title,
                metaDescription: metaTags.CAREERS_PAGE.description,
                breadcrumbItemsJobsPage: breadcrumbItems.BREADCRUMB_ITEMS_JOBS_PAGE,
                labelCareersPageMainTitle: valueLabels.LABEL_CAREERS_PAGE_MAIN_TITLE,
                labelCareersPageSubTitle: valueLabels.LABEL_CAREERS_PAGE_SUB_TITLE,
                labelTitleButton: valueLabels.LABEL_BUTTON_APPLY
            }
        },
        head: {
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/careers'}
            ],
        },

    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewCareersStyle";
</style>
