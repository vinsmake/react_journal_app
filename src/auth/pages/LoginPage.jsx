import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as routerLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"

export const LoginPage = () => {

    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm({
        email: 'vinsmakedev@gmail.com',
        password: 'mypassword123'
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({email, password})
        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField label='email'
                        type="email"
                        placeholder="name@server.com"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}></TextField>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField label='Password'
                        type="password"
                        placeholder="mypassword123"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    ></TextField>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <Button type="submit" variant={'contained'} fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button onClick={onGoogleSignIn} variant={'contained'} fullWidth>
                            <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
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