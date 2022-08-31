import cCard from './card.component.vue'
import '../../style.css'

export default  {
    title: 'Components/cCard',
    component: cCard,
}

export const Default = () => ({
    components: {cCard},
    template:
            `
                <div class="">
                <c-card>
                  <h1 class="text-black">Default text</h1>
                </c-card>
                </div>
            `
})
