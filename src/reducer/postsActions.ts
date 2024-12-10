import {ADD_POST, DELETE_POST} from "./postReducer";

export const addPost = (text: string) => {
    return ({type: ADD_POST, text});
}
export const deletePost = (id: string) => {
    return ({type: DELETE_POST, payload: {id}});
}