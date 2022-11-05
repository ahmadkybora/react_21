import React from "react";
import { 
    Widget,
    Form,
    InputForm,
    SubmitButton
} from "../../components";

const Login = () => {
    return (
        <Widget label="Login">
            <Form>
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

export default Login;