import axios from "axios";

export default class UserService {
    userAdd(formData) {
        return axios.post("http://localhost:8080/user/addUser", formData)
    }

    getByEmail(email) {
        return axios.get(`http://localhost:8080/user/getByEmail/${email}`)
    }

    getAll() {
        return axios.get("http://localhost:8080/user/getAllUser")
    }

    deleteByUserId(userId) {
        return axios.delete(`http://localhost:8080/user/deleteByUserId/${userId}`)
    }
}   