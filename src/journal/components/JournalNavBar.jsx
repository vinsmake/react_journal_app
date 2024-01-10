import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";

export const JournalNavBar = ({drawerWidth = 240}) => {


    const dispatch = useDispatch();

    const onLogut = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
        className='animate__animated animate__fadeInDown animate__faster'
        position="fixed"
        sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`}
        }}
        >

            <Toolbar>
                <IconButton
                    color="inherit"
                    edge='start'
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuOutlined/>
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="H6" noWrap component='div'>Journal App</Typography>
                </Grid>

                <IconButton onClick={onLogut} color="error">
                    <LogoutOutlined/>
                </IconButton>

            </Toolbar>

        </AppBar>
    )
}