import React from "react";
import { 
    Widget,
    Form,
    InputForm,
    SubmitButton
} from "../../components";
import Grid from '@mui/material/Grid';
import translate from "../../i18n/translate";

const AuthWithNumber = ({ ...otherProps }) => {
    return(
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
                            label="Phone Number"
                            name="Phone_number"
                            />
                        <SubmitButton 
                            title={translate("confirm")}
                            variant="contained"
                            />
                    </Form>

                </Grid>   
            
            </Grid> 
        </Widget>
    )
}

export default AuthWithNumber;