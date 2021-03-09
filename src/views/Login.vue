<template>
    <div class="login">
        <div class="login-box">
            <div class="login-box-left">
                <div class="login-box-left-content">
                    <img class="mb-30" src="/images/login-feature.png" />
                    <h5 class="mb-20">Some feature or message</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                </div>
            </div>
            <div class="login-box-right">
                <h4 class="mb-20">Welcome</h4>
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
import FormTextfield from '@/components/form/formElements/FormTextfield.vue';
import BaseButton from '@/components/base/BaseButton.vue';

export default {
    name: 'Login',
    components: {
        FormTextfield,
        BaseButton,
    },
    data() {
        return {
            email: '',
            password: '',
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
        border-radius: 10px;
        background-color: $white;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        overflow: hidden;
        &-left {
            display: flex;
            align-items: center;
            text-align: center;
            color: $white;
            width: 55%;
            height: 100%;
            padding: 30px;
            background-color: var(--primary);
            img {
                width: 250px;
            }
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
