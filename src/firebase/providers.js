import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        console.log({email, password, displayName});
        /* imported from firebaseAuth */ /* firebaseAuth is configurated by firebase */
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        console.log(resp);

        /* this ubdates user display name in firebase */
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch(error) {
        console.log(error);
        return {ok: false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}