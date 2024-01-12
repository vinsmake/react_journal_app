import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "./loadNotes";


export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch(savingNewNote());

        const {uid} = getState().auth;

        /* The note we're creating */
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        /* here we are accesing to our database and selecting what we're creating in it */
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        /* here we're convertir the newNote to a newDoc */
        await setDoc(newDoc, newNote);

        /* we use the created id to put it in out note. */
        newNote.id = newDoc.id;

        /* we send the new note as a payload, to add it and to show it */
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        /* we're getting the userId, wich should be in the state because user is authenticated */
        const {uid} = getState().auth;

        /* in case of error */
        if(!uid) throw new Error('El UID no existe')

        /* we load the notes */
        const notes = await loadNotes(uid);
        /* and we set those notes */
        dispatch(setNotes(notes))

    }
}