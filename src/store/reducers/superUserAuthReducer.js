import { SUPERUSERLOGIN, SUPERUSERLOGOUT } from "../actions/superUserAuthAction";


const initialState = {
    isSuperUserAuthenticated: false
}

export default function superUserAuthReducer(state = initialState, action) {
    switch (action.type) {
        case SUPERUSERLOGIN:
            return {
                ...state,
                isSuperUserAuthenticated: true
            }
        case SUPERUSERLOGOUT:
            return {
                ...state,
                isSuperUserAuthenticated: false
            }
        default:
            return state
    }
}