<template>
    <div class="form-element" :class="fieldStatusClass">
        <!-- Input -->
        <label class="form-element-label">
            {{ label }}
        </label>
        <input
            type="text"
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />

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
    name: 'Textfield',
    props: {
        modelValue: String,
        label: String,
        error: String,
        warning: String,
        info: String,
        disabled: Boolean,
        placeholder: String,
    },
    mixins: [fieldStatus],
    emits: ['update:modelValue'],
};
</script>
