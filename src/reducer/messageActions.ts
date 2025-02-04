import {ADD_NEW_MESSAGE} from "./messageReducer";

type AddMessageType = {
    type: typeof ADD_NEW_MESSAGE,
    text : string
}

export const addNewMessage = (text: string) : AddMessageType => {
    return ({type: ADD_NEW_MESSAGE, text});
}