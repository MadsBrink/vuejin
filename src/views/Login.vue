<template>
    <div class="login">
        <div class="login-box">
            <div class="login-box-left">
                <base-slider :slides="slides" />
            </div>
            <div class="login-box-right">
                <h4 class="mb-20">Welcome to Vuejin</h4>
                <form-textfield type="email"
                    label="Email"
                    placeholder="Enter your email"
                    v-model="email" />
                <form-textfield type="password"
                    label="Password"
                    placeholder="Enter your password"
                    v-model="password" />
                <div class="text-center">
                    <base-button type="primary"
                        label="Sign in" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseSlider from '@/components/base/BaseSlider.vue';
import FormTextfield from '@/components/form/formElements/FormTextfield.vue';

export default {
    name: 'Login',
    components: {
        BaseButton,
        BaseSlider,
        FormTextfield,
    },
    data() {
        return {
            email: '',
            password: '',
            slides: [
                {
                    image: '/images/slider-image.png',
                    headline: 'Some feature or message',
                    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                    color: '#fff',
                    backgroundColor: '#3986af',
                },
                {
                    image: '/images/slider-image.png',
                    headline: 'Some feature or message',
                    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                    color: '#fff',
                    backgroundColor: '#333',
                },
                {
                    image: '/images/slider-image.png',
                    headline: 'Some feature or message',
                    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                    color: '#fff',
                    backgroundColor: '#54b170',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
    .login {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('/images/login-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    .login-box {
        width: 100%;
        height: 600px;
        max-width: 800px;
        display: flex;
        align-items: center;
        margin: 0 20px;
        border-radius: $border-radius-large;
        background-color: $white;
        box-shadow: $box-shadow;
        overflow: hidden;
        &-left {
            width: 55%;
            height: 100%;
        }
        &-right {
            h4 {
                color: var(--primary);
                text-align: center;
            }
            width: 45%;
            padding: 30px;
        }
    }
</style>
