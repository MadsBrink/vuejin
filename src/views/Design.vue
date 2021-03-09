<template>
    <div class="design">
        <h3 class="mb-20">Form Elements:</h3>
        <component
            v-for="(element, i) in formElements"
            v-model="element.model"
            :key="i"
            :is="element.type"
            :label="element.label"
            :info="element.info"
            :placeholder="element.placeholder"
            :options="element.options" />
        <h3 class="mb-20">Buttons:</h3>
        <div v-for="(buttonGroup, i) in buttonGroups" :key="i">
            <h5>{{buttonGroup.label}}</h5>
            <base-button class="mr-20 mb-20"
                v-for="(button, i) in buttonGroup.buttons"
                :key="i"
                :loading="button.loading"
                :type="buttonGroup.type"
                :size="button.size"
                :label="button.label"
                :icon="button.icon" />
        </div>
        <h3 class="mb-20">Loaders:</h3>
        <h5>Small</h5>
        <base-loader size="small" />
        <h5>Normal</h5>
        <base-loader size="normal" />
        <h5>Large</h5>
        <base-loader size="large" />
    </div>
</template>

<script>
import FormTextfield from '@/components/form/formElements/FormTextfield.vue';
import FormCheckbox from '@/components/form/formElements/FormCheckbox.vue';
import FormCheckboxGroup from '@/components/form/formElements/FormCheckboxGroup.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';

export default {
    name: 'Design',
    components: {
        FormTextfield,
        FormCheckbox,
        FormCheckboxGroup,
        BaseButton,
        BaseLoader,
    },
    data() {
        return {
            formElements: [
                {
                    type: 'FormTextfield',
                    model: '',
                    label: 'textfield label',
                    info: 'This is a info text',
                    placeholder: 'Hallo textfield!',
                },
                {
                    type: 'FormCheckboxGroup',
                    model: [],
                    label: 'CheckboxGroup label',
                    info: 'This is a info text',
                    options: [
                        { label: 'Option 1', value: 'opt1' },
                        { label: 'Option 2', value: 'opt2' },
                        { label: 'Option 3', value: 'opt3' },
                    ],
                },
                {
                    type: 'FormCheckbox',
                    model: true,
                    label: 'Checkbox label',
                    info: 'This is a info text',
                },
            ],
            buttonGroups: [
                {
                    label: 'Primary',
                    type: 'primary',
                    buttons: [
                        { label: 'Base Button', icon: 'icon-compass' },
                        { label: 'Base Button', loading: true },
                        { label: 'Base Button' },
                        { label: 'Base Button', icon: 'icon-compass', size: 'small' },
                        { label: 'Base Button', loading: true, size: 'small' },
                        { label: 'Base Button', size: 'small' },
                    ],
                },
                {
                    label: 'Secondary',
                    type: 'secondary',
                    buttons: [
                        { label: 'Base Button', icon: 'icon-headphones' },
                        { label: 'Base Button', loading: true },
                        { label: 'Base Button' },
                        { label: 'Base Button', icon: 'icon-headphones', size: 'small' },
                        { label: 'Base Button', loading: true, size: 'small' },
                        { label: 'Base Button', size: 'small' },
                    ],
                },
                {
                    label: 'Tertiary',
                    type: 'tertiary',
                    buttons: [
                        { label: 'Base Button', icon: 'icon-bubble' },
                        { label: 'Base Button', loading: true },
                        { label: 'Base Button' },
                        { label: 'Base Button', icon: 'icon-bubble', size: 'small' },
                        { label: 'Base Button', loading: true, size: 'small' },
                        { label: 'Base Button', size: 'small' },
                    ],
                },
                {
                    label: 'Delete',
                    type: 'delete',
                    buttons: [
                        { label: 'Base Button', icon: 'icon-bin' },
                        { label: 'Base Button', loading: true },
                        { label: 'Base Button' },
                        { label: 'Base Button', icon: 'icon-bin', size: 'small' },
                        { label: 'Base Button', loading: true, size: 'small' },
                        { label: 'Base Button', size: 'small' },
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
    .design {
        padding: 20px;
    }
</style>
