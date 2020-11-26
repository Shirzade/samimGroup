<template>
    <div id="app-tab-iptv-solution-page">
        <b-tabs v-model="tabIndex"
                align="center"
                justified>
            <b-tab title= "فیلم" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/film-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            در این بخش آرشیو متنوعی از سریال‌ها و فیلم‌های سینمایی داخلی و خارجی با کیفیت بالا در
                            ژانرهای مختلف در دسترس می‌باشد. امکان افزودن لوگو یا زیرنویس تبلیغاتی به محتوای بارگذاری شده
                            از مهم‌ترین ویژگی‌های آن می‌باشد که با جذب تبلیغات، می‌تواند به منبع درآمد تبدیل شود.
                            سامانه‌های تلویزیون‌های تعاملی صمیم این امکان را دارند که از تعداد مشاهدات هر محتوا گزارش
                            ارائه نمایند. این قابلیت در مدیریت محتوا و تامین محتوای جدید بر اساس سلیقه کاربر بسیار
                            راهبردی می‌باشد.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "موسیقی" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/music-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            در این قسمت هر یک از کاربران می‌توانند آلبوم‌های موسیقی متنوعی را مشاهده و بر اساس علاقمندی
                            خود انتخاب نمایند، و هم‌زمان با استفاده از سایر خدمات موجود در این سامانه به موسیقی موردنظر
                            خود گوش دهند. در این بخش نیز امکان ارائه گزارش از تعداد پخش‌های هر آهنگ وجود دارد.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "کتابخانه" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/library-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            در قسمت کتابخانه، مجموعه‌ای از کتاب‌های الکترونیک با عناوین و موضوعات مختلف ارائه شده است و
                            هر کاربر می‌تواند کتاب مورد نظر خود را انتخاب و مطالعه نماید. کتاب‌ها به صورت موضوعی
                            دسته‌بندی شده‌‌اند و امکان درج اطلاعات بیشتر (نویسنده، مترجم، سال چاپ، خلاصه و...) فراهم
                            می‌باشد. امکان دریافت گزارش از میزان استقبال از کتاب‌های مختلف در این قسمت نیز وجود دارد.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "بازی" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/game-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            در این قسمت، تعدادی از محبوب‌ترین بازی‌ها برای کاربران فراهم آمده است. لیست این بازی‌ها
                            همانند سایر محتواهای موجود در سامانه قابل مدیریت و سفارشی‌سازی می‌باشند.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "خدمات" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/service-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            در این سامانه این امکان وجود دارد که کاربر در قسمت خدمات، لیست خدمات قابل دریافت را مشاهده
                            نموده و در صورت نیاز برای سفارش آن اقدام نماید.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "اخبار" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/news-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            اخبار و رویدادهای مهم روز به صورت کامل و جامع در این قسمت قرار می‌گیرند و کاربران در این
                            قسمت می‌توانند این اخبار را مشاهده نمایند.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "نقشه" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/map-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            در این قسمت، مسیر مبدا تا مقصد روی نقشه نمایش داده می‌شود و کاربر می‌تواند موقعیت مکانی خود،
                            ایستگاه‌ها و شهرهای پیش رو و حتی مکان‌های تاریخی و گردشگری آنها را نیز مشاهده نماید.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "نظرسنجی" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/pol-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            نظرسنجی به عنوان یک ابزار کارآمد برای اخذ تصمیمات، یکی از مهم‌ترین قسمت‌های سامانه‌های
                            مدیریتی می‌باشد. در این قسمت، کاربران می‌توانند نظرات خود را در رابطه با ارائه خدمات، نحوه
                            برخورد کارکنان و... ثبت نمایند. فرم نظرسنجی قابلیت سفارشی‌سازی دارد.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title= "تبلیغات" title-link-class="tab-title-class">
                <b-row data-aos="fade-up" data-aos-duration="2000" align-h="between">
                    <b-col cols="12" md="4" class="img-content" align-self="center">
                        <item-big-image image="pages/solutions/iptv/facility/advertising-iptv.png"></item-big-image>
                    </b-col>
                    <b-col cols="12" md="7" class="text-content" align-self="center">
                        <p>
                            همان طور که اشاره شد، یکی از ویژگی‌های این سامانه‌، امکان کسب درآمد از طریق جذب و پخش
                            تبلیغات می‌باشد. نکته حائز اهمیت، امکان ارائه تبلیغات به صورت مبتنی بر مکان می‌باشد، که
                            شرکت‌های تبلیغاتی به شکل هدفمندتری می‌توانند مخاطب خود را پیدا کنند. شیوه‌های مختلفی برای
                            نمایش تبلیغات در این سامانه وجود دارد، مانند: بنر صفحه‌ی اول، بنر متادیتا، آرم آگهی، POP UP
                            میان برنامه، POP UP میان ویدیو، واترمارک و تیزر تبلیغاتی.
                        </p>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>
<script>
    import ItemBigImage from "../../components/items/ItemBigImage";

    export default {
        name: "AppTabIptvSolutionPage",
        data() {
            return {
                labelTextButtonDownloadPDF: valueLabels.LABEL_TEXT_BUTTON_DOWNLOAD_PDF,
            }
        },
        components: {
            ItemBigImage,
        },
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/tabsStyle";
</style>
