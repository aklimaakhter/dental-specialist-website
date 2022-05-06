import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo (3).png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as ={Link} to="/">
                        <img height={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#specialists">Specialist</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                                </>
                                
                            }
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            {
                                user ?
                                <button className='btn btn link text-white' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;