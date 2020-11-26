<template>
    <b-row id="tab-top-project-page">

        <b-col class="container-title-tabs" cols="0" lg="1" md="0">
            <div class="not-active"></div>
        </b-col>
        <b-col cols="12" lg="10" md="12">
            <b-row>
                <b-col class="container-title-tabs" cols="12" lg="4" md="12">
                    <div :class="{ active:secondIsActive }" @click="navigate('بازار-محتوا')" class="not-active">
                        {{labelTopProjectBazarMovtava}}
                    </div>
                </b-col>
                <b-col class="container-title-tabs" cols="12" lg="4" md="12">
                    <div :class="{ active:thirdIsActive }" @click="navigate('سامانه-هوشمند-محاسبه-زمان')" class="not-active">
                        {{labelTopProjectSmartSystem}}
                    </div>
                </b-col>
                <b-col class="container-title-tabs" cols="12" lg="4" md="12">
                    <div :class="{ active:fourthIsActive }" @click="navigate('سیستم-مانیتورینگ-دیداری-شنیداری')" class="not-active">
                        {{labelTopProjectSystemMonitoring}}
                    </div>
                </b-col>
            </b-row>
        </b-col>

        <b-col class="container-title-tabs" cols="0" lg="1" md="0">
            <div class="not-active"></div>
        </b-col>

    </b-row>
</template>

<script>
    import {valueLabels} from '../../utils/labels'

    export default {
        name: "AppTabTopProjectPage",
        data() {
            return {
                imam: "",
                ipGateway: 'ipGateway',
                labelTopProjectSystemMonitoring: valueLabels.LABEL_TOP_PROJECTS_SYSTEM_MONITORING,
                labelTopProjectSmartSystem: valueLabels.LABEL_TOP_PROJECTS_SMART_SYSTEM,
                labelTopProjectBazarMovtava: valueLabels.LABEL_TOP_PROJECTS_BAZAR_MOHTAVA,
                labelTopProjectHeadMonitoring: valueLabels.LABEL_TOP_PROJECTS_HEAD_MONITORING,
            }
        },
        props: {
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
    @import "../../assets/styles/layoutStyles/tabTopProjectPageStyle";

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
