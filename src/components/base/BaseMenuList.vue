<template>
    <div class="base-menu-list" ref="menulist">
        <div class="base-menu-list-menu"
            v-for="(list, i) in menu"
            :key="i">
            <h6 v-if="list.label">
                {{ list.label }}
            </h6>
            <ul>
                <li v-for="item in list.items"
                    :key="item.id"
                    :class="{ active: item === modelValue}"
                    @click="setItem($event, item)">
                    <span
                        v-if="item.icon"
                        :class="item.icon"></span>
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseMenuList',
    props: {
        menu: {
            type: Array,
            required: true,
        },
        modelValue: Object,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            itemTop: null,
            itemHeight: null,
        };
    },
    methods: {
        setItem(event, item) {
            this.setItemMarker(event.target);
            this.$emit('update:modelValue', item);
        },
        setItemMarker(element) {
            this.itemTop = `${element.offsetTop}px`;
            this.itemHeight = `${element.offsetHeight}px`;
        },
    },
    mounted() {
        const activeElement = this.$refs.menulist.querySelector('.active');
        if (activeElement) {
            this.setItemMarker(activeElement);
        }
    },
};
</script>
<style lang="scss" scoped>
    h6 {
        padding: 14px 20px 10px;
        border-bottom: 1px solid $grey-light;
    }
    ul {
        li {
            display: flex;
            align-items: center;
            font-size: 14px;
            padding: 15px 20px;
            cursor: pointer;
            transition: background-color 0.2s;
            span {
                margin-right: 10px;
                margin-top: -1px;
            }
            &:hover {
                background-color: $grey-extra-light;
            }
            &.active {
                background-color: $grey-extra-light;
                &::after {
                    opacity: 1;
                }
            }
        }
    }
    .base-menu-list-menu:not(:first-child) {
        h6 {
            padding-top: 18px;
        }
        &::after {
            content: "";
            position: absolute;
            top: v-bind(itemTop);
            right: -1px;
            width: 2px;
            height: v-bind(itemHeight);
            background-color: var(--primary);
            transition: top 0.3s $bezier-bounce;
        }
    }
</style>
