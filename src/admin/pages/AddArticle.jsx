import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/articleService'
import { Button, Container, Form, FormField, Menu } from 'semantic-ui-react'
import CategoryService from '../../services/categoryService'
import AuthorService from '../../services/authorService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddArticle() {

  const navigate = useNavigate()

  const [articleTitle, setArticleTitle] = useState("")
  const [content, setContent] = useState("")
  const [publicationDate, setPublicationDate] = useState("")
  const [category, setCategory] = useState("")
  const [author, setAuthor] = useState("")
  const [categories, setCategories] = useState([])
  const [authors, setAuthors] = useState([])
  const [image, setImage] = useState(null)

  const handleSubmit = () => {
    const article = {
      articleTitle: articleTitle,
      content: content,
      publicationDate: publicationDate
    }
    const categoryId = category
    const authorId = author

    const formData = new FormData()
    formData.append('image', image)
    formData.append('article', JSON.stringify(article))

    const articleService = new ArticleService()
    articleService.addArticle(formData, categoryId, authorId).then()
    toast.success(`${articleTitle} added successfully`)
    navigate("/a/articleManagemenent")
  }

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }else{
      toast.error("please select a file")
    }
  }

  useEffect(() => {
    let categoryService = new CategoryService()
    categoryService.getAllCategory().then(result => setCategories(result.data))
  }, [])

  useEffect(() => {
    let authorService = new AuthorService()
    authorService.getAllAuthor().then(result => setAuthors(result.data))
  }, [])



  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Article Title</label>
            <input onChange={e => setArticleTitle(e.target.value)} placeholder='enter your article title' />
          </FormField>
          <FormField>
            <label>Article Content</label>
            <input onChange={e => setContent(e.target.value)} placeholder='enter your article content' />
          </FormField>
          <FormField>
            <label>Article date</label>
            <input onChange={e => setPublicationDate(e.target.value)} type='date' placeholder='enter your article publication date' />
          </FormField>
          <FormField>
            <label>Author Name</label>
            <Menu compact>
              <select onChange={e => setAuthor(e.target.value)}>
                {
                  authors.map(author => (
                    <option value={author.authorId}>{author.authorName}</option>
                  ))
                }
              </select>
            </Menu>
          </FormField>
          <FormField>
            <label>Category Name</label>
            <Menu compact>
              <select onChange={e => setCategory(e.target.value)}>
                {
                  categories.map(category => (
                    <option value={category.categoryId}>{category.categoryName}</option>
                  ))
                }
              </select>
            </Menu>
          </FormField>
          <FormField>
            <label>Select image for article</label>
            <Menu compact>
              <input type="file" onChange={handleImageChange} placeholder='select image' accept='image/*' />
              {/* <img src={`data:image/jpeg;base64,${imageToShow}`} style={{ maxWidth: '100%', maxHeight: '200px' }}></img> */}
            </Menu>
          </FormField>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </div>
  )
}
