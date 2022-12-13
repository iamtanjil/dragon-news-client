import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Sports News</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>

                        {
                            user?.uid ? <>
                                <Link to='/profile'>
                                    {
                                        user?.photoURL ?
                                            <Image
                                                src={user?.photoURL}
                                                style={{ height: '30px' }}
                                                roundedCircle>
                                            </Image>
                                            : <FaUser></FaUser>
                                    }
                                </Link>
                                <Nav.Link>
                                    {user?.displayName}
                                    <Button onClick={logOut} variant="light"><FaSignOutAlt></FaSignOutAlt> LOGOUT</Button>
                                </Nav.Link>
                            </> :
                            <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            </>
                            }

                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;