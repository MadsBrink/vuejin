<template>
    <div class="base-menu-pill content-box">
        <template v-for="item in menu" :key="item.key">
            <span class="base-menu-pill-pill"
                :class="{
                    active: item.key === modelValue,
                    [item.icon]: item.icon
                }"
                @click="setItem(item.key)">
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
        modelValue: String,
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
        setItem(key) {
            this.$emit('update:modelValue', key);
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
            transition: background-color 0.1s, color 0.3s;
            &:not(:last-child) {
                border-right: 1px solid $grey-light;
            }
            &.active {
                color: $white;
                background-color: var(--primary);
            }
            &:hover:not(.active) {
                color: var(--primary);
            }
        }
    }
</style>
