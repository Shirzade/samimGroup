<template>
    <div id="item-small-slider">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-img
                            :src="require('../../assets/img/small-banner/'+ this.image)" fluid   :alt=sliderText></b-img>
                    <app-title :title=slideTitle classStyle="item-small-title-slider"></app-title>
                    <p class="text-center">
                        {{sliderText}}
                    </p>
                    <app-button
                            :titleButton=labelMoreInformationButton
                            classButton="item-small-button"
                            :pageLink= moreLinkAddress></app-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import AppTitle from "../titles/AppTitle";
    import AppButton from "../buttons/AppButton";
    import {valueLabels} from "../../utils/labels";

    export default {
        name: "ItemSmallSlider",
        data() {
            return {
                labelMoreInformationButton: valueLabels.LABEL_SMALL_SLIDER_MORE_INFORMATION_E,
                moreLinkAddress: 'products/' + this.moreLink + '/1'
            }
        },
        components: {AppButton, AppTitle},
        props: {
            slideTitle: String,
            sliderText: String,
            image: String,
            moreLink: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemSmallSliderStyle";
</style>
