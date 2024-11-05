export const addPost = (text: string) => {
    return({type: 'ADD-POST', payload: {text}});
}
export const deletePost = (id: string) => {
    return({type: 'DELETE-POST', payload: {id}});
}