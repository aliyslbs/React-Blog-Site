import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'semantic-ui-react';
import UserService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authActions';
import { loginUser } from '../store/actions/userActions';

export default function SignIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [inputEmail, setInputEmail] = useState()
  const [inputPassword, setInputPassword] = useState()
  const [user, setUser] = useState()

  const handleSubmit = () => {
    if (user.password === inputPassword) {
      dispatch(login())
      dispatch(loginUser(user))
      navigate("/home")
      toast.success("logged in successfully")
    }
    else {
      toast.error("email or password is incorrect")
    }
  }

  useEffect(() => {
    let userService = new UserService()
    userService.getByEmail(inputEmail).then(result => setUser(result.data))
  }, [inputEmail])


  return (
    <Container className='d-flex justify-content-center ' style={{ minHeight: "100vh", marginTop: "20px" }}>
      <Form name='signIn' onSubmit={handleSubmit}>
        <Form.Group style={{ width: "450px" }} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={e => setInputEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e => setInputPassword(e.target.value)} type="text" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
