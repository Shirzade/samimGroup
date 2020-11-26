<template>
    <b-col cols="12" id="checkBox-style">
        <p-check name="check" color="danger" v-model="check"></p-check>
        {{title}}
    </b-col>
</template>

<script>
    export default {
        name: "AppCheckBox",
        props: {
            title: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/checkBoxStyle";
</style>
