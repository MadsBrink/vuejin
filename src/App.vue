<template>
    <header class="header"
        v-if="displayHeader"
        :style="themeColors" >
        <img class="header-logo" src="/images/client-logo.png" />
        <span class="header-watermark">
            Online Task Description<br>
            Powered by Wunderman Thompson
        </span>
        <span class="header-user icon-user"></span>
    </header>
    <div class="main-container"
        :class="{ 'header-enabled': displayHeader }"
        :style="themeColors">
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            headerLessRoutes: ['Login'],
        };
    },
    computed: {
        themeColors() {
            return {
                '--primary': '#3986af',
                '--secondary': '#666',
            };
        },
        displayHeader() {
            return !this.headerLessRoutes.includes(this.$route.name);
        },
    },
};
</script>

<style lang="scss">
    @import "./components/form/formStyling.scss";
    @import "./scss/layout.scss";
    @import "./scss/typografi.scss";
    @import "./scss/utils.scss";
    @import "./assets/icons/style.css";
    @import "./scss/animations.scss";

    .header {
        height: 60px;
        padding: 0 20px 0 15px;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 100;
        &-logo {
            height: 35px;
        }
        &-watermark {
            font-size: 9px;
            padding-left: 10px;
        }
        &-user {
            margin-left: auto;
            font-size: 24px;
        }
        box-shadow: $box-shadow;
    }
    .main-container {
        height: 100vh;
        width: 100vw;
        background-color: $grey-extra-light;
        &.header-enabled {
            height: calc(100vh - 60px);
        }
    }

    // Reset CSS
    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        outline: none;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        font-weight: normal;
        font-family: 'Montserrat', sans-serif;
        color: $grey-extra-dark;
        margin: 0;
        padding: 0;
    }
    ol, ul {
        list-style: none;
    }
    hr {
        margin: 10px 0;
        padding: 0;
        border-top: 1px solid $grey-light;
    }
    input {
        font-family: 'Montserrat', sans-serif;
    }
    img {
        max-width: 100%;
        height: auto;
    }

    // Scrollbar
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        border-left: 1px solid $grey-light;
    }
    ::-webkit-scrollbar-thumb {
        background: $grey-light;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: $grey-medium;
    }

</style>
