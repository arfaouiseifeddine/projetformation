import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {  deleteUser, getUsers } from '../../../js/actions/authActions';
import {useDispatch} from 'react-redux'
import { Card, Button, CardTitle, CardText,Badge } from 'reactstrap';
import EditModal from './EditModal';
import EditModalUser from './EditModalUser';
import SearchAnnonce from '../SearchAnnonce';


const Admin= () => {

  const [search , setSearch] = useState('')
   
    const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getUsers());
  }, []);
   const users = useSelector(state => state.authReducer.users.users);
   const user = useSelector(state => state.authReducer.user)
  
    return (
        <div style={{ margin:"100px" , textAlign:"left"}}>
            <div style={{  textAlign:"right"}}>
              {/*user profile*/}
            <Badge color="danger" pill >{user.name}</Badge>
            <Badge color="danger" pill>{user.lastName}</Badge>
            <Badge color="danger" pill>{user.email}</Badge>
            {/*edit profile*/}
            <EditModalUser user ={user}/>
            <div style={{textAlign:"center"}}><SearchAnnonce setSearch= {setSearch}/></div>
            </div>
           <div> ---------------------------------------------</div>
           <h1> admin user name profile agents dele filtre </h1>
           <h1>Agents:</h1>
           <div style = {{minWidth:"300px",display:"flex", flexWrap:"wrap", margin:"20px"}} >
           {/*map les listes agent en card */ }
            {users  && users
            .filter((e) => e.name.includes(search))
            .map((el) =>( <p> {el.role == 'agent' && 
              <Card body inverse color="info">
        <CardTitle tag="h5">name: {el.name} {el.lastName}</CardTitle>
        <CardText>{el.email}</CardText>
        
        
        <div style={{display:"flex", justifyContent:"space-between"}}>
        {/*button delete*/}
        <Button color="danger" onClick = {( () => {
            dispatch(deleteUser(el._id));
            })}>Delete</Button>
            {/*edit user agent in admin*/}
            <EditModal el ={el}/>
            </div>
      </Card>} 
     
        </p>))}
        </div>
        <h1>Admins :</h1>
        <div style = {{minWidth:"300px",display:"flex", flexWrap:"wrap", margin:"20px"}} >
           {/*profile agent */ }
            {users  && users
            .filter((e) => e.name.includes(search))
            .map((el) => ( <p> {el.role == 'admin' && 
              <Card body inverse color="danger">
        <CardTitle tag="h5">name : {el.name} {el.lastName}</CardTitle>
        <CardText>{el.email}</CardText>
        
        <div style={{display:"flex", textAlign:"center"}}>
          {/*edit user agent in admin*/}
        <EditModal el ={el}/>
           
            </div>
       
      </Card>} 
     
        </p>))}
        </div>
        </div>
        )
}

export default Admin;