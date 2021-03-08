<template>
    <div class="form-element" :class="fieldStatus ? fieldStatus.type : ''">
        <!-- Input -->
        <label class="form-element-checkbox">
            <input
                type="checkbox"
                v-bind="$attrs"
                :checked="modelValue"
                @input="$emit('update:modelValue', $event.target.checked)" />
            <svg width="20px" height="20px" viewBox="0 0 18 18">
                <polyline points="3 9 7 14 15 4"></polyline>
            </svg>
            <div></div>
            <span>{{ label }}</span>
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
    name: 'Checkbox',
    props: {
        modelValue: Boolean,
        label: String,
        error: String,
        warning: String,
        disabled: Boolean,
        element: Object,
    },
    mixins: [fieldStatus],
};
</script>

<style lang="scss" scoped>

</style>
