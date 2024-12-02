export const required = (value: any) => {
    if (value && value.trim()) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
};