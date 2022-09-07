import { ref } from 'vue'
import cModal from './modal.component.vue';
import '../../style.css';

export default {
  title: 'Components/Modal',
  components: {
    cModal
  }
}

export const Default = (args) => ({
  components:{ cModal },
  setup() {
    const modal = ref(false)
    const changeStateOfModal = () => {
      modal.value = !modal.value
    }
    return {
      args,
      modal,
      changeStateOfModal
    }
  },
  template:
  `
  <div class="relative">
  
    <p @click="changeStateOfModal">Show Modal</p>
    
    <c-modal :show-modal="modal" 
             title="My modal title"
             @close-modal="changeStateOfModal"/>
  </div>
  `
})
