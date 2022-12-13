import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Brand from '../Carousel/Brand';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Contexts/AuthProvider';


const RightSideNav = () => {
    const {loginProvider} = useContext(AuthContext);
    const signInProvider = new GoogleAuthProvider();
    

    const handleGoogleSignIn = () =>{
        loginProvider(signInProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub /> Login With GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
                </ListGroup>
                <Brand></Brand>
            </div>
        </div>
    );
};

export default RightSideNav;