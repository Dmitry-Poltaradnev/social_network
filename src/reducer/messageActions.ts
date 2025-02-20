import {ADD_NEW_MESSAGE} from "./messageReducer";

export type AddMessageType = {
    type: typeof ADD_NEW_MESSAGE,
    payload: string
}

export const addNewMessage = (text: string): AddMessageType => {
    return {type: ADD_NEW_MESSAGE, payload: text};
}