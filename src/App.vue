<template>
    <div id="app">
        <app-header></app-header>

            <router-view></router-view>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from "./components/layout/AppHeader";
    import AppFooter from "./components/layout/AppFooter";

    export default {
        name: 'App',
        components: {AppFooter, AppHeader},
    }
</script>

<style lang="scss">
    @import "assets/styles/views/viewMainComponent";

    .fade-enter-active {
        transition-duration: 0.8s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-leave-active {
        transition-duration: 0.0s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    #app {
        text-align: center;
        color:$color-black-2;
        .wrapper {
            @media screen and (min-width: 1701px) {
                width: 75%;
                @include padding(0px, 15px, 15px, 0px);
            }
            @media screen and (max-width: 1700px) {
                width: 85%;
            }
            @media screen and (max-width: 1550px) {
                width: 90%;
            }
            @media screen and (max-width: 1250px) {
                width: 95%;
            }
            @include margin(0px, auto, auto, 0px);
            direction: rtl;
        }

        .internal-wrapper {
            @media screen and (min-width: 1701px) {
                width: 75%;
            }
            @media screen and (max-width: 1700px) {
                width: 85%;
            }
            @media screen and (max-width: 1550px) {
                width: 90%;
            }
            @media screen and (max-width: 1250px) {
                width: 95%;
            }
            @include margin(0px, auto, auto, 0px);
            direction: rtl;
        }
        .font-roboto{
            font-family: Roboto !important;
        }
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    #menu-products-slider .slider-indicators{
        bottom: 2px!important; 
        // display: none!important;  
    }
    
    .mt50{
        margin-top: 50px;
    }
    .mb50{
        margin-bottom: 50px;
    }
    .pr20{
        padding-right: 20px;
    }
    .mb16{
        margin-bottom: 16px;
    }
    .mt8{
        margin-top: 8px;
    }
</style>
