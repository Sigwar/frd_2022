export const isRequired = (value) => {
    return value && value.trim()
}

export const minChars = (value, min) => {
    return value.length < min
}
export const validateEmail = (email) => {
    const validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return !email.match(validRegex)
};

export const validateField = (field, newValue, min) => {
    if(!newValue) {
        return `${field} is required`
    } else if (newValue < min) {
        return `${field} is to short`
    } else {
        return ''
    }
}

export const validateSame = (filed, a, b) => {
    return a !== '' && a === b ? '' : `${filed} do not match`
}