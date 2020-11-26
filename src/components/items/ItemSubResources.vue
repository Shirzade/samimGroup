<template>
    <div id="item-sub-resources"
            class="overflow-hidden" 
            data-aos= "fade-up"
            data-aos-duration="1000">
        <b-card class="overflow-hidden" v-for="product in getSubCategoryProducts" :key="product.id">
            <b-row no-gutters>
                <b-col md="1" class="img-container">
                    <b-card-img src="../../assets/img/icons/icon-pdf.png" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="11">
                    <b-card-text>
                        <b-row style="">
                            <b-col md="5" class="title">
                                <!-- <router-link :to="{ name: 'product', params: {pid:image } }" tag="a"> -->
                                    <b-card-title>
                                        {{product.name}}
                                    </b-card-title>
                                <!-- </router-link> -->
                            </b-col>
                            <b-col md="7" class="detailes">
                                <!-- <span dir="ltr">({datasheet-size}})</span><span><a :href=resrcLink class="resrc-link">دیتاشیت</a></span> -->
                                <span class="size">(1.5MB)</span><span><a :href=resrcLink class="resrc-link">دیتاشیت</a></span>
                                <span class="divider"><a :href=resrcLink class="resrc-link">|</a></span>
                                <span><a :href=resrcLink class="resrc-link">راهنمای کاربری</a></span><span class="size">(2MB)</span>
                                <!-- <span><a :href=resrcLink class="resrc-link">راهنمای کاربری</a></span><span dir="ltr">({{user-manual-size}})</span> -->
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import {api} from "../../utils/api"
    import {mapActions, mapGetters} from 'vuex'
    import {ContentLoader} from 'vue-content-loader'

    export default {
        name: "ItemSubResources",
        data() {
            return {}
        },
        components: {
            ContentLoader
        },
        computed: {
            ...mapGetters([
                'getShowLoading',
                'getSubCategoryProducts'
            ]),
        },
        methods: {
            ...mapActions([
                'getProductInformation',
                'setSubCategoryProducts'
            ]),
            getUnits: function() {
                
            },
            showSinglePage(id) {
                this.$router.push({name: 'product', params: {pid: id}})
            },
        },
        props: {
            catId: String
        },
        created() {
            // this.getListProducts({page: this.$route.params.page, category: this.$route.params.cat})
            this.setSubCategoryProducts({categuryId:this.catId, count:100})
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemSubResourcesStyle";
</style>
