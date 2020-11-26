<template>
    <div id="tab-solutions-page">
        <div class="wrapper">
            <b-row>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs first-tab">
                    <div class="not-active" :class="{ active:firstIsActive}" @click="navigate('bit-caster')">
                        {{labelMenuSolution4}}
                    </div>
                </b-col>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs">
                    <div class="not-active" :class="{ active:secondIsActive }" @click="navigate('ip-gateway')">
                        {{labelMenuSolution3}}
                    </div>
                </b-col>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs">
                    <div class="not-active" :class="{ active:thirdIsActive }" @click="navigate('smart-cast-manager')">
                        {{labelMenuSolution2}}
                    </div>
                </b-col>
                <b-col cols="12" md="3" lg="3" class="container-title-tabs last-tab">
                    <div class="not-active" :class="{ active:fourthIsActive }" @click="navigate('imam')">
                        {{labelMenuSolution1}}
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import {valueLabels} from '../../utils/labels'

    export default {
        name: "AppTabSolutionsPage",
        data() {
            return {
                imam:"",
                ipGateway:'ipGateway',
                labelMenuSolution1: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_1,
                labelMenuSolution2: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_2,
                labelMenuSolution3: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_3,
                labelMenuSolution4: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_4,
            }
        },
        props:{
            firstIsActive: false,
            secondIsActive: false,
            thirdIsActive: false,
            fourthIsActive: false,
        },
        methods: {
            navigate(page) {
                this.$router.push('/' + page)
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/tabSolutionsPageStyle";

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
