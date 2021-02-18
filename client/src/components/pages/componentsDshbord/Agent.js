import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {  getUsers } from '../../../js/actions/authActions';
import {useDispatch} from 'react-redux'
import { Card,  CardTitle, CardText,Badge } from 'reactstrap';
import EditModalUser from './EditModalUser';
import SearchAnnonce from '../SearchAnnonce';

const Agent= () => {
  const [search , setSearch] = useState('');
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getUsers());
  }, []);
   const users = useSelector(state => state.authReducer.users.users)

    return (
        <div style={{ margin:"20px"}}>
            <div style={{ margin:"20px", textAlign:"right"}}>
              {/*user profile*/}
            <Badge color="info" pill>{user.name}</Badge>
            <Badge color="info" pill>{user.lastName}</Badge>
            <Badge color="info" pill>{user.email}</Badge>
            {/*edit profile*/}
            <EditModalUser user ={user}/>
            <div style={{textAlign:"center"}}><SearchAnnonce setSearch= {setSearch}/></div>
            </div>
           <div> ---------------------------------------------</div>
           <h1> filtree les agent </h1>
           <h1>Agents:</h1>
           <div style = {{minWidth:"300px",display:"flex", flexWrap:"wrap", margin:"20px"}} >
           {/*profile agent */}
            {users  && users
            .filter((e) => e.name.includes(search))
            .map((el) => ( <p> {el.role == 'agent' && 
              <Card body inverse color="info">
        <CardTitle tag="h5">{el.name} {el.lastName}</CardTitle>
        <CardText>{el.email}</CardText>
        <CardText>{el.role}</CardText>
        
        
      </Card>} 
     
        </p>))}
        </div>
        
        </div>
        )
}

export default Agent;