<template>
    <div id="item-progress-bar">
        <b-container class="progress-container-el"
            data-aos="fade-up"
            data-aos-offset= "300"
            data-aos-duration= "1000"
            data-aos-easing= "ease-in-sine"
            data-aos-once= "false"
            data-aos-mirror= "false">
            <div class="progress-bar-bg"></div>
            <b-row align-h="end" class="nav-ctrls">
                <b-col class="container-prev" cols="1"><a :href= "prevLink"><span>&#60</span>قبلی</a></b-col>
                <b-col class="container-next" cols="1" offset="1"><a :href= "nextLink">بعدی<span>&#62</span></a></b-col>
            </b-row>
            <b-row>
                <!-- <VueScrollProgress></VueScrollProgress> -->
            </b-row>
        </b-container>
    </div>
</template>

<script>
    // import VueScrollProgress from 'vue-scroll-progress'
    // import Vue from 'vue'
    // Vue.use(VueScrollProgress)
    export default {
        name: 'ItemProgressBar',
        props: {
            prevLink: String,
            nextLink: String,
        },
        data() {
            return {
                
            }
        }
        // components: {AppCollaps, AppTitle, TitleFooter, BackToTop, ItemLinkFooter},
        // watch: {
        //     visibleOffset(newVal, oldVal) {
        //         document.body.style.height = (parseInt(newVal) + 2000) + 'px';
        //     }
        // },
        // methods: {
        //     scrolled() {
        //         console.log('Scrolled !')
        //     },
        //     scrollFn: function (eventObject) {
        //         let diff = this.scrollHeight - window.pageYOffset;
        //         this.isBackTopFooter = diff < (this.scrollIndentBackTop - 40 - 15);
        //     }
        // },
        // mounted() {
        //     this.scrollHeight = Math.max(
        //         document.body.scrollHeight, document.documentElement.scrollHeight,
        //         document.body.offsetHeight, document.documentElement.offsetHeight,
        //         document.body.clientHeight, document.documentElement.clientHeight
        //     ) - window.innerHeight;
        //     this.scrollIndentBackTop = document.getElementsByClassName('footer')[0].clientHeight / 2;
        // },
    }
</script>
<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemProgressBarStyle.scss";
</style>
