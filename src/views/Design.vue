<template>
    <div class="design">
        <h3 class="mb-20">Form Elements:</h3>
        <component
            v-for="element in formElements"
            :key="element.id"
            v-model="element.model"
            :is="element.type"
            :label="element.type"
            :element="element"
            :error="'Some error message'" />
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
                    id: 1, type: 'Textfield', model: '', placeholder: 'Hallo textfield!',
                },
                { id: 2, type: 'Checkbox', model: true },
                {
                    id: 3,
                    type: 'CheckboxGroup',
                    model: [],
                    options: [
                        { label: 'Option 1', value: 'opt1' },
                        { label: 'Option 2', value: 'opt2' },
                        { label: 'Option 3', value: 'opt3' },
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
