import {ADD_NEW_MESSAGE} from "./messageReducer";

export const addNewMessage = (text: string) => {
    return ({type: ADD_NEW_MESSAGE, text});
}