import React, { useEffect, useState } from 'react'
import AuthorService from '../../services/authorService'
import { Button, Menu, MenuItem, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function AuthorManagement() {
  const navigate = useNavigate()

  const [author, setAuthor] = useState([])

  useEffect(() => {
    let authorService = new AuthorService()
    authorService.getAllAuthor().then(result => setAuthor(result.data))
  }, [])

  const handleAddAuthor = () => { navigate("/a/authorManagement/addAuthor") }

  const handleDeleteAuthor = (authorId, authorName) => {
    const authorService = new AuthorService()
    authorService.deleteByAuthorId(authorId).then(toast.info(`author ${authorName} deleted successfully`))
  }

  const handleUpdateAuthor = (authorId) => {
    navigate(`/a/authorManagement/updateAuthor/${authorId}`)
  }

  return (
    <div>
      <Menu>
        <MenuItem name='addArticle'>
          <Button color='green' onClick={() => handleAddAuthor()}>Add Author</Button>
        </MenuItem>
      </Menu>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>author name</TableHeaderCell>
            <TableHeaderCell>author image name</TableHeaderCell>
            <TableHeaderCell>update</TableHeaderCell>
            <TableHeaderCell>delete</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            author.map(author => (
              <TableRow>
                <TableCell>{author.authorName}</TableCell>
                <TableCell>{author.image?.imageName}</TableCell>
                <TableCell><Button onClick={() => handleUpdateAuthor(author.authorId)} color="blue" className='small'>update</Button></TableCell>
                <TableCell><Button onClick={() => handleDeleteAuthor(author.authorId, author.authorName)} color='red' className='small'>delete</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
