<template>
    <div class="base-button-actions">
        <button :class="{ active }"
            @click="active = !active">
            <div></div>
            <span class="icon-cross"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'BaseButtonActions',
    data() {
        return {
            active: false,
        };
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
    button {
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
</style>
