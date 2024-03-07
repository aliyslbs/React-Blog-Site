import React, { useState } from 'react'
import { Button, Form, FormField } from 'semantic-ui-react'
import SuperUserService from '../../services/superUserService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddSuperUser() {

  const navigate = useNavigate()

  const [superUserName, setSuperUserName] = useState()
  const [superUserPassword, setSuperUserPassword] = useState()

    const handleSubmit = () => {
      const superUser = {
        superUserName : superUserName,
        superUserPassword : superUserPassword
      }
      const superUserService = new SuperUserService()
      superUserService.addSuperUser(superUser).then(toast.success("super user added successfully"))
      navigate("/a/superUserManagement")
    }


  return (
    <div>
      <Form >
        <FormField>
          <label>Super User Name</label>
          <input onChange={e => setSuperUserName(e.target.value)} placeholder='enter super user name' />
          
          <label>Super User Password</label>
          <input onChange={e => setSuperUserPassword(e.target.value)} placeholder='enter super user password' />
        </FormField>
        <Button onClick={handleSubmit} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}
