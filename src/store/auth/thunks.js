
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
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
        if(!result.ok) return dispatch(logout(result));
        /* ELSE, login with result data */
        dispatch(login(result))


    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        
        /* this is used only to block buttons. */
        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ))

    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        /* clear the notes when logout */
        dispatch(clearNotesLogout())
        dispatch( logout() );

    }
}