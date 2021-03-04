<template>
    <header>Header</header>
    <router-view />
</template>

<style lang="scss">
    @import "./components/form/formStyling.scss";
    @import "./assets/icons/style.css";
    @import "./scss/utils.scss";

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
