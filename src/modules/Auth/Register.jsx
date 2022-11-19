import React from "react";
import { 
    Widget,
    Form,
    InputForm,
    SubmitButton
} from "../../components";
import Grid from '@mui/material/Grid';

const Register = () => {
    return (
        <Widget>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
                >

                <Grid item xs={3}>
                    <Form>
                        <InputForm 
                            label="First Name"
                            name="first_name"
                            />
                        <InputForm 
                            label="Last Name"
                            name="last_name"
                            />
                        <InputForm 
                            label="Email"
                            name="email"
                            />
                        <InputForm 
                            label="Password"
                            name="password"
                            />
                        <SubmitButton 
                            title="Confirm"
                            variant="contained"
                            />
                    </Form>
                </Grid>
            </Grid>
        </Widget>
    )
}

export default Register;