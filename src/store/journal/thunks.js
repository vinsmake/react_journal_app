

export const startNewNote = () => {
    return async(dispatch) => {
        

        /* The note we're creating */
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
    }
}