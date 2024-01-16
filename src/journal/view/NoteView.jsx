import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    "we change active to note, so we know is the active note"
    const {active: activeNote, messageSaved, isSaving} = useSelector(state => state.journal)

    const {body, title, date, onInputChange, formState} = useForm(activeNote)

    /* here we get the date and format it */
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    /* we convert the active note to the setted note, so we can save it next */
    useEffect(() => {
      dispatch(setActiveNote(formState));
    }, [formState])

    /* we're creating a message when the note is saved or updated */
    useEffect(() => {
      if (messageSaved.length > 0) {
        /* this is a sweetAlert2 item */
        Swal.fire('Note updated', messageSaved, 'success')
      }

    }, [messageSaved])
    
    
    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    /* we upload images with this */
    const fileInputRef = useRef();
    const onFileInputChange = ({target}) => {
        /* if nothing is selected, exit */
        if(target.files === 0) return;

        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }


    return (
        <Grid className='animate__animated animate__fadeIn' container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
            </Grid>
            <Grid item>

            {/* To upload filesm we're using ref so we can use input without seeing it */}
            <input
            ref={fileInputRef}
            onChange={onFileInputChange}
            type="file"
            multiple
            style={{display: 'none'}}
            />
            <IconButton
            color="primary"
            disabled={isSaving}
            /* here we're simulating a click in the input behind */
            onClick={()=>fileInputRef.current.click()}
            >
            <UploadOutlined/>
            </IconButton>

                <Button
                disabled={isSaving}
                onClick={onSaveNote}
                color="primary"
                sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* Image gallery */}
            <ImageGallery images={activeNote.imageUrls}/>

        </Grid>
    )
}