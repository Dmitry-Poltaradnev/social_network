import {useSelector} from "react-redux";
import {RootStateType} from "../reducer/store";
import {Redirect} from "react-router-dom";
import {Loader} from "../components/common/loader/Loader";
import React, {ComponentType} from "react";

export function WithAuthRedirect<T extends object>(WrappedComponent: ComponentType<T>) {
    const RedirectComponent = (props: React.ComponentProps<typeof WrappedComponent>) => {
        const {isAuth, isLoading} = useSelector((state: RootStateType) => state.auth)

        if (isLoading) {
            return <Loader/>;
        }

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <WrappedComponent {...props} />
    }
    return RedirectComponent
};




