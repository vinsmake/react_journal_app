import { Box } from "@mui/material"
import { JournalNavBar } from "../components/JournalNavBar";


const drawerWidth= 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}} >

            <JournalNavBar/>


            <Box component='main'
            sx={{flexGrow: 1, p:3}}
            >
                {children}
            </Box>
        </Box>
    )
}