<template>
    <header v-if="displayHeader"
        :style="themeColors" >
    </header>
    <div class="main-container"
        :class="{ header: displayHeader }"
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
    @import "./scss/typografi.scss";
    @import "./scss/utils.scss";
    @import "./assets/icons/style.css";
    @import "./scss/animations.scss";

    header {
        height: 60px;
    }

    .main-container {
        height: 100vh;
        width: 100vw;
        &.header {
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
        margin: 0;
        padding: 0;
    }

    ol, ul {
        list-style: none;
    }

    input {
        font-family: 'Montserrat', sans-serif;
    }

    img {
        max-width: 100%;
        height: auto;
    }
</style>
