import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


/* Start google sign in */
export const signInWithGoogle = async() => {
    
    try {
        /* use a popup to obtain credentials */
        const result = await signInWithPopup(FirebaseAuth, googleProvider );

        /* obtain data from the result's user */
        const {displayName, email, photoURL, uid} = result.user;

        return {
            /* Means that everything is fine with the function, personalized, not from firebase */
            ok: true,
            /* user info */
            displayName,
            email,
            photoURL,
            uid
        }




    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorMessage,
        }
    }
}