import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./messageReducer";
import {postReducer} from "./postReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";

export type RootStateType = ReturnType<typeof reducers>;

let reducers = combineReducers({
    message: messageReducer,
    post: postReducer,
    user: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})
let store = createStore(reducers, applyMiddleware(thunk));

export default store