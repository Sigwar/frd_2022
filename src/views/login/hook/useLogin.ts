import {reactive, watch} from 'vue';
import { useRouter } from 'vue-router'
import { validateField } from '../../../hook/rules';
import { TLoginForm } from './login.types'

export const useLogin = () => {
    const router = useRouter()

    const form: TLoginForm = reactive({
        nick: '',
        password: ''
    })

    const errorMsg: TLoginForm = reactive({
        nick: '',
        password: '',
    })

    watch(() => form.nick, newValue => {
        errorMsg.nick = validateField('nick', newValue, 3)
    })

    watch(() => form.password, newValue => {
        errorMsg.password = validateField('password', newValue, 6)
    })
    
    const loginUser = (): void => {
        errorMsg.nick = validateField('nick', form.nick, 3)
        errorMsg.password = validateField('password', form.password, 6)
        if(errorMsg.nick === '' && errorMsg.password === '') {
            console.log('jest git')
        }
    }

    const goToRegisterPage = (): void => {
        router.push({name: 'Register'})
    }

    return {
        form,
        errorMsg,
        loginUser,
        goToRegisterPage
    }
}