<template>
    <b-container id="result-search">
        <b-row>
            <b-col cols="12">
                <b-img src="../assets/img/img_not_result.png"></b-img>
                <app-main-title :title=labelTitleNotFount></app-main-title>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import AppMainTitle from '../components/titles/AppMainTitle'
import AppTitle from '../components/titles/AppTitle'
import { valueLabels } from '../utils/labels'

export default {
  name: 'NotFound',
  components: { AppTitle, AppMainTitle },
  data () {
    return {
      labelTitleNotFount: valueLabels.LABEL_TITLE_NOT_FOUNT
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../assets/styles/views/viewResultSearchStyle";
</style>
