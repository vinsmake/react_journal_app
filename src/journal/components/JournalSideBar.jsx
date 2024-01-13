import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

export const JournalSideBar = ({ drawerWidth = 240 }) => {

    const {displayName} = useSelector(state => state.auth)
    const {notes} = useSelector(state => state.journal)

    return (
        <Box 
        className='animate__animated animate__fadeInLeftBig'
            component='nav'
            sx={{
                width: { sm: drawerWidth }, flexShrink: { sm: 0 }
            }}
        >

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {/* Here we create every sidebar note view, the key is bein used inside the component */}
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} note={note}/>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}