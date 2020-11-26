<template>
    <b-container-floid id="contact-us">
        <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <vue-headful
                    :title=metaTitle
                    :description=metaDescription
            />
            <app-breadcrumb :breadcbItems=breadcrumbItemsContactUsPage></app-breadcrumb>
            <app-page-main-title classStyle="title-fa" :title=labelContactUsPageMainTitle></app-page-main-title>
            <app-paragraph-without-anim :text=labelContactUsPageSubTitle></app-paragraph-without-anim>
            <b-row>
                <b-col cols="12" lg="4">
                    <div class="container-emails">
                        <app-title :title=labelContactUsAddressTitle classStyle="title-contact-us"></app-title>
                        <app-title :title=labelContactUsAddress classStyle="title-contact-us"></app-title>
                    </div>
                    <div class="container-emails">
                        <app-title :title=labelContactUsTellTitle classStyle="title-contact-us"></app-title>
                        <app-title :title=labelContactUsTell classStyle="title-contact-us"></app-title>
                    </div>
                    <div class="container-emails">
                        <app-title :title=labelContactUsTitleFax classStyle="title-contact-us"></app-title>
                        <app-title :title=labelContactUsFax classStyle="title-contact-us"></app-title>
                    </div>
                    <div class="container-emails">
                        <app-title :title=labelContactUsTitleManagement classStyle="title-contact-us"></app-title>
                        <app-title :title=labelContactUsManagement classStyle="title-contact-us"></app-title>
                    </div>
                    <div class="container-emails">
                        <app-title :title=labelContactUsTitleSale classStyle="title-contact-us"></app-title>
                        <app-title :title=labelContactUsSale classStyle="title-contact-us"></app-title>
                    </div>
                    <div class="container-emails">
                        <app-title :title=labelContactUsTs classStyle="title-contact-us"></app-title>
                        <app-title :title=labelContactUsTitleTs classStyle="title-contact-us"></app-title>
                    </div>
                    <div class="container-emails">
                        <app-title :title=labelTitleSocial classStyle="title-contact-us"></app-title>
                        <div>
                            <a rel="nofollow"  href="https://twitter.com/GroupSamim">
                                <img class="social-media-link" src="../assets/img/ic_footer_twitter.png">
                            </a>
                            <a  rel="nofollow" href="https://www.linkedin.com/company/samimgroup/">
                                <img class="social-media-link" src="../assets/img/ic_footer_linkden.png">
                            </a>
                            <a rel="nofollow" href="https://www.facebook.com/SAMIMGroup79/">
                                <img class="social-media-linkden" src="../assets/img/ic_footer_facebook.png"
                                     alt="گروه صمیم">
                            </a>
                            <a  rel="nofollow" href="https://www.pinterest.ch/samimgroup/">
                                <img class="social-media-linkden" src="../assets/img/ic_footer_pentrest.png"
                                     alt="گروه صمیم">
                            </a>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" lg="8">
                    <div class="container-message" v-if=getShowMessageContactUs>
                        <b-alert v-model="showDismissibleAlert" :variant=getColorMessage dismissible>
                            {{getMessageContactUs}}
                        </b-alert>
                    </div>
                    <app-title :title=labelName classStyle="contact-us-title"></app-title>
                    <b-form>
                        <b-form-group>
                            <b-form-input
                                    aria-describedby="emailHelp"
                                    type="text"
                                    v-model="contactUsName"
                                    variant="form-control"
                                    required></b-form-input>
                        </b-form-group>
                    </b-form>
                    <b-row>
                        <b-col cols="12" lg="6">
                            <app-title :title=labelEmail classStyle="contact-us-title"></app-title>
                            <b-form>
                                <b-form-group>
                                    <b-form-input
                                            aria-describedby="emailHelp"
                                            v-model="contactUsEmail"
                                            variant="form-control"
                                            type="phone"
                                            required></b-form-input>
                                </b-form-group>
                            </b-form>
                        </b-col>
                        <b-col cols="12" lg="6">
                            <app-title :title=labelMobileNumber classStyle="contact-us-title"></app-title>
                            <b-form>
                                <b-form-group>
                                    <b-form-input
                                            aria-describedby="emailHelp"
                                            v-model="contactUsMobile"
                                            variant="form-control"
                                            type="phone"
                                            required></b-form-input>
                                </b-form-group>
                            </b-form>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" lg="12">
                            <app-title :title=labelMessage classStyle="contact-us-title"></app-title>
                            <b-form-textarea
                                    id="textarea"
                                    rows="10"
                                    v-model="contactUsMessage"
                                    max-rows="10"></b-form-textarea>
                            <div class="container-button-contact-us" @click="showDismissibleAlert=true">
                                <app-button
                                        :contactUsName=contactUsName
                                        :contactUsPhone=contactUsMobile
                                        :contactUsEmail=contactUsEmail
                                        :contactUsMessage=contactUsMessage
                                        :titleButton=labelSendButton
                                        classButton="apply-button"
                                        pageLink="contact-us"></app-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="map-container">
                    <l-map
                            :zoom="zoom"
                            :center="center"
                            :options="mapOptions"
                            style="height: 80%">
                        <l-tile-layer :url="url" :attribution="attribution"/>
                        <l-marker :lat-lng="withTooltip">
                            <l-tooltip :options="{ permanent: true, interactive: true }">
                                <div>
                                    شرکت صمیم رایانه
                                </div>
                            </l-tooltip>
                        </l-marker>
                    </l-map>
                </b-col>
            </b-row>
        </div>
    </b-container-floid>
</template>

<script>
    import {valueLabels} from "../utils/labels";
    import {breadcrumbItems} from "../utils/breadcrumbItems";
    import AppBreadcrumb from "../components/layout/AppBreadcrumb";
    import AppPageMainTitle from "../components/titles/AppPageMainTitle";
    import AppPageSubTitle from "../components/titles/AppPageSubTitle";
    import AppTitle from "../components/titles/AppTitle";
    import AppButton from "../components/buttons/AppButton";
    import AppParagragh from "../components/layout/AppParagraph";
    import {latLng} from 'leaflet'
    import {LMap, LMarker, LPopup, LTileLayer, LTooltip} from 'vue2-leaflet'
    import {mapGetters} from "vuex"
    import AppParagraphWithoutAnim from "../components/layout/AppParagraphWithoutAnim";
    import {metaTags} from "../utils/metaTages";

    export default {
        name: "ContactUs",
        components: {
            AppParagraphWithoutAnim,
            AppParagragh,
            AppButton,
            AppTitle,
            AppPageSubTitle,
            AppPageMainTitle,
            AppBreadcrumb,
            LMap,
            LTooltip,
            LPopup,
            latLng,
            LTileLayer,
            LMarker
        },
        data() {
            return {
                metaTitle: metaTags.CONTACT_US_PAGE.title,
                metaDescription: metaTags.CONTACT_US_PAGE.description,
                showDismissibleAlert: false,
                contactUsName: "",
                contactUsEmail: "",
                contactUsMobile: "",
                contactUsMessage: "",
                breadcrumbItemsContactUsPage: breadcrumbItems.BREADCRUMB_ITEMS_CONTACT_US_PAGE,
                labelContactUsPageMainTitle: valueLabels.LABEL_CONTACT_US_PAGE_MAIN_TITLE,
                labelContactUsPageSubTitle: valueLabels.LABEL_CONTACT_US_PAGE_SUB_TITLE,
                labelContactUsAddressTitle: valueLabels.LABEL_FORM_CONTACT_US_ADDRESS_TITLE,
                labelContactUsTellTitle: valueLabels.LABEL_FORM_CONTACT_US_TELL_TITLE,
                labelContactUsAddress: valueLabels.LABEL_FORM_CONTACT_US_ADDRESS,
                labelContactUsTell: valueLabels.LABEL_FORM_CONTACT_US_TELL,
                labelContactUsFax: valueLabels.LABEL_FORM_CONTACT_US_FAX,
                labelContactUsTitleFax: valueLabels.LABEL_FORM_CONTACT_US_TITLE_FAX,
                labelContactUsManagement: valueLabels.LABEL_FORM_CONTACT_US_MANAGEMENT,
                labelContactUsTitleManagement: valueLabels.LABEL_FORM_CONTACT_US_TITLE_MANAGEMENT,
                labelContactUsTitleSale: valueLabels.LABEL_FORM_CONTACT_US_TITLE_SALE,
                labelContactUsSale: valueLabels.LABEL_FORM_CONTACT_US_SALE,
                labelContactUsTs: valueLabels.LABEL_FORM_CONTACT_US_TITLE_TS,
                labelContactUsTitleTs: valueLabels.LABEL_FORM_CONTACT_US_TS,
                labelSendButton: valueLabels.LABEL_SEND,
                labelMessage: valueLabels.LABEL_CONTACT_US_MESSAGE,
                labelName: valueLabels.LABEL_CONTACT_US_NAME,
                labelEmail: valueLabels.LABEL_CONTACT_US_EMAIL,
                labelMobileNumber: valueLabels.LABEL_CONTACT_US_PHONE_NUMBER,
                labelTitleSocial: valueLabels.LABEL_CONTACT_US_SOCIAL,
                show: true,
                zoom: 16,
                center: latLng(35.703124, 51.420290),
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                    '&copy; <a href="http://osm.org/copyright"></a> contributors',
                withPopup: latLng(35.703124, 51.420290),
                withTooltip: latLng(35.703124, 51.420290),
                currentZoom: 15,
                currentCenter: latLng(35.703124, 51.420290),
                showParagraph: false,
                mapOptions: {
                    zoomSnap: 0.7
                },
                showMap: true
            };
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.CONTACT_US_PAGE.title},
                {property: 'og:description', content: metaTags.CONTACT_US_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com/contact-us"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/contact-us'}
            ],
        },
        computed: {
            ...mapGetters([
                'getShowMessageContactUs',
                'getMessageContactUs',
                'getDismissSecs',
                'getDismissCountDown',
                'getColorMessage'
            ])
        },
        methods: {
            handleEmail(email) {
                alert(a)
            },
            handlePhone(phone) {
                alert(a)
            },
            handleName(name) {
                alert(a)
            },
            handleMessage(msg) {
                alert(a)
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            emptyForms() {
                this.contactUsName = ""
                this.contactUsEmail = ""
                this.contactUsMobile = ""
                this.contactUsMessage = ""
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewContactUsStyle";
</style>
