<template>
    <b-container-floid v-on:keyup.enter=twoAuthentication>
        <b-row id="authentication" class="justify-content-md-center justify-content-sm-center pt-5 pb-5">
            <b-col class="verification-box" cols="12" lg="4" md="4">
                <div class="container-message">
                    <div v-if="getShowErrorVerifyCode">
                        <b-alert v-model="showDismissibleAlert" :variant=getColorErrorAuth dismissible>
                            {{getMessageErrorVerifyCode}}
                        </b-alert>
                    </div>
                </div>

                <b-form method="post" @submit.prevent="validate" autocomplete="new-password">
                    <b-form-group
                            :label=labelVerifyCodeTitle>
                        <div class="container-input-password">
                            <b-form-input
                                    class="input-password"
                                    @input="changeForm('password')"
                                    v-model=codeNumber
                                    :type=type
                                    autocomplete="new-password"
                                    required></b-form-input>
                            <div class="input-icon">
                                <span v-if=getShowIcon>
                                    <font-awesome-icon
                                            v-if=getVerifyCodeFlag
                                            style="color: green" icon="check"/>
                                    <font-awesome-icon
                                            v-else
                                            style="color: #FF0000"
                                            icon="times"/>
                                </span>
                            </div>
                        </div>
                    </b-form-group>
                </b-form>
                <app-button
                        pageLink="two-authentication"
                        titleButton="ورود"
                        showLoading="true"
                        :loginCodeNumber=codeNumber
                        :loginFormEmail=this.getUserName
                        :loginFormPassword=this.getPassword
                        :loginMobile=this.getMobileNumber
                        classButton="login-page-button"></app-button>
            </b-col>
        </b-row>
    </b-container-floid>
</template>

<script>
import AppButton from '../components/buttons/AppButton'
import AppTitle from '../components/titles/AppTitle'
import { mapActions, mapGetters } from 'vuex'
import { valueLabels } from '../utils/labels'
import { api } from '../utils/api'

export default {
  name: 'Authentication',
  components: { AppTitle, AppButton },
  data () {
    return {
      labelVerifyCodeTitle: valueLabels.LABEL_VERIFY_CODE,
      codeNumber: '',
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: true
    }
  },
  computed: {
    ...mapGetters([
      'getMessageErrorVerifyCode',
      'getShowErrorVerifyCode',
      'getUserName',
      'getColorErrorAuth',
      'getShowIcon',
      'getFailureLogin',
      'getPassword',
      'setShowIcon',
      'getVerifyCodeFlag',
      'getRecaptchaToken',
      'getMobileNumber'
    ])
  },

  methods: {

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },

    someMethod (event) {
      // this.$router.push('/')
      this.$router.push({ name: 'login' })
    },
    // reloadHandler () {
    //     this.$nextTick(() => {
    //         this.$router.push('/about')
    //         // window.location = '/buildings'
    //     })
    // },
    preventNav (event) {
      if (!this.isEditing) return
      event.preventDefault()
      event.returnValue = ''
    },

    ...mapActions([
      'verificationCode',
      'setFailureLogin'
    ]),

    twoAuthentication () {
      if (this.getUserName == '') { this.$router.push({ name: 'login' }) } else {
        this.verificationCode({
          'codeNumber': this.codeNumber,
          'mobile': this.getMobileNumber
        })
      }
    }
  },
  beforeMount () {
    window.addEventListener('beforeunload', this.preventNav)
  },

  beforeDestroy () {
    window.removeEventListener('beforeunload', this.preventNav)
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewAuthenticationStyle";
</style>
