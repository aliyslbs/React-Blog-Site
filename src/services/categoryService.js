import axios from "axios";

export default class CategoryService{
    categoryAdd(category){
        return axios.post("http://localhost:8080/category/addCategory", category)
    }

    getAllCategory(){
        return axios.get("http://localhost:8080/category/getAllCategory")
    }

    deleteByCategoryId(categoryId){
        return axios.delete(`http://localhost:8080/category/deleteByCategoryId/${categoryId}`)
    }

    getByCategoryId(categoryId){
        return axios.get(`http://localhost:8080/category/getByCategoryId/${categoryId}`)
    }

    updateCategory(categoryId, category){
        return axios.put(`http://localhost:8080/category/updateCategory/${categoryId}`, category)
    }
}