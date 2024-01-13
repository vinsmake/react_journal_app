import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"

export const SideBarItem = ({note}) => {

    /* we're cutting the title if it's too long */
    const newTitle = useMemo(() => {
        return note.title.length > 40
        ? note.title.substring(0,40) + '...'
        : note.title
    }, [note.title])

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={note.body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}