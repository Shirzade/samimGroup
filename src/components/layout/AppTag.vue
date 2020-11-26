<template>
    <span @click="showTagPage(id)" @mouseenter="selected" @mouseleave="unSelected" :id=mouseHoverClass>{{title}}</span>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "AppTag",
        data() {
            return {
                mouseHoverClass: "tag-container-unselected"
            }
        },
        props: {
            title: String,
            id: String
        },
        methods: {
            ...mapActions([
                'getPostsBlog',
            ]),
            showTagPage(id) {
                this.getPostsBlog({numberPost: 20, tag: id})
                this.$router.push({name: 'subBlog', params: {tag: id}})
            },
            selected() {
                this.mouseHoverClass = "tag-container-selected"
            },
            unSelected() {
                this.mouseHoverClass = "tag-container-unselected"
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/tagStyle";
</style>
