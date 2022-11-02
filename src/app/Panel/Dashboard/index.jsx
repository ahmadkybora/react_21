import React from "react";
import { 
  Header,
  Footer,
  Widget,
  Form,
  InputForm
} from "../../../components";

const Dashboard = () => {
    return(
        <div>
            <Header />
            <Widget>
                <Form>
                    <InputForm 
                        label="First Name"
                        name="first_name"
                        />
                    <InputForm 
                        label="Last Name"
                        name="last_name"
                        />
                </Form>
            </Widget>
            <Footer />
        </div>
    )
}

export default Dashboard;