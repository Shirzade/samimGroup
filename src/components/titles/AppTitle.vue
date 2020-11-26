<template>
    <div id="app-title">
        <div :class="classStyle">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppTitle",
        props: {
            title: String,
            classStyle: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/titles/appTitleStyle";
</style>
