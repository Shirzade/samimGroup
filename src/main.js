import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BootstrapVue, {BreadcrumbPlugin, CollapsePlugin, EmbedPlugin} from 'bootstrap-vue'
import axios from 'axios'
import VueHead from 'vue-head'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faArrowAltCircleDown,
    faBars,
    faCheck,
    faAngleDown,
    faChevronDown,
    faCircle,
    faSearch,
    faTimes,
    faUser,
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'babel-polyfill'
import VueFullPage from 'vue-fullpage.js'
import Carousel3d from 'vue-carousel-3d';
import VueMq from 'vue-mq'
import PrettyCheckbox from 'pretty-checkbox-vue';
import 'pretty-checkbox/src/pretty-checkbox.scss';
import VuePageTransition from 'vue-page-transition'
import BackToTop from 'vue-backtotop'
import {LMap, LMarker, LTileLayer} from 'vue2-leaflet';
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import AOS from 'aos'
import VueSession from 'vue-session'
import 'aos/dist/aos.css'
// import VRuntimeTemplate from "v-runtime-template"
import PictureSharesheet from 'vue-picture-sharesheet'
import Lightbox from 'vue-easy-lightbox'
// import LightBox from 'vue-image-lightbox'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
import EasySlider from 'vue-easy-slider'
import VueLazyload from 'vue-lazyload'
import Spinner from 'vue-spinkit'
import vueHeadful from 'vue-headful';
import VueCookies from 'vue-cookies'
import VueLocalStorage from 'vue-localstorage'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')


Vue.use(VueLocalStorage)
Vue.use(VueCookies)
Vue.use(Lightbox)
Vue.use(EmbedPlugin)
Vue.component('vue-headful', vueHeadful);
Vue.use(VueLazyload, {
    lazyComponent: true
})

Vue.config.productionTip = false;
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('Spinner', Spinner)
Vue.use(ScrollFixedHeader)
Vue.use(EasySlider)
Vue.use(VueHead)
Vue.use(VueSession)
Vue.use(require('vue-jalali-moment'));
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(VuePageTransition)
Vue.use(Carousel3d);
Vue.use(VueFullPage);
Vue.use(PrettyCheckbox);
Vue.use(BackToTop);

library.add(faUser)
library.add(faEyeSlash)
library.add(faEye)
library.add(faSearch)
library.add(faTimes)
library.add(faBars)
library.add(faChevronDown)
library.add(faArrowAltCircleDown)
library.add(faCheck)
library.add(faCircle)
library.add(faAngleDown)

Vue.use(VueMq, {
    breakpoints: {
        sm: 1000,
        md: 1250,
        lg: Infinity,
    },
    defaultBreakpoint: 'sm'
})
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(BreadcrumbPlugin)
Vue.use(CollapsePlugin)
Vue.config.productionTip = false;
AOS.init({
    once: true,
    mirror: true,
    easing: 'ease-in-sine',
});
Vue.component('picture-sharesheet', PictureSharesheet)
// axios.defaults.baseURL = ''
// axios.defaults.baseURL = 'https://10.1.24.179/'
// axios.defaults.baseURL = 'https://samimgroup.local/'
axios.defaults.baseURL = 'https://www.samimgroup.com/'
axios.defaults.headers.get['Content-Type'] = 'application/json'


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
