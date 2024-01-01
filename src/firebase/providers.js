import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


/* Start google sign in */
export const signInWithGoogle = async() => {
    
    try {
        /* use a popup to obtain credentials */
        const result = await signInWithPopup(FirebaseAuth, googleProvider );

        /* use obtained credentials to google sign in */
        const credentials = GoogleAuthProvider.credentialFromResult(result);

        console.log({credentials})

    } catch (error) {
        console.log(error)
    }
}