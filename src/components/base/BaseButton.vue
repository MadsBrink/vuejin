<template>
    <button class="base-button"
        :class="classObj">
        {{ label }}
        <span class="base-button-icon" v-if="icon || loading">
            <base-loader v-if="loading" size="small"  />
            <span v-else-if="icon" :class="icon" ></span>
        </span>
    </button>
</template>

<script>
import BaseLoader from '@/components/base/BaseLoader.vue';

export default {
    name: 'BaseButton',
    components: {
        BaseLoader,
    },
    props: {
        label: String,
        icon: String,
        loading: Boolean,
        type: {
            type: String,
            default: 'primary',
            validator(x) {
                return ['primary', 'secondary', 'tertiary', 'delete'].indexOf(x) !== -1;
            },
        },
        size: {
            type: String,
            default: 'normal',
            validator(x) {
                return ['normal', 'small'].indexOf(x) !== -1;
            },
        },
    },
    computed: {
        classObj() {
            return {
                [`base-button-${this.type}`]: this.type,
                [`base-button-${this.size}`]: this.size,
                loading: this.loading,
                icon: this.icon,
            };
        },
    },
};
</script>
<style lang="scss" scoped>
    button {
        display: inline-flex;
        align-items: center;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: transparent;
        border: none;
        overflow: hidden;
        cursor: pointer;
    }
    @mixin button-colors($text-color, $background-color, $loader-color) {
        color: $text-color;
        background-color: $background-color;
        :deep(.base-loader) {
            color: $loader-color;
        }
    }
    .base-button {
        &-normal {
            height: 44px;
            font-size: 14px;
            border-radius: $border-radius-large;
            padding-left: 12px;
            &:not(.icon):not(.loading) {
                padding: 0 30px;
            }
            .base-button-icon {
                padding: 0 12px;
                margin-left: 12px;
            }
        }
        &-small {
            height: 28px;
            font-size: 13px;
            border-radius: $border-radius-small;
            padding-left: 10px;
            &:not(.icon):not(.loading) {
                padding: 0 12px;
            }
            .base-button-icon {
                padding: 0 8px;
                margin-left: 8px;
            }
            :deep(.base-loader) {
                font-size: 16px;
            }
        }
        &-primary {
            @include button-colors($white, var(--primary), $white);
        }
        &-secondary {
            @include button-colors($white, var(--secondary), $white);
        }
        &-tertiary {
            @include button-colors($black, $grey-medium, $black);
        }
        &-delete {
            @include button-colors($white, $error, $white);
        }
    }
    .base-button-icon {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0, 0.2);
    }
</style>
