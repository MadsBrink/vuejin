<template>
    <div class="base-loader" :class="`base-loader-${size}`">
        <div class="base-loader-icon icon-spinner10"></div>
    </div>
</template>

<script>

export default {
    name: 'BaseLoader',
    props: {
        size: {
            type: String,
            default: 'normal',
            validator(x) {
                return ['large', 'normal', 'small'].indexOf(x) !== -1;
            },
        },
    },
};
</script>
<style lang="scss" scoped>
    .base-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary);
        &-small {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
        &-normal {
            width: 30px;
            height: 30px;
            font-size: 30px;
        }
        &-large {
            width: 40px;
            height: 40px;
            font-size: 40px;
        }
        &-icon {
            animation: rotate 2s infinite linear;
        }
    }
</style>
