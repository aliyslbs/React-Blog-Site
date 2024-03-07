import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Menu } from 'semantic-ui-react';
import UserService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function SignUp() {

    const navigate = useNavigate()

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [image, setImage] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            userName: userName,
            email: email,
            password: password
        }
        const formData = new FormData()
        formData.append('user', JSON.stringify(user))
        formData.append('image', image)
        const userService = new UserService()
        userService.userAdd(formData).then(toast.success(`user named ${userName} added successfully`))        
        navigate("/signIn")
    }

    const handleImageChange = (e) => {
        if (e.target.files) {
            setImage(e.target.files[0])
        } else {
            toast.error("please select a file")
        }
    }

    return (
        <div>
            <Container className='d-flex justify-content-center ' style={{ minHeight: "100vh", marginTop: "20px" }}>
                <Form onSubmit={handleSubmit} name='signUp'>
                    <Form.Group style={{ width: "450px" }} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={e => setUserName(e.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group style={{ width: "450px" }} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" onChange={e => setPassword(e.target.value)} placeholder="enter password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                            <label>please select your photo</label>
                            <Menu compact>
                                <input type="file" onChange={handleImageChange} placeholder='select image' accept='image/*' />
                                {/* <img src={`data:image/jpeg;base64,${imageToShow}`} style={{ maxWidth: '100%', maxHeight: '200px' }}></img> */}
                            </Menu>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
