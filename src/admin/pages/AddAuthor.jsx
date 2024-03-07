import React, { useState } from 'react'
import { Button, Form, FormField, Menu } from 'semantic-ui-react'
import AuthorService from '../../services/authorService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddAuthor() {
  const navigate = useNavigate()

  const [authorName, setAuthorName] = useState()
  const [image, setImage] = useState(null)


  const handleSubmit = () => {
    const author = {
      authorName: authorName
    }
    const formData = new FormData()
    formData.append('author', JSON.stringify(author))
    formData.append('image', image)
    const authorService = new AuthorService()
    authorService.authorAdd(formData).then(toast.success(`author ${author.authorName} added successfully`))
    navigate("/a/authorManagement")
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
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Author Name</label>
          <input value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder='enter your name' />
        </FormField>
        <FormField>
          <label>Select image for author</label>
          <Menu compact>
            <input type="file" onChange={handleImageChange} placeholder='select image' accept='image/*' />
            {/* <img src={`data:image/jpeg;base64,${imageToShow}`} style={{ maxWidth: '100%', maxHeight: '200px' }}></img> */}
          </Menu>
        </FormField>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}
