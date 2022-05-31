import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import Employee from '../Employee/Employee'
import Login from '../Login/Login'
import DashboardSideBar from '../Deshboard/Deshboard'
import Profile from '../Profile/Profile'
function Apps() {
  return (
   <Router>
   <Switch>
     <Route exact path="/" component={Login} />
     <Route exact path="/employee" component={Employee} />
     <Route exact path="/profile" component={Profile} />
     <Route exact path="/dashboardSideBar" component={DashboardSideBar} />
   </Switch>
   </Router>
  )
}

export default Apps;