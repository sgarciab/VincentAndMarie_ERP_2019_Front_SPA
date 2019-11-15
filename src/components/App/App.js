import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import store from '../../redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import {setCurrentUser, logoutUser} from '../../redux/actions/authActions';


import Aux from './Hoc/Aux';
import Routes from './Routes/Routes';
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';

// Check token in localStorage
if(localStorage.accessToken){
  // Set auth token header auth
  setAuthToken(localStorage.accessToken);
  // Decode auth token and get user info
  let decoded = jwt_decode(localStorage.accessToken);
  // Dispatch user info
  store.dispatch(setCurrentUser(decoded))
  // Check for expire token
  const currentTime = Date.now() /1000;
  if(decoded.exp < currentTime){
    // Logout User
    store.dispatch(logoutUser());
    // TODO: Clear current profile
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {

    const {auth} = this.props;
    
    if (auth.isAuthenticated){

    }else{

    }

      return (
          <Router>
              <Aux>
                <div className="App" >
                  <Navbar />
                      {Routes}
                  <Footer />
                </div>
              </Aux>
          </Router>
      );
  }
}

const mapStateToProps = ({auth, errors}) =>{
  return{
      auth : auth,
      errors: errors.errors
  }
}

export default connect(mapStateToProps)(App);