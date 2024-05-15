'use client'
import React from 'react'
import axios from "axios";
import { Input } from './ui/input'
import { Button } from './ui/button';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const SignUpPage = () => {
    const toast = useToast();
    const router = useRouter();
    const [error,setError] = React.useState<string | null>(null);
    const [loading,setLoading] = React.useState<boolean>(false);    
    const [data,setData ] = React.useState<any>({email: "" , password : "" ,name:''});
    
    const hanldeSubmit = async ()=>{
      try {
       let response = await axios.post("http://localhost:8080/api/v1/signup", data )
       console.log(response.data)
      } catch (error) {
        
      }
    }

  return (
    <div className='flex flex-col max-w-5/6 sm:w-full max-w-sm items-center my-6 gap-6 '>
        <Input type='text'
       required
       placeholder='Name' 
       onChange={(e)=>setData({...data , name: e.target.value})}
        />   
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
      > SignUp
       </Button>
       <div>
         <p>Already have Account ? 
            <Link href={"/signin"} className='text-blue-600'> SignIn </Link>
         </p>
       </div>
    </div>
  )
}

export default SignUpPage;