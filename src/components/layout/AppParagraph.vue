<template>
    <div id="app-paragraph"
        data-aos="fade-up"
        data-aos-offset= "0"
        data-aos-duration= "1000">
        <p>
            {{text}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "AppParagragh",
        props: {
            text: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/ParagraphStyle";
</style>
