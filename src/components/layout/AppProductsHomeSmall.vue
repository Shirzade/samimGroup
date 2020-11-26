<template>
    <b-row id="products-home-small">
        <b-col cols="12" class="title-products" @click="showingFirstSection()">
            <div>
                {{labelInterCom}}
            </div>
            <img :src="iconFirstBtn" alt="گروه صمیم">
        </b-col>
        <b-col v-if="showFirstSection" key="1">
            <flickity ref="flickity" :options="flickityOptions">
                <item-small-new-product
                        category="ipintercom"
                        image="1.jpg"
                        title="IIP-2000-T10R"
                        subTitle=""
                        description="پنل کاربری اینترکام رکمونت با 20 کلید بر بستر شبکه">
                </item-small-new-product>
                <item-small-new-product
                        category="ipintercom"
                        image="2.jpg"
                        title="IIP-2000-AAPP"
                        subTitle=""
                        description="پنل کاربری نرم‌افزاری تحت سیستم عامل آندروید">
                </item-small-new-product>
                <item-small-new-product
                        category="ipintercom"
                        image="3.jpg"
                        title="IIP-2000-WAPP"
                        subTitle=""
                        description="پنل کاربری نرم‌افزاری تحت سیستم عامل ویندوز">
                </item-small-new-product>
                <item-small-new-product
                        category="ipintercom"
                        image="4.jpg"
                        title="IIP-2000-CSIR-80"
                        subTitle=""
                        description="واسط ارتباط با استودیو و دوربین">
                </item-small-new-product>
                <item-small-new-product
                        category="ipintercom"
                        image="5.jpg"
                        title="IIP-2000-T10D-80"
                        subTitle=""
                        description="پنل کاربری اینترکام رومیزی با 10 کلید بر بستر شبکه">
                </item-small-new-product>
                <item-small-new-product
                        category="ipintercom"
                        image="6.jpg"
                        title="IIP-2000-T10R-80"
                        subTitle=""
                        description="پنل کاربری اینترکام رکمونت با 10 کلید بر بستر شبکه">
                </item-small-new-product>
            </flickity>
        </b-col>
        <b-col cols="12" class="title-products" @click="showingSecondSection()">
            <div>
                {{labelCreateLive}}
            </div>
            <img :src=iconSecondBtn alt="گروه صمیم">
        </b-col>
        <b-col v-if="showSecondSection" key="2">
            <flickity ref="flickity" :options="flickityOptions">
                <item-small-new-product
                        category="create-live"
                        image="1.jpg"
                        title="BitCaster"
                        subTitle="BitCaster"
                        description="سامانه ارسال محتوای زنده">
                </item-small-new-product>
                <item-small-new-product
                        category="create-live"
                        image="2.jpg"
                        title="PVS-1016"
                        subTitle=""
                        description="">
                </item-small-new-product>
            </flickity>
        </b-col>
        <b-col cols="12" class="title-products" @click="showingTreeSection()">
            <div>
                {{labelSmartCamera}}
            </div>
            <img :src=iconThreeBtn alt="گروه صمیم">
        </b-col>
        <b-col v-if="showThreeSection" key="3">
            <flickity ref="flickity" :options="flickityOptions">
                <item-small-new-product
                        category="smart-camera"
                        image="1.jpg"
                        title="LPR-5000"
                        subTitle=""
                        description="دوربین هوشمند پلاک خوان- سری5000">
                </item-small-new-product>
            </flickity>
        </b-col>
        <b-col cols="12" class="title-products" @click="showingFrothSection()">
            <div>
                {{labelStreamer}}
            </div>
            <img :src=iconFrothBtn alt="گروه صمیم">
        </b-col>
        <b-col v-if="showForthSection" key="4">
            <flickity ref="flickity" :options="flickityOptions">
                <item-small-new-product
                        image="1.jpg"
                        category="streamer"
                        title="TSP-1000-80"
                        subTitle=""
                        description="TS Processing Platform">
                </item-small-new-product>
                <item-small-new-product
                        image="2.jpg"
                        category="streamer"
                        title="TSP-3000-80"
                        subTitle=""
                        description="پردازشگر سیگنال‌هایTS (3 یونیت)">
                </item-small-new-product>
                <item-small-new-product
                        image="4.jpg"
                        category="streamer"
                        title="MCD-1080-80"
                        subTitle=""
                        description="دیکدر صدای چند کاناله">
                </item-small-new-product>
                <item-small-new-product
                        image="5.jpg"
                        category="streamer"
                        title="VME-0410-80"
                        subTitle=""
                        description="ویدیو انکدر و استریمر دو کانالهSD‌یا تک کاناله HD (با امکان صدای AES)">
                </item-small-new-product>
                <item-small-new-product
                        image="6.jpg"
                        category="streamer"
                        title="TSD-0572-80"
                        subTitle=""
                        description="دیکدر و گیرنده رکمونت حرفه‌ای مالتی‌فرمت">
                </item-small-new-product>
                <item-small-new-product
                        image="8.jpg"
                        category="streamer"
                        title="FMD-0520-80"
                        subTitle=""
                        description="گیرنده و استریمر 10 کاناله سیگنال FM">
                </item-small-new-product>
            </flickity>
        </b-col>
        <b-col cols="12" class="title-products" @click="showingFiveSection()">
            <div>
                {{labelControlAndRouter}}
            </div>
            <img :src=iconFiveBtn alt="گروه صمیم">
        </b-col>
        <b-col v-if="showFiveSection" key="4">
            <flickity ref="flickity" :options="flickityOptions">
                <item-small-new-product
                        image="1.jpg"
                        category="router"
                        title="CPE-3232-80"
                        subTitle=""
                        description="کنترل‌پنل 32*32">
                </item-small-new-product>
                <item-small-new-product
                        image="2.jpg"
                        category="router"
                        title="SDE-3206-80"
                        subTitle=""
                        description="روتر6×32  ویدیوی دیجیتال 3G/HD/SD-SDI/ASI">
                </item-small-new-product>
                <item-small-new-product
                        image="4.jpg"
                        category="router"
                        title="CPE-1032-80"
                        subTitle=""
                        description="کنترل‌پنل با نمایشگر OLED و 32 کلید">
                </item-small-new-product>
                <item-small-new-product
                        image="5.jpg"
                        category="router"
                        title="CPE-1616-80"
                        subTitle=""
                        description="کنترل‌پنل 16*16">
                </item-small-new-product>
                <item-small-new-product
                        image="6.jpg"
                        category="router"
                        title="CPE-2054-80"
                        subTitle=""
                        description="کنترل‌پنل با نمایشگر رنگی و 54 کلید">
                </item-small-new-product>
            </flickity>
        </b-col>
        <b-col cols="12" class="title-products" @click="showingSixSection()">
            <div>
                {{labelProcessorSignal}}
            </div>
            <img :src=iconSixBtn alt="گروه صمیم">
        </b-col>
        <b-col v-if="showSixSection" key="4">
            <flickity ref="flickity" :options="flickityOptions">
                <item-small-new-product
                        image="1.jpg"
                        category="modular"
                        title="IPG-1000_SDI"
                        subTitle=""
                        description="مبدل SDI/IP">
                </item-small-new-product>
                <item-small-new-product
                        image="2.jpg"
                        category="modular"
                        title="IPG-1000-ASI"
                        subTitle=""
                        description="مبدل ASI/IP">
                </item-small-new-product>
                <item-small-new-product
                        image="3.jpg"
                        category="modular"
                        title="IPG-1000-AES"
                        subTitle=""
                        description="مبدل AES/IP">
                </item-small-new-product>
                <item-small-new-product
                        image="4.jpg"
                        category="modular"
                        title="UDC-3455-80"
                        subTitle=""
                        description="مبدل Up/Down/Cross سیگنال 3G/HD/SD به همراه امبدر و دامبدر">
                </item-small-new-product>
                <item-small-new-product
                        image="5.jpg"
                        category="modular"
                        title="OED-3904-80"
                        subTitle=""
                        description="مبدل دو کاناله سیگنال نوری به سیگنال 3G/HD/SD-SDI/ASI">
                </item-small-new-product>
            </flickity>
        </b-col>
    </b-row>
</template>

<script>
    import Flickity from 'vue-flickity';
    import ItemNewProduct from "../items/ItemNewProduct";
    import {valueLabels} from "../../utils/labels";
    import ItemSmallNewProduct from "../items/ItemSmallNewProduct";

    export default {
        name: "AppProductsHomeSmall",
        data() {
            return {
                flickityOptions: {
                    initialIndex: 5,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                },
                showFirstSection: false,
                showSecondSection: false,
                showThreeSection: false,
                showForthSection: false,
                showFiveSection: false,
                showSixSection: false,
                labelInterCom: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_IP_INTERCOM,
                labelMultiViewer: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MUlTIVIEWER,
                labelModularProducts: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MODULAR_PRODUCTS,
                labelControlAndRouter: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_ROUTERTERS_AND_CONTROL_PANELS,
                labelSmartCamera: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_SMART_CAMERA,
                labelStreamer: valueLabels.LABEL_HOME_NEW_PRODUCTS_STREAMER,
                labelCreateLive: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_CREATE_LIVE,
                labelProcessorSignal: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_PROCESSOR_SIGNAL,
                iconFirstBtn: require('../../assets/img/icons/img-collaps-left.png'),
                iconSecondBtn: require('../../assets/img/icons/img-collaps-left.png'),
                iconThreeBtn: require('../../assets/img/icons/img-collaps-left.png'),
                iconFrothBtn: require('../../assets/img/icons/img-collaps-left.png'),
                iconFiveBtn: require('../../assets/img/icons/img-collaps-left.png'),
                iconSixBtn: require('../../assets/img/icons/img-collaps-left.png'),
            }
        },
        components: {ItemSmallNewProduct, ItemNewProduct, Flickity},
        methods: {
            showingFirstSection() {
                this.setImageIcon("ONE", this.showFirstSection)
                this.showSecondSection = false
                this.showThreeSection = false
                this.showForthSection = false
                this.showFiveSection = false
                this.showSixSection = false
                this.iconSecondBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconThreeBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFrothBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFiveBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSixBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.showFirstSection = !this.showFirstSection

            },
            showingSecondSection() {
                this.setImageIcon("TWO", this.showSecondSection)
                this.showFirstSection = false
                this.showSecondSection = !this.showSecondSection
                this.showThreeSection = false
                this.showForthSection = false
                this.showFiveSection = false
                this.showSixSection = false
                this.iconFirstBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconThreeBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFrothBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFiveBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSixBtn = require('../../assets/img/icons/img-collaps-left.png')
            },
            showingTreeSection() {
                this.setImageIcon("THREE", this.showThreeSection)
                this.showFirstSection = false
                this.showSecondSection = false
                this.showThreeSection = !this.showThreeSection
                this.showForthSection = false
                this.showFiveSection = false
                this.showSixSection = false
                this.iconFirstBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSecondBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFrothBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFiveBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSixBtn = require('../../assets/img/icons/img-collaps-left.png')
            },
            showingFrothSection() {
                this.setImageIcon("FOUR", this.showForthSection)
                this.iconFirstBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSecondBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconThreeBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFiveBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSixBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.showFirstSection = false
                this.showSecondSection = false
                this.showThreeSection = false
                this.showFiveSection = false
                this.showSixSection = false
                this.showForthSection = !this.showForthSection
            },
            showingFiveSection() {
                this.setImageIcon("FIVE", this.showFiveSection)
                this.iconFirstBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSecondBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconThreeBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFrothBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSixBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.showFirstSection = false
                this.showSecondSection = false
                this.showThreeSection = false
                this.showForthSection = false
                this.showFiveSection = !this.showFiveSection
                this.showSixSection = false
            },
            showingSixSection() {
                this.setImageIcon("SIX", this.showSixSection)
                this.iconFirstBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconSecondBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconThreeBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFrothBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.iconFiveBtn = require('../../assets/img/icons/img-collaps-left.png')
                this.showFirstSection = false
                this.showSecondSection = false
                this.showThreeSection = false
                this.showForthSection = false
                this.showFiveSection = false
                this.showSixSection = !this.showSixSection
            },
            setImageIcon(section, flag) {
                let image = ''
                if (flag) {
                    image = 'img-collaps-left.png'
                } else {
                    image = 'img-collaps-down.png'
                }
                switch (section) {
                    case "ONE": {
                        this.iconFirstBtn = require('../../assets/img/icons/' + image)
                    }
                        break
                    case "TWO":
                        this.iconSecondBtn = require('../../assets/img/icons/' + image)
                        break
                    case "THREE":
                        this.iconThreeBtn = require('../../assets/img/icons/' + image)
                        break
                    case "FOUR":
                        this.iconFrothBtn = require('../../assets/img/icons/' + image)
                        break
                    case "FIVE":
                        this.iconFiveBtn = require('../../assets/img/icons/' + image)
                        break
                    case "SIX":
                        this.iconSixBtn = require('../../assets/img/icons/' + image)
                        break
                }

            },
        },
        created() {

        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/productsHomePage";

    .slide-fade-enter-active {
        transition: all .9s ease;
    }

    .slide-fade-leave-active {
        /*transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateY(12px);
        opacity: 0;
    }
</style>
