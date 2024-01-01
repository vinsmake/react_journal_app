
import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

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
        console.log({result})

    }
}