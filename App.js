import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//React Routing
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
//React Toast
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
//FireBase
import firebase from 'firebase/app'
import 'firebase/auth'

//components
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Signup from './Pages/Signup'
import PageNotFound from './Pages/PageNotFound'
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseconfig from './Config/firebaseconfig';

//init firebase
firebase.initializeApp(firebaseconfig)

const App =() => {

  const[user,setUser] =useState(null)

  return (
   <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='*' component={PageNotFound}/>
    </Switch>
    <Footer/>
    </UserContext.Provider>
   </Router>
  );
}

export default App;
