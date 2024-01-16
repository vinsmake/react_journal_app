import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "./loadNotes";
import { fileUpload } from "./fileUpload";


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

export const startSaveNote = () => {
    return async(dispatch, getState) => {

        /* to mark the start of the acction and change the state */
        dispatch(setSaving());

        /* we get the user id */
        const {uid} = getState().auth;

        /* we get the active note */
        const {active: activeNote} = getState().journal;

        /* we spread all the activeNote data (title, body, date, etc...) */
        const noteToFireStore = {...activeNote};

        /* we delete the id, because if we save this id, firebase will create that id */
        delete noteToFireStore.id;

        /* we get the document to edit */
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)

        /* we select the document we're gonna access, set the noteToFireStore as the new note, and finally we merge the data, merge makes that if there are data in the old note that doesn't exist in the new note, doesn't delete it, just add the new data.  */
        await setDoc(docRef, noteToFireStore, {merge: true})

        /* we send the id that we're using right now */
        dispatch(updateNote(activeNote))
    }
}

export const startUploadingFiles = (files = []) => {
    return async(dispatch) => {
        /* we put our app in a charging mode */
        dispatch(setSaving());

        /* create an object that can upload multiple files */
        const fileUploadPromises = [];
        for (const file of files) {
            /* no disparamos la funcion, solo creamos un arreglo de promesas, es decir, estamos haciendo un arreglo de funciones con cada archivo */
            fileUploadPromises.push(fileUpload(file))
        }

        /* es aqui donde las estamos ejecutando y nos devuelve un array de urls */
        const photosUrls = await Promise.all(fileUploadPromises);
        
        /* finally, we set the returned urls to our function that merges the new with the old photos */
        dispatch(setPhotosToActiveNote(photosUrls));

    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        /* first we get the userId */
        const {uid} = getState().auth;
        /* Second we get the active note */
        const {active: activeNote} = getState().journal;

        /* we create a url/path with that */
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)

        /* then, we delete the document of that ref/path/url */
        await deleteDoc(docRef);

        /* finally, we clear the store (local data)*/
        dispatch(deleteNoteById(activeNote.id))
    }
}