import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as routerLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"

/* So the form knows what data do we need, not necesarily this way */
const formData = {
    email: '',
    password: '',
    displayName: ''
}

/* the validations we're gonna do */
const formValidations = {
    email: [(value) => value.includes('@'), 'Email not valid, please check'],
    password: [(value) => value.length >= 6, 'Passwor must be 6 letters or long'],
    displayName: [(value) => value.length >= 1, 'Name is required']
}

export const RegisterPage = () => {

    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        displayNameValid,
        passwordValid
        } = useForm(formData, formValidations)


        console.log(displayNameValid);


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
    }


    return (
        <AuthLayout title='Sign up'>
            <form onSubmit={onSubmit}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField label='Full name'
                        type="text"
                        placeholder="Jonh Snow"
                        fullWidth
                        name="displayName"
                        value={displayName}
                        onChange={onInputChange}
                        error={!displayNameValid}
                        helperText={displayNameValid}

                    ></TextField>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField label='email'
                        type="email"
                        placeholder="jonhsnow@winterfell.com"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    ></TextField>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField label='Password'
                        type="password"
                        placeholder="daenerys123"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    ></TextField>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12}>
                        <Button type="submit" variant={'contained'} fullWidth>
                            Sign up
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction={'row'} justifyContent={'end'}>
                    <Link component={routerLink} color={'inherit'} to='/auth/login'>
                        <Typography>already have an account?</Typography>
                    </Link>
                </Grid>

            </form>
        </AuthLayout>

    )
}