<template>
    <div class="form-element" :class="fieldStatus ? fieldStatus.type : ''">
        <!-- Input -->
        <label class="form-element-label">
            {{ label }}
        </label>
        <label class="form-element-checkbox"
            v-for="option in options"
            :key="option.value">
            <input
                type="checkbox"
                :value="option.value"
                v-model="groupModel" />
            <svg width="20px" height="20px" viewBox="0 0 18 18">
                <polyline points="3 9 7 14 15 4"></polyline>
            </svg>
            <div></div>
            <span>{{ option.label }}</span>
        </label>

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
        modelValue: Array,
        label: String,
        error: String,
        warning: String,
        info: String,
        disabled: Boolean,
        options: Array,
    },
    mixins: [fieldStatus],
    emits: ['update:modelValue'],
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
