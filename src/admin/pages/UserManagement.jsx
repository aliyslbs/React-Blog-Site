import React, { useEffect, useState } from 'react'
import UserService from '../../services/userService'
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { toast } from 'react-toastify'


export default function UserManagement() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const userService = new UserService()
    userService.getAll().then(result => setUsers(result.data))
  }, [])

  const handleDeleteUser = (userId, userName) => {
    const userService = new UserService()
    userService.deleteByUserId(userId).then(toast.info(`user ${userName} deleted successfully`))
  }
  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>user name</TableHeaderCell>
            <TableHeaderCell>delete</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            users.map(user => (
              <TableRow>
                <TableCell>{user.userName}</TableCell>
                <TableCell><Button onClick={() => handleDeleteUser(user.userId, user.userName)} color='red' className='small'>delete</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
