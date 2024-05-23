'use client'
import React from 'react'
import axios from "axios";
import { Input } from './ui/input'
import { Button } from './ui/button';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { SignInCheck } from '@/app/utils/Index';
import { useRouter } from 'next/navigation';
import getUser from '@/app/utils/user';

const SignInPage = () => {
    const [error,setError] = React.useState<string | null>(null);
    const [loading,setLoading] = React.useState<boolean>(false);    
    const [data,setData ] = React.useState({email: "" , password : ""});
    const router = useRouter();
    
    const hanldeSubmit = async ()=>{
      try {
        const validation =SignInCheck.safeParse(data)
        if(validation.success){ 
        let response = await axios.post("http://localhost:8080/api/v1/signin", data )
        const token = response.data.token;
        localStorage.setItem("token", token);
        toast.success(response.data.message,{autoClose: 2000})
        router.push("/blogs")
        }
        else{
          setError(validation.error.message)
          console.log(validation.error.message)
        }
      } catch (error:any) {
        toast.error("Error", error)
      }
    }
  
    if(getUser()){
      return router.push("/blogs")
  }

  return (
    <div className='flex flex-col w-full max-w-sm items-center my-6 gap-6'>
      <Input type='email'
       required
       placeholder='Email' 
       onChange={(e)=>setData({...data , email: e.target.value})}
        />         
      <Input
       type='password'
       required
       placeholder='password' 
       onChange={(e)=>setData({...data , password: e.target.value})}/>  
      <Button 
      type='submit'
      onClick={hanldeSubmit}
      > SignIn
       </Button>
       <div>
         <p> No Account ? 
            <Link href={"/signup"} className='text-blue-600'> SignUp </Link>
         </p>
       </div>
       <ToastContainer/>
    </div>
  )
}

export default SignInPage;