import cButton from './button.component.vue';
import '../../../style.css'

export default {
    title: 'Forms/cButton',
    component: cButton,
    argTypes: {
        buttonState: {
            options: ['primary', 'second', 'danger', 'success'],
            control: {type: 'radio'},
        },
        buttonType: {
            options: ['filled', 'ghost', 'borderless'],
            control: {type: 'radio'},
        }
    }
}

export const Default = (args) => ({
    components: {cButton},
    setup() {
        return {args}
    },
    template:
        `
          <div style="width: 250px">
          <c-button v-bind="args">Click Me</c-button>
          </div>`
})