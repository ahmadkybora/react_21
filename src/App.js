import './App.css';
import React, { Component } from 'react';
import Widget from './components/Widget';
import Header from './components/Header';
import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';
import ContainerHeader from './components/ContainerHeader';

class App extends Component {
  render (){
    return (
      <React.Fragment>
        <Header>
            React and Tailwind CSS in action1
          </Header>
        <Widget>
            <p>salam</p>
        </Widget>
        <Widget>
          <ContainerHeader 
            style="text-2xl font-bold text-center"
            title="Login to your account" 
          />
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
              <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                  <Form>
                      <Input 
                        label="UserName"
                        divStyle="mt-4"
                        style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        name="username"
                        type="text"
                      />
                      <Input 
                        label="Password"
                        divStyle="mt-4"
                        style="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        name="password"
                        type="password"
                      />
                      <Button
                        divStyle="flex items-baseline justify-between"
                        style="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                        type="submit"
                        name="Login">
                      </Button>
                  </Form>
            </div>
          </div>
        </Widget>
      </React.Fragment>
    );
  }
}

export default App;
