export const addPost = (text: string) => {
    return ({type: 'ADD-POST', text});
}
export const deletePost = (id: string) => {
    return ({type: 'DELETE-POST', payload: {id}});
}