import {reactive, watch} from 'vue';
import { useRouter } from 'vue-router'
import { validateField } from '../../../hook/rules';
import { TLoginForm } from './login.types'

export const useLogin = () => {
    const router = useRouter()

    const form: TLoginForm = reactive({
        login: '',
        password: ''
    })

    const errorMsg: TLoginForm = reactive({
        login: '',
        password: '',
    })

    watch(() => form.login, newValue => {
        errorMsg.login = validateField('login', newValue, 3)
    })

    watch(() => form.password, newValue => {
        errorMsg.password = validateField('password', newValue, 6)
    })

    const loginUser = (): void => {
        errorMsg.login = validateField('login', form.login, 3)
        errorMsg.password = validateField('password', form.password, 6)
        if(errorMsg.login === '' && errorMsg.password === '') {
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
