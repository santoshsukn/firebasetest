import React from 'react';
import { Switch,BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Patients from "./patients";
import Userlist from "./userlist";
import PatientUpdate from "./patientUpdate";
import HCP from "./hcp";
import Logout from "./logout";
import Patient from "./patient";
import Register from "./register";
import testRegister from "./testRegister";
import Dashboard from "./dashboard";
import {Provider} from 'react-redux';



import store from './store';
import FADLogin from "./FADLogin";
import login from "./login";
import Alert from './components/alert';
import Header from './header';
class  App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userLoggedInflag : false
    }
  }
  render(){
    return (
      <Provider store={store}>
        
        <Router>
            <div className="container">
              <Alert/>
              {this.state.userLoggedInflag == true ? <Header/> : ""}
              
              <Switch>
                {/*//<IndexRoute component={Login} />*/}
                <Route path="/" exact component={FADLogin} />
                <Route path="/login" exact component={login} />
                <Route path="/patients" exact component={Patients} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/userlist/" exact component={Userlist} />
                <Route path="/patientUpdate"  component={PatientUpdate} />
                <Route path="/register" exact component={Register} />
                <Route path="/testRegister" exact component={testRegister} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/hcp"  component={HCP} />
                <Route path="/patient" exact component={Patient} />
              </Switch>
            </div>
          </Router>
      </Provider>
    );
  } 
}


export default App;
