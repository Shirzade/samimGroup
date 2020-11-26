import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {api} from '../src/utils/api'
import {valueLabels} from '../src/utils/labels'
import {productsItems} from '../src/utils/productsName'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        containerState: 'show-container',
        currentFilter: [],
        productImages: [],
        allTags: [],
        subCategoryProducts: [],
        allCategories: [],
        productMainImageId: 0,
        productContent: null,
        productMainContent: null,
        productName: '',
        productDescription: '',
        productMetaDescription: '',
        productMetaTitle: '',
        productCleanUrl:'',
        postMetaTitle: '',
        postMetaDescription: '',
        numberPage: 1,
        numberBlogPage: 1,
        categorySelected: '',
        showPagination: false,
        showPaginationBlogFlag: false,
        showLoadingLogin: false,
        contentBlogType: '',
        blogPosts: [],
        blogPostsWiki: [],
        listProducts: [],
        blogPostContent: null,
        blogPostTitle: '',
        blogPostSubTitle: '',
        blogPostId: '',
        blogPostDate: '',
        blogPostTags: [],
        showLoading: true,
        showLoadingBlog: true,
        showMessageContactUs: false,
        showMessageLoginForm: false,
        messageContactUs: '',
        messageLoginForm: '',
        colorMessage: "danger",
        colorMessageLogin: "danger",
        contactUsName: '',
        contactUsEmail: '',
        contactUsMobile: '',
        contactUsMessage: '',
        message: 'dd',
        loginFormStateUsername: null,
        loginFormStatePassword: null,
        totalProducts: 0,
        resultSearchPost: [],
        showResultSearchPost: false,
        resultSearchProduct: [],
        showResultSearchProduct: false,
        showSearchBox: false,
        showReCaptcha: false,
        numberPageBlog: 0,
        messageSearchResult: false,
        breadcrumbItemsProductsPage: [
            {
                text: 'همه محصولات',
                parent:"",
                id: "all"
            }
        ],
        breadcrumbItemsBlogPostPage: [
            {
                text: 'صفحه اصلی',
                to: {name: 'home'}
            },
            {
                text: 'بلاگ',
                to: { name: 'blog', params: {page:'1'} },
                rel: "blog"
            }
        ],
        breadcrumbItemsProductSinglePage:[
            {
                text: 'همه محصولات',
                id:"all",
                parent:"",
                rel: "products"
            }
        ],
        itemCollapseIdShow: '',
        userLogin: false,
        loginUserName: '',
        imageGallery: [],
        showSignsLoginPage: false,
        postBlogTypeId: "1",
        classButtonLogin: "container-search-log-out",
        mobileNumber: '',
        userName: '',
        password: '',
        recaptchaToken: '',
        verifyCodeFlag: false,
        showIcon: false,
        messageErrorVerifyCode: 'کد اعتباری وارد شده اشتباه می باشد',
        showErrorVerifyCode: false,
        colorErrorAuth: 'info',
        failureLogin: 0,
        allowToLogin: true
    },
    getters: {
        getProductCleanUrl:state => {
          return state.productCleanUrl
        },
        getPostMetaTitle: state => {
            return state.postMetaTitle
        },
        getPostMetaDescription: state => {
            return state.postMetaDescription
        },
        getContentBlogType: state => {
            return state.contentBlogType
        },
        getAllowToLogin: state => {
            return state.allowToLogin
        },
        getFailureLogin: state => {
            return state.failureLogin
        },
        getColorErrorAuth: state => {
            return state.colorErrorAuth
        },
        getShowErrorVerifyCode: state => {
            return state.showErrorVerifyCode
        },
        getMessageErrorVerifyCode: state => {
            return state.messageErrorVerifyCode
        },
        getShowIcon: state => {
            return state.showIcon
        },
        getVerifyCodeFlag: state => {
            return state.verifyCodeFlag
        },
        getUserName: state => {
            return state.userName
        },
        getPassword: state => {
            return state.password
        },
        getMobileNumber: state => {
            return state.mobileNumber
        },
        getRecaptchaToken: state => {
            return state.recaptchaToken
        },
        getClassButtonLogin: state => {
            return state.classButtonLogin
        },
        getBlogPostsWiki: state => {
            return state.blogPostsWiki
        },
        getProductMetaDescription: state => {
            return state.productMetaDescription
        },
        getProductMetaTitle: state => {
            return state.productMetaTitle
        },
        getShowSignsLoginPage: state => {
            return state.showSignsLoginPage
        },
        getImageGallery: state => {
            return state.imageGallery
        },
        getStateUser: state => {
            return state.userLogin
        },
        getLoginUserName: state => {
            return state.loginUserName
        },
        getItemCollapseIdShow: state => {
            return state.itemCollapseIdShow
        },
        getLoginFormStateUsername: state => {
            return state.loginFormStateUsername
        },
        getLoginFormStatePassword: state => {
            return state.loginFormStatePassword
        },
        getShowLoadingLogin: state => {
            return state.showLoadingLogin
        },
        getContactUsName: state => {
            return state.contactUsName
        },
        getContactUsEmail: state => {
            return state.contactUsEmail
        },
        getContactUsMobile: state => {
            return state.contactUsMobile
        },
        getContactUsMessage: state => {
            return state.contactUsMessage
        },
        getColorMessage: state => {
            return state.colorMessage
        },
        getShowMessageContactUs: state => {
            return state.showMessageContactUs
        },
        getMessageContactUs: state => {
            return state.messageContactUs
        },
        getMessageLoginForm: state => {
            return state.messageLoginForm
        },
        getContainerState: state => {
            return state.containerState
        },
        getFilter: state => {
            return state.currentFilter
        },
        showPagination: state => {
            return state.showPagination
        },
        getNumberPage: state => {
            return state.numberPage
        },
        getCategorySelected: state => {
            return state.categorySelected
        },
        getBlogPosts: state => {
            return state.blogPosts
        },
        getNumberBlogPage: state => {
            return state.numberBlogPage
        },
        getProducts: state => {
            return state.listProducts
        },
        getProductImages: state => {
            return state.productImages
        },
        getProductContent: state => {
            return state.productContent
        },
        getProductMainContent: state => {
            return state.productMainContent
        },
        getProductName: state => {
            return state.productName
        },
        getProductDescription: state => {
            return state.productDescription
        },
        getProductMainImageId: state => {
            return state.productMainImageId
        },
        showPaginationBlog: state => {
            return state.showPaginationBlogFlag
        },
        getAllTags: state => {
            return state.allTags
        },
        getBlogPostContent: state => {
            return "<div>" + state.blogPostContent + "</div>"
        },
        getBlogPostDate: state => {
            return state.blogPostDate
        },
        getBlogPostTags: state => {
            return state.blogPostTags
        },
        getSubCategoryProducts: state => {
            return state.subCategoryProducts
        },
        getShowLoading: state => {
            return state.showLoading
        },
        getShowLoadingBlog: state => {
            return state.showLoadingBlog
        },
        getShowMessageLoginForm: state => {
            return state.showMessageLoginForm
        },
        getColorMessageLogin: state => {
            return state.colorMessageLogin
        },
        getTotalProducts: state => {
            return state.totalProducts
        },
        getResultSearchPost: state => {
            return state.resultSearchPost
        },
        getResultSearchProduct: state => {
            return state.resultSearchProduct
        },
        getShowResultSearchProduct: state => {
            return state.showResultSearchProduct
        },
        getShowResultSearchPost: state => {
            return state.showResultSearchPost
        },
        getShowSearchBox: state => {
            return state.showSearchBox
        },
        getShowReCaptcha: state => {
            return state.showReCaptcha
        },
        getAllCategories: state => {
            return state.allCategories
        },
        getNumberPageBlog: state => {
            return state.numberPageBlog
        },
        showMessageSearchResult: state => {
            return state.messageSearchResult
        },
        getBlogPostTitle: state => {
            return state.blogPostTitle
        },
        getBlogPostSubTitle: state => {
            return state.blogPostSubTitle
        },
        getBlogPostId: state => {
            return state.blogPostId
        },
        getBreadcrumbItemsProductsPage: state => {
            return state.breadcrumbItemsProductsPage
        },
        getBreadcrumbItemsBlogPostPage:state => {
            return state.breadcrumbItemsBlogPostPage
        },
        getBreadcrumbItemsProductSinglePage:state => {
            return state.breadcrumbItemsProductSinglePage
        }
    },
    mutations: {
        setContentBlogType: (state, payload) => {
            state.contentBlogType = payload
        },
        setAllowToLogin: (state, payload) => {
            state.allowToLogin = payload
        },
        setFailureLogin: (state, payload) => {
            if (payload == 0)
                state.failureLogin = 0
            else
                state.failureLogin += payload
        },
        setColorErrorAuth: (state, payload) => {
            state.colorErrorAuth = payload
        },
        setShowErrorVerifyCode: (state, payload) => {
            state.showErrorVerifyCode = payload
        },
        setMessageErrorVerifyCode: (state, payload) => {
            state.messageErrorVerifyCode = payload
        },
        setShowIcon: (state, payload) => {
            state.showIcon = payload
        },
        setVerifyCodeFlag: (state, payload) => {
            state.verifyCodeFlag = payload
        },
        setLoadingLogin: (state, payload) => {
            state.showLoadingLogin = payload
        },

        verificationCode: (state, payload) => {

        },
        setUserName: (state, payload) => {
            state.userName = payload
        },
        setMobileNumber: (state, payload) => {
            state.mobileNumber = payload
        },
        setPassword: (state, payload) => {
            state.password = payload
        },
        setRecaptchaToken: (state, payload) => {
            state.recaptchaToken = payload
        },
        setClassButtonLogin: (state, payload) => {
            state.classButtonLogin = payload
        },
        changeStateContainer: (state, payload) => {
            state.containerState = payload
        },
        emptyProductFilter: (state) => {
            state.currentFilter = []
        },
        addProductFilter: (state, payload) => {
            let filterProducts = [];
            if (payload == "ALL") {
                let result = chunkArray(state.products, 9);
                state.currentFilter = result[state.numberPage - 1];
                state.categorySelected = 'all'
            } else {
                for (let i = 0; i < state.products.length; i++) {
                    if (state.products[i].category == payload) {
                        filterProducts.push(state.products[i]);
                        state.categorySelected = filterProducts[0].category
                    }
                }
                state.currentFilter = filterProducts
            }

        },
        showPaginationButton: (state, payload) => {
            state.showPagination = payload
        },
        changeNumberPage: (state, payload) => {
            state.numberPage = payload
        },
        getPostBlog: (state, payload) => {
            state.showPaginationBlogFlag = false;
            state.showLoadingBlog = true;
            let link = '';
            state.blogPosts = [];
            if (payload.tag == undefined) {
                link = api.API_HOME_POSTS + state.postBlogTypeId + "/page/" + payload.page;
                state.numberBlogPage = payload.page
            } else {
                link = api.API_HOME_POSTS + state.postBlogTypeId + "/tag/" + payload.tag
            }

            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {
                    "number_post": payload.numberPost
                },
                id: '382893928'
            };
            axios.post(link, data).then((res) => {
                if (payload.tag == undefined) {
                    console.log(res.data.result)
                    state.blogPosts = res.data.result.postsList;
                    state.numberPageBlog = res.data.result.count_page;
                    state.showLoadingBlog = false;
                    state.showPaginationBlogFlag = true
                } else {
                    state.blogPosts = res.data.result.postsList;
                    state.showPaginationBlogFlag = false;
                    state.showLoadingBlog = false
                }
            })
                .catch((err) => {
                    console.log(err)
                })

        },

        getListProducts: (state, payload) => {
            state.showLoading = true;
            state.listProducts = [];
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {},
                id: '382893928'
            };
            if (payload.category == 'all') {
                state.numberPage = payload.page;
                state.categorySelected = "all";
                axios.post(api.API_PRODUCTS + "page/" + payload.page, data).then((res) => {
                    state.showLoading = false;

                    console.log(res.data.result)


                    state.totalProducts = res.data.result.page_count;
                    state.listProducts = res.data.result.products_list;

                    if (res.data.result.page_count > 1)
                        state.showPagination = true;
                    else
                        state.showPagination = false


                }).catch((err) => {
                    console.log(err)
                })
            } else {
                state.categorySelected = payload.category;
                state.numberPage = payload.page;
                axios.post(api.API_PRODUCTS + "category/" + payload.category + "/page/" + payload.page, data).then((res) => {
                    state.showLoading = false;
                    state.totalProducts = res.data.result.page_count;
                    state.listProducts = res.data.result.products_list;

                    if (res.data.result.page_count > 1)
                        state.showPagination = true;
                    else
                        state.showPagination = false;
                    state.listProducts = res.data.result.products_list
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        getProductInformation: (state, payload) => {

            state.productName = '';
            state.productContent = '';
            state.productDescription = '';
            // state.productMainContent = ''
            state.productImages = [];
            state.productMainImageId = 0;
            state.showLoading = true;

            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {},
                id: '382893928'
            };
            axios.post(api.API_INFORMATION_PRODUCT + payload, data).then((res) => {
                let result = res.data.result;
                state.breadcrumbItemsProductSinglePage.splice(1, 2);
                state.breadcrumbItemsProductSinglePage.push(
                    {
                        text:   result.categoryList[0].parent[0].name,
                        id:  result.categoryList[0].parent[0].id,
                        parent:"",
                    }

                )
                state.breadcrumbItemsProductSinglePage.push(

                {
                    text:  result.categoryList[0].name,
                    id: result.categoryList[0].id,
                    parent:result.categoryList[0].parent[0],
                }

                )

                if(result.seo_url_friendly)
                    state.breadcrumbItemsProductSinglePage.push({
                        text:result.seo_url_friendly,
                        parent:{},
                        id:""
                    })
                else
                    state.breadcrumbItemsProductSinglePage.push({
                        text:result.product_description,
                        parent:"",
                        id:""
                    })
                state.productContent = result.products_information_2;
                state.productName = result.product_name;
                state.productCleanUrl = result.seo_url_friendly;
                state.productDescription = result.product_description;
                state.productMetaTitle = result.products_meta_title ? "محصول " + result.products_meta_title + "|  گروه صمیم" : "   محصول  " + result.product_description + " |  گروه صمیم   ";
                state.productMetaDescription = result.products_meta_description ? result.products_meta_description : result.product_name + "فروش محصول :" + result.product_name + "   خریدمحصول : " + result.product_name;
                state.productMainContent = result.products_information;
                state.productImages = result.products_images;
                state.productMainImageId = result.products_images[0].id;
                state.showLoading = false
            })
                .catch((err) => {
                    console.log(err)
                })
        },
        setBlogPostContentPrevious: (state, payload) => {
            state.showLoading = true;
            state.blogPostContent = '';
            state.blogPostTitle = '';
            state.blogPostSubTitle = '';
            state.blogPostId = '';
            console.log(api.API_HOME_POSTS + state.postBlogTypeId + "/post/" + payload)
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {},
                id: '382893928'
            };
            axios.post(api.API_HOME_POSTS + state.postBlogTypeId + "/post/" + payload, data).then((res) => {
                let result = res.data.result;
                console.log(result)
                state.blogPostContent = result.blog_content;
                state.blogPostDate = result.post_date;
                state.postMetaTitle = result.post_meta_title ? result.post_meta_title : result.post_title;
                state.postMetaDescription = result.post_meta_description ? result.post_meta_description : result.post_subtitle;
                state.blogPostTitle = result.post_title;
                state.blogPostId = result.post_id;
                state.blogPostSubTitle = result.post_subtitle;
                state.blogPostTags = result.tags;
                if (result.image_gallery)
                    state.imageGallery = getJsonArrayGallery(result.image_gallery.split("\n"));
                else
                    state.imageGallery = [];
                state.showLoading = false
            })
                .catch((err) => {
                    console.log(err)
                })
        },

        setBlogPostContent: (state, payload) => {
            state.breadcrumbItemsBlogPostPage.splice(2, 2);
            state.showLoading = true;
            state.blogPostContent = '';
            state.blogPostTitle = '';
            state.blogPostSubTitle = '';
            state.blogPostId = '';
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {
                    "blog_url": payload,
                    "content_blog_type": state.contentBlogType
                },
                id: '382893928'
            };
            axios.post(api.API_CONTENT_POST, data).then((res) => {
                let result = res.data.result;

                if (!result.post_title)
                    location.href = '/blog/1'
                else {
                    state.breadcrumbItemsBlogPostPage.push(result.post_title)
                    state.blogPostContent = result.blog_content;
                    state.blogPostDate = result.post_date;
                    state.postMetaTitle = result.post_meta_title ? result.post_meta_title : result.post_title;
                    state.postMetaDescription = result.post_meta_description ? result.post_meta_description : result.post_subtitle;
                    state.blogPostTitle = result.post_title;
                    state.blogPostId = result.post_id;
                    state.blogPostSubTitle = result.post_subtitle;
                    state.blogPostTags = result.tags;
                    if (result.image_gallery)
                        state.imageGallery = getJsonArrayGallery(result.image_gallery.split("\n"));
                    else
                        state.imageGallery = [];
                    state.showLoading = false
                }
            })
                .catch((err) => {
                    console.log(err)
                })
        },

        setProductImages: (state, payload) => {
            state.productImages = payload
        },
        setProductMainImageId: (state, payload) => {
            state.productMainImageId = payload
        },
        setAllTags: (state) => {
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {},
                id: '382893928'
            };
            axios.post(api.API_ALL_TAGS, data).then((res) => {
                state.allTags = res.data.result
            })
                .catch((err) => {
                    console.log(err)
                })
        },
        setContactUsInformation: (state, payload) => {
            state.messageContactUs = "";
            if (verificationInput(payload).length == 0) {
                let data = {
                    jsonrpc: '2.0',
                    method: 'call',
                    params: {
                        "name": payload.name,
                        "phone": payload.mobile,
                        "email_from": payload.email,
                        "description": payload.message
                    },
                    id: '382893928'
                };
                axios.post(api.API_CONTACT_US, data).then((res) => {
                    if (res.data.result.status == "ok") {
                        state.messageContactUs = valueLabels.LABEL_MESSAGE_SUCCESS;
                        state.showMessageContactUs = true;
                        state.colorMessage = "success"
                    }

                })
                    .catch((err) => {
                        console.log(err)
                    });

                state.contactUsName = "";
                state.contactUsEmail = "";
                state.contactUsMobile = "";
                state.contactUsMessage = ""
            } else {
                state.showMessageContactUs = true;
                state.colorMessage = "danger";
                let i;
                for (i = 0; i < verificationInput(payload).length; i++) {
                    state.messageContactUs += verificationInput(payload)[i] + "\n";
                }
            }
        },
        setSubCategoryProducts: (state, payload) => {
            state.subCategoryProducts = [];
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {},
                id: '382893928'
            };
            axios.post(api.API_PRODUCTS + "category/" + payload.categuryId + "/page/" + "1", data).then((res) => {
                state.subCategoryProducts = res.data.result.products_list.slice(0, payload.count)
            }).catch((err) => {
                console.log(err)
            })

        },
        setLoginFormInformation: (state, payload) => {
            state.showLoadingLogin = true;
            if (verificationLoginFormInput(payload).length == 0) {
                state.messageLoginForm = "";
                state.showMessageLoginForm = false;

                let data = {
                    jsonrpc: '2.0',
                    method: 'call',
                    params: {
                        "db": "samim1",
                        "login": payload.email,
                        "password": parsePersianNumberToEnglish(payload.password),
                        "g-recaptcha-response": ""
                    },
                    id: '382893928'
                };
                axios.post(api.API_LOGIN, data).then((res) => {
                    if (res.data.result.status == "Ok") {
                        location.href = '/web'
                    }
                })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                state.messageLoginForm = "";
                state.showMessageLoginForm = true;
                state.colorMessageLogin = "danger";
                state.showLoadingLogin = false;
                let i;
                for (i = 0; i < verificationLoginFormInput(payload).length; i++) {
                    state.messageLoginForm += verificationLoginFormInput(payload)[i] + "\n";
                }

            }
        },
        setNormalStatusForm: (state, payload) => {
            state.showSignsLoginPage = false
        },
        showLoading: (state, payload) => {
            state.showLoading = payload
        },
        setShowSearchBox: (state, payload) => {
            state.showSearchBox = payload
        },
        doSearch: (state, payload) => {
            state.resultSearchPost = [];
            state.messageSearchResult = false;
            state.resultSearchProduct = [];
            state.showLoading = true;
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {
                    "search_text": payload,
                },
                id: '382893928'
            };
            axios.post(api.API_SEARCH, data).then((res) => {
                state.showLoading = false;
                if (res.data.result.post_list.length > 0) {
                    state.resultSearchPost = res.data.result.post_list;
                    state.showResultSearchPost = true;
                    state.showSearchBox = false
                } else {
                    state.messageSearchResult = true;
                    state.resultSearchPost = [];
                    state.showResultSearchPost = false
                }
                if (res.data.result.product_list.length > 0) {
                    state.resultSearchProduct = res.data.result.product_list;
                    state.showResultSearchProduct = true;
                    state.messageSearchResult = false;
                    state.showSearchBox = false
                } else {
                    state.resultSearchProduct = [];
                    state.showResultSearchProduct = false
                }


            })
                .catch((err) => {
                    console.log(err)
                })
        },
        setAllCategories: (state, payload) => {
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {"lang": "fa_IR"},
                id: '382893928'
            };
            axios.post(api.API_LIST_CATEGORIES, data).then((res) => {
                state.allCategories = res.data.result
            })
                .catch((err) => {
                    console.log(err)
                })
        },
        setItemCollapseIdShow: (state, payload) => {
            state.itemCollapseIdShow = payload
        },
        setSelectedCategory: (state, payload) => {
            state.selectedCategory = payload
        },
        setBreadcrumbItemsProductsPage: (state, payload) => {

            state.breadcrumbItemsProductsPage.splice(1, 2);

            if (payload.parentCategory != "")
                state.breadcrumbItemsProductsPage.push({
                    text: payload.parentCategory,
                    id: payload.parentCategoryId
                });

            state.breadcrumbItemsProductsPage.push({
                text: payload.categoryName,
                id: payload.categoryId
            });
        },
        checkUserIsLogin: (state, payload) => {
            let data = {
                jsonrpc: '2.0',
                method: 'call',
                params: {"session_id": payload},
                id: '382893928'
            };
            axios.post(api.API_GET_SESSION, data).then((res) => {
                if (res.data.result.uid != null) {
                    state.loginUserName = res.data.result.name;
                    state.userLogin = true;
                    state.classButtonLogin = "container-search"
                } else {
                    state.userLogin = false;
                    state.classButtonLogin = "container-search-log-out"
                }

            })
                .catch((err) => {
                    console.log(err)
                })
        },
        setPostBlogTypeId: (state, payload) => {
            state.postBlogTypeId = payload
        },
        setEmptyBreadcrumbItemsProductSinglePage:(state)=>{
            state.breadcrumbItemsProductSinglePage.splice(2, 3)
        }
    },
    actions: {
        setContentBlogType: ({commit}, payload) => {
            commit('setContentBlogType', payload)
        },
        setAllowToLogin: ({commit}, payload) => {
            commit('setAllowToLogin', payload)
        },
        setFailureLogin: ({commit}, payload) => {
            commit('setFailureLogin', payload)
        },
        setColorErrorAuth: ({commit}, payload) => {
            commit('setColorErrorAuth', payload)
        },
        setShowIcon: ({commit}, payload) => {
            commit('setShowIcon', payload)
        },

        changeStateContainer: ({commit}, payload) => {
            commit('changeStateContainer', payload)
        },
        emptyFilter: ({commit}) => {
            commit('emptyProductFilter')
        },
        addProductFilter: ({commit}, payload) => {
            commit('addProductFilter', payload)
        },
        showPaginationButton: ({commit}, payload) => {
            commit('showPaginationButton', payload)
        },
        changeNumberPage: ({commit}, payload) => {
            commit('changeNumberPage', payload)
        },
        getPostsBlog: ({commit}, payload) => {
            commit('getPostBlog', payload)
        },
        getPostsBlogByTag: ({commit}, payload) => {
            commit('getPostsBlogByTag', payload)
        },
        getListProducts: ({commit}, payload) => {
            commit('getListProducts', payload)
        },
        setProductImages: ({commit}, payload) => {
            commit('setProductImages', payload)
        },
        getProductInformation: ({commit}, payload) => {
            commit('getProductInformation', payload)
        },
        setProductMainImageId: ({commit}, payload) => {
            commit('setProductMainImageId', payload)
        },
        setAllTags: ({commit}) => {
            commit('setAllTags')
        },
        setBlogPostContent: ({commit}, payload) => {
            commit('setBlogPostContent', payload)
        },
        setContactUsForm: ({commit}, payload) => {
            commit('setContactUsInformation', payload)
        },
        setSubCategoryProducts: ({commit}, payload) => {
            commit('setSubCategoryProducts', payload)
        },
        hideMessageAlert: ({commit}, payload) => {
            commit('hideMessageAlert', payload)
        },
        setLoginForm: ({commit}, payload) => {
            commit('setLoginFormInformation', payload)
        },
        setNormalStatusForm: ({commit}, payload) => {
            commit('setNormalStatusForm', payload)
        },
        showLoading: ({commit}, payload) => {
            commit('showLoading', payload)
        },
        doSearch: ({commit}, payload) => {
            commit('doSearch', payload)
        },
        setShowSearchBox: ({commit}, payload) => {
            commit('setShowSearchBox', payload)
        },
        setAllCategories: ({commit}, payload) => {
            commit('setAllCategories', payload)
        },
        setItemCollapseIdShow: ({commit}, payload) => {
            commit('setItemCollapseIdShow', payload)
        },
        setSelectedCategory: ({commit}, payload) => {
            commit('setSelectedCategory', payload)
        },
        setBreadcrumbItemsProductsPage: ({commit}, payload) => {
            commit('setBreadcrumbItemsProductsPage', payload)
        },
        checkUserIsLogin: ({commit}, payload) => {
            commit('checkUserIsLogin', payload)
        },
        getPostBlogWiki: ({commit}, payload) => {
            commit('getPostBlogWiki', payload)
        },
        setPostBlogTypeId: ({commit}, payload) => {
            commit('setPostBlogTypeId', payload)
        },
        setClassButtonLogin: ({commit}, payload) => {
            commit('setClassButtonLogin', payload)
        },
        setMobileNumber: ({commit}, payload) => {
            commit('setMobileNumber', payload)
        },
        setUserName: ({commit}, payload) => {
            commit('setUserName', payload)
        },
        setPassword: ({commit}, payload) => {
            commit('setPassword', payload)
        },
        setRecaptchaToken: ({commit}, payload) => {
            commit('setRecaptchaToken', payload)
        },
        verificationCode: ({commit}, payload) => {
            commit('verificationCode', payload)
        },
        setLoadingLogin: ({commit}, payload) => {
            commit('setLoadingLogin', payload)
        },
        setVerifyCodeFlag: ({commit}, payload) => {
            commit('setVerifyCodeFlag', payload)
        },
        setMessageErrorVerifyCode: ({commit}, payload) => {
            commit('setMessageErrorVerifyCode', payload)
        },
        setShowErrorVerifyCode: ({commit}, payload) => {
            commit('setShowErrorVerifyCode', payload)
        },
        setBlogPostContentPrevious: ({commit}, payload) => {
            commit('setBlogPostContentPrevious', payload)
        },
        setEmptyBreadcrumbItemsProductSinglePage:({commit})=>{
            commit('setEmptyBreadcrumbItemsProductSinglePage')
        }
    }
})

export function chunkArray(myArray, chunk_size) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        tempArray.push(myChunk);
    }
    return tempArray;
}

//
export function getJsonArrayGallery(imageList) {
    let index = 0;
    let arrayLength = imageList.length;
    let imageGalleryList = [];
    for (index = 0; index < arrayLength; index++) {
        imageGalleryList.push(JSON.parse(imageList[index]));
    }
    return imageGalleryList;
}

// validation login form
export function verificationLoginFormInput(inputs) {
    let errorMessage = [];
    if (inputs.email == "") {
        errorMessage.push(valueLabels.LABEL_ERROR_LOGIN_USERNAME)
    }
    if (inputs.password == "") {
        errorMessage.push(valueLabels.LABEL_ERROR_LOGIN_PASSWORD)
    }
    return errorMessage
}

// validation contact us form
export function verificationInput(inputs) {
    let result = true;
    let errorMessage = [];
    if (inputs.name == "") {
        result = false;
        errorMessage.push(valueLabels.LABEL_ERROR_NAME)
    }
    if (inputs.email == "") {
        result = false;
        errorMessage.push(valueLabels.LABEL_ERROR_EMAIL)
    }
    if (inputs.mobile == "") {
        result = false;
        errorMessage.push(valueLabels.LABEL_ERROR_MOBILE)
    }
    if (inputs.message == "") {
        result = false;
        errorMessage.push(valueLabels.LABEL_ERROR_MESSAGE)
    }
    return errorMessage
}

export function parsePersianNumberToEnglish(numberInput) {
    let number = numberInput;
    number = number
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632
        })
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776
        });
    return number
}


