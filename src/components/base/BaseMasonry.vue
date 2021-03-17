<template>
    <div class="base-masonry" ref="baseMasonry">
        <img src="https://picsum.photos/200/400" />
        <img src="https://picsum.photos/200/300" />
        <img src="https://picsum.photos/200/100" />
        <img src="https://picsum.photos/200/200" />
        <img src="https://picsum.photos/200/600" />
        <img src="https://picsum.photos/200/500" />
        <img src="https://picsum.photos/200/900" />
        <img src="https://picsum.photos/200/800" />
        <img src="https://picsum.photos/200/600" />
        <img src="https://picsum.photos/200/200" />
        <img src="https://picsum.photos/200/300" />
        <img src="https://picsum.photos/200/500" />
        <img src="https://picsum.photos/200/300" />
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
            columns: 4,
            breakAt: {
                1200: 4,
                940: 3,
                520: 2,
                400: 1,
            },
        });
    },
};
</script>
