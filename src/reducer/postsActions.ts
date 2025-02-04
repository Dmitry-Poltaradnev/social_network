import {ADD_POST, DELETE_POST} from "./postReducer";

export type AddPostActionType = {
    type: typeof ADD_POST,
    payload: { text: string }
}

export type DeletePostActionType = {
    type: typeof DELETE_POST,
    payload: { id: string }
}

export const addPost = (text: string): AddPostActionType => {
    return ({type: ADD_POST, payload: {text}});
}
export const deletePost = (id: string): DeletePostActionType => {
    return ({type: DELETE_POST, payload: {id}});
}