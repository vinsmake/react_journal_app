import { createSlice } from '@reduxjs/toolkit'

export const JournalSlice = createSlice({
    name: 'journal',
    initialState: {
        /* this is a boolean to know if we're saving */
        isSaving: false,
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
        /* we use this to change the state, so the user won't create more than 1 note at time */
        savingNewNote: (state)=> {
            state.isSaving = true;
        },
        /*(C) Reducer to create a new note */
        addNewEmptyNote: (state, action) => {
            /* the payload es our new note */
            state.notes.push(action.payload);

            state.isSaving = false;
        },
        /*(R) Reducer to click and see active note */
        setActiveNote: (state, action) => {
            /* out payload is a note, we change our active data to our selected note's data */
            state.active = action.payload;
            state.messageSaved = '';
        },
        /*(R) To charge and read the notes */
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        /*(U) to save notes */
        setSaving: (state) => {
            state.isSaving = true;

            state.messageSaved = '';
        },
        /*(U) To ubdate note */
        /* the payload is and updated note */
        updateNote: (state, action) => {
            state.isSaving = false;
            /* iteramos la lista de notas, y si alguna tiene la misma id, la actuliza, de lo contrario, la develve como la leyo, sin cambio */
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note;
            })

            state.messageSaved = `${action.payload.title} updated ;)`
        },
        /* (RU) We update and read the notes */
        setPhotosToActiveNote: (state, action) => {
            /* here we access to the active images, then spreeds the previous urls with the news, so we can gave both */
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state)=>{
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        /* (D) To delete notes */
        deleteNoteById: (state, action) => {
            state.active = null;
            /* we're filtering the notes to get only those who are diferenten to the payload note. usign redux toll kit, we return all the notes */
            state.notes = state.notes.filter(note => note.id !== action.payload );
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
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout
} = JournalSlice.actions