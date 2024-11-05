export const addNewMessage = (text: string) => {
    return({type: 'ADD-NEW-MESSAGE', payload: {text}});
}