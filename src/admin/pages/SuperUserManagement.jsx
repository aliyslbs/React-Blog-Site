import React, { useEffect, useState } from 'react'
import SuperUserService from '../../services/superUserService'
import { Button, Menu, MenuItem, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function SuperUserManagement() {

  const navigate = useNavigate()

  const [superUsers, setSuperUsers] = useState([])

  useEffect(() => {
    const superUserService = new SuperUserService()
    superUserService.getAll().then(result => setSuperUsers(result.data))
  }, [])

  const handleDeleteSuperUser = (superUserId, superUserName) => {
    const superUserService = new SuperUserService()
    superUserService.deleteSuperUser(superUserId).then(toast.error(`${superUserName} deleted successfully`))
  }

  const handleUpdateSuperUser = (superUserId) => {
    navigate(`/a/superUserManagement/updateSuperUser/${superUserId}`)
  }

  const handleAddSuperUser = () => { navigate("/a/superUserManagement/addSuperUser") }
  return (
    <div>
      <Menu>
        <MenuItem name='addArticle'>
          <Button color='green' onClick={() => handleAddSuperUser()}>Add Super User</Button>
        </MenuItem>
      </Menu>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>admin name</TableHeaderCell>
            <TableHeaderCell>update</TableHeaderCell>
            <TableHeaderCell>delete</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            superUsers.map(superUser => (
              <TableRow>
                <TableCell>{superUser.superUserName}</TableCell>
                <TableCell><Button onClick={() => handleUpdateSuperUser(superUser.superUserId)} color="blue" className='small'>update</Button></TableCell>
                <TableCell><Button onClick={() => handleDeleteSuperUser(superUser.superUserId, superUser.superUserName)} color='red' className='small'>delete</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
