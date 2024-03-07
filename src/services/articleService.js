import axios from "axios";

export default class ArticleService {

    getAllArticle() {
        return axios.get("http://localhost:8080/article/getAllArticle");
    }

    addArticle(formData, categoryId, authorId) {
        return axios.post(`http://localhost:8080/article/addArticle/${categoryId}/${authorId}`, formData)
    }

    deleteByArticleId(articleId) {
        return axios.delete(`http://localhost:8080/article/deleteByArticleId/${articleId}`)
    }

    getByArticleId(articleId) {
        return axios.get(`http://localhost:8080/article/getByArticleId/${articleId}`)
    }

    updateArticle(articleId, categoryId, authorId, article) {
        return axios.put(`http://localhost:8080/article/updateArticle/${articleId}/${categoryId}/${authorId}`, article)
    }
}