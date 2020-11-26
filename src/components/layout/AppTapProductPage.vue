<template>
    <div id="tap-product-page">
        <div class="wrapper">
            <b-row>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs first-tab">
                    <div class="not-active" :class="{ active:firstIsActive}" @click=showContentTab(1)>
                        Key Features
                    </div>
                </b-col>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs">
                    <div class="not-active" :class="{ active:secondIsActive }" @click=showContentTab(2)>
                        Specifications
                    </div>
                </b-col>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs">
                    <div class="not-active" :class="{ active:thirdIsActive }" @click=showContentTab(3)>
                        System Requirements
                    </div>
                </b-col>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs last-tab">
                    <div class="not-active" :class="{ active:fourthIsActive }" @click=showContentTab(4)>
                        Ordering Info
                    </div>
                </b-col>
                <b-container class="content-tabs-products-page">
                    <transition name="slide-fade">
                        <b-row v-if=firstSection>
                            <ul>
                                <li>Supports 8 digital audio input/output</li>
                                <li>Up to 8 simultaneous AES67 inputs</li>
                                <li> Configuring each digital audio output to be received from various audio AES67 sources</li>
                                <li>Supports sending/receiving AES67 audio information via RTSP</li>
                                <li>Supports audio synchronization from different PTP sources for each audio</li>
                                <li> Audio silence and audio level detection per input/output</li>
                                <li> Alarm configuration for each input/output including audio level and audio silence</li>
                                <li> Cost-effective and less implementation complexity</li>
                            </ul>
                        </b-row>
                    </transition>
                    <transition name="slide-fade">
                        <b-row v-if=secondSection>
                            <app-paragragh
                                    text="با افتخار می‌گوییم در زندگی یک ایرانی سیگنالی نیست که به دست مخاطب برسد و از محصولات سخت‌افزاری و نرم‌افزاری صمیم عبور نکرده باشد.	نوآوری مداوم از طریق تحقیق، توسعه و ارتقا کیفی محصولات، خط مشی این شرکت بوده و گروه صمیم ارائه محصولات مرغوب با استانداردهای بین المللی را تضمین می‌کن"></app-paragragh>
                        </b-row>
                    </transition>
                    <transition name="slide-fade">
                        <b-row v-if=thirdSection>
                            <app-paragragh
                                    text="استفاده از بستر IP، این امکان را فراهم می‌آورد که با تغییرات تکنولوژی، به عنوان مثال گذار از فرمت HD به 4K، نیازی به تغییرات زیرساخت و سخت‌افزارها وجود نداشته باشد و با به‌روزرسانی نرم‌افزاری بتوان از فرمت‌ها و کدک‌های جدید پشتیبانی نمود."></app-paragragh>
                        </b-row>
                    </transition>
                    <transition name="slide-fade">
                        <b-row v-if=fourthSection>
                            <app-paragragh
                                    text="استفاده از اینترفیس IP به عنوان جایگزین سیگنال‌های صدا و تصویر از قبیل AES و SDI، این امکان را فراهم کرده که به جای استفاده از سخت‌افزارهای خاص صنعت برودکست از ادوات و سرورهای رایج در IT استفاده شود. با رشد روزافزون سرویس‌های مبتنی بر Cloud، می‌توان بدون نیاز به تامین کلیه سخت‌افزارها، بخشی از پردازش‌ها را در قالب سرویس دریافت نمود."></app-paragragh>
                        </b-row>
                    </transition>
                </b-container>
            </b-row>
        </div>
    </div>    
</template>

<script>
    import AppParagragh from "./AppParagraph";

    export default {
        name: "AppTabProductPage",
        components: {AppParagragh},
        data() {
            return {
                firstSection: true,
                secondSection: false,
                thirdSection: false,
                fourthSection: false,
                firstIsActive: true,
                secondIsActive: false,
                thirdIsActive: false,
                fourthIsActive: false,
            }
        },
        methods: {
            showContentTab(numberTab) {
                switch (numberTab) {
                    case 1: {
                        this.firstSection = true;
                        this.secondSection = false;
                        this.thirdSection = false;
                        this.fourthSection = false;
                        this.firstIsActive = true;
                        this.secondIsActive = false;
                        this.thirdIsActive = false;
                        this.fourthIsActive = false
                    }
                        break;
                    case 2: {
                        this.firstSection = false;
                        this.secondSection = true;
                        this.thirdSection = false;
                        this.fourthSection = false;
                        this.firstIsActive = false;
                        this.secondIsActive = true;
                        this.thirdIsActive = false;
                        this.fourthIsActive = false
                    }
                        break;
                    case 3: {
                        this.firstSection = false;
                        this.secondSection = false;
                        this.thirdSection = true;
                        this.fourthSection = false;
                        this.firstIsActive = false;
                        this.secondIsActive = false;
                        this.thirdIsActive = true;
                        this.fourthIsActive = false
                    }
                        break;
                    case 4: {
                        this.firstSection = false;
                        this.secondSection = false;
                        this.thirdSection = false;
                        this.fourthSection = true;
                        this.firstIsActive = false;
                        this.secondIsActive = false;
                        this.thirdIsActive = false;
                        this.fourthIsActive = true
                    }
                        break
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/tabProductPageStyle";

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