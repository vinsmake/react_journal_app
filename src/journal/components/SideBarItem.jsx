import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({note}) => {
    /* we read the note data */
    const {title = '', body, id, date, imageUrls = []} = note;

    /* select and watch the note, we're doing this by changing "active: null" to out note's data */
    const dispatch = useDispatch();
    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    /* we're cutting the title if it's too long */
    const newTitle = useMemo(() => {
        return title.length > 40
        ? title.substring(0,40) + '...'
        : title
    }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}