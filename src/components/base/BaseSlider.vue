<template>
    <div class="base-slider">
        <div class="base-slider-wrapper">
            <div class="base-slider-slide"
                v-for="(slide, i) in slides"
                :key="i"
                :style="{ color: slide.color, backgroundColor: slide.backgroundColor }">
                <div class="base-slider-slide-content">
                    <img class="mb-30" :src="slide.image" />
                    <div class="mr-30 ml-30">
                        <h5 class="mb-20">{{ slide.headline }}</h5>
                        <p>{{ slide.copy }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="base-slider-nav">
            <ul>
                <li v-for="(slide, i) in slides" :key="i"
                    :class="{ active: slideActive === i }"
                    @click="slideActive = i">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BaseSlider',
    props: {
        slides: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            slideActive: 0,
        };
    },
    computed: {
        translateXValue() {
            return `-${this.slideActive * 100}%`;
        },
    },
};
</script>
<style lang="scss" scoped>
    .base-slider {
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .base-slider-wrapper {
        display: flex;
        height: 100%;
        transform: translateX(v-bind(translateXValue));
        transition: transform 0.5s;
        .base-slider-slide {
            display: flex;
            flex: 0 0 100%;
            align-items: center;
            text-align: center;
            &-content {
                width: 100%;
            }
        }
    }
    .base-slider-nav {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 8px;
        width: 100%;
        ul {
            display: flex;
            padding: 8px;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            li {
                &::before {
                    content: '';
                    display: block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    margin: 0 5px;
                    background-color: $grey-extra-dark;
                    cursor: pointer;
                }
                &.active {
                    &::before {
                        background-color: $grey-medium;
                    }
                }
            }
        }
    }
</style>
