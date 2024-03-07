import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.user.user)

    const handleChangeAuthentication = () => {
        dispatch(logout())
        navigate("/signIn")
    }

    return (
        <Dropdown drop='down'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user.userName}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                <Dropdown.Item >Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item>
                    <Button onClick={handleChangeAuthentication}>Logout</Button>

                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
