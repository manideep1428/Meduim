'use client'
import React from 'react'
import axios from "axios";
import { Input } from './ui/input'
import { Button } from './ui/button';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { SignInCheck } from '@/app/utils/types';
import { useRouter } from 'next/navigation';
import getUser from '@/app/utils/user';

export default function SignIn() : React.ReactNode {
    // const [error,setError] = React.useState<string | null>(null);
    const [loading,setLoading] = React.useState<boolean>(false);    
    const [data,setData ] = React.useState({email: "" , password : ""});
    const router = useRouter();
    
    const hanldeSubmit = async ()=>{
      try {
        setLoading(true)
        const validation =SignInCheck.safeParse(data)
        if(validation.success){ 
        let response = await axios.post("http://localhost:8080/api/v1/signin", validation.data )
        if(response.data.success){
            localStorage.setItem("token",response.data.token)
            setLoading(false)
            router.push("/blogs")
        }
        }
      } catch (error:any) {
        toast.error("Error", error)
        setLoading(false);
      }
    }
  
    if(getUser()){
      router.push("/blogs")
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
      > {loading ? "Loading" : "SignIn"}
       </Button>
       <div>
         <p> No Account ? 
            <Link href={"/signup"} className='text-blue-600'> SignUp </Link>
         </p>
       </div>
       <ToastContainer/>
    </div>
  )
};