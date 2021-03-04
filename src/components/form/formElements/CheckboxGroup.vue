<template>
    <div class="form-element" :class="fieldStatus ? fieldStatus.type : ''">
        <!-- Input -->
        <label class="form-element-label">
            {{ label }}
        </label>
        <div class="form-element-checkbox"
            v-for="option in element.options"
            :key="option.value">
            <input
                type="checkbox"
                :value="option.value"
                v-model="groupModel" />
            <label>
                {{ option.label }}
            </label>
        </div>

        <!-- Status Message -->
        <span class="form-element-status" v-if="fieldStatus">
            <span class="form-element-status-icon" :class="fieldStatus.icon"></span>
            <span class="form-element-status-text">{{ fieldStatus.text }}</span>
        </span>
    </div>
</template>

<script>
import { fieldStatus } from '../formMixin';

export default {
    name: 'CheckboxGroup',
    props: {
        modelValue: String,
        label: String,
        error: String,
        warning: String,
        disabled: Boolean,
        element: {
            type: Object,
            required: true,
        },
    },
    mixins: [fieldStatus],
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
