<template>
    {{ label }}
    <input
        type="checkbox"
        v-bind="$attrs"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)" />
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        modelValue: {
            type: Boolean,
        },
        label: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
