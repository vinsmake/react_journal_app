
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../view/NothingSelectedView"
import { NoteView } from "../view/NoteView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

    return (
    <JournalLayout >
{/*         <Typography variant="h1">JournalPage </Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat expedita libero temporibus molestias doloribus, repudiandae laudantium iure inventore ratione? Labore dicta voluptas illum modi molestiae, molestias quia soluta odit.</Typography>
 */}
    <NothingSelectedView/>
    {/* <NoteView/> */}

    <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
    )
}