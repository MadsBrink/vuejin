<template>
    <div class="design">
        <h3 class="mb-20">Form Elements:</h3>
        <component :error="'123'"
            v-for="element in formElements"
            v-model="element.model"
            :key="element.id"
            :is="element.type"
            :label="element.label"
            :element="element" />
    </div>
</template>

<script>
import Textfield from '@/components/form/formElements/Textfield.vue';
import Checkbox from '@/components/form/formElements/Checkbox.vue';
import CheckboxGroup from '@/components/form/formElements/CheckboxGroup.vue';

export default {
    name: 'Home',
    components: {
        Textfield,
        Checkbox,
        CheckboxGroup,
    },
    data() {
        return {
            formElements: [
                {
                    id: 1,
                    type: 'Textfield',
                    model: '',
                    label: 'textfield label',
                    info: 'This is a info text',
                    placeholder: 'Hallo textfield!',
                },
                {
                    id: 2,
                    type: 'CheckboxGroup',
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
                    id: 3,
                    type: 'Checkbox',
                    model: true,
                    label: 'Checkbox label',
                    info: 'This is a info text',
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
