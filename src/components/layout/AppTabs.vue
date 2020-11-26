<template>
    <b-row id="app-tabs">
        <b-col cols="12" lg="12" class="container-products slider">
            <b-row class="sub-container-products">
                <b-col cols="6" md="10" lg="10">
                    <b-row>
                        <b-col cols="2" lg="2" md="3" @click=showContent(6) class="button-tab"
                                :class="{ active: sixIsAction}">
                            <div class="svg-container">
                                <div>
                                    {{labelSmartCamera}}
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="2" lg="2" md="3" @click=showContent(5) class="button-tab"
                                :class="{ active:fiveIsActive }">
                            <div class="svg-container">
                                <div>
                                    {{labelCreateLive}}
                                </div>
                            </div>

                        </b-col>
                        <b-col cols="2" lg="2" md="3" @click=showContent(4) class="button-tab"
                               :class="{ active: fourthIsActive}">
                            <div class="svg-container">
                                <div>
                                    {{labelInterCom}}
                                </div>
                            </div>

                        </b-col>
                        <b-col cols="2" lg="2" md="3" @click=showContent(3) class="button-tab"
                               :class="{ active: thirdIsActive}">

                            <div class="svg-container">
                                <div>
                                    {{labelStreamer}}
                                </div>
                            </div>

                        </b-col>
                        <b-col cols="2" lg="2" md="3" @click=showContent(2) class="button-tab"
                               :class="{ active: secondIsActive}">

                            <div class="svg-container">
                                <div>
                                    {{labelControlAndRouter}}
                                </div>
                            </div>

                        </b-col>
                        <b-col cols="2" lg="2" md="3" @click=showContent(1) class="button-tab"
                               :class="{ active: firstIsActive}">

                            <div class="svg-container">
                                <div>
                                    {{labelProcessorSignal}}
                                </div>
                            </div>

                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" :class=firstContainer>
            <transition name="slide-fade">
                <flickity v-if=showFirst ref="flickity" :options="flickityOptions">
                    <item-new-product
                            image="1.jpg"
                            category="modular"
                            title="IPG-1000_SDI"
                            subTitle="مبدل SDI/IP"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            image="2.jpg"
                            category="modular"
                            title="IPG-1000-ASI"
                            subTitle="مبدل ASI/IP"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            image="3.jpg"
                            category="modular"
                            title="IPG-1000-AES"
                            subTitle="مبدل AES/IP"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            image="4.jpg"
                            category="modular"
                            title="UDC-3455-80"
                            subTitle="مبدل Up/Down/Cross سیگنال 3G/HD/SD به همراه امبدر و دامبدر"
                            description="Adjustable 6 SDI inputs/outputs and …">
                    </item-new-product>
                    <item-new-product
                            image="6.jpg"
                            category="modular"
                            title="OED-3904-80"
                            subTitle="مبدل دو کاناله سیگنال نوری به سیگنال 3G/HD/SD-SDI/ASI "
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                </flickity>
            </transition>
        </b-col>
        <b-col cols="12" :class=secondContainer>
            <transition name="slide-fade">
                <flickity v-if=showSecond ref="flickity" :options="flickityOptions">
                    <item-new-product
                            category="router"
                            image="1.jpg"
                            title="CPE-3232-80"
                            subTitle="کنترل‌پنل 32*32"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="router"
                            image="2.jpg"
                            title="SDE-3206-80"
                            subTitle="روتر6×32  ویدیوی دیجیتال 3G/HD/SD-SDI/ASI "
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="router"
                            image="4.jpg"
                            title="CPE-1032-80"
                            subTitle=" کنترل‌پنل با نمایشگر OLED و 32 کلید "
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="router"
                            image="5.jpg"
                            title="CPE-1616-80"
                            subTitle="کنترل‌پنل 16*16"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="router"
                            image="6.jpg"
                            title="CPE-2054-80"
                            subTitle="کنترل‌پنل با نمایشگر رنگی و 54 کلید"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                </flickity>
            </transition>
        </b-col>
        <b-col cols="12" :class=thirdContainer>
            <transition name="slide-fade">
                <flickity v-if=showThird ref="flickity" :options="flickityOptions">
                    <item-new-product
                            category="streamer"
                            image="1.jpg"
                            title="TSP-1000-80"
                            subTitle="TS Processing Platform"
                            description="TS Processing Platform">
                    </item-new-product>
                    <item-new-product
                            category="streamer"
                            image="2.jpg"
                            title="TSP-3000-80"
                            subTitle="پردازشگر سیگنال‌هایTS (3 یونیت)"
                            description="TS Processing Platform">
                    </item-new-product>
                    <item-new-product
                            category="streamer"
                            image="4.jpg"
                            title="MCD-1080-80"
                            subTitle="دیکدر صدای چند کاناله"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="streamer"
                            image="5.jpg"
                            title="VME-0410-80"
                            subTitle="ویدیو انکدر و استریمر دو کانالهSD‌یا تک کاناله HD (با امکان صدای AES)"
                            description="">
                    </item-new-product>
                    <item-new-product
                            category="streamer"
                            image="6.jpg"
                            title="TSD-0572-80"
                            subTitle="دیکدر و گیرنده رکمونت حرفه‌ای مالتی‌فرمت"
                            description="">
                    </item-new-product>
                    <item-new-product
                            category="streamer"
                            image="8.jpg"
                            title="FMD-0520-80"
                            subTitle="گیرنده و استریمر 10 کاناله سیگنال FM"
                            description="">
                    </item-new-product>
                </flickity>
            </transition>
        </b-col>
        <b-col cols="12" :class=fourthContainer>
            <transition name="slide-fade">
                <flickity v-if=showFourth ref="flickity" :options="flickityOptions">
                    <item-new-product
                            category="ipintercom"
                            image="1.jpg"
                            title="IIP-2000-T20R"
                            subTitle="پنل کاربری اینترکام رکمونت با 20 کلید بر بستر شبکه"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="ipintercom"
                            image="2.jpg"
                            title="IIP-2000-AAPP"
                            subTitle="پنل کاربری نرم‌افزاری تحت سیستم عامل اندروید"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="ipintercom"
                            image="3.jpg"
                            title="IIP-2000-WAPP"
                            subTitle="پنل کاربری نرم‌افزاری تحت سیستم عامل ویندوز"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="ipintercom"
                            image="4.jpg"
                            title="IIP-2000-CSIR-80"
                            subTitle="واسط ارتباط با استودیو و دوربین"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="ipintercom"
                            image="5.jpg"
                            title="IIP-2000-T10D-80"
                            subTitle="پنل کاربری اینترکام رومیزی با 10 کلید بر بستر شبکه"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                    <item-new-product
                            category="ipintercom"
                            image="6.jpg"
                            title="IIP-2000-T10R-80"
                            subTitle="پنل کاربری اینترکام رکمونت با 10 کلید بر بستر شبکه"
                            description="Supports 8 digital audio input/output and …">
                    </item-new-product>
                </flickity>
            </transition>
        </b-col>
        <b-col cols="12" :class=fiveContainer>
            <transition name="slide-fade">
                <flickity v-if=showFive ref="flickity" :options="flickityOptions">
                    <item-new-product
                            category="create-live"
                            image="1.jpg"
                            title="BitCaster"
                            subTitle="سامانه ارسال محتوای زنده"
                            description="">
                    </item-new-product>
                    <item-new-product
                            category="create-live"
                            image="2.jpg"
                            title="PVS-1016"
                            subTitle=""
                            description="">
                    </item-new-product>
                    <item-new-product
                            category="create-live"
                            image="3.jpg"
                            title="PVS-2024"
                            subTitle="3G/HD/SD-SDI 24ch - 2M/E Production Video Switcher"
                            description="">
                    </item-new-product>
                </flickity>
            </transition>
        </b-col>
        <b-col cols="12" :class=sixContainer>
            <transition name="slide-fade">
                <flickity v-if=showSix ref="flickity" :options="flickityOptions">
                    <item-new-product
                            category="smart-camera"
                            image="1.jpg"
                            title="LPR-1013"
                            subTitle="دوربین پلاک خوان با سنسور 1.3 مگاپیکسل"
                            description="">
                    </item-new-product>
                    <item-new-product
                            category="smart-camera"
                            image="1.jpg"
                            title="LPR-1005"
                            subTitle="دوربین پلاک‌خوان با سنسور 0.5 مگاپیکسل"
                            description="">
                    </item-new-product>
                </flickity>
            </transition>
        </b-col>
    </b-row>
</template>

<script>
    import Flickity from 'vue-flickity';
    import ItemNewProduct from "../items/ItemNewProduct";
    import {valueLabels} from "../../utils/labels";

    export default {
        name: "AppTabs",
        data() {
            return {
                mouseHoverClass: 'mouse-hover-in-active',
                flickityOptions: {
                    initialIndex: 5,
                    prevNextButtons: true,
                    pageDots: false,
                    wrapAround: true
                },
                firstContainer: 'show-display',
                secondContainer: 'hide-display',
                thirdContainer: 'hide-display',
                fourthContainer: 'hide-display',
                fiveContainer: 'hide-display',
                sixContainer: 'hide-display',
                firstIsActive: true,
                secondIsActive: false,
                thirdIsActive: false,
                fourthIsActive: false,
                fiveIsActive: false,
                sixIsAction: false,
                showFirst: true,
                showSecond: false,
                showThird: false,
                showFourth: false,
                showFive: false,
                showSix: false,
                labelInterCom: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_IP_INTERCOM,
                labelMultiViewer: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MUlTIVIEWER,
                labelSmartCamera: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_SMART_CAMERA,
                labelModularProducts: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MODULAR_PRODUCTS,
                labelStreamer: valueLabels.LABEL_HOME_NEW_PRODUCTS_STREAMER,
                labelCreateLive: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_CREATE_LIVE,
                labelProcessorSignal: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_PROCESSOR_SIGNAL,
                labelControlAndRouter: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_ROUTERTERS_AND_CONTROL_PANELS
            }
        },
        components: {ItemNewProduct, Flickity},
        methods: {
            showContent(number) {
                switch (number) {
                    case 1: {
                        this.showFirst = true;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = false;
                        this.showSix = false;
                        this.sixIsAction = false;
                        this.fiveIsActive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.firstIsActive = true;
                        this.firstContainer = 'show-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display';
                        this.sixContainer = 'hide-display'
                    }
                        break
                    case 2: {
                        this.showFirst = false;
                        this.showSecond = true;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = false;
                        this.showSix = false;
                        this.sixIsAction = false;
                        this.fiveIsActive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = true;
                        this.firstIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'show-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display';
                        this.sixContainer = 'hide-display'
                    }
                        break
                    case 3: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = true;
                        this.showFourth = false;
                        this.showFive = false;
                        this.showSix = false;
                        this.sixIsAction = false;
                        this.fiveIsActive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = true;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'show-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display';
                        this.sixContainer = 'hide-display'
                    }
                        break
                    case 4: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = true;
                        this.showFive = false;
                        this.showSix = false;
                        this.sixIsAction = false;
                        this.fiveIsActive = false;
                        this.fourthIsActive = true;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'show-display';
                        this.fiveContainer = 'hide-display';
                        this.sixContainer = 'hide-display';
                    }
                        break
                    case 5: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = true;
                        this.showSix = false;
                        this.sixIsAction = false;
                        this.fiveIsActive = true;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'show-display';
                        this.sixContainer = 'hide-display';
                    }
                        break
                    case 6: {
                        this.showFirst = false;
                        this.showSecond = false;
                        this.showThird = false;
                        this.showFourth = false;
                        this.showFive = false;
                        this.showSix = true;
                        this.sixIsAction = true;
                        this.fiveIsActive = false;
                        this.fourthIsActive = false;
                        this.thirdIsActive = false;
                        this.secondIsActive = false;
                        this.firstIsActive = false;
                        this.firstContainer = 'hide-display';
                        this.secondContainer = 'hide-display';
                        this.thirdContainer = 'hide-display';
                        this.fourthContainer = 'hide-display';
                        this.fiveContainer = 'hide-display';
                        this.sixContainer = 'show-display'
                    }
                        break
                }
            },
            showBottomBorder() {
                this.mouseHoverClass = 'mouse-hover-active'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/tabsStyle";


   
         

    .svg-container {
        /*width: 150px;*/
        position: relative;
        top: -8px;
    }

    .svg-container div {
        margin-left: 7px;
    }

    .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 400px;
        transition: all 0.8s ease-out 0s;
        stroke-width: 3px;
    }

    .button-tab:hover .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 0px;
    }

    .slide-fade-enter-active {
        transition: all .9s ease;
    }


    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateY(12px);
        opacity: 0;
    }


    *, *:after, *:before {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0 none;
        position: relative;
        outline: none;
    }

    .svg-container > div {
        text-decoration: none;
        color: $color-black-unselect;
        z-index: 1;
        font-weight: bold;
    }

    .svg-container > div:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -11px;
        left: 0;
        background: $color-selected-li;
        visibility: hidden;
        border-radius: 5px;
        transform: scaleX(0);
        transition: .25s linear;
    }

    .svg-container > div:hover:before,
    .svg-container > div:focus:before {
        visibility: visible;
        transform: scaleX(1);
    }


    @keyframes hover-v {
        0% {
            transform: scaleX(0);
            height: 5px;
        }
        45% {
            transform: scaleX(1.05);
            height: 5px;
        }
        55% {
            height: 5px;
        }
        100% {
            transform: scaleX(1.05);
            height: 3.8rem;
        }
    }

    @keyframes no-hover-v {
        0% {
            transform: scaleX(1.05);
            height: 3.8rem;
        }
        45% {
            height: 5px;
        }
        55% {
            transform: scaleX(1.05);
            height: 5px;
            opacity: 1;
        }

        100% {
            transform: scaleX(0);
            height: 5px;
            opacity: .02;
        }
    }

</style>
