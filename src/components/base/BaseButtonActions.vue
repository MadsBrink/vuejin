<template>
    <div class="base-button-actions" ref="buttonActions">
        <button class="base-button-actions-button"
            :class="{ active }"
            @click="active = !active">
            <div></div>
            <span class="icon-cross"></span>
        </button>
        <div class="base-button-actions-menu" v-if="active">
            <ul>
                <li v-for="(action, i) in actions" :key="i"
                    @click="clickedAction(action.key)">
                    <span v-if="action.icon" :class="action.icon"></span>
                    {{ action.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseButtonActions',
    props: {
        actions: {
            type: Array,
            requried: true,
        },
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        clickedAction(key) {
            console.log('Handle action', key);
        },
        clickedDocument(e) {
            if (this.active) {
                const el = this.$refs.buttonActions;
                const { target } = e;
                if (el !== target && !el.contains(target)) {
                    this.active = false;
                }
            }
        },
    },
    mounted() {
        document.addEventListener('mousedown', this.clickedDocument);
    },
    unmounted() {
        document.removeEventListener('mousedown', this.clickedDocument);
    },
};
</script>
<style lang="scss" scoped>
    @mixin button-dot() {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: $grey-extra-dark;
    }
    .base-button-actions {
        position: relative;
        &-menu {
            top: 0;
            right: 0;
            z-index: 2;
            position: absolute;
            border-radius: $border-radius-large;
            background-color: $white;
            box-shadow: $box-shadow;
            &::before {
                content: '';
                top: -5px;
                right: -5px;
                z-index: 2;
                width: 34px;
                height: 34px;
                display: block;
                position: absolute;
                border-radius: 50%;
                background-color: $white;
                box-shadow: 1.5px -1.5px 1px 0px rgba(0,0,0,0.15) inset;
            }
            li {
                font-size: 14px;
                padding: 10px 40px 10px 12px;
                cursor: pointer;
                white-space: nowrap;
                &:hover {
                    background-color: $grey-extra-light;
                }
                span {
                    font-size: 16px;
                    padding-right: 6px;
                }
            }
        }
        &-button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: transparent;
            border: none;
            position: relative;
            cursor: pointer;
            div {
                @include button-dot();
                transition: all 0.25s;
            }
            span {
                opacity: 0;
                color: $white;
                position: absolute;
                transition: all 0.25s;
            }
            &::before,
            &::after {
                content: '';
                position: absolute;
                @include button-dot();
            }
            &::before { top: 0; }
            &::after { bottom: 0; }
            &.active {
                z-index: 3;
                div {
                    transform: scale(4);
                    background-color: var(--primary);
                    transition: all 0.25s $bezier-bounce-two;
                    &::before {
                        opacity: 1;
                    }
                }
                span {
                    opacity: 1;
                }
                &::before,
                &::after {
                    opacity: 0;
                }
            }
        }
    }
</style>
