<template>
    <b-container-floid>
        <vue-headful
                :title=metaTitle
                :description=metaDescription
        />
        <div class="wrapper">
            <app-tab-blog-page></app-tab-blog-page>
        </div>
    </b-container-floid>
</template>

<script>
    import AppTabBlogPage from "../components/layout/AppTabBlogPage";
    import {metaTags} from "../utils/metaTages";

    export default {
        name: "Blog",
        components: {AppTabBlogPage},
        data() {
            return {
                metaTitle: metaTags.BLOG_PAGE.title,
                metaDescription: metaTags.BLOG_PAGE.description
            }
        },
        head: {
            meta: [
                {name: 'twitter:site_name', content: "گروه صمیم | samimgroup"},
                {name: 'twitter:card', content: "summary"},
                {name: 'twitter:site', content: "@samimgropco"},
                {name: 'twitter:type', content: "website"},
                {property: 'og:title', content: metaTags.BLOG_PAGE.title},
                {property: 'og:description', content: metaTags.BLOG_PAGE.description},
                {property: 'og:url', content: "https://www.samimgroup.com/blog/1"}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.samimgroup.com/blog/1'}
            ],
        },
        created() {

            if (this.$route.params.page == "samim-wiki-98")
                this.$router.push({name: 'samim-wiki', params: {tag: 'noTag', page: 1}})

        }
    }
</script>

<style scoped>

</style>
