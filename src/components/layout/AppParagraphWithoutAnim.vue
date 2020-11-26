<template>
    <div id="app-paragraph">
        <p>
            {{text}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "AppParagraphWithoutAnim",
        props: {
            text: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/ParagraphStyle";
</style>
