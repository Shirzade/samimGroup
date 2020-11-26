<template>
    <div id="app-breadcrumb">
        <h4>
            <b-breadcrumb :items=breadcbItems></b-breadcrumb>
        </h4>
    </div>
</template>

<script>
    import {breadcrumbItems} from "../../utils/breadcrumbItems";
    export default {
        name: "AppBreadcrumb",
        data() {
            return {}
        },
        props: {
            breadcbItems: ''
        },
        methods:{
            test(){
                console.log(this.breadcbItems)
            }

        }
    }
</script>


<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/breadcrumbStyle";
</style>
