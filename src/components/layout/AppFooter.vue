<template>
    <div id="app-footer">
        <b-container-flouid>
            <mq-layout :mq="['md', 'lg']">
                <back-to-top bottom="50px" right="50px" :scrollFn="scrollFn" visibleoffset="500">
                    <div class="to-top-page">
                        <div class="top-to-page-icon">
                            <img src="../../assets/img/icons/img-top-page.png" alt="گروه صمیم">
                        </div>
                    </div>
                </back-to-top>
            </mq-layout>
            <mq-layout mq="sm">
                <div class="small-to-top-page">
                    <back-to-top bottom="20px" right="20px" :scrollFn="scrollFn" visibleoffset="500">
                        <div class="top-to-page-icon-small">
                            <img src="../../assets/img/icons/img-top-page.png" alt="گروه صمیم">
                        </div>
                    </back-to-top>
                </div>
            </mq-layout>
            <div class="internal-wrapper">
            <!-- <b-row align-h="center"> -->
                <!-- <b-col cols="12" md="10" lg="10"> -->
                    <b-row>
                        <!-- contact -->
                        <b-col  class="p-5 p-lg-2 pr-md-5 pt-md-0" cols="12" md="6"  lg="2" order="2" order-md="3" order-lg="1">
                            <img class="logo-img" src="../../assets/img/ic_footer_en.png" alt="گروه صمیم">
                            <app-title :title="labelPhoneNumberOne" classStyle="small-title-address"></app-title>
                            <app-title :title="labelPhoneNumberTwo" classStyle="small-title-address"></app-title>
                            <app-title :title="labelAddress" classStyle="small-title-address"></app-title>
                            <app-title :title="labelZipCode" classStyle="small-title-address"></app-title>
                            <app-title :title="labelEmail" classStyle="small-title-red"></app-title>
                            <a rel="nofollow" href="https://twitter.com/GroupSamim">
                                <img class="social-media-link" src="../../assets/img/ic_footer_twitter.png"
                                     alt="گروه صمیم">
                            </a>
                            <a rel="nofollow" href="https://www.linkedin.com/company/samimgroup/">
                                <img class="social-media-linkden" src="../../assets/img/ic_footer_linkden.png"
                                     alt="گروه صمیم">
                            </a>
                            <a rel="nofollow" href="https://www.facebook.com/SAMIMGroup79/">
                                <img class="social-media-linkden" src="../../assets/img/ic_footer_facebook.png"
                                     alt="گروه صمیم">
                            </a>
                            <a rel="nofollow" href="https://www.pinterest.ch/samimgroup/">
                                <img class="social-media-linkden" src="../../assets/img/ic_footer_pentrest.png"
                                     alt="گروه صمیم">
                            </a>
                        </b-col>
                        <!-- Products -->
                        <b-col dir="rtl" cols="12" md="12" lg="10" order="1" order-md="1" order-lg="2">
                            <mq-layout :mq="['md', 'lg']">
                                <b-row>
                                    <b-col cols="12" md="4" lg="auto" style="width:14.2%" v-for="category in getAllCategories">
                                        <title-footer :title=category.name></title-footer>
                                        <item-link-footer
                                                v-for="subCategory in category.subCategory"
                                                :cat=subCategory.id
                                                :parent=category.name
                                                link="/products"
                                                :titleLink=subCategory.name></item-link-footer>
                                    </b-col>
                                </b-row>
                            </mq-layout>
                            <mq-layout mq="sm">
                                <app-collaps
                                        :key=category.id
                                        :titleHeader=category.name
                                        classStyle="footer-small"
                                        iconHeader="plus"
                                        v-for="category in getAllCategories">
                                    <b-col>
                                        <app-filter
                                                :parent=category.name
                                                :catId=subCategory.id
                                                :title=subCategory.name
                                                v-for="subCategory in category.subCategory"></app-filter>
                                    </b-col>
                                </app-collaps>
                            </mq-layout>
                        </b-col>
                        <!-- CopyRight -->
                        <b-col class="p-5 p-lg-3 p-md-4 footer-border" cols="12" md="12" lg="12" order="12" order-md="12" order-lg="3">
                            <app-title :title=labelCopyRightFooter class="float-lg-right"
                                    classStyle="very-small-title"></app-title>
                        </b-col>
                        <!-- Menu -->
                        <b-col class="p-5 p-lg-4 p-md-4" cols="12" md="12" lg="6" order="3" order-md="2" order-lg="5">
                            <b-row>
                                <b-col cols="3" lg="2" md="2">
                                    <item-link-footer-bottom
                                            link="about"
                                            :titleLink=labelLinkFooterAboutUs></item-link-footer-bottom>
                                </b-col>
                                <b-col cols="3" lg="2" md="2">
                                    <item-link-footer-bottom
                                            link="products"
                                            :titleLink=labelLinkFooterProducts></item-link-footer-bottom>
                                </b-col>
                                <b-col cols="3" lg="2" md="2">
                                    <item-link-footer-bottom
                                            link="imam"
                                            :titleLink=labelLinkFooterSolutions></item-link-footer-bottom>
                                </b-col>
                                <b-col cols="3" lg="2" md="2">
                                    <item-link-footer-bottom
                                            link="blog"
                                            :titleLink=labelLinkFooterBlog></item-link-footer-bottom>
                                </b-col>
                                <b-col cols="3" lg="2" md="2">
                                    <item-link-footer-bottom
                                            link="contactUs"
                                            :titleLink=labelLinkFooterContactUs></item-link-footer-bottom>
                                </b-col>
                            </b-row>
                        </b-col>
                        <!-- About Text -->
                        <b-col class="p-5 p-lg-4 pl-md-5 pt-md-5" align-self="center" cols="12" md="6" lg="6" order="4" order-md="4" order-lg="4">
                            <p>
                                {{labelAboutTextFooter}}
                            </p>
                        </b-col>
                    </b-row>
                <!-- </b-col> -->
            <!-- </b-row> -->
            </div>
        </b-container-flouid>
    </div>
</template>

<script>
    import ItemLinkFooter from "../items/ItemLinkFooter";
    import {valueLabels} from '../../utils/labels'
    import TitleFooter from "../titles/TitleFooter";
    import AppTitle from "../titles/AppTitle";
    import AppCollaps from "./AppCollaps";
    import BackToTop from 'vue-backtotop';
    import {mapActions, mapGetters} from 'vuex'
    import AppFilter from "../../components/layout/AppFilter";
    import ItemLinkFooterBottom from "../items/ItemLinkFooterBottom";

    export default {
        name: 'AppFooter',
        data() {
            return {
                labelLinkFooterAboutUs: valueLabels.LABEL_LINK_FOOTER_ABOUT_US_FA,
                labelLinkFooterProducts: valueLabels.LABEL_LINK_FOOTER_PRODUCTS_FA,
                labelLinkFooterSolutions: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_FA,
                labelLinkFooterSupport: valueLabels.LABEL_LINK_FOOTER_SUPPORT_FA,
                labelLinkFooterBlog: valueLabels.LABEL_LINK_FOOTER_BLOG_FA,
                labelLinkFooterContactUs: valueLabels.LABEL_LINK_FOOTER_CONTACT_US_FA,
                labelTitleFooterFirst: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MODULAR_PRODUCTS,
                labelTitleFooterSecond: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_ROUTERTERS_AND_CONTROL_PANELS,
                labelTitleFooterThree: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_MUlTIVIEWER,
                labelTitleFooterFourth: valueLabels.LABEL_HOME_PAGE_NEW_PRODUCTS_IP_INTERCOM,
                labelTitleLinkFirst1: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_1_EN,
                labelTitleLinkFirst2: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_2_EN,
                labelTitleLinkFirst3: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_3_EN,
                labelTitleLinkFirst4: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_4_EN,
                labelTitleLinkFirst5: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_5_EN,
                labelTitleLinkFirst6: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_6_EN,
                labelTitleLinkFirst7: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_7_EN,
                labelTitleLinkFirst8: valueLabels.LABEL_TITLE_LINK_FOOTER_FIRST_8_EN,
                labelTitleLinkSecond1: valueLabels.LABEL_TITLE_LINK_FOOTER_SECOND_1_EN,
                labelTitleLinkSecond2: valueLabels.LABEL_TITLE_LINK_FOOTER_SECOND_2_EN,
                labelTitleLinkThree1: valueLabels.LABEL_TITLE_LINK_FOOTER_THREE_1_EN,
                labelTitleLinkThree2: valueLabels.LABEL_TITLE_LINK_FOOTER_THREE_2_EN,
                labelTitleLinkFourth1: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_1_EN,
                labelTitleLinkFourth2: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_2_EN,
                labelTitleLinkFourth3: valueLabels.LABEL_TITLE_LINK_FOOTER_FOURTH_3_EN,
                labelPhoneNumberOne: valueLabels.LABEL_PHONE_ONE_EN,
                labelPhoneNumberTwo: valueLabels.LABEL_PHONE_TWO_EN,
                labelAddress: valueLabels.LABEL_ADDRESS_EN,
                labelZipCode: valueLabels.LABEL_ZIP_CODE_EN,
                labelEmail: valueLabels.LABEL_EMAIL_EN,
                labelCopyRightFooter: valueLabels.LABEL_COPY_RIGHT_FOOTER,
                labelAboutTextFooter: valueLabels.LABLE_ABOUT_TEXT_FOOTER_EN
            }
        },
        components: {ItemLinkFooterBottom, AppCollaps, AppFilter, AppTitle, TitleFooter, BackToTop, ItemLinkFooter},
        watch: {
            visibleOffset(newVal, oldVal) {
                document.body.style.height = (parseInt(newVal) + 2000) + 'px';
            }
        },
        methods: {
            scrolled() {
                console.log('Scrolled !')
            },
            scrollFn: function (eventObject) {
                let diff = this.scrollHeight - window.pageYOffset;
                this.isBackTopFooter = diff < (this.scrollIndentBackTop - 40 - 15);
            },
            ...mapActions([
                'setAllCategories',
                'setBreadcrumbItemsProductsPage'
            ]),
        },
        computed: {
            ...mapGetters([
                'getAllCategories'
            ]),
        },
        created() {
            this.setAllCategories()
        }
    }
</script>
<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/footerStyle";
</style>
