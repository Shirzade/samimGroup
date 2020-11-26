<template>
    <b-col id="item-download-link-for-image" cols="6" md="6" lg="3">
        <b-row class="p-md-2 p-2">
            <b-col cols="12" class="p-1" @mouseenter=showOverlaySection :class=styleClassContainer>
                <!--<app-title :title=title classStyle="item-our-solution"></app-title>-->
                <transition name="slide-fade">
                    <div v-if="show" @mouseleave=hideOverlaySection class="overlay-box">
                        <div class="title">
                            <mq-layout mq="sm">
                                <app-title :title=title classStyle="overlay-style-small"></app-title>
                            </mq-layout>
                            <mq-layout :mq="['md', 'lg']">
                                <app-title :title=title classStyle="overlay-style"></app-title>
                            </mq-layout>
                        </div>
                        <div class="text">
                            <app-title :title=text classStyle="overlay-style"></app-title>
                        </div>
                        <div class="button">
                            <app-button
                                    :pageLink=link
                                    titleButton="دانلود"
                                    :classButton=styleClassButton></app-button>
                        </div>
                    </div>
                </transition>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    import AppTitle from "../titles/AppTitle";
    import AppButton from "../buttons/AppButton";

    export default {
        name: "ItemOurSolution",
        data() {
            return {
                overlaySectionClass: "overlay-box-none-display",
                show: false,
                styleClassButton: 'more-button-our-solution',
                styleClassContainer: ''
            }
        },
        components: {AppButton, AppTitle},
        props: {
            classStyle: String,
            title: String,
            text: String,
            link: String
        },
        methods: {
            showOverlaySection() {
                this.show = true
            },
            hideOverlaySection() {
                this.show = false
            }
        },
        created() {
            if (this.$mq === 'sm') {
                this.styleClassButton = "more-button-our-solution-small"
                this.styleClassContainer = this.classStyle + "-small"
            } else {
                this.styleClassButton = "more-button-our-solution"
                this.styleClassContainer = this.classStyle
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemOurSolutionStyle";

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 2.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        /*transform: translateY(5px);*/
        opacity: 0;
    }
</style>
