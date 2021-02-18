import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';


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
 import {addAnnonces} from '../../../js/actions/annonceAction'




 const AddModalAnnonce = () => {
  const userr = useSelector(state => state.authReducer.user);
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [prix, setPrix] = useState('');
    const [location, setLocation] = useState('');
    const [discreption, setDiscreption] = useState('');
    const [user,setUser] =useState(userr._id);

    
    

    

    const toggle = () => setModal(!modal);
    const dispatch = useDispatch();
   
    
const add=()=>{
    dispatch(addAnnonces({title,prix,location,discreption,user}))
    setTitle('');
    setPrix('');
    setLocation('');
    setDiscreption('');
    setUser('');
    setModal(false);
}

//add annonce
 return (
    <div>
    <Button color="dark" onClick={toggle}>Add annonce</Button>
    <Modal isOpen={modal} toggle={toggle} className="">
      <ModalHeader toggle={toggle}>add</ModalHeader>
      <ModalBody>
      <Form>
      <FormGroup>
     
        <Label for="name">Title</Label>
        <Input
          type="text"
          value={title}
          name="title"
          id="title"
          placeholder="title"
          className="mb-3"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label for="name">prix</Label>
        <Input
          type="text"
          value={prix}
          name="prix"
          id="prix"
          placeholder="prix"
          className="mb-3"
          onChange={(e) => setPrix(e.target.value)}
        />
        
        <Label for="email">location</Label>
        <Input
          type="text"
          value={location}
          name="location"
          id="location"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Label for="email">discreption</Label>
        <Input
          type="text"
          value={discreption}
          name="discreption"
          id="discreption"
          placeholder="discreption"
          onChange={(e) => setDiscreption(e.target.value)}
        />
       

      
      </FormGroup>
    </Form>
          </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={add} >save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}
export default AddModalAnnonce;