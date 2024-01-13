import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"

export const loadNotes = async(uid = '') => {

        /* in case that we don't get an UID */
        if(!uid) throw new Error('El UID no existe')

        /* we're getting the collection of notes from firebasedb, this should be 'collection', or 'document' in case we need one */
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)

        /* we're converting our documents to a variable */
        const docs = await getDocs(collectionRef);

        /* create a array of the documents */
        const notes = [];
        /* for each document inside the documents, add it to our array  */
        docs.forEach( doc => {
            notes.push({id: doc.id, ...doc.data()});
        })

        /* Finally, we send our array */
        return notes;
}