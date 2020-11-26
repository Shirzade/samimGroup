<template>
    <div id="app-tab-ip-gateway-solution-page">
        <b-tabs active-nav-item-class="selected-item"
                active-tab-class="tab-item"
                content-class="tab-content"
                align="center">

            <b-tab title= "IPG-1000-SDI" style="padding-right: 60px">
                <b-row data-aos="fade-up">
                    <item-big-image image="pages/solutions/ipgateway/ip-gateway-IPG-1000-SDI.jpg"></item-big-image>
                </b-row>
                <b-row >
                    <app-title
                            data-aos="fade-up"
                            data-aos-offset= "0"
                            data-aos-duration= "1000"
                            title= "مبدل IP به SDI و بالعکس"
                            classStyle= "ip-gateway-products-tab-titles">
                    </app-title>
                </b-row>
                <b-row >
                    <ul class= "fa-ul ip-gateway-products-tab-ul">
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت انتقال سیگنال‌های SDI بر روی لینک‌های 10Gbit/sec با استفاده از استاندارد 6-2022 SMPTE"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت استفاده از لینک اضافی (Redundant) (پشتیبانی از استاندارد 2022-7 SMPTE)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت تشخیص خطا با بهره‌گیری از قابلیت Forward Error Correction (FEC) (پشتیبانی از استاندارد SMPTE 2022-5)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "استفاده از ماژول‌های فیبر استاندارد +SFP"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "امکان تنظیم مستقل هر کانال از نظر حالت مبدل و تنظیمات IP/UDP"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "امکان ارسال ویدیو بر روی شبکه به گیرنده‌های متمایز و دریافت از فرستنده‌های مختلف"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت نمایش فرمت سیگنال‌های SDI ورودی/خروجی و نرخ بیت ارسالی و دریافتی بر روی شبکه"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "LEDهای اعلام وضعیت ارسال و دریافت داده بر روی شبکه برای نظارت کاربر"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از پروتکل‌های رایج شبکه (ARP ، ICMP ، IGMP و...)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "کنترل و مانیتورینگ کارت از طریق رابط کاربری تحت وب"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از پروتکل SNMP جهت کنترل و مانیتورینگ"></app-li>
                    </ul>
                </b-row>
            </b-tab>
            <b-tab title= "IPG-1000-AES" style="padding-right: 60px">
                <b-row data-aos="fade-up">
                    <item-big-image image="pages/solutions/ipgateway/ip-gateway-IPG-1000-AES.jpg"></item-big-image>
                </b-row>
                <b-row >
                    <app-title
                            data-aos="fade-up"
                            data-aos-offset= "0"
                            data-aos-duration= "1000"
                            title= "مبدل IP به SDI و بالعکس"
                            classStyle= "ip-gateway-products-tab-titles">
                    </app-title>
                </b-row>
                <b-row >
                    <ul class= "fa-ul ip-gateway-products-tab-ul">
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از هشت ورودی/خروجی صدا"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "دریافت هم‌زمان حداکثر هشت AES67"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت تنظیم دریافت از منابع مختلف AES67 توسط هر یک از خروجی‌ها"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت دریافت و انتقال صدا از طریق پروتکل RTSP"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "سنکرون‌سازی صدا از منابع مختلف PTP برای هر ورودی/خروجی صدا"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "وجود سیستم هشدار برای هر ورودی/خروجی جهت نظارت بر سطح صدا"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "مقرون به صرفه، پیاده‌سازی آسان"></app-li>
                    </ul>
                </b-row>
            </b-tab >
            <b-tab title= "IPG-1000-ASI" style="padding-right: 60px">
                <b-row data-aos="fade-up">
                    <item-big-image image="pages/solutions/ipgateway/ip-gateway-IPG-1000-ASI.jpg"></item-big-image>
                </b-row>
                <b-row >
                    <app-title
                            data-aos="fade-up"
                            data-aos-offset= "0"
                            data-aos-duration= "1000"
                            title= "مبدل IP به ASI و بالعکس"
                            classStyle= "ip-gateway-products-tab-titles">
                    </app-title>
                </b-row>
                <b-row >
                    <ul class= "fa-ul ip-gateway-products-tab-ul">
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت انتقال سیگنال‌های DVB-ASI بر روی لینک‌های 1 Gbit/sec با استفاده از استاندارد SMPTE 2022-2"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت استفاده از لینک اضافی (Redundant) (پشتیبانی از استاندارد SMPTE 2022-7 )"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت تشخیص خطا با بهره‌گیری از قابلیت Forward Error Correction (FEC) (پشتیبانی از استاندارد SMPTE 2022-1)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "استفاده از ماژول‌های فیبر استاندارد SFP"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "امکان تنظیم مستقل هر کانال از نظر حالت مبدل و تنظیماتIP/UDP"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "امکان ارسال ویدیو بر روی شبکه به گیرنده‌های متمایز و دریافت از فرستنده‌های مختلف"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت نمایش نرخ بیت سیگنال‌های ASI ورودی/خروجی و نرخ بیت ارسالی و دریافتی بر روی شبکه"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "LEDهای اعلام وضعیت ارسال و دریافت داده بر روی شبکه برای نظارت کاربر"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از پروتکل‌های رایج شبکه (IGMP ، ICMP ، ARP و...)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "کنترل و مانیتورینگ کارت از طریق رابط کاربری تحت وب"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از پروتکل SNMP برای کنترل و مانیتورینگ"></app-li>
                    </ul>
                </b-row>
            </b-tab>
            <b-tab title= "IP-Intercom" style="padding-right: 60px">
                <b-row data-aos="fade-up">
                    <item-big-image image="pages/solutions/ipgateway/ip-gateway-IP-Intercom.jpg"></item-big-image>
                </b-row>
                <b-row >
                    <app-title
                            data-aos="fade-up"
                            data-aos-offset= "0"
                            data-aos-duration= "1000"
                            title= "اینترکام"
                            classStyle= "ip-gateway-products-tab-titles">
                    </app-title>
                </b-row>
                <b-row >
                    <ul class= "fa-ul ip-gateway-products-tab-ul">
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از کدک‌های ITU-G.722 و ITU-G.711"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از استاندارد EBU-TECH 3347 و AES67"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پیکربندی مبتنی بر وب"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از کدک G.729 VOIP"></app-li>
                    </ul>
                </b-row>
            </b-tab>
            <b-tab title= "APS" style="padding-right: 60px">
                <b-row data-aos="fade-up" >
                    <item-big-image image="pages/solutions/ipgateway/ip-gateway-APS.jpg"></item-big-image>
                </b-row>
                <b-row >
                    <app-title
                            data-aos="fade-up"
                            data-aos-offset= "0"
                            data-aos-duration= "1000"
                            title= "MCR با ورودی/خروجی IP"
                            classStyle= "ip-gateway-products-tab-titles">
                    </app-title>
                </b-row>
                <b-row >
                    <ul class= "fa-ul ip-gateway-products-tab-ul">
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت دریافت استریم‌های SMPTE2022-5,6 و ST-2110 با استفاده از پورت 10G"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت دریافت 16 سیگنال SDI با فرمت‌های 3G/HD/SDI"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "دارای9 Keyer (4PIP و 5General keyer)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "دارای 40 Cross point داخلی، کلیپ پخش ویدیویی، CG داخلی و مالتی‌ویوئر یکپارچه"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "دارای اترنت 10G برای ورودی/خروجی‌های IP"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "دارای مبدل UDC بر روی هر یک از ورودی‌های مشخص"></app-li>
                    </ul>
                </b-row>
            </b-tab>
            <b-tab title= "IP Based Playout" style="padding-right: 60px">
                <b-row data-aos="fade-up">
                    <item-big-image image="pages/solutions/ipgateway/ip-gateway-IP-based-playout.jpg"></item-big-image>
                </b-row>
                <b-row >
                    <app-title
                            data-aos="fade-up"
                            data-aos-offset= "0"
                            data-aos-duration= "1000"
                            title= "سیستم play out مبتنی بر IP"
                            classStyle= "ip-gateway-products-tab-titles">
                    </app-title>
                </b-row>
                <b-row >
                    <ul class= "fa-ul ip-gateway-products-tab-ul">
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت انتقال سیگنال‌های DVB-ASI بر روی لینک‌های 1Gbit/sec با استفاده از استاندارد SMPTE 2022-2"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت استفاده از لینک اضافی (Redundant) (پشتیبانی از استاندارد SMPTE 2022-7 )"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت تشخیص خطا با بهره‌گیری از قابلیت Forward Error Correction (FEC) (پشتیبانی از استاندارد SMPTE 2022-5)"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "معماری Client-Server"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از انواع فرمت‌ها و پسوندهای رایج ویدیویی"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت استفاده از دیسک‌های محلی و اشتراکی به منظور دسترسی به فایل‌ها"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "قابلیت ویرایش لیست ویدیوها جهت زمان‌بندی فایل‌های ویدیویی به صورت آفلاین"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "پشتیبانی از پروتکل MOS"></app-li>
                        <app-li listIcon= "circle" classStyle="ip-gateway-products" text= "استفاده از خط زمانی (Timeline) به منظور نمایش و ویرایش ترتیب ویدیوهای موجود برای پخش"></app-li>
                    </ul>
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
        name: "AppTabIpGatewaySolutionPage",
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
