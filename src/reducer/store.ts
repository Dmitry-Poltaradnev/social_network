import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {messageReducer} from "./messageReducer";
import {postReducer} from "./postReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer} from 'redux-form'
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

// Расширение типа `window` для DevTools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

// let store = createStore(reducers, applyMiddleware(thunk));

export default store