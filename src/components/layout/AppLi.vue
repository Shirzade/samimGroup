<template>
    <div id="app-li">
        <li v-if="link" :class="classStyle"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="2000">
            <span v-if="listIcon" class="listIconStyle"> <font-awesome-icon :icon="listIcon"/> </span>
            <a :href=link>{{title}}</a>
        </li>
        <li v-else :class="classStyle"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="2000">
            <span v-if="title" class="liTitleStyle">
                <span v-if="listIcon" class="listIconStyle"> <font-awesome-icon :icon="listIcon"/> </span>
                {{title}}
                <p class="liTextStyle">
                    {{text}}
                </p>
            </span>
            <span v-else class="liTextStyle">
                <span v-if="listIcon" class="listIconStyle"> <font-awesome-icon :icon="listIcon"/> </span>
                    {{text}}
            </span>
        </li>
    </div>
</template>

<script>
    export default {
        name: "AppLi",
        props: {
            classStyle: String,
            title: String,
            text: String,
            link: String,
            listIcon: String,
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/layoutStyles/liStyle";
</style>
