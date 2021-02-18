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
 import {editAnnonce} from '../../../js/actions/annonceAction'



 const EditModalAnnonce= ({el}) => {
 
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(el.title);
    const [prix, setPrix] = useState(el.prix);
    const [location, setLocation] = useState(el.location);
    const [discreption, setDiscreption] = useState(el.discreption);

    
    

    
    const toggle = () => setModal(!modal);
    const dispatch = useDispatch();
    
const editU=()=>{
    dispatch(editAnnonce(el._id,{title,prix,location,discreption}))
   
    setModal(false);
}
//edit annonce
 return (
   
        <div>
          <Button color="dark" onClick={toggle}>Edit annonce</Button>
          <Modal isOpen={modal} toggle={toggle} className="">
            <ModalHeader toggle={toggle}>Edit</ModalHeader>
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
              <Button color="primary" onClick={editU} >save</Button>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
 
}
export default EditModalAnnonce;