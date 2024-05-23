export default function getUser(){
    const userToken = localStorage.getItem('token')
    if(userToken){
        return true 
    }
    return false
}

export function SignOut(){
    localStorage.removeItem('token')
     window.location.reload();
    return ({ message: "Successfully LogOut"})
}