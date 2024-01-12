
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../view/NothingSelectedView"
import { NoteView } from "../view/NoteView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const {isSaving, active} = useSelector(state => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

    return (
    <JournalLayout >

      {/* here we are transforming active to a boolean, and we are creating an if statement */}
    {
      (!!active)
      ?<NoteView/>
      :<NothingSelectedView/>
    }


    <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
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