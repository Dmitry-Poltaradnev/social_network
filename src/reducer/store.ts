import {combineReducers, createStore} from "redux";
import {messageReducer} from "./messageReducer";
import {postReducer} from "./postReducer";
import {userReducer} from "./userReducer";

export type RootStateType = ReturnType<typeof reducers>;

let reducers = combineReducers({
    message: messageReducer,
    post: postReducer,
    user : userReducer
})
let store = createStore(reducers)

export default  store