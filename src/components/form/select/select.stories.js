import cSelect from './select.component.vue';
import '../../../style.css';

export default {
    title: 'Forms/cSelect',
    component: cSelect
}

export const Default = (args) => ({
    components: {cSelect},
    setup() {
        return {args}
    },
    template:
        `
          <div style="width: 250px">
          <c-select v-bind="args"/>
          </div>`
})

export const DefaultWithParams = Default.bind({});
DefaultWithParams.args = {placeholder: 'Select option', modelValue: 'Option 1', options: ['Option 1', 'Option2', 'Option3']}
