import { LOGINUSER } from "../actions/userActions";


const initialState = {
    user : null
}

 const userReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case LOGINUSER:
            return{
                ...state,
                user : payload
            }
        default: 
            return state
    }
}

export default userReducer