import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import SuperUserService from '../../services/superUserService';
import { toast } from 'react-toastify';

export default function UpdateSuperUser() {

  const { superUserId } = useParams()
  const navigate = useNavigate()

  const [superUser, setSuperUser] = useState()

  const [updatedSuperUserName, setUpdatedSuperUserName] = useState()
  const [updatedSuperUserPassword, setUpdatedSuperUserPassword] = useState()

  useEffect(() => {
    const superUserService = new SuperUserService()
    superUserService.getBySuperUserId(superUserId).then(result => setSuperUser(result.data))
  })

  const handleUpdateSuperUser = () => {
    if (updatedSuperUserName || updatedSuperUserPassword) {
      const superUserId = superUser.superUserId
      const updatedSuperUser = {
        superUserName: updatedSuperUserName,
        superUserPassword: updatedSuperUserPassword
      }
      const superUserService = new SuperUserService()
      superUserService.updateSuperUser(superUserId, updatedSuperUser).then(toast.info("Super user updated successfully"))
      navigate("/a/superUserManagement")
    }else{
      toast.error("please change super user name or password")
    }
  }

  return (
    <div>
      <Form onSubmit={handleUpdateSuperUser}>
        <Form.Group className="mb-3">
          <Form.Label>Super User Name</Form.Label>
          <Form.Control defaultValue={superUser?.superUserName} onChange={e => setUpdatedSuperUserName(e.target.value)} type="text" placeholder="Enter article title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Super User Password</Form.Label>
          <Form.Control defaultValue={superUser?.superUserPassword} onChange={e => setUpdatedSuperUserPassword(e.target.value)} type="text" placeholder="Enter article title" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}
