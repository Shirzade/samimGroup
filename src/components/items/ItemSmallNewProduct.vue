<template>
    <div id="item-small-new-product">
        <img :src="productImage" :title=title :alt=title class="img-fluid">
        <h3>{{title}}</h3>
        <!--<h4>{{subTitle}}</h4>-->
        <p>
            {{description}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "ItemSmallNewProduct",
        data() {
            return {
                productImage: require('../../assets/img/' + this.category + '/' + this.image),
            }
        },
        props: {
            title: String,
            subTitle: String,
            description: String,
            image: String,
            category: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/itemStyles/itemNewProductStyle";
</style>
