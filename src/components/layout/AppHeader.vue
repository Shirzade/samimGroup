<template>
    <div id="app-header">
        <b-container-flouid>
            <scroll-fixed-header :fixed.sync="fixed" :threshold="56" class="fix-menu">
                <div class="wrapper">
                    <mq-layout mq="lg">
                        <b-navbar toggleable="lg" type="dark">
                            <div @click="returnToHome()" class="navbar-brand large">
                                <router-link to="/">
                                    <img src="../../assets/img/ic_header_en.png" alt="گروه صمیم">
                                </router-link>
                            </div>
                            <b-collapse class="container-list-menu" id="nav-collapse" is-nav>
                                <b-navbar-nav class="list-menu">

                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <div class="svg-container" :class="{ active: selectProducts}">
                                                <div @click="navigation('products')">
                                                {{labelMenuProducts}}
                                                <font-awesome-icon icon="angle-down"/>
                                                </div>
                                                 
                                            </div>
                                        </div>
                                        <div class="dropdown-content"
                                             @mouseover='selectMenu("PRODUCTS")'
                                             @mouseleave='unSelectMenu("PRODUCTS")'>
                                            <div id="sub-content" :key="category.id" v-for="category in getAllCategories">
                                                <div class="dropdown">
                                                    <div @click="showMainCategoryProducts(category.id,category.name,'parent','',category.id)"
                                                         class="">
                                                        <router-link :to="{ path: '/products/' + category.id + '/1'}">
                                                            {{category.name}}
                                                            <img src="../../assets/img/icons/img-sub-menu.png"
                                                                 :alt=category.name :title=category.name>
                                                        </router-link>
                                                    </div>

                                                    <div class="dropdown-content">
                                                        <div class="sub-dropdown"
                                                             :key="subCategory.id"
                                                             @mouseenter="showSubSubMenu(subCategory.id)"
                                                             v-for="subCategory in category.subCategory">
                                                            <div @click="showMainCategoryProducts(subCategory.id,subCategory.name,'parent',category.name,category.id)">
                                                                <router-link
                                                                        :to="{ path: '/products/' + subCategory.id + '/1'}">
                                                                    <div class="container-item-menu">

                                                                        <div class="container-item-menu-title">
                                                                            {{subCategory.name}}
                                                                        </div>
                                                                        <div>
                                                                            <img src="../../assets/img/icons/img-sub-menu.png"
                                                                                 :alt=subCategory.name
                                                                                 :title=subCategory.name>
                                                                        </div>

                                                                    </div>
                                                                </router-link>
                                                            </div>
                                                            <div class="sub-dropdown-content">
                                                                <item-sub-sub-menu
                                                                        :categoryId=subCategory.id
                                                                        :parentCategory=category.name
                                                                        :parentCategoryId=category.id
                                                                        :categoryName=subCategory.name></item-sub-sub-menu>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <div class="svg-container" :class="{ active: selectSolution}">
                                                <div @click="navigation('solutions')">
                                                    {{labelMenuSolution}}
                                                    <font-awesome-icon icon="angle-down"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown-content"
                                             @mouseover='selectMenu("SOLUTION")'
                                             @mouseleave='unSelectMenu("SOLUTION")'>
                                            <router-link to="/سامانه-مدیریت-دارایی-محتوا">{{labelMenuSolution1}}</router-link>
                                            <router-link to="/سامانه-مانیتورینگ-شبکه">{{labelMenuSolution2}}
                                            </router-link>
                                            <router-link to="/گیتوی-IP">{{labelMenuSolution3}}
                                            </router-link>
                                            <router-link to="/استریمر-پهن-باند">{{labelMenuSolution4}}
                                            </router-link>
                                            <router-link to="/تلویزیون-تعاملی-آی-پی-تی-وی">{{labelMenuSolution5}}
                                            </router-link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <div @click="getBlogPosts" @click.middle="getBlogPosts"
                                                 class="svg-container">
                                                <router-link
                                                        :to="{ name: 'blog', params: {page:'1'} }"
                                                        tag="a">
                                                    {{labelMenuBlog}}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <div class="svg-container">
                                                <router-link tag="a" to="/resources">
                                                    {{labelMenuResources}}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <div class="svg-container" :class="{ active: selectAboutUs}">
                                                <div @click="navigation('about')">
                                                    {{labelMenuAboutUS}}
                                                    <font-awesome-icon icon="angle-down"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown-content"
                                             @mouseover='selectMenu("ABOUT")'
                                             @mouseleave='unSelectMenu("ABOUT")'>
                                            <router-link to="/about">{{labelMenuAboutUsSamim}}</router-link>
                                            <router-link to="/group-permissions">{{labelMenuAboutUsPermission}}
                                            </router-link>
                                            <router-link to="/customers">{{labelMenuAboutUsCustomers}}
                                            </router-link>
                                            <router-link to="/achievements">{{labelMenuAboutUsHonors}}
                                            </router-link>
                                        </div>
                                    </div>

                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <div class="svg-container">
                                                <router-link tag="a" to="/contact-us">
                                                    {{labelMenuContactUs}}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-navbar-nav>
                            </b-collapse>
                            <div :class=getClassButtonLogin>
                                <form v-on:submit.prevent="noop">
                                    <input type="text" name="search" v-model=textSearch @keyup="startSearch"
                                            :placeholder=labelPlaceholderSearch>
                                </form>

                                <!-- <form action="" v-on:submit.prevent="noop">
                                    <input type="search" v-model=textSearch @keyup="startSearch"
                                            :placeholder=labelPlaceholderSearch>
                                    <span class="fa fa-search" @click="startSearch"><font-awesome-icon
                                            icon="search"/></span>
                                </form> -->
                            </div>

                            <div class="container-login-button">
                                <div v-if="this.getStateUser">
                                    <div class="container-profile-user">
                                        <div @click=showProfileSectionMethod() class="item-profile">
                                            <div class="container-name">{{getLoginUserName}}</div>
                                            <font-awesome-icon icon="angle-down"/>
                                        </div>
                                        <div v-if=showProfileSection>
                                            <div @click=showProfilePanel() class="item-profile">پنل کارمندان</div>
                                            <div @click=exitFromProfile() class="item-profile">خروج</div>
                                        </div>
                                    </div>
                                </div>
                                <app-button
                                        v-else
                                        pageLink="login"
                                        :titleButton="labelLoginButton"
                                        classButton="login-button"></app-button>
                            </div>
                        </b-navbar>
                    </mq-layout>
                    <mq-layout mq="md">
                        <div class="medium-container">
                            <b-container>
                                <b-row>
                                    <b-col cols="6">
                                        <router-link to="/" class="navbar-brand">
                                            <img @click=hideSubMenu()
                                                 alt="گروه صمیم"
                                                 class="brand-image-medium"
                                                 src="../../assets/img/ic_header_en.png">
                                        </router-link>
                                    </b-col>
                                    <b-col cols="6" class="container-bars">
                                        <form v-on:submit.prevent="noop">
                                            <input type="text" name="search" v-model=textSearch @keyup="startSearch"
                                                    :placeholder=labelPlaceholderSearch>
                                        </form>
                                        <!-- <form action="" v-on:submit.prevent="noop">
                                            <input type="search" v-model=textSearch @keyup="startSearch"
                                                   :placeholder=labelPlaceholderSearch>
                                            <span class="fa fa-search" @click="startSearch"><font-awesome-icon
                                                    icon="search"/></span>
                                        </form> -->
                                        <div v-if=!show @click=showSubMenu()
                                             class="container-menu-medium">
                                            <font-awesome-icon icon="bars"/>
                                        </div>
                                        <div v-if=show @click=hideSubMenu()
                                             class="container-menu-medium">
                                            <font-awesome-icon icon="times"/>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </div>
                    </mq-layout>
                    <mq-layout mq="sm">
                        <div class="small-container">
                            <b-container>
                                <b-row>
                                    <b-col cols="3">
                                        <router-link to="/" class="navbar-brand">
                                            <img @click=hideSubMenu() class="brand-image-small"
                                                 alt="گروه صمیم"
                                                 src="../../assets/img/ic_header_en.png">
                                        </router-link>
                                    </b-col>
                                    <b-col cols="9" class="container-bars">
                                        <form v-on:submit.prevent="noop" class="container-search-small">
                                            <input type="text" name="search" v-model=textSearch @keyup="startSearch"
                                                    :placeholder=labelPlaceholderSearch>
                                        </form>
                                        <!-- <form class="container-search-small" action="" v-on:submit.prevent="noop">
                                            <input type="search" v-model=textSearch @keyup="startSearch"
                                                   :placeholder=labelPlaceholderSearch>
                                            <span class="fa fa-search" @click="startSearch"><font-awesome-icon
                                                    icon="search"/></span>
                                        </form> -->
                                        <div v-if=!show @click=showSubMenu()
                                             class="container-menu-small">
                                            <font-awesome-icon icon="bars"/>
                                        </div>
                                        <div v-if=show @click=hideSubMenu()
                                             class="container-menu-small">
                                            <font-awesome-icon icon="times"/>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </div>
                    </mq-layout>
                </div>
                <!--responsive menu-->
                <mq-layout mq="md">
                    <transition name="slide-fade">
                        <div v-if=show class="container-content-menu_medium">
                            <ul>
                                <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/login">
                                        {{labelLoginButton}}
                                    </router-link>
                                </li>
                                <li>
                                    <app-collaps
                                            iconHeader="menu"
                                            :titleHeader=labelMenuAboutUS
                                            classStyle="menu-small">
                                        <ul @click=hideSubMenu()>
                                            <li>
                                                <router-link tag="div" to="/about">{{labelMenuAboutUsSamim}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/group-permissions">
                                                    {{labelMenuAboutUsPermission}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/customers">
                                                    {{labelMenuAboutUsCustomers}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/achievements">
                                                    {{labelMenuAboutUsHonors}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </app-collaps>
                                </li>
                                <li>
                                    <app-collaps
                                            iconHeader="menu"
                                            :titleHeader=labelMenuProducts
                                            classStyle="menu-small">
                                        <ul @click=hideSubMenu()
                                        :key="category.id"
                                        v-for="category in getAllCategories">
                                            <li @click="showMainCategoryProducts(category.id,category.name,'parent','',category.id)">
                                                <router-link tag="div" to="/products">{{category.name}}</router-link>
                                            </li>
                                        </ul>
                                    </app-collaps>
                                </li>
                                <li>
                                    <app-collaps
                                            iconHeader="menu"
                                            :titleHeader=labelMenuSolution
                                            classStyle="menu-small">
                                        <ul @click=hideSubMenu()>
                                            <li>
                                                <router-link tag="div" to="/سامانه-مدیریت-دارایی-محتوا">
                                                    {{labelMenuSolution1}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/سامانه-مانیتورینگ-شبکه">
                                                    {{labelMenuSolution2}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/گیتوی-IP">{{labelMenuSolution3}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/استریمر-پهن-باند">{{labelMenuSolution4}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/تلویزیون-تعاملی-آی-پی-تی-وی">{{labelMenuSolution5}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </app-collaps>
                                </li>
                                <!--<li @click=hideSubMenu()>-->
                                <!--<router-link tag="div" to="/support">{{labelMenuSupport}}</router-link>-->
                                <!--</li>-->
                                <!-- <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/careers">{{labelMenuCareers}}</router-link>
                                </li> -->
                                <li @click=hideSubMenu()>
                                    <router-link tag="div"
                                                 :to="{ name: 'blog', params: {tag: 'noTag' , page:'1'} }">
                                        {{labelMenuBlog}}
                                    </router-link>
                                </li>
                                <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/resources">{{labelMenuResources}}</router-link>
                                </li>
                                <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/contact-us">{{labelMenuContactUs}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </mq-layout>
                <mq-layout mq="sm">
                    <transition name="slide-fade">
                        <div v-if=show class="container-content-menu_small">
                            <ul>
                                <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/login">
                                        {{labelLoginButton}}
                                    </router-link>
                                </li>
                                <li>
                                    <app-collaps
                                            iconHeader="menu"
                                            :titleHeader=labelMenuAboutUS
                                            classStyle="menu-small">
                                        <ul @click=hideSubMenu()>
                                            <li>
                                                <router-link tag="div" to="/about">{{labelMenuAboutUsSamim}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/group-permissions">
                                                    {{labelMenuAboutUsPermission}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/customers">
                                                    {{labelMenuAboutUsCustomers}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/achievements">
                                                    {{labelMenuAboutUsHonors}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </app-collaps>
                                </li>
                                <li>
                                    <app-collaps
                                            iconHeader="menu"
                                            :titleHeader=labelMenuProducts
                                            classStyle="menu-small">
                                        <ul @click=hideSubMenu()
                                        :key="category.id"
                                         v-for="category in getAllCategories">
                                            <li @click="showMainCategoryProducts(category.id,category.name,'parent','',category.id)">
                                                <router-link tag="div" to="/products">
                                                    {{category.name}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </app-collaps>
                                </li>
                                <li>
                                    <app-collaps
                                            iconHeader="menu"
                                            :titleHeader=labelMenuSolution
                                            classStyle="menu-small">
                                        <ul @click=hideSubMenu()>
                                            <li>
                                                <router-link tag="div" to="/سامانه-مدیریت-دارایی-محتوا">{{labelMenuSolution1}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/سامانه-مانیتورینگ-شبکه">
                                                    {{labelMenuSolution2}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/گیتوی-IP">
                                                    {{labelMenuSolution3}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/استریمر-پهن-باند">{{labelMenuSolution4}}
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link tag="div" to="/تلویزیون-تعاملی-آی-پی-تی-وی">{{labelMenuSolution5}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </app-collaps>
                                    <!--<router-link tag="div" to="/support">{{labelMenuSolution}}</router-link>-->
                                </li>
                                <!--<li @click=hideSubMenu()>-->
                                <!--<router-link tag="div" to="/support">{{labelMenuSupport}}</router-link>-->
                                <!--</li>-->
                                <!-- <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/careers">{{labelMenuCareers}}</router-link>
                                </li> -->
                                <li @click=hideSubMenu()>
                                    <router-link tag="div"
                                                 :to="{ name: 'blog', params: {tag: 'noTag' , page:'1'} }">
                                        {{labelMenuBlog}}
                                    </router-link>
                                </li>
                                <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/resources">{{labelMenuResources}}</router-link>
                                </li>
                                <li @click=hideSubMenu()>
                                    <router-link tag="div" to="/contact-us">{{labelMenuContactUs}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </mq-layout>
            </scroll-fixed-header>
        </b-container-flouid>
    </div>
</template>

<script>

import { valueLabels } from '../../utils/labels'
import AppButton from '../buttons/AppButton'
import AppTitle from '../titles/AppTitle'
import ItemSubSubMenu from '../items/ItemSubSubMenu'
import AppCollaps from './AppCollaps'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import { api } from '../../../src/utils/api'

export default {
  name: 'AppHeader',
  components: { AppCollaps, ItemSubSubMenu, AppTitle, AppButton },
  data () {
    return {
      showProfileSection: false,
      fixed: false,
      classButtonLogin: 'container-search-log-out',
      show: false,
      session_id: '',
      textSearch: '',
      selectProducts: false,
      selectSolution: false,
      selectAboutUs: false,
      labelChangeLanguageFarsi: valueLabels.LABEL_HEADER_CHANGE_LANGUAGE,
      labelLoginButton: valueLabels.LABEL_HEADER_LOGIN_EN,
      labelMenuSupport: valueLabels.LABEL_LINK_FOOTER_SUPPORT_FA,
      labelMenuSolution: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_FA,
      labelMenuSolution1: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_1,
      labelMenuSolution2: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_2,
      labelMenuSolution3: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_3,
      labelMenuSolution4: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_4,
      labelMenuSolution5: valueLabels.LABEL_LINK_FOOTER_SOLUTIONS_5,
      labelMenuAboutUS: valueLabels.LABEL_LINK_FOOTER_ABOUT_US_FA,
      labelMenuResources: valueLabels.LABEL_LINK_FOOTER_RESOURCES_FA,
      labelMenuProducts: valueLabels.LABEL_LINK_FOOTER_PRODUCTS_FA,
      labelMenuContactUs: valueLabels.LABEL_LINK_FOOTER_CONTACT_US_FA,
      labelMenuCareers: valueLabels.LABEL_LINK_FOOTER_CAREERS_FA,
      labelMenuBlog: valueLabels.LABEL_LINK_FOOTER_BLOG_FA,
      labelSubMenuAboutUsPermission: valueLabels.LABEL_HEADER_ABOUT_US_PERMISSION_EN,
      labelSubMenuAboutUsCustomers: valueLabels.LABEL_HEADER_ABOUT_US_CUSTOMERS_EN,
      labelSubMenuAboutUsHonors: valueLabels.LABEL_HEADER_ABOUT_US_HONORS_EN,
      labelMenuAboutUsSamim: valueLabels.LABEL_LINK_FOOTER_ABOUT_US_FA_SAMIM,
      labelMenuAboutUsPermission: valueLabels.LABEL_LINK_FOOTER_ABOUT_US_PERMISSIONS,
      labelMenuAboutUsCustomers: valueLabels.LABEL_LINK_FOOTER_ABOUT_US_CUSTOMERS,
      labelMenuAboutUsHonors: valueLabels.LABEL_ACHIEVEMENTS_PAGE_MAIN_TITLE,
      labelPlaceholderSearch: valueLabels.LABEL_SEARCH_PLACEHOLDER
    }
  },
  methods: {

    navigation(page){
        switch(page){
        case 'about':
            this.$router.push({ name: 'about'})
        break
        case 'solutions':
           this.$router.push({ name: 'imam'})
        break
        case 'products':{
              this.changeNumberPage(1)
              this.getListProducts({page: 1, category: 'all', categoryName: ""})
              this.$router.push({name: 'products', params: {cat: 'all', page: '1', title: this.cleanUrl('همه محصولات')}})
        }      
        break
        }  
    },

    returnToHome () {
      this.$router.push({ name: 'home' })
      this.$router.go()
    },

    showMainCategoryProducts (cat, categoryName, type, parent, parentId) {
      this.setBreadcrumbItemsProductsPage({ parentCategory: parent,
        categoryId: cat,
        parentCategoryId: parentId,
        categoryName: categoryName })
      this.getListProducts({
        page: 1,
        category: cat,
        categoryName: categoryName,
        type: type,
        parentCategory: parent
      })
      this.$router.push({ name: 'products', params: { cat: cat, page: '1',title: this.cleanUrl(categoryName) } })
      this.showPaginationButton(false)
    },
    startSearch () {
      if (this.textSearch != '') {
        this.doSearch(this.textSearch)
        this.$router.push({ name: 'resultSearch' })
      }
    },
    showSubSubMenu (subCategoryId) {
      this.setSubCategoryProducts({ categuryId: subCategoryId, count: 3 })
    },
    getBlogPosts () {
      this.getPostsBlog({ numberPost: 10, page: 1 })
    },
    filterProducts (cat) {
      this.emptyFilter()
      this.addProductFilter(cat)
      // this.showPaginationButton(false)
    },
    showSubMenu () {
      this.show = true
    },
    hideSubMenu () {
      this.show = false
    },
    noop () {
      // do nothing
    },
    ...mapActions([
      'addProductFilter',
      'emptyFilter',
      'getPostsBlog',
      'setClassButtonLogin',
      'getListProducts',
      'setSubCategoryProducts',
      'showPaginationButton',
      'changeNumberPage',
      // 'setShowSearchBox',
      'setBreadcrumbItemsProductsPage',
      'checkUserIsLogin',
      'doSearch'
    ]),
    selectMenu (menu) {
      switch (menu) {
        case 'PRODUCTS':
          this.selectProducts = true
          break
        case 'SOLUTION':
          this.selectSolution = true
          break
        case 'ABOUT':
          this.selectAboutUs = true
          break
      }
    },
    unSelectMenu (menu) {
      switch (menu) {
        case 'PRODUCTS':
          this.selectProducts = false
          break
        case 'SOLUTION':
          this.selectSolution = false
          break
        case 'ABOUT':
          this.selectAboutUs = false
          break
      }
    },
    showProfileSectionMethod () {
      if (this.showProfileSection) { this.showProfileSection = false } else { this.showProfileSection = true }
    },
    showProfilePanel () {
      location.href = '/web'
    },
    exitFromProfile () {
      let data = {
        jsonrpc: '2.0',
        method: 'call',
        params: {},
        id: '382893928'
      }
      axios.post(api.API_LOGOUT, data).then((res) => {
        console.log(res)
        if (res.data.result.log_out == 'ok') {
          let cookies = document.cookie.split(';')
          for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i]
            let eqPos = cookie.indexOf('=')
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
          }
          this.setClassButtonLogin('container-search-log-out')
          this.$router.push({ name: 'home' })
          this.$router.go()
        }
      })
        .catch((err) => {
          console.log(err)
        })
    },
    cleanUrl(title) {
             return title.replace(/ /g, '-')      
            },
  },
  computed: {
    ...mapGetters([
      // 'getShowSearchBox',
      'getStateUser',
      'getAllCategories',
      'getClassButtonLogin',
      'getLoginUserName'
    ])
  },
  created () {
    if (this.$cookies.get('user_session') == null) {
      this.checkUserIsLogin('')
      this.setClassButtonLogin('container-search-log-out')
    } else {
      this.setClassButtonLogin('container-search')
      this.checkUserIsLogin(this.$cookies.get('user_session'))
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/headerStyle";

    .container-item-menu {
        display: flex;
    }

    .container-item-menu-title {
        flex: 1;
    }

    .slide-fade-enter-active {
        transition: all .5s ease;
    }

    .slide-fade-leave-active {
        transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateY(-15px);
        opacity: 0;
    }

    .dropbtn, .dropbtn a {
        background-color: $color-bg-menu;
        color: white;
        cursor: pointer;
        font-family: IRANSans;
        font-size: 16px;
        border: none;

        &:hover {
            text-decoration: none;
        }
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        padding: 10px;
        position: absolute;
        background-color: $color-sub-primary;
        min-width: 250px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        top: 58px;
        direction: rtl;
        right: 0;
    }

    .dropdown-content a {
        color: $color-white;
        padding: 5px 16px;
        text-decoration: none;
        display: block;
        font-family: IRANSans;
        text-align: right;
        border-bottom: 1px solid $color-white-level-4;

    }

    .dropdown-content a:hover {
        background-color: $color-white-level-4;
    }

    .dropdown-content a :focus .dropdown-content {
        display: none;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown:focus .dropdown-content {
        display: none;
    }

    .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 400px;
        transition: all 0.8s ease-out 0s;
        stroke-width: 3px;
    }

    .dropbtn:hover .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 0px;
    }

    .dropdown:hover .button-outline {
        stroke-dasharray: 400px;
        stroke-dashoffset: 0px;
    }

    #sub-content {
        .dropbtn {
            background-color: $color-sub-primary;
            color: white;
            padding: 5px 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            border-bottom: 1px solid $color-white-level-4;
        }

        .dropdown {
            position: relative;
            width: 100%;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: $color-sub-primary;
            min-width: 228px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            right: 100%;
            top: -10px;
        }

        .dropdown-content a {
            color: $color-white;
            padding: 5px 16px;
            text-decoration: none;
            display: block;
            font-family: IRANSans;
            text-align: right;
        }

        .dropdown-content a:hover {
            background-color: $color-white-level-4
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        img {
            float: left;
        }
    }

    .sub-dropbtn {
        background-color: $color-sub-primary;
        color: white;
        padding: 5px 16px;
        font-size: 14px;
        border: none;
        cursor: pointer;
        border-bottom: 1px solid $color-white-level-4;
    }

    .sub-dropdown {
        position: relative;
        width: 100%;
        display: inline-block;
    }

    .sub-dropdown-content {
        display: none;
        position: absolute;
        background-color: $color-sub-sub-primary;
        min-width: 228px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        right: 100%;
        padding: 15px;
        top: -11px;
    }

    .sub-dropdown-content a {
        color: $color-white;
        padding: 5px 16px;
        text-decoration: none;
        display: block;
        font-family: IRANSans;
        text-align: right;
        direction: rtl;
    }

    .sub-dropdown-content a:hover {
        background-color: $color-white-level-4
    }

    .sub-dropdown:hover .sub-dropdown-content {
        display: block;
    }

    .sub-dropdown:hover .sub-dropbtn {
        background-color: $color-white-level-4;
    }

    .dropdown:hover .dropbtn {
        background-color: $color-bg-menu;
    }

    *, *:after, *:before {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .svg-container:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 3px;
        left: 0;
        background: $color-selected-li;
        visibility: hidden;
        border-radius: 1px;
        transform: scaleX(0);
        transition: .25s linear;
    }

    .dropdown-content:hover .svg-container:after, .svg-container:hover:after, .svg-container.active:after {
        visibility: visible;
        transform: scaleX(1);
    }

    .fix-menu {
        background: $color-bg-menu;
    }

    .text-rtl {
        direction: ltr;
    }
</style>
