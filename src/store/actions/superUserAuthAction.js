export const SUPERUSERLOGIN = "SUPERUSERLOGIN"
export const SUPERUSERLOGOUT = "SUPERUSERLOGOUT"

export const superUserLogin = () => {
    return {
        type : SUPERUSERLOGIN
    }
}

export const superUserLogout = () =>{
    return {
        type: SUPERUSERLOGOUT
    }
}