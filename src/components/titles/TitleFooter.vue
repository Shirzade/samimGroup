<template>
    <div id="title-footer">
        <div :class="classStyle">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "titleFooter",
        props: {
            title: String,
            classStyle: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/titles/titleFooterStyle";
</style>
