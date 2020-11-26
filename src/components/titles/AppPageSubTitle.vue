<template>
    <div id= "app-page-sub-title">
        <h2 :class= "classStyle">
                {{title}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "AppPageSubTitle",
        props: {
            title: String,
            classStyle: String
        }
    }
</script>

<style scoped lang= "scss">
    @import "../../assets/styles/titles/appPageSubTitleStyle";
</style>
