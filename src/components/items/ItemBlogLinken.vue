<template>
    <b-card no-body class="overflow-hidden" id="item-blog-linkden" >
        <b-row no-gutters>
            <b-col cols="12" lg="12" md="12">
                <b-card-body>
                    <b-card-text class="text-linkden">
                        {{text}}
                    </b-card-text>
                    <div class="container-date">{{date}}</div>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "ItemBlogLinken",
        props: {
            text: String,
            date: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemBlogLinkdenStyle";
</style>
