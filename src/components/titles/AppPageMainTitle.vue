<template>
    <div id= "app-page-main-title">
        <h1 :class= "classStyle">
                {{title}}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "AppPageMainTitle",
        props: {
            title: String,
            classStyle: String
        }
    }
</script>

<style scoped lang= "scss">
    @import "../../assets/styles/titles/appPageMainTitleStyle";
</style>
