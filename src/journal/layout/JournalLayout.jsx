import { Box, Toolbar } from "@mui/material"
import { JournalNavBar } from "../components/JournalNavBar";
import { JournalSideBar } from "../components/JournalSideBar";


const drawerWidth= 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}} >

            <JournalNavBar drawerWidth={drawerWidth}/>

            <JournalSideBar drawerWidth={drawerWidth}/>

            <Box component='main'
            sx={{flexGrow: 1, p:3}}
            >
                {/* Only as a padding top */}
                <Toolbar/>
                {children}
            </Box>
        </Box>
    )
}