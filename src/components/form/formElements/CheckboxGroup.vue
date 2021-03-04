<template>
    {{ label }}
    <div v-for="option in element.options" :key="option.value">
        {{ option.label }}
        <input
            type="checkbox"
            :value="option.value"
            v-model="groupModel" />
    </div>
</template>

<script>

export default {
    name: 'CheckboxGroup',
    props: {
        modelValue: {
            type: Array,
        },
        label: {
            type: String,
        },
        element: {
            type: Object,
            required: true,
        },
    },
    computed: {
        groupModel: {
            get() {
                return this.modelValue;
            },
            set(newValue) {
                this.$emit('update:modelValue', newValue);
            },
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
