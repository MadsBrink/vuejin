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
        .base-button-icon {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0,0,0, 0.3);
        }
    }
    .base-button {
        &-normal {
            height: 44px;
            font-size: 14px;
            border-radius: 10px;
            padding-left: 12px;
            &:not(.icon):not(.loading) {
                padding: 0 20px;
            }
            .base-button-icon {
                padding: 0 12px;
                margin-left: 12px;
            }
        }
        &-small {
            height: 29px;
            font-size: 13px;
            border-radius: 4px;
            padding-left: 10px;
            &:not(.icon):not(.loading) {
                padding: 0 12px;
            }
            .base-button-icon {
                padding: 0 8px;
                margin-left: 8px;
            }
        }
        &-primary {
            color: $white;
            background-color: $primary;
            /deep/ .base-loader {
                color: $white;
            }
        }
        &-secondary {
            color: $white;
            background-color: $secondary;
            /deep/ .base-loader {
                color: $white;
            }
        }
        &-tertiary {
            color: $black;
            background-color: $grey-medium;
            /deep/ .base-loader {
                color: $black;
            }
        }
        &-delete {
            color: $white;
            background-color: $error;
            /deep/ .base-loader {
                color: $white;
            }
        }
    }
</style>
