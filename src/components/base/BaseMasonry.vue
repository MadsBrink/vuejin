<template>
    <div class="base-masonry" ref="baseMasonry">
        <div class="base-masonry-tile"
            v-for="tile in tiles" :key="tile.key">
            <slot name="tile" :tile="tile" />
        </div>
    </div>
</template>

<script>
import Macy from 'macy';

export default {
    name: 'BaseMasonry',
    props: {
        tiles: {
            type: Array,
            required: true,
        },
    },
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
