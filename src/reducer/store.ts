import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./messageReducer";
import {postReducer} from "./postReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

export type RootStateType = ReturnType<typeof reducers>;

let reducers = combineReducers({
    message: messageReducer,
    post: postReducer,
    user: userReducer,
    auth: authReducer
})
let store = createStore(reducers , applyMiddleware(thunk));

export default store