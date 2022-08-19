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
