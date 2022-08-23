import cInput from './input.component.vue';
import '../../../style.css';

export default {
    title: 'Components/Forms/cInput',
    component: cInput,
}

export const Default = (args) => ({
    components: {cInput},
    setup() {
        return {args}
    },
    template:
        `
          <div style="width: 250px">
          <c-input v-bind="args"/>
          </div>`
})


export const DefaultWithParams = Default.bind({});
DefaultWithParams.args = {errorMsg: 'My error msg', placeholder: 'myPlaceholder', disabled: true};