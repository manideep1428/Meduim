import jwt from 'jsonwebtoken'

export default function GetUser(){
    if (typeof window !== 'undefined') {
        const userToken = localStorage.getItem('token')
        // const decodeToken = jwt.decode(userToken  || "")
        if(userToken){
            return true
        }
       return false
    }
}

export function SignOut(){
     if (typeof window !== 'undefined')  localStorage.removeItem('token')
     window.location.reload();
    return ({ message: "Successfully LogOut"})
}

export function GetBlog() {
   if(typeof window !== undefined) {
     const blog = localStorage.getItem('blog')
    return blog;
  }
}