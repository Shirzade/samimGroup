<template>
    <div id="app-tab-types-iptv-solution-page">
        <b-tabs active-nav-item-class="selected-item"
                active-tab-class="tab-item"
                content-class="tab-content"
                align="center">
            <b-tab title= "VOD/MOD" title-link-class="pl-5 pr-5">
                <b-row data-aos="fade-up" align-h="between">
                    <b-col cols="12" md="6" class="text-content" align-self="center">
                        <p>
                            تلویزیون تعاملی VOD/MOD شرکت صمیم علاوه بر پخش زنده شبکه‌های داخلی و خارجی، دارای آرشیوی از شبکه‌ها و بانک وسیعی از فیلم و موسیقی می‌باشد که بر اساس نوع و ژانر دسته‌بندی شده‌اند و از طریق نمایشگر تلویزیون یا حتی سایر دستگاه‌ها مانند گوشی تلفن همراه، تبلت، رایانه و ... قابل دسترسی می‌باشد. همچنین از سایر امکانات این سیستم می توان به ثبت آسان درخواست‌ها، دریافت سریع خدمات و قابلیت سفارشی‌سازی اشاره کرد. علاوه بر این در این نوع تلویزیون‌ها، امکان تبلیغات هوشمند بر روی محتوای چندرسانه‌ای و مدیریت آن‌ها از نظر نوع، مدت زمان، دفعات تکرار و موقعیت زمانی و مکانی (رایانما) توسط اپراتور سرویس دهنده وجود دارد.
                        </p>
                    </b-col>
                    <b-col cols="12" md="6" class="img-content"  align-self="center">
                        <item-big-image image="pages/solutions/iptv/types/vod-iptv.jpg"></item-big-image>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "راهکار هتلی"  title-link-class="pl-5 pr-5">
                <b-row data-aos="fade-up" align-h="between">
                    <b-col cols="12" md="6" class="text-content" align-self="center">
                        <p>
                            تلویزیون تعاملی OTT راهکار هتلی، تلویزیون اختصاصی هتل‌ها می‌باشد که از طریق نمایشگر تلویزیون (یا حتی سایر دستگاه‌ها نظیر موبایل، تبلت، رایانه و غیره) امکان استفاده از محتوای چندرسانه‌ای وسیع و جذاب را در هر ساعت از شبانه روز در اختیار میهمان شما قرار می‌دهد. 
                        </p>
                        <p>
                            ارتباط با سیستم‌های هتلداری و نمایش تصاویر دوربین‌های CCTV به صورت شبکه زنده، امکان سفارشی‌سازی سیستم براساس هویت بصری و نماهای هتل و امکان پشتیبانی از راه دور و خدمات‌رسانی در اسرع وقت از قابلیت‌های حائز اهمیت این سامانه می‌باشد.
                        </p>
                    </b-col>
                    <b-col cols="12" md="6" class="img-content"  align-self="center">
                        <item-big-image image="pages/solutions/iptv/types/hotel-iptv.jpg"></item-big-image>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "راهکار حمل و نقل" title-link-class="pl-5 pr-5">
                <b-row data-aos="fade-up" align-h="between">
                    <b-col cols="12" md="6" class="text-content" align-self="center">
                        <p>
                            سرگرمی در طول سفر از جمله مواردی است که مدتی‌ست از سوی موسسات معتبر برای معرفی بهترین ناوگان‌های حمل و نقل جهان بررسی می‌شود. امکان انتخاب فیلم، برنامه‌های تلویزیونی، موسیقی، بازی، نقشه، لیست خدمات و... در تمام وسایل نقلیه عمومی اعم از هواپیما، قطار و اتوبوس به شدت مورد توجه مسافران قرار گرفته است. راه اندازی سيستم‌هاي سرگرمي علاوه بر اينكه براي جذب مسافر بسيار مهم هستند، با اخذ تبلیغات، یک منبع درآمد کمکی بسیار خوب نیز به شمار می روند.
                        </p>
                    </b-col>
                    <b-col cols="12" md="6" class="img-content"  align-self="center">
                        <item-big-image image="pages/solutions/iptv/types/mediwifi-iptv.jpg"></item-big-image>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import AppTitle from "../../components/titles/AppTitle";
    import ItemBigImage from "../../components/items/ItemBigImage";
    import AppLi from "../../components/layout/AppLi";
    export default {
        name: "AppTabTypesIptvSolutionPage",
        data() {
            return {
                labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF,
            }
        },
        components: {
            AppTitle,
            ItemBigImage,
            AppLi,
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/tabsStyle";
</style>
