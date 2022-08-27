import cButton from './button.component.vue';
import '../../../style.css'

export default defineComponent( {
    title: 'Components/Forms/cButton',
    component: cButton,
    argTypes: {
        disabled: {
            control: { type: 'boolean' }
        },
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
