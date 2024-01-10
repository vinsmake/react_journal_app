import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";


export const startNewNote = () => {
    return async(dispatch, getState) => {

        console.log('starting new note');
        console.log('getting state...');
        console.log(getState());
        
        const {uid} = getState().auth;
        console.log('getting user id...');

        /* The note we're creating */
        console.log('Creating note...');
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        console.log('accessing to the database...');
        /* here we are accesing to our database and selecting what we're creating in it */
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        /* here we're convertir the newNote to a newDoc */
        console.log('saving note...');
        await setDoc(newDoc, newNote);
        console.log('note saved.');
    }
}