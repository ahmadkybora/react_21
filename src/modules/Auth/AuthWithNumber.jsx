import React from "react";
import { 
    Widget,
    Form,
    InputForm,
    SubmitButton
} from "../../components";

const AuthWithNumber = ({ ...otherProps }) => {
    return(
        <Widget label="LoginWithNumber">
            <Form>
                <InputForm 
                    label="Phone Number"
                    name="Phone_number"
                    />
                <SubmitButton 
                    title="Confirm"
                    variant="contained"
                    />
            </Form>
        </Widget>
    )
}

export default AuthWithNumber;