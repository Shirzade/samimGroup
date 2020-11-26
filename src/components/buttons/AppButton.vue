<template>
    <div id="app-button">
        <b-button :class="classButton" @click=navigate(pageLink) @click.middle=navigate(pageLink)>
            <span v-if="!getShowLoadingLogin || !showLoading">
                    {{titleButton}}
                </span>
                 <span v-if="showLoading">
                    <b-spinner v-if="getShowLoadingLogin" small label="Small Spinner"></b-spinner>
                </span>
               <span v-if="iconButton" class="buttonIconStyle">
                    <font-awesome-icon :icon="iconButton"/>
                </span>
        </b-button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {api} from "../../utils/api";
    import axios from 'axios';

    export default {
        name: "AppButton",
        data() {
            return {
                show: false
            }
        },
        props: {
            parentCategory: String,
            titleButton: String,
            classButton: String,
            iconButton: Boolean,
            showLoading: Boolean,
            pageLink: String,
            postId: String,
            postTitle: String,
            postUrl: String,
            postDate: String,
            siteKey: String,
            categoryId: String,
            categoryName: String,
            loginMobile: String,
            loginCodeNumber: String,
            contactUsName: String,
            contactUsPhone: String,
            contactUsEmail: String,
            contactUsMessage: String,
            loginFormEmail: String,
            loginFormPassword: String,
            loginRecaptchaToken: String,
            searchText: String,
            codeNumber: String,
            parentCategoryId:String
        },
        computed: {
            ...mapGetters([
                'getShowLoadingLogin',
                'getUserName',
                'getPassword',
                'getFailureLogin',
                'getRecaptchaToken',
                'getMobileNumber'
            ])
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            ...mapActions([
                'addProductFilter',
                'setAllowToLogin',
                'setFailureLogin',
                'setShowErrorVerifyCode',
                'setMessageErrorVerifyCode',
                'changeNumberPage',
                'showPaginationButton',
                'setContactUsForm',
                'setLoginForm',
                'setShowIcon',
                'setColorErrorAuth',
                'setLoadingLogin',
                'doSearch',
                'setVerifyCodeFlag',
                'getListProducts',
                'setBreadcrumbItemsProductsPage'
            ]),


            verificationCode(mobile, verifyCode, userName, password) {

                this.setAllowToLogin(true)
                let data = {
                    jsonrpc: '2.0',
                    method: 'call',
                    params: {
                        "verifycode": verifyCode,
                        "mobile": mobile
                    },
                    id: '382893928'
                };
                axios.post(api.API_VERIFICATION, data).then((res) => {
                    if (res.data.result.result) {
                        this.setLoadingLogin(false)
                        this.setVerifyCodeFlag(true)
                        this.setShowIcon(true)
                        let data = {
                            jsonrpc: '2.0',
                            method: 'call',
                            params: {
                                "db": api.DATA_BASE_NAME,
                                "login": userName,
                                "password": password,
                                "g-recaptcha-response": ""
                            },
                            id: '382893928'
                        };
                        axios.post(api.API_LOGIN, data).then((res) => {
                            if (res.data.result.status == "Ok") {
                                this.setShowErrorVerifyCode(false)
                                window.$cookies.set("user_session", res.data.result.session_id)
                                location.href = '/web'
                            }
                        })
                            .catch((err) => {
                                console.log(err)
                            })
                    } else {
                        this.setFailureLogin(1)
                        if (this.getFailureLogin >= 3) {
                            // this.setVerifyCodeFlag(false)
                            this.setLoadingLogin(false)
                            // this.setShowIcon(true)
                            // this.setColorErrorAuth('danger')
                            // this.setShowErrorVerifyCode(true)
                            this.$router.push({name: 'login'})
                        } else {
                            this.setVerifyCodeFlag(false)
                            this.setLoadingLogin(false)
                            this.setShowIcon(true)
                            this.setColorErrorAuth('danger')
                            this.setMessageErrorVerifyCode("کد اعتبار سنجی وارد شده اشتباه می باشد ")
                            this.setShowErrorVerifyCode(true)
                        }
                    }
                })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            navigate(page) {
                switch (page) {
                    case "products": {
                        this.changeNumberPage(1)
                        this.getListProducts({page: 1, category: 'all', categoryName: ""})
                        this.setBreadcrumbItemsProductsPage({parentCategory: "", categoryName: ""})
                        this.$router.push({name: 'products', params: {cat: 'all', page: '1', title: this.cleanUrl('همه محصولات') }})
                    }
                        break
                    case "productsMenu": {
                        this.changeNumberPage(1)
                        this.getListProducts({page: 1, category: this.categoryId, categoryName: this.categoryName})
                        this.setBreadcrumbItemsProductsPage({
                            parentCategory: this.parentCategory,
                            categoryName: this.categoryName,
                            parentCategoryId:this.parentCategoryId,
                            categoryId:this.categoryId
                        })

                        this.$router.push({name: 'products', params: {cat: this.categoryId, page: '1', title: this.cleanUrl(this.categoryName)}})
                    }
                        break
                    case "backEnd":
                        location.href = '/web'
                        break
                    case "singleBlog": {
                        this.scrollToTop()

                        if (this.postUrl) {
                            this.setContentBlogType("SEO")
                            this.$router.push({name: 'singleBlog', params: {id: this.postUrl, title: this.postTitle}})
                        } else {
                            this.setContentBlogType("TITLE")
                            this.$router.push({name: 'singleBlog', params: {id: this.postId, title: this.postTitle}})
                        }
                    }
                        break
                    case "blog": {
                        this.scrollToTop()
                        this.$router.push({name: 'blog', params: {tag: 'noTag', page: '1'}})
                    }
                        break
                    case "contact-us": {
                        this.$router.push('/contact-us')
                        this.setContactUsForm({
                            name: this.contactUsName,
                            email: this.contactUsEmail,
                            mobile: this.contactUsPhone,
                            message: this.contactUsMessage
                        })
                    }
                        break
                    case "solution-bit-caster": {
                        location.href = 'https://res.cloudinary.com/samimco/image/upload/catalog98-fa/SAMIM-BitCaster.pdf'
                    }
                        break
                    case "two-authentication": {
                        if (this.loginFormEmail == "")
                            this.$router.push({name: 'login'})
                        if (this.loginCodeNumber == "") {
                            this.setShowErrorVerifyCode(true)
                            this.setVerifyCodeFlag(false)
                            this.setLoadingLogin(false)
                            this.setShowIcon(true)
                        } else {
                            this.setLoadingLogin(true)
                            this.verificationCode(this.loginMobile, this.loginCodeNumber, this.loginFormEmail, this.loginFormPassword)
                        }
                    }
                        break
                    case "solution-imam": {
                        location.href = 'https://res.cloudinary.com/samimco/image/upload/catalog98-fa/SAMIM-iMAM.pdf'
                    }
                        break
                    case "solution-ip-gateway": {
                        location.href = 'https://res.cloudinary.com/samimco/image/upload/catalog98-fa/SAMIM-Over-IP-web.pdf'
                    }
                        break
                    case "solution-smart-caster": {
                        location.href = 'https://res.cloudinary.com/samimco/image/upload/catalog98-fa/SAMIM-SmartCast-Manager.pdf'
                    }
                        break;
                    case "result-search": {
                        if (this.searchText != "") {
                            this.doSearch(this.searchText)
                            this.$router.push({name: 'resultSearch'})
                        }
                    }
                        break
                    default :
                        this.$router.push('/' + page)
                }
            },
            parsePersianNumberToEnglish(numberInput) {
                var number = numberInput
                number = number
                    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                        return d.charCodeAt(0) - 1632
                    })
                    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                        return d.charCodeAt(0) - 1776
                    })
                return number
            },
              cleanUrl(title) {
             return title.replace(/ /g, '-')      
            },
        }
        ,
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/buttonStyles";
</style>
