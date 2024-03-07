import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/articleService'
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { MenuItem, Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ArticleManagement() {

  const navigate = useNavigate()

  const [article, setArticle] = useState([])

  useEffect(() => {
    let articleService = new ArticleService()
    articleService.getAllArticle().then(result => setArticle(result.data))
  }, [])

  const handleAddArticle = () => { navigate("/a/articleManagemenent/addArticle") }
  const handleUpdateArticle = (articleId) => { 
    navigate(`/a/articleManagemenent/updateArticle/${articleId}`) 
  }

  const handleDeleteArticle = (articleId, articleTitle) => {
    let articleService = new ArticleService()
    articleService.deleteByArticleId(articleId).then(toast.info(`article titled ${articleTitle} was deleted succesfully`))
  }


  return (
    <div>
      <Menu>
        <MenuItem name='addArticle'>
          <Button color='green' onClick={handleAddArticle}>Add Article</Button>
        </MenuItem>
      </Menu>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>title</TableHeaderCell>
            <TableHeaderCell>content</TableHeaderCell>
            <TableHeaderCell>publication date</TableHeaderCell>
            <TableHeaderCell>author name</TableHeaderCell>
            <TableHeaderCell>category name</TableHeaderCell>
            <TableHeaderCell>image name</TableHeaderCell>
            <TableHeaderCell>update</TableHeaderCell>
            <TableHeaderCell>delete</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            article.map(article => (
              <TableRow key={article.articleId}>
                <TableCell>{article?.articleTitle}</TableCell>
                <TableCell>{article?.content}</TableCell>
                <TableCell>{article?.publicationDate}</TableCell>
                <TableCell>{article?.author?.authorName}</TableCell>
                <TableCell>{article?.category?.categoryName}</TableCell>
                <TableCell>{article?.image?.imageName}</TableCell>
                <TableCell><Button onClick={() => handleUpdateArticle(article.articleId)} color="blue" className='small'>update</Button></TableCell>
                <TableCell><Button onClick={() => handleDeleteArticle(article.articleId, article.articleTitle)} color='red' className='small'>delete</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div >
  )
}
