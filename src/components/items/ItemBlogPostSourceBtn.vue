<template>
    <b-row>
        <div id="item-blog-post-source-btn">
            <div class="source-link" @click=navigate(link)>
                {{title}} 
                <span class="buttonIconStyle">
                    <img :src="iconImage"/>
                </span>
            </div>       
        </div>
    </b-row>
</template>

<script>
    export default {
        name: "ItemBlogPostSourceBtn",
        data() {
            return {
                iconImage: require('../../assets/img/icons/' + this.icon),
            }
        },
        props: {
            icon: {
                default: "icon-link-blue.png",
                type: String
            },
            title: String,
            link: String
        },
        methods: {
            navigate(link) {
                location.href =link
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/buttonStyles";
</style>