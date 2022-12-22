import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import logo from '../../../assests/logo.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
            <Container>
                <Navbar.Brand><Link className='text-decoration-none' to='/'>
                    <Image
                        src={logo}
                        style={{ height: '40px', marginLeft: '7px' }}
                        roundedCircle>
                    </Image>DragonNews.Tv
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


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
                                    <Link className='btn btn-primary m-1' to='/login'>Login</Link>
                                    <Link className='btn btn-primary m-1' to='/register'>Register</Link>
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