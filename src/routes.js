import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/home/index'
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes'
import UserEditScreen from './screens/users/edit'

const Routes = () => {  
  <BrowserRouter>
   <Router>
    <>
      <Route exact path='/' component={HomeScreen}/>
    </>
    <>
      <Route exact path='/register' component={RegisterScreen} />
    </>
    <>
      <Route exact path='/login' component={LoginScreen} />
    </>
    <>
      <Route exact path='/notes' component={NotesIndexScreen} />
    </>
    <>
      <Route exact path='/users/edit' component={UserEditScreen} />
    </>
    </Router>
  </BrowserRouter>
  
}

export default Routes;