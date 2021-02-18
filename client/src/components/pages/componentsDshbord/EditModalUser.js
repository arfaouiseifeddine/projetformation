import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup
  
} from 'reactstrap';
import { editUser } from '../../../js/actions/authActions';



const EditModalUser = ({user}) => {
 
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    
    

    
    const toggle = () => setModal(!modal);
    const dispatch = useDispatch();
    
const editU=()=>{
    dispatch(editUser(user._id,{name,lastName,email}))
    setName('');
    setLastName('');
    setEmail('');
    setModal(false);
}
//edit user
 return (
   
        <div>
          <Button color="dark" onClick={toggle}>Edit profile</Button>
          <Modal isOpen={modal} toggle={toggle} className="">
            <ModalHeader toggle={toggle}>Edit</ModalHeader>
            <ModalBody>
            <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="name">Last Name</Label>
              <Input
                type="text"
                value={lastName}
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="mb-3"
                onChange={(e) => setLastName(e.target.value)}
              />
              
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
             
    
            
            </FormGroup>
          </Form>
                </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={editU} >save</Button>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
 
}
export default EditModalUser;