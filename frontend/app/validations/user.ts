export default function getUser(){
    const userToken = localStorage.getItem('token')
    if(userToken){
        return true 
    }
    return false
}