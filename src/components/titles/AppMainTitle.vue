<template>
    <div id="app-main-title">
        <h2>
            {{title}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "AppMainTitle",
        props: {
            title: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/mainTitleStyle";
</style>
