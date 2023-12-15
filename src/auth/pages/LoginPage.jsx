import { Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            <Grid item className="grid--item"
                xs={3}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

                <Typography variant="h5" sx={{mb:1}}>Login</Typography>

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
                        fullWidth></TextField>
                    </Grid>

                </form>

            </Grid>

        </Grid>
    )
}