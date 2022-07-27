import cInput from './input.component.vue';
import '../../../style.css';

export default {
    title: "cInput"
}

export const simple = () => ({
    components: { cInput },
    template: "<c-input />"
})

export const simpleWithValue = () => ({
    components: { cInput },
    template: "<c-input value='test test testtest'/>"
})