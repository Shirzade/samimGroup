<template>
    <div id="app-main-title">
        <h1>
            {{title}}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "AppFirstTitle",
        props: {
            title: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/mainTitleStyle";
</style>
