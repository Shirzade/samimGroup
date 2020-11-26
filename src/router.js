import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/ViewHome'
import Customers from './views/ViewCustomers'
import Products from './views/ViewProducts'
import Blog from './views/ViewBlog'
import AboutUs from './views/ViewAboutUs'
import Achievements from './views/ViewAchievements'
import Permissions from './views/ViewPermissions'
import Product from './views/ViewSingleProduct'
import Imam from './views/ViewSolutionImam'
import BitCaster from './views/ViewSolutionBitCaster'
import Iptv from './views/ViewSolutionIptv'
import SmartCastManager from './views/ViewSolutionSmartCastManager'
import IpGateway from './views/ViewSolutionIpGateway'
import Support from './views/ViewSupport'
import ContactUs from './views/ViewContactUs'
import Careers from './views/ViewCareers'
import JobApplyForm from './views/ViewJobForm'
import SingleBlog from './views/ViewSingleBlog'
import BazarMohtava from './views/ViewProjectBazarMohtava'
import MonitoringSystem from './views/ViewProjectMonitoringSystem'
import HeadMonitoring from './views/ViewProjectHeadMonitoring'
import SmartSystem from './views/ViewProjectSmartSystem'
import ResultSearch from './views/ViewResultSearch'
import NotFound from './views/ViewNotFound'
import ViewResources from './views/ViewResources'
import ViewSubBlog from './views/ViewSubBlog'
import SamimWiki from './views/ViewSamimWiki'
import SingleWiki from './views/ViewSingleWiki'
import Authentication from './views/ViewAuthentication'
import SingleBlogById from './views/ViewSingleBlogByID'
// import PreviousProduct from './views/ViewPreviousProduct'

Vue.use(Router);

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/home', name: 'home', component: Home},
        {path: '/about', name: 'about', component: AboutUs},
        {path: '/customers', name: 'customers', component: Customers},
        {path: '/مشتربان', name: 'customers', component: Customers},
        {path: '/products/:cat/:title/:page', name: 'products', component: Products, meta: {transition: 'flip-x'}},
        {path: '/products', redirect: '/products/all/1'},
       
        // {path: '/blog', redirect: '/blog/1'},
        
        // {path: '/blog/1', redirect: '/blog'},
        {path: '/blog', name: 'blog', component: Blog},
         {path: '/blog/:page', name: 'blog-per-page', component: Blog},
        {path: '/blog/samim-wiki-98/page/:page', name: 'samim-wiki', component: SamimWiki},
        {path: '/blog/tag/:tag', name: 'subBlog', component: ViewSubBlog},
        {path: '/achievements', name: 'achievements', component: Achievements},
        {path: '/افتخارات', name: 'achievements', component: Achievements},
        {path: '/group-honors', name: 'achievements', component: Achievements},
        {path: '/group-permissions', name: 'permissions', component: Permissions},
        {path: '/مجوزها', name: 'permissions', component: Permissions},
        {path: '/product/:pid/:title', name: 'product', component: Product},
        // {path: '/shop/product/:pid', name: 'previousProduct', component: PreviousProduct},
        {path: '/imam', redirect: '/سامانه-مدیریت-دارایی-محتوا'},
        {path: '/سامانه-مدیریت-دارایی-محتوا', name: 'imam', component: Imam},
        
        {path: '/ip-gateway',redirect: '/گیتوی-IP'},
        {path: '/گیتوی-IP', name: 'ipGateway', component: IpGateway},

        {path: '/smart-cast-manager',redirect: '/سامانه-مانیتورینگ-شبکه'},
        {path: '/سامانه-مانیتورینگ-شبکه', name: 'SmartCastManager', component: SmartCastManager},


        {path: '/bit-caster',redirect: '/استریمر-پهن-باند'},
        {path: '/استریمر-پهن-باند', name: 'bitCaster', component: BitCaster},


        {path: '/iptv',redirect: '/تلویزیون-تعاملی-آی-پی-تی-وی'},
        {path: '/تلویزیون-تعاملی-آی-پی-تی-وی', name: 'Iptv', component: Iptv},

        {path: '/bazar-mohtava' ,redirect: '/بازار-محتوا'},
        {path: '/بازار-محتوا', name: 'bazarMohtava', component: BazarMohtava},

        {path: '/monitoring-system' ,redirect: '/سیستم-مانیتورینگ-دیداری-شنیداری'},
        {path: '/سیستم-مانیتورینگ-دیداری-شنیداری', name: 'monitoringSystem', component: MonitoringSystem},


        {path: '/head-monitoring', name: 'headMonitoring', component: HeadMonitoring},

        {path: '/smart-system' ,redirect: '/سامانه-هوشمند-محاسبه-زمان'},
        {path: '/سامانه-هوشمند-محاسبه-زمان', name: 'smartSystem', component: SmartSystem},


        {path: '/login', name: 'login', component: Support},
        {path: '/contact-us', name: 'contactUs', component: ContactUs},
        {path: '/contactUs', name: 'contactUs', component: ContactUs},
        {path: '/careers', name: 'careers', component: Careers},
        {path: '/jobApplyForm', name: 'jobApplyForm', component: JobApplyForm},
        {path: '/post/:id', name: 'singleBlog', component: SingleBlog},
        // {path: '/blog/1/post/:id', name: 'SingleBlogById', component: SingleBlogById},
        {path: '/blog/samim-wiki-98/post/:id', name: 'singleWiki', component: SingleWiki},
        {path: '/resultSearch', name: 'resultSearch', component: ResultSearch},
        {path: '*', name: 'notFound', component: NotFound},
        {path: '/singleBlog/:id', name: 'singleBlog', component: SingleBlog},
        {path: '/resources', name: 'resources', component: ViewResources},
        {path: '/authentication', name: 'authentication', component: Authentication},
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({top: document.querySelector(to.hash).offsetTop, behavior: 'smooth'});
        }
        return window.scrollTo({top: 0, behavior: 'smooth'});
    }

})
