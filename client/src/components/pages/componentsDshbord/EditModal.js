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
  
} from 'reactstrap';
import { editUser } from '../../../js/actions/authActions';



const EditModal = ({el}) => {
 
    const [modal, setModal] = useState(false);
    const [role, setRole] = useState('');
    const toggle = () => setModal(!modal);
    const dispatch = useDispatch();
const editt=()=>{
    dispatch(editUser(el._id,{role}))
}
  //edit user role agent in admin
    return (
      <div>
        <Button color="dark" onClick={toggle}>Edit</Button>
        <Modal isOpen={modal} toggle={toggle} className="">
          <ModalHeader toggle={toggle}>Edit</ModalHeader>
          <ModalBody>
          <Label for="name">Role</Label>
              <Input
                type="text"
                value={role}
                name="name"
                id="name"
                placeholder="admin/agent"
                className="mb-3"
                onChange={(e) => setRole(e.target.value)}
              />
              </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={editt}>save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
export default EditModal;
