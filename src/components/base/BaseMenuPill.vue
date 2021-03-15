<template>
    <div class="base-menu-pill content-box">
        <template v-for="(item, i) in menu" :key="i">
            <span class="base-menu-pill-pill"
                :class="{
                    active: item === modelValue,
                    [item.icon]: item.icon
                }"
                @click="setItem(item)">
                {{ item.label }}
            </span>
        </template>
    </div>
</template>

<script>
export default {
    name: 'BaseMenuPill',
    props: {
        menu: Array,
        modelValue: Object,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            itemLeft: null,
            itemWidth: null,
            itemHeight: null,
        };
    },
    methods: {
        setItem(item) {
            this.$emit('update:modelValue', item);
        },
    },
};
</script>
<style lang="scss" scoped>
    .base-menu-pill {
        display: flex;
        font-size: 14px;
        position: relative;
        &-pill {
            display: flex;
            align-items: center;
            height: 100%;
            text-align: center;
            padding: 8px 12px;
            cursor: pointer;
            z-index: 1;
            transition: all 0.1s;
            &:not(:last-child) {
                border-right: 1px solid $grey-light;
            }
            &.active {
                color: $white;
                background-color: var(--primary);
            }
        }
    }
</style>
