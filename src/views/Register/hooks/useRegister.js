import {reactive, watch} from 'vue';
import axios from 'axios'
import {minChars, validateEmail, validateField, validateSame} from '../../../hook/rules.js';
import { useRouter } from 'vue-router'

export const useRegister = () => {
    const router = useRouter()

    const min = reactive({
        nick: 3,
        password: 6
    })

    const form = reactive({
        email: '',
        nick: '',
        password: '',
        repeatPassword: '',
    });

    const errorMsg = reactive({
        email: '',
        password: '',
        nick: '',
        repeatPassword: ''
    });

    watch(() => form.email, newValue => {
        validateEmail(newValue) ? errorMsg.email = 'wrong email' : errorMsg.email = ''
    })

    watch(() => form.nick, newValue => {
        minChars(newValue, min.nick) ? errorMsg.nick = `not enough characters` : errorMsg.nick = ''
    })

    watch(() => form.repeatPassword, newValue => {
        errorMsg.repeatPassword = validateField('password', newValue, min.password)
        errorMsg.repeatPassword = validateSame('password', newValue, form.repeatPassword)
    })

    watch(() => form.password, newValue => {
        errorMsg.password = validateField('password', newValue, min.password)
        errorMsg.password = validateSame('password', newValue, form.repeatPassword)
    })

    const validateForm = () => {
        validateEmail(form.email) ? errorMsg.email = 'wrong email' : errorMsg.email = ''
        minChars(form.nick, min.nick) ? errorMsg.nick = `not enough characters` : errorMsg.nick = ''

        errorMsg.password = validateField('password', form.password, min.password)
        errorMsg.password = validateSame('password', form.password, form.repeatPassword)

        errorMsg.repeatPassword = validateField('repeatPassword', form.repeatPassword, min.password)
        errorMsg.repeatPassword = validateSame('password', form.password, form.repeatPassword)
    }

    const registerUser = async () => {
        validateForm()
        if ((errorMsg.password === '') &&
            (errorMsg.repeatPassword  === '') &&
            (errorMsg.email === '') &&
            (errorMsg.nick === '')) {
            try {
                await axios.post('/api/register', form)
                //TODO NOTYFIKACJA Z MSG SUCCESS
            } catch (e) {
                //TODO NOTYFIKACJA Z MSG ERROR
            }
        }
    }

    const goToLoginPage = () => {
        router.push({name: 'Login'})
    }

    return {
        form,
        errorMsg,
        registerUser,
        goToLoginPage
    }
}