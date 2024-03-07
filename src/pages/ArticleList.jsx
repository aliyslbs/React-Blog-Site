import React, { useEffect, useState } from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'
import ArticleService from '../services/articleService'

export default function ArticleList() {

    const [article, setArticle] = useState([])

    useEffect(() => {
        let articleService = new ArticleService()
        articleService.getAllArticle().then(result => setArticle(result.data))
    }, [])

    return (
        <div>
            <Grid celled='internally'>
                {
                    article.map(article => (
                        <GridRow key={article.articleId} >
                            <GridColumn width={3}>
                                <Image src={`data:image/jpeg;base64,${article.image?.data}`} alt={article.image?.imageName} />
                            </GridColumn>
                            <GridColumn width={13}>
                                <GridRow centered>
                                    <h1 style={{fontSize:"24px"}}>{article.articleTitle}-{article.category?.categoryName}</h1>
                                    </GridRow>
                                <GridRow className='article-content' >{article.content}</GridRow>
                            </GridColumn>
                        </GridRow>
                    ))
                }
            </Grid>
        </div>
    )
}
