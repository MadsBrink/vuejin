<template>
    <div class="base-masonry" ref="baseMasonry">
        <div class="base-masonry-item"><img src="https://picsum.photos/200/400" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/300" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/100" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/200" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/600" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/500" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/900" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/800" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/600" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/200" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/300" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/500" /></div>
        <div class="base-masonry-item"><img src="https://picsum.photos/200/300" /></div>
    </div>
</template>

<script>
import Macy from 'macy';

export default {
    name: 'BaseMasonry',
    data() {
        return {
            macy: null,
        };
    },
    mounted() {
        this.macy = Macy({
            container: this.$refs.baseMasonry,
            trueOrder: false,
            waitForImages: false,
            margin: 20,
            columns: 6,
            breakAt: {
                1800: 5,
                1500: 4,
                1200: 3,
                900: 2,
                600: 1,
            },
        });
    },
};
</script>
<style lang="scss" scoped>
    .base-masonry-item {
        overflow: hidden;
        border-radius: $border-radius-large;
        box-shadow: $box-shadow;
        img {
            width: 100%;
            display: block;
        }
    }
</style>
