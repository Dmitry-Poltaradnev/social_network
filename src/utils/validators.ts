type ValidatorType = (value: string) => string | undefined

export const required: ValidatorType = (value) => {
    if (value && value.trim()) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number): ValidatorType => (value) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
};