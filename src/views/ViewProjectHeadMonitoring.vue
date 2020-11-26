<template>
    <b-container-floid id="top-projects">
        <b-row class="title-banner-head-monitoring"/>
        <app-tab-top-project-page :firstIsActive=true></app-tab-top-project-page>

    </b-container-floid>
</template>

<script>
    import AppTabTopProjectPage from "../components/layout/AppTabTopProjectPage";

    export default {
        name: "HeadMonitoring",
        components: {AppTabTopProjectPage}
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewTopProductsStyle";
</style>
