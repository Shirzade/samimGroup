<template>
    <b-container-flouid v-on:keyup.enter=validateLogin>
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <b-row id="support">
            <b-container>
                <b-row>
                    <b-col cols="12" lg="8" offset-lg="2">
                        <b-container>
                            <b-row>
                                <b-col cols="12 p-3" md="12" lg="6 pt-5" order="12" order-lg="1"
                                       class="container-forms">
                                    <div class="container-message" v-if="showMessageLoginForm">
                                        <b-alert v-model="showDismissibleAlert" :variant=colorMessageLogin
                                                 dismissible>{{messageErrorLogin}}{{messageErrorPassword}}
                                        </b-alert>
                                    </div>
                                    <b-form method="post" @submit.prevent="validate" autocomplete="new-password">
                                        <b-form-group
                                                :label=labelUsernameTitle>
                                            <div class="container-input-password">
                                                <b-form-input
                                                        class="input-password"
                                                        @input="changeForm('Username')"
                                                        v-model=loginFormEmail
                                                        type="text"
                                                        autocomplete="new-password"
                                                        required
                                                ></b-form-input>
                                                <div class="input-icon">
                                                   <span v-if="showCheckLogin">
                                                        <font-awesome-icon
                                                                v-if="loginFormStateUsername"
                                                                style="color: green" icon="check"/>
                                                        <font-awesome-icon
                                                                v-else style="color: #FF0000"
                                                                icon="times"/>
                                                   </span>
                                                </div>
                                            </div>
                                        </b-form-group>
                                        <b-form-group :label=labelPasswordTitle>
                                            <div class="container-input-password">
                                                <b-form-input
                                                        class="input-password"
                                                        @input="changeForm('password')"
                                                        v-model=loginFormPassword
                                                        :type=type
                                                        autocomplete="new-password"
                                                        required></b-form-input>
                                                <div class="input-icon">
                                                   <span v-if="showSignsLoginPage" @click="showPassword">
                                                        <div v-if="showEyeSign">
                                                             <font-awesome-icon v-if="showType" icon="eye-slash"/>
                                                             <font-awesome-icon v-else icon="eye"/>
                                                        </div>
                                                   </span>
                                                    <span v-else>
                                                        <font-awesome-icon
                                                                v-if="loginFormStatePassword"
                                                                style="color: green" icon="check"/>
                                                        <font-awesome-icon
                                                                v-else style="color: #FF0000"
                                                                icon="times"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div v-if=showReCaptcha class="container-captcha">
                                                <vue-recaptcha
                                                        ref="recaptcha"
                                                        @verify="register"
                                                        @expired="onCaptchaExpired"
                                                        sitekey="6LfOPVUUAAAAADzWYnnbtoRj9H_rDO2IehgFa07j"
                                                        :loadRecaptchaScript="true">
                                                </vue-recaptcha>
                                            </div>
                                        </b-form-group>
                                        <div @click="showDismissibleAlert=true">
                                            <div @click="validateLogin(loginFormEmail,loginFormPassword)"
                                                 class="button-login">

                                                <span v-if="showLoading">
                                                    <b-spinner small label="Small Spinner"></b-spinner>
                                                </span>
                                                <span v-else>
                                                     {{this.labelLoginText}}
                                                </span>

                                            </div>
                                        </div>
                                    </b-form>

                                </b-col>
                                <b-col cols="12 pt-4" order="1" order-lg="12" md="12" lg="6" class="container-title">
                                    <app-title :title=labelLoginTitle classStyle="login-page-title"></app-title>
                                    <ul>
                                        <li>{{labelLoginList1}}</li>
                                        <li>{{labelLoginList2}}</li>
                                        <li>{{labelLoginList3}}</li>
                                        <li>{{labelLoginList4}}</li>
                                    </ul>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                </b-row>
            </b-container>
        </b-row>
    </b-container-flouid>
</template>

<script>
    import AppTitle from "../components/titles/AppTitle";
    import {valueLabels} from "../utils/labels"
    import AppButton from "../components/buttons/AppButton";
    import VueRecaptcha from 'vue-recaptcha';
    import {mapActions, mapGetters} from "vuex"
    import {metaTags} from "../utils/metaTages";
    import axios from 'axios';
    import {api} from '../../src/utils/api'

    export default {
        name: "Support",
        components: {AppButton, AppTitle, VueRecaptcha},
        data() {
            return {
                twoAuthentication: false,
                showLoading: false,
                showSignsLoginPage: true,
                showCheckLogin: false,
                showEyeSign: false,
                colorMessageLogin: null,
                showMessageLoginForm: false,
                messageErrorLogin: '',
                messageErrorPassword: '',
                loginFormStateUsername: null,
                loginFormStatePassword: null,
                metaTitle: metaTags.LOGIN_PAGE.title,
                metaDescription: metaTags.LOGIN_PAGE.description,
                dismissSecs: 10,
                type: 'password',
                showType: false,
                dismissCountDown: 0,
                recaptchaToken: '',
                showDismissibleAlert: false,
                showReCaptcha: false,
                loginFormEmail: "",
                loginFormPassword: "",
                labelLoginTitle: valueLabels.LABEL_TEXT_LOGIN_PAGE,
                labelLoginList1: valueLabels.LABEL_TEXT_LOGIN_PAGE_LI_1,
                labelLoginList2: valueLabels.LABEL_TEXT_LOGIN_PAGE_LI_2,
                labelLoginList3: valueLabels.LABEL_TEXT_LOGIN_PAGE_LI_3,
                labelLoginList4: valueLabels.LABEL_TEXT_LOGIN_PAGE_LI_4,
                labelLoginText: valueLabels.LABEL_HEADER_LOGIN_EN,
                labelUsernameTitle: valueLabels.LABEL_TEXT_LOGIN_USERNAME_TITLE,
                labelUsernamePlaceholder: valueLabels.LABEL_TEXT_LOGIN_USERNAME_PLACEHOLDER,
                labelPasswordPlaceholder: valueLabels.LABEL_TEXT_LOGIN_PASS_PLACEHOLDER,
                labelPasswordTitle: valueLabels.LABEL_TEXT_LOGIN_PASSWORD_TITLE,
                labelForgetPasswordTitle: valueLabels.LABEL_TEXT_FORGET_PASSWORD_TITLE,
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],

            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.LOGIN_PAGE.title},
                {property: 'og:description', content: metaTags.LOGIN_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com/login"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/login'}
            ],
        },
        computed: {
            ...mapGetters([
                'getAllowToLogin',
                'getMessageLoginForm',
                'getShowMessageLoginForm',
                'getColorMessageLogin',
                'getLoginFormStateUsername',
                'getLoginFormStatePassword',
                'getShowReCaptcha',
                'getShowSignsLoginPage'
            ])
        },
        methods: {

            validateLogin(username, password) {
                let resultUserName = false
                let resultPassword = false
                this.showLoading = false
                if (username == "") {
                    resultUserName = false
                    this.messageErrorLogin = valueLabels.LABEL_ERROR_LOGIN_USERNAME + "\n"
                } else {
                    resultUserName = true
                    this.messageErrorLogin = ""
                }


                if (password == "") {
                    resultPassword = false
                    this.messageErrorPassword = valueLabels.LABEL_ERROR_LOGIN_PASSWORD
                } else {
                    resultPassword = true
                    this.messageErrorPassword = ""
                }


                if (!(resultPassword && resultUserName)) {
                    this.showMessageLoginForm = true
                    this.colorMessageLogin = "danger"
                } else {
                    this.showMessageLoginForm = false
                    this.getTwoAuthentication()
                }

            },


            loginUserWithoutSms() {
                this.showLoading = true
                let data = {
                    jsonrpc: '2.0',
                    method: 'call',
                    params: {
                        "db": api.DATA_BASE_NAME,
                        "login": this.loginFormEmail.trim(),
                        "password": this.loginFormPassword.trim(),
                        "g-recaptcha-response": this.recaptchaToken
                    },
                    id: '382893928'
                };
                axios.post(api.API_LOGIN, data).then((res) => {
                    if (res.data.result.status == "Error") {
                        this.showLoading = false
                        if (res.data.result.session.failed_attem >= 3) {
                            this.showReCaptcha = true
                            this.messageErrorLogin = valueLabels.LABEL_ERROR_LOGIN_INFORMATION_CAPCHA
                            this.showCheckLogin = true
                            this.colorMessageLogin = "danger"
                            this.showSignsLoginPage = false
                            this.loginFormStatePassword = false
                            this.loginFormStateUsername = false
                            this.showMessageLoginForm = true
                            this.onCaptchaExpired()
                            console.log(res.data.result)
                        }
                    }

                    if (res.data.result.status == "Ok") {
                        this.showLoading = false
                        window.$cookies.set("user_session", res.data.result.session_id)
                        if (res.data.result.session.uid) {
                            if (res.data.result.session.failed_attem >= 3) {
                                this.showCheckLogin = true
                                this.colorMessageLogin = "danger"
                                this.messageErrorLogin = valueLabels.LABEL_ERROR_LOGIN_INFORMATION_CAPCHA
                                this.loginFormStateUsername = false
                                this.loginFormStatePassword = false
                                this.showSignsLoginPage = false
                                this.showMessageLoginForm = true
                                this.showReCaptcha = true
                                this.onCaptchaExpired()
                            }
                            this.showLoading = false
                            this.showCheckLogin = true
                            this.showSignsLoginPage = false
                            this.loginFormStateUsername = true
                            this.loginFormStatePassword = true
                            this.setClassButtonLogin('container-search')
                            location.href = '/web'

                        } else {
                            this.colorMessageLogin = "danger"
                            this.showMessageLoginForm = true
                            this.showCheckLogin = true
                            this.messageErrorLogin = valueLabels.LABEL_ERROR_LOGIN_INFORMATION
                            this.loginFormStateUsername = false
                            this.showSignsLoginPage = false
                            this.loginFormStatePassword = false
                        }

                        console.log(res.data.result)
                    }

                })
            },
            loginUser() {
                this.showLoading = true

                let data = {
                    jsonrpc: '2.0',
                    method: 'call',
                    params: {
                        "db": api.DATA_BASE_NAME,
                        "login": this.loginFormEmail.trim(),
                        "password": this.loginFormPassword.trim()
                    },
                    id: '382893928'
                };
                axios.post(api.API_AUTH, data).then((res) => {

                    if (res.data.result.uid == false) {
                        this.showLoading = false
                        this.setAllowToLogin(true)
                        this.colorMessageLogin = "danger"
                        this.showMessageLoginForm = true
                        this.showCheckLogin = true
                        this.messageErrorLogin = valueLabels.LABEL_ERROR_LOGIN_INFORMATION
                        this.loginFormStateUsername = false
                        this.showSignsLoginPage = false
                        this.loginFormStatePassword = false

                    } else {

                        if (!res.data.result.mobile) {
                            this.showLoading = false
                            this.setAllowToLogin(true)
                            this.colorMessageLogin = "danger"
                            this.showMessageLoginForm = true
                            this.showCheckLogin = true
                            this.messageErrorLogin = valueLabels.LABEL_ERROR_LOGIN_MOBILE
                            this.loginFormStateUsername = false
                            this.showSignsLoginPage = false
                            this.loginFormStatePassword = false
                        } else {
                            this.setUserName(this.loginFormEmail)
                            this.setMobileNumber(res.data.result.mobile)
                            this.sendSms(res.data.result.mobile)
                            this.setPassword(this.loginFormPassword)
                            this.showLoading = false
                            this.showCheckLogin = true
                            this.showSignsLoginPage = false
                            this.loginFormStateUsername = true
                            this.loginFormStatePassword = true
                            this.setClassButtonLogin('container-search')
                        }

                    }
                })
            },
            sendSms(mobile) {
                this.setShowIcon(false)
                let data = {
                    jsonrpc: '2.0',
                    method: 'call',
                    params: {
                        "mobile": mobile,
                        "vc_type": "login"
                    },
                    id: '382893928'
                };
                axios.post(api.API_SEND_SMS, data).then((res) => {
                    console.log(res.data.result)
                    if (res.data.result.result == "yes") {
                        this.setAllowToLogin(true)
                        this.$router.push({name: 'authentication'})
                    }
                })
                    .catch((err) => {
                        console.log(err)
                    })
            },

            getTwoAuthentication() {

                if (this.getAllowToLogin) {
                    this.setAllowToLogin(false)
                    let data = {
                        jsonrpc: '2.0',
                        method: 'call',
                        params: {},
                        id: '382893928'
                    };
                    axios.post(api.API_TWO_AUTH, data).then((res) => {
                        if (res.data.result.two_auth) {
                            this.setShowErrorVerifyCode(true)
                            this.setColorErrorAuth('info')
                            this.setMessageErrorVerifyCode("کد یکبار مصرف ارسال شده را وارد نمایید")
                            this.loginUser()
                        } else
                            this.loginUserWithoutSms()
                    })
                        .catch((err) => {
                            console.log(err)
                        })
                }


            },


            showPassword() {
                if (this.type == "password") {
                    this.type = "text"
                    this.showType = false
                } else {
                    this.type = "password"
                    this.showType = true
                }
            },
            loginWithEnter() {
                this.setLoginForm({
                    email: this.loginFormEmail,
                    password: this.loginFormPassword,
                    recaptchaToken: this.recaptchaToken
                })
            },
            ...mapActions([
                'setNormalStatusForm',
                'setClassButtonLogin',
                'setLoginForm',
                'setUserName',
                'setColorErrorAuth',
                'setMobileNumber',
                'setShowIcon',
                'setAllowToLogin',
                'setFailureLogin',
                'setMessageErrorVerifyCode',
                'setShowErrorVerifyCode',
                'setPassword'
            ]),
            changeForm(place) {
                if (this.loginFormPassword != "")
                    this.showEyeSign = true
                else
                    this.showEyeSign = false
                this.showSignsLoginPage = true
            },
            onCaptchaExpired() {
                this.$refs.recaptcha.reset()
            },
            validate() {
                this.$refs.recaptcha.execute()
            },
            register(recaptchaToken) {
                this.recaptchaToken = recaptchaToken
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },
        created() {
            this.setFailureLogin(0)
            if (this.getShowReCaptcha)
                this.onCaptchaExpired()
        }

    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewSupportStyle";
</style>
