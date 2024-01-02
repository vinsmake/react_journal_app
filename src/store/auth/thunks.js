
import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async( dispatch ) => {

        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        /* we get the user data from the function in the provider */
        const result = await signInWithGoogle();

        /* If login fail, then logout */
        if(!result.ok) return dispatch(logout(result.errorMessage));
        /* ELSE, login with result data */
        dispatch(login(result))


    }
}