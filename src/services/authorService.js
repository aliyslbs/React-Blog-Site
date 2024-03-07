import axios from "axios";

export default class AuthorService {
    authorAdd(formData) {
        return axios.post("http://localhost:8080/author/addAuthor", formData)
    }

    getAllAuthor() {
        return axios.get("http://localhost:8080/author/getAllAuthor")
    }

    deleteByAuthorId(authorId) {
        return axios.delete(`http://localhost:8080/author/deleteByAuthorId/${authorId}`)
    }

    getByAuthorId(authorId) {
        return axios.get(`http://localhost:8080/author/getByAuthorId/${authorId}`)
    }

    updateAuthor(authorId, author) {
        return axios.put(`http://localhost:8080/author/updateAuthor/${authorId}`, author)
    }
}