import { createSlice } from '@reduxjs/toolkit'

export const JournalSlice = createSlice({
    name: 'journal',
    initialState: {
        /* this is a boolean to know if we're saving */
        isSaving: true,
        messageSaved: '',
        /* an object where our notes are gonna be saved */
        notes: [],
        active: null,
        /* this is the note we're reading */
        //        active: {
        //            id: '1',
        //            title: '',
        //            date: 123,
        //            imageUrls: [],
        //        }
    },
    reducers: {
        /*(C) Reducer to create a new note */
        addNewEmptyNote: (state, action) => {

        },
        /*(R) Reducer to click and see active note */
        setActiveNote: (state, action) => {

        },
        /*(R) To charge and read the notes */
        setNotes: (state, action) => {

        },
        /*(U) to save notes */
        setSaving: (state) => {

        },
        /*(U) To ubdate note */
        updateNote: (state, action) => {

        },
        /* (D) To delete notes */
        deleteNoteById: (state, action) => {

        }
    }
})

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
} = JournalSlice.actions