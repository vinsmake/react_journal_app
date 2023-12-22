import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as routerLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
                            <form>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='email'
                        type="email"
                        placeholder="name@server.com"
                        fullWidth></TextField>
                    </Grid>
                    
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Password'
                        type="password"
                        placeholder="mypassword123"
                        fullWidth/>
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button variant={'contained'} fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant={'contained'} fullWidth>
                                <Google/> <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                <Grid container direction={'row'} justifyContent={'end'}>
                    <Link component={routerLink} color={'inherit'} to='/auth/signup'>
                    Sign up
                    </Link>
                </Grid>

                </form>
        </AuthLayout>


    )
}