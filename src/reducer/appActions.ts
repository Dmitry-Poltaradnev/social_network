import {SET_INITIALIZED} from "./appReducer";

type SetInitializedActionType = {
    type: typeof SET_INITIALIZED;
}

export const setInitialized = (): SetInitializedActionType => {
    return {type: SET_INITIALIZED};
}