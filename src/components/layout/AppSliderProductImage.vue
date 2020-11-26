<template>
    <b-col cols="12" lg="7" id="container-image-slider">
        <b-row :class=showImageLoading>
            <b-col cols="12" lg="12" md="12" class="container-loading">
                <Spinner name="fading-circle" color="#161A1E"/>
            </b-col>
        </b-row>
        <b-row :class=showImage>
            <b-img thumbnail
                    :src=linkProductImage+getProductMainImageId+linkProductImageSecondSection
                     :alt=altImage
                    fluid-grow>
            </b-img>
        </b-row>
        <b-row v-if="multiImgesFlag" class="container-image-thumbnail" :class=showImage>
            <b-img
                    v-for="productImage in getProductImages"
                    :class="{ active:firstItemSelect}"
                    @click=setProductMainImageId(productImage.id)
                    :key=productImage.id
                    :alt=altImage
                    thumbnail
                    :src=linkProductImage+productImage.id+linkProductImageSecondSectionSmall></b-img>
        </b-row>
    </b-col>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {api} from '../../../src/utils/api'

    export default {
        name: "AppSliderProductImage",
        data() {
            return {
                linkProductImage: api.MAIN_URL + api.URL_IMAGE_PRODUCT,
                linkProductImageSecondSection: '/image',
                linkProductImageSecondSectionSmall: '/image/140x80',
                mainImageProduct: 0,
                show: false,
                showImage: 'not-show-image',
                showImageLoading: 'show-image',
                thirdItemSelect: false,
                secondItemSelect: false,
                firstItemSelect: true,
                multiImgesFlag:true
            }
        },
        computed: {
            ...mapGetters([
                'getProductMainImageId',
                'getProductImages'
            ]),
        },
        methods: {
            ...mapActions([
                'setProductMainImageId'
            ]),
            setMainImageProduct(id) {
                this.mainImageProduct = id
            },
            setLoadShow() {
                setTimeout(function () {
                    this.showImage = 'show-image'
                }.bind(this), 3000);

                setTimeout(function () {
                    this.showImageLoading = 'not-show-image'
                }.bind(this), 3000);
            },


        },
        props: {
            productImages: Array,
            altImage:String,
            firstImage: String,
            secondImage: String,
            thirdImage: String
        },
        mounted() {
            this.setLoadShow()
        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/sliderProductImageStyle";
</style>
