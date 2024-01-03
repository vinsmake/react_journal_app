import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as routerLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"

/* So the form knows what data do we need, not necesarily this way */
const formData = {
    email: '',
    password: '',
    displayName: ''
}

/* the validations we're gonna do */
const formValidations = {
    email: [(value) => value.includes('@'), 'Email must be real'],
    password: [(value) => value.length >= 6, 'Passwor must be 6 letters or long'],
    displayName: [(value) => value.length >= 1, 'Name is required']
}

export const RegisterPage = () => {
    
    
    const [formSubmited, setFormSubmited ] = useState(false);

    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        displayNameValid,
        passwordValid,
        emailValid
        } = useForm(formData, formValidations);


        console.log(displayNameValid);


    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmited(true);
        console.log(formState);
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
                        error={!!displayNameValid && formSubmited}
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
                        error={!!emailValid && formSubmited}
                        helperText={emailValid}
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
                        error={!!passwordValid && formSubmited}
                        helperText={passwordValid}
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