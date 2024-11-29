import {useSelector} from "react-redux";
import {RootStateType} from "../reducer/store";
import {Redirect} from "react-router-dom";
import {Loader} from "../components/common/loader/Loader";

export const WithAuthRedirect = (WrappedComponent: any) => {
    const RedirectComponent = (props: any) => {
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




