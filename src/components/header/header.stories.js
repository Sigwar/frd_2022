import cHeader from './header.component.vue';
import cButton from '../form/button/button.component.vue'
import '../../style.css'

export default {
    title: 'Components/cHeader',
    component: cHeader,
    argTypes: {
        title: 'my title',
        btnText: 'btn text'
    }
}

export const Default = (args) => ({
    components: {
        cHeader,
        cButton
    },
    setup() {
        return args
    },
    template: `
      <div style="width: 250px">
      <c-header v-bind="args" />
      </div>`
})
