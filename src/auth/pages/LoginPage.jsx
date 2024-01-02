import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as routerLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"
import { useMemo } from "react"

export const LoginPage = () => {

    /* we get this to block the buttons when we're loging with google popup */
    const {status, errorMessage} = useSelector(state => state.auth)
    /* If status is checking, then TRUE, if false, obtain new valor */

    
    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

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
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    ></TextField>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <Button disabled={isAuthenticating} type="submit" variant={'contained'} fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant={'contained'} fullWidth>
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