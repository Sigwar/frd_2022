import {reactive, watch} from 'vue';
import {minChars, validateEmail} from "./rules";

export const useRegister = () => {

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
        if (newValue.length < min.password) {
            errorMsg.repeatPassword = 'password is to weak'
        } else if (newValue !== form.password) {
            errorMsg.repeatPassword = 'password do not match'
        } else {
            errorMsg.repeatPassword = ''
            errorMsg.password = ''
        }
    })

    watch(() => form.password, newValue => {
        if (newValue.length < min.password) {
            errorMsg.password = 'password is to weak'
        } else if (newValue !== form.repeatPassword) {
            errorMsg.password = 'password do not match'
        } else {
            errorMsg.repeatPassword = ''
            errorMsg.password = ''
        }

    })

    const validateForm = () => {
        validateEmail(form.email) ? errorMsg.email = 'wrong email' : errorMsg.email = ''
        minChars(form.nick, min.nick) ? errorMsg.nick = `not enough characters` : errorMsg.nick = ''
        if (form.password.length < min.password) {
            errorMsg.password = 'password is to weak'
        } else if (form.repeatPassword !== form.repeatPassword) {
            errorMsg.password = 'password do not match'
        } else {
            errorMsg.password = ''
        }
        if (form.password.length < min.password) {
            errorMsg.repeatPassword = 'password is to weak'
        } else if (form.password !== form.password) {
            errorMsg.repeatPassword = 'password do not match'
        } else {
            errorMsg.repeatPassword = ''
        }
    }

    const registerUser = () => {
        validateForm()
        if ((errorMsg.password === '') &&
            (errorMsg.repeatPassword  === '') &&
            (errorMsg.email === '') &&
            (errorMsg.nick === '')) {
            console.log('Jest OK')
        } else {
            console.log('Nie jest OK')
        }
    }

    return {
        form,
        errorMsg,
        registerUser
    }
}