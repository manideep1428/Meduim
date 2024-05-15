'use client'
import React from 'react'
import axios from "axios";
import { Input } from './ui/input'
import { Button } from './ui/button';
import Link from 'next/link';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const [error,setError] = React.useState<string | null>(null);
    const [loading,setLoading] = React.useState<boolean>(false);    
    const [data,setData ] = React.useState<any>({email: "" , password : ""});
    
    const hanldeSubmit = async ()=>{
      try {
        let response = await axios.post("http://localhost:8080/api/v1/signin", data )
        const {message} = response.data;
        toast.success(message?.message,{autoClose: 2000})
      } catch (error :any) {
        toast.error("Error", error)
      }
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
    </div>
  )
}

export default SignInPage;