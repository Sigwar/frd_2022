import cInput from './input.component.vue';
import { Meta, StoryFn } from "@storybook/vue3";
import '../../../style.css';

export default {
    title: 'cInput',
    component: cInput
} as Meta<typeof cInput>

export const Simple: StoryFn<typeof cInput> = () => ({
    components: { cInput },
    template:
        `<div style="width: 250px">
          <c-input /> 
        </div>`
})

export const SimpleWithPlaceholder: StoryFn<typeof cInput> = () => ({
    components: { cInput },
    template:
        `<div style="width: 250px">
          <c-input placeholder="myPlaceholder" :limit="3"/> 
        </div>`
})
