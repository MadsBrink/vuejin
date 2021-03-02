<template>
    {{ label }}
    <input
        type="text"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
    name: 'Textfield',
    props: {
        modelValue: {
            type: String,
        },
        label: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
