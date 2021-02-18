import React from 'react'
import {useSelector} from 'react-redux'
import Admin from './componentsDshbord/Admin'
import Agent from './componentsDshbord/Agent'

const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user)
    return ( 
      <div>  {user.role == "agent" &&  <Agent/>} {user.role == "admin" &&  <Admin/>}
        
        </div>)
}

export default Dashboard;