import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Logout() {
    return (
        <div>
            <Button as={NavLink} to="/signIn" style={{ marginRight: "20px", width: "120px" }} variant="outline-success">Sign In</Button>
            <Button as={NavLink} to="/signUp" style={{ marginRight: "400px", width: "120px" }} variant="outline-success">Sign Up</Button>
        </div>
    )
}
