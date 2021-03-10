<template>
    <div class="layout-one-column">
        <div class="drawer" v-if="drawerEnabled">
            <slot name="drawer"></slot>
        </div>
        <div class="content" :class="{ 'drawer-enabled': drawerEnabled }">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LayoutOneColumn',
    computed: {
        drawerEnabled() {
            return this.$slots.drawer;
        },
    },
};
</script>
<style lang="scss" scoped>
    .layout-one-column {
        display: flex;
        height: 100%;
    }
    .content {
        display: flex;
        flex-direction: column;
        width: calc(100% - 280px);
        padding: 20px;
    }
    .drawer {
        height: 100%;
        width: 250px;
        position: relative;
        background-color: $white;
        padding: 20px 0;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        &::before {
            content: "";
            position: absolute;
            top: -5px;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: $white;
        }
    }
</style>
