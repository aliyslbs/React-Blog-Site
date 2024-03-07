import axios from "axios";

export default class SuperUserService{

    getBySuperUserName(superUserName){
        return axios.get(`http://localhost:8080/superUser/getBySuperUserName/${superUserName}`)
    }

    getBySuperUserId(superUserId){
        return axios.get(`http://localhost:8080/superUser/getBySuperUserId/${superUserId}`)
    }

    getAll(){
        return axios.get("http://localhost:8080/superUser/getAllSuperUser")
    }

    addSuperUser(superUser){
        return axios.post("http://localhost:8080/superUser/addSuperUser" ,superUser)
    }

    deleteSuperUser(superUserId){
        return axios.delete(`http://localhost:8080/superUser/deleteSuperUser/${superUserId}`)
    }

    updateSuperUser(superUserId, superUser){
        return axios.put(`http://localhost:8080/superUser/updateSuperUser/${superUserId}`, superUser)
    }
}