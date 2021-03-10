<template>
    <div class="layout-one" :class="{ 'layout-one-drawer-enabled': drawerEnabled }">
        <div class="layout-one-drawer" v-if="drawerEnabled">
            <slot name="drawer"></slot>
        </div>
        <div class="layout-one-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LayoutOne',
    props: {
        direction: {
            type: String,
            default: 'column',
            validator(x) {
                return ['column', 'row'].indexOf(x) !== -1;
            },
        },
    },
    computed: {
        drawerEnabled() {
            return this.$slots.drawer;
        },
        flexDirection() {
            return this.direction;
        },
    },
};
</script>
<style lang="scss" scoped>
    .layout-one {
        display: flex;
        height: 100%;
        &-drawer-enabled {
            .layout-one-content {
                width: calc(100% - 250px);
            }
        }
        &-content {
            display: flex;
            flex-direction: v-bind(flexDirection);
            width: 100%;
            padding: 20px;
        }
        &-drawer {
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
    }
</style>
