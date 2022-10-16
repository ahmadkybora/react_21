import './App.css';
import React, { Component } from 'react';
// import Widget from './components/Widget';
// import Header from './components/Header';
// import Form from './components/Form';
// import Input from './components/Input';
// import Button from './components/Buttons';
// import ContainerHeader from './components/Container';
// import SelectOption from './components/SelectOption';
// import TextArea from './components/TextArea';
// import Search from './Ncomponents/Search';
import { Button, Search } from './components'
import JSONData from './components/Styles/styles.json';
import { BtnCircleBlue, BtnCircleRed } from "./components/Styles";

class App extends Component {
  state = {
    data: [
      "Material Tailwind HTML",
      "Material Tailwind React",
      "Material Tailwind Vue",
      "Material Tailwind Angular",
      "Material Tailwind Svelte",
    ],
    gender: [
      "Male",
      "Famale",
    ],
  }
  render (){
    return (
      <React.Fragment>
      <Button
        divStyle="flex items-baseline justify-between"
        style={BtnCircleBlue}
        type="submit"
        name="Login" />

      <Button
        divStyle="flex items-baseline justify-between"
        style={BtnCircleRed}
        type="submit"
        name="Login" />

     <Search                     
        divStyle="max-w-2xl mx-auto"
        style="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
        type="submit"
        name="Login"
      />

      </React.Fragment>
      // <React.Fragment> 

      //   <Header>
      //       React and Tailwind CSS in action1
      //     </Header>
      //   <Widget>
      //       <p>salam</p>
      //   </Widget>
      //   <Widget>
      //     <ContainerHeader 
      //       style="text-2xl font-bold text-center"
      //       title="Login to your account" 
      //     />
      //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      //         <Form 
      //           divStyle="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      //             <Input 
      //               label="UserName"
      //               divStyle="mt-4"
      //               style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //               name="username"
      //               type="text"
      //             />
      //             <Input 
      //               label="Password"
      //               divStyle="mt-4"
      //               style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //               name="password"
      //               type="password"
      //             />
      //             <Button
      //               divStyle="flex items-baseline justify-between"
      //               style="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
      //               type="submit"
      //               name="Login">
      //             </Button>
      //         </Form>
      //       </div>
      //   </Widget>

      //   <Widget>
      //     <ContainerHeader 
      //       style="text-2xl font-bold text-center"
      //       title="Register to your account" 
      //     />
      //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      //         <Form 
      //           divStyle="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      //             <div className="flex mb-4">
      //               <Input 
      //                 label="FirstName"
      //                 divStyle="mt-4 w-1/2 mr-1"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="fitstName"
      //                 type="text"
      //               />
      //               <Input 
      //                 label="LastName"
      //                 divStyle="mt-4 w-1/2 mr-1"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="lastName"
      //                 type="text"
      //               />
      //             </div>
      //             <div className="flex mb-4">
      //               <Input 
      //                 label="UserName"
      //                 divStyle="mt-4 w-1/2 mr-1"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="username"
      //                 type="text"
      //               />
      //               <Input 
      //                 label="Email"
      //                 divStyle="mt-4 w-1/2 mr-1"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="email"
      //                 type="email"
      //               />
      //             </div>
      //             <div className="flex mb-4">
      //               <Input 
      //                 label="Password"
      //                 divStyle="mt-4 w-1/2 mr-1"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="password"
      //                 type="password"
      //               />
      //               <Input 
      //                 label="Password Confirmation"
      //                 divStyle="mt-4 w-1/2 mr-1"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="password_confirmation"
      //                 type="password"
      //               />
      //             </div>
      //             <div className="flex mb-4">
      //               <SelectOption 
      //                 label="Select Version"
      //                 divStyle="flex w-full items-end gap-4 w-86"
      //                 name=""
      //                 value={this.state.data}
      //               />
      //               <SelectOption 
      //                 label="Select Gender"
      //                 divStyle="flex w-full items-end gap-4 w-86"
      //                 name=""
      //                 value={this.state.gender}
      //               />
      //             </div>
      //             <TextArea 
      //                 label="optional"
      //                 divStyle="flex w-full items-end gap-4 w-86"
      //                 style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      //                 name="description"
      //                 rows="7"
      //                 cols="7"
      //             />
      //             <Button
      //               divStyle="flex items-baseline justify-between"
      //               style="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
      //               type="submit"
      //               name="Login"
      //               />
      //         </Form>
      //       </div>
      //   </Widget>
      //   <Widget>
      //     <Search                     
      //       divStyle="max-w-2xl mx-auto"
      //       style="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
      //       type="submit"
      //       name="Login"
      //       />
      //   </Widget>
      // </React.Fragment>
    );
  }
}

export default App;
