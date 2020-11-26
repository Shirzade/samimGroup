<template>
    <b-container id="job-form" data-aos="fade-up"
                 data-aos-duration="3000">
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <app-breadcrumb :breadcbItems=breadcrumbItemsFormJobPage></app-breadcrumb>
        <app-page-main-title :title=labelFormJobPageMainTitle></app-page-main-title>
        <app-page-sub-title :title=labelFormJobPageSubTitle></app-page-sub-title>
        <b-row>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormName
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormLastName
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormNational
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormGender
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormBirthDay
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormMaritalStatus
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormNumberOfChild
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormMilitaryService
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormExemptionCompletion
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormRemarkOffice
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormPhoneNumber
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormMobileNumber
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormEmail
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormAddress
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
            <b-col cols="12" lg="4" md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            :label=labelFormCareerFuture
                            label-for="input-1">
                        <b-form-input
                                id="input-1"
                                type="email"
                                required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" class="container-button">
                <app-button pageLink="jobApplyForm"
                            :titleButton=labelTitleButton
                            classButton="apply-button"></app-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import AppBreadcrumb from '../components/layout/AppBreadcrumb'
import { valueLabels } from '../utils/labels'
import { breadcrumbItems } from '../utils/breadcrumbItems'
import AppPageMainTitle from '../components/titles/AppPageMainTitle'
import AppPageSubTitle from '../components/titles/AppPageSubTitle'
import AppButton from '../components/buttons/AppButton'
import { metaTags } from '../utils/metaTages'

export default {
  name: 'JobApplyForm',
  data () {
    return {
      metaTitle: metaTags.CAREERS_PAGE.title,
      metaDescription: metaTags.CAREERS_PAGE.description,
      breadcrumbItemsFormJobPage: breadcrumbItems.BREADCRUMB_ITEMS_FORM_JOB_PAGE,
      labelFormJobPageMainTitle: valueLabels.LABEL_CAREERS_PAGE_MAIN_TITLE,
      labelTitleButton: valueLabels.LABEL_BUTTON_APPLY,
      labelFormName: valueLabels.LABEL_FORM_FIRST_NAME,
      labelFormLastName: valueLabels.LABEL_FORM_LAST_NAME,
      labelFormNational: valueLabels.LABEL_FORM_NATIONAL,
      labelFormGender: valueLabels.LABEL_FORM_GENDER,
      labelFormBirthDay: valueLabels.LABEL_FORM_BIRTH_DAY,
      labelFormMaritalStatus: valueLabels.LABEL_FORM_MARITAL_STATUS,
      labelFormMilitaryService: valueLabels.LABEL_FORM_MILITARY_SERVICE,
      labelFormExemptionCompletion: valueLabels.LABEL_FORM_EXEMPTION_COMPLETION_DATE,
      labelFormRemarkOffice: valueLabels.LABEL_FORM_REMARKS_OF_CONSCRIPTION_OFFICE,
      labelFormPhoneNumber: valueLabels.LABEL_FORM_PHONE_NUMBER,
      labelFormMobileNumber: valueLabels.LABEL_FORM_MOBILE_NUMBER,
      labelFormEmail: valueLabels.LABEL_FORM_EMAIL,
      labelFormAddress: valueLabels.LABEL_FORM_ADDRESS,
      labelFormCareerFuture: valueLabels.LABEL_FORM_CAREER_FUTURE,
      labelFormNumberOfChild: valueLabels.LABEL_FORM_NUMBER_OF_CHILD,
      labelFormJobPageSubTitle: valueLabels.LABEL_FORM_JOB_PAGE_SUB_TITLE,
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
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
  components: { AppButton, AppPageSubTitle, AppPageMainTitle, AppBreadcrumb }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewJobFormStyle";
</style>
