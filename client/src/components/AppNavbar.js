import {Collapse,Navbar,NavbarToggler,NavLink,NavbarBrand,Nav,NavItem,Container} from 'reactstrap';
import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './auth/RegisterModal'
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from './auth/LoginModal';
import {logout} from '../js/actions/authActions'
const AppNavBar = () => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
  
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const user = useSelector((state) => state.authReducer.user);

    const toggle = () => setIsOpen(!isOpen);
  
   
  
    const authLinks = (
      <Fragment>
        <NavItem>
          <Link to="/dashboard">
            <span className="navbar-text mr-3">
              <strong>{user ?  `${user.role} : ${user.name}` : null}</strong>
            </span>
          </Link>
        </NavItem> 
        <NavItem>
          <Link to="/annonces">
            <span className="navbar-text mr-3">
              <strong>Annonces</strong>
            </span>
          </Link>
        </NavItem> 
        <NavLink href="/" onClick={() => dispatch(logout())}><strong>Logout</strong></NavLink>   
       </Fragment>
    );
  
    const guestLinks = (
      <Fragment>
        
        <NavItem><strong> <RegisterModal/> </strong></NavItem>
         <NavItem> <strong><LoginModal/></strong> </NavItem>  
      </Fragment>
    );
  
    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">KaRaVan</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                    {isAuth ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  

 
}

export default AppNavBar;