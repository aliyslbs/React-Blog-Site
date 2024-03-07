import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthorService from '../../services/authorService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

export default function UpdateAuthor() {

  const { authorId } = useParams()
  const navigate = useNavigate()

  const [author, setAuthor] = useState()
  
  const [updatedAuthorName, setUpdatedAuthorName] = useState()

  const handleUpdate = () => {
    const authorId = author.authorId
    const updatedAuthor = {
      authorName: updatedAuthorName
    }
    const authorService = new AuthorService()
    authorService.updateAuthor(authorId, updatedAuthor).then(toast.success("author updated successfully")) 
    navigate("/a/authorManagement")
  }

  useEffect(() => {
    const authorService = new AuthorService()
    authorService.getByAuthorId(authorId).then(result => setAuthor(result.data))
  }, [])


  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author Name</Form.Label>
          <Form.Control defaultValue={author?.authorName} onChange={e => setUpdatedAuthorName(e.target.value)} type="text" placeholder="Enter article title" />
        </Form.Group>
        <Button onClick={handleUpdate} variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}
