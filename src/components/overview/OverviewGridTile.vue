<template>
    <div class="overview-grid-tile">
        <div class="overview-grid-tile-header">
            <p class="text-truncate"
                :title="name">
                {{ name }}
            </p>
            <div class="overview-grid-tile-header-previews">
                <span v-for="preview in previews" :key="preview.key"
                    :class="preview.icon"
                    @click="previewType = preview.key">
                </span>
            </div>
        </div>
        <img :src="previewImage" />
    </div>
</template>

<script>
export default {
    name: 'OverviewGridTile',
    props: {
        name: String,
        previews: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            previewType: null,
        };
    },
    computed: {
        previewImage() {
            if (this.previewType && this.previews.length > 0) {
                return this.previews.find((e) => e.key === this.previewType).image;
            }
            return '';
        },
    },
    created() {
        this.previewType = this.previews[0].key;
    },
};
</script>
<style lang="scss" scoped>
    .overview-grid-tile {
        overflow: hidden;
        border-radius: $border-radius-large;
        box-shadow: $box-shadow;
        position: relative;
        &-header {
            top: 0;
            left: 0;
            width: 100%;
            padding: 10px 4px 10px 8px;
            display: flex;
            position: absolute;
            background-color: rgba($white, 0.8);
            box-shadow: $box-shadow-small;
            p {
                padding-right: 5px;
            }
            &-previews {
                display: flex;
                align-items: center;
                margin-left: auto;
                span {
                    height: 100%;
                    cursor: pointer;
                    padding: 0 4px;
                    transition: color 0.3s;
                    .active {
                        color: var(--primary);
                    }
                    &:hover {
                        color: var(--primary);
                    }
                }
            }
        }
        img {
            width: 100%;
            display: block;
        }
    }
</style>
