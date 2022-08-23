import {reactive, watch} from 'vue';
import { useRouter } from 'vue-router'
import { validateField } from '../../../hook/rules.js';

export const useLogin = () => {
    const router = useRouter()

    const form = reactive({
        nick: '',
        password: ''
    })

    const errorMsg = reactive({
        nick: '',
        password: '',
    })

    watch(() => form.nick, newValue => {
        errorMsg.nick = validateField('nick', newValue, 3)
    })

    watch(() => form.password, newValue => {
        errorMsg.password = validateField('password', newValue, 6)
    })
    
    const loginUser = () => {
        errorMsg.nick = validateField('nick', form.nick, 3)
        errorMsg.password = validateField('password', form.password, 6)
        if(errorMsg.nick === '' && errorMsg.password === '') {
            console.log('jest git')
        }
    }

    const goToRegisterPage = () => {
        router.push({name: 'Register'})
    }

    return {
        form,
        errorMsg,
        loginUser,
        goToRegisterPage
    }
}