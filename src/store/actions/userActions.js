export const LOGINUSER = "LOGINUSER"

export function loginUser(user){
    return {
        type : LOGINUSER,
        payload : user
    }
}