<template>
    <div class="form-element-wrapper" :class="{ error }">
        <!-- Input -->
        <label>{{ label }}</label>
        <input
            type="text"
            v-bind="$attrs"
            :placeholder="element.placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />

        <!-- Error -->
        <template v-if="error">
            <span class="error-message">{{error}}</span>
            <span class="error-icon icon-notification"></span>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Textfield',
    props: {
        modelValue: {
            type: String,
        },
        element: {
            type: Object,
            required: true,
        },
        label: {
            type: String,
        },
        error: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
