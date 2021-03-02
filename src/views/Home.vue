<template>
    <div class="home">
        <component v-for="element in formElements"
            v-model="element.model"
            :key="element.id"
            :is="element.type"
            :label="element.type"
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
                { id: 1, type: 'Textfield', model: '123' },
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
