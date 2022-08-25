import {reactive, watch} from 'vue';
import axios from 'axios'
import {rulesSettingsChars, validateEmail, validateField, validateSame} from '../../../hook/rules';
import { useRouter } from 'vue-router'
import {TRegisterForm, TRulesSettings} from './register.types';

export const useRegister = () => {
    const router = useRouter()

    const rulesSettings: TRulesSettings = reactive({
        nick: 3,
        password: 6
    })

    const form: TRegisterForm = reactive({
        email: '',
        nick: '',
        password: '',
        repeatPassword: '',
    });

    const errorMsg: TRegisterForm = reactive({
        email: '',
        password: '',
        nick: '',
        repeatPassword: ''
    });

    watch(() => form.email, newValue => {
        validateEmail(newValue) ? errorMsg.email = 'wrong email' : errorMsg.email = ''
    })

    watch(() => form.nick, newValue => {
        rulesSettingsChars(newValue, rulesSettings.nick) ? errorMsg.nick = `not enough characters` : errorMsg.nick = ''
    })

    watch(() => form.repeatPassword, newValue => {
        errorMsg.repeatPassword = validateField('password', newValue, rulesSettings.password)
        errorMsg.repeatPassword = validateSame('password', newValue, form.repeatPassword)
    })

    watch(() => form.password, newValue => {
        errorMsg.password = validateField('password', newValue, rulesSettings.password)
        errorMsg.password = validateSame('password', newValue, form.repeatPassword)
    })

    const validateForm = () => {
        validateEmail(form.email) ? errorMsg.email = 'wrong email' : errorMsg.email = ''
        rulesSettingsChars(form.nick, rulesSettings.nick) ? errorMsg.nick = `not enough characters` : errorMsg.nick = ''

        errorMsg.password = validateField('password', form.password, rulesSettings.password)
        errorMsg.password = validateSame('password', form.password, form.repeatPassword)

        errorMsg.repeatPassword = validateField('repeatPassword', form.repeatPassword, rulesSettings.password)
        errorMsg.repeatPassword = validateSame('password', form.password, form.repeatPassword)
    }

    const registerUser = async (): Promise<void> => {
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

    const goToLoginPage = (): void => {
        router.push({name: 'Login'})
    }

    return {
        form,
        errorMsg,
        registerUser,
        goToLoginPage
    }
}