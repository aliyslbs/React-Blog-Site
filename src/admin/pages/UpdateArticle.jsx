import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ArticleService from '../../services/articleService';
import CategoryService from '../../services/categoryService';
import AuthorService from '../../services/authorService';
import { FormField, Menu } from 'semantic-ui-react';
import { toast } from 'react-toastify';

export default function UpdateArticle() {
  const { articleId }  = useParams()
  const navigate = useNavigate()

  const [article, setArticle] = useState()

  const [updateArticleTitle, setUpdateArticleTitle] = useState()
  const [updateContent, setUpdateContent] = useState()
  const [updatePublicationDate, setUpdatePublicationDate] = useState()
  const [updateAuthorId, setUpdateAuthorId] = useState()
  const [updateCategoryId, setUpdateCategoryId] = useState()


  const [categories, setCategories] = useState([])
  const [authors, setAuthors] = useState([])

  const handleSubmit = () =>{
    const articleId = article.articleId
    const updatedArticle = {
      articleTitle : updateArticleTitle,
      content : updateContent,
      publicationDate : updatePublicationDate,
    }
    const categoryId = updateCategoryId
    const authorId = updateAuthorId

    const articleService = new ArticleService()
    articleService.updateArticle(articleId, categoryId, authorId, updatedArticle).then(toast.success("article updated successfully"))
    navigate("/a/articleManagemenent")
  }

  useEffect(() => {
    const articleService = new ArticleService()
    articleService.getByArticleId(articleId).then(result => setArticle(result.data))
  }, [])

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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Article title</Form.Label>
          <Form.Control defaultValue={article?.articleTitle} onChange={e => setUpdateArticleTitle(e.target.value)} type="text" placeholder="Enter article title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control defaultValue={article?.content} onChange={e => setUpdateContent(e.target.value)} type="text" placeholder="Enter content" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author</Form.Label>
          <FormField>
            <Menu compact>
              <select onChange={e => setUpdateAuthorId(e.target.value)}>
                {
                  authors.map(author => (
                    <option value={author.authorId}>{author.authorName}</option>
                  ))
                }
              </select>
            </Menu>
          </FormField>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>publication Date</Form.Label>
          <Form.Control defaultValue={article?.publicationDate} onChange={e => setUpdatePublicationDate(e.target.value)} type="date" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <FormField>
            <Menu compact>
              <select onChange={e => setUpdateCategoryId(e.target.value)}>
                {
                  categories.map(category => (
                    <option value={category.categoryId}>{category.categoryName}</option>
                  ))
                }
              </select>
            </Menu>
          </FormField>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form></div>
  )
}
