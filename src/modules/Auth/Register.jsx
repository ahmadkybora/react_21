import React from "react";
import { 
    Widget,
    Form,
    InputForm,
    SubmitButton
} from "../../components";

const Register = () => {
    return (
        <Widget label="Register">
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
        </Widget>
    )
}

export default Register;