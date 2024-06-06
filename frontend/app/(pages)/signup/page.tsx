'use client'
import GetUser from '@/app/utils/user'
import SignUp from '../../../components/signUp'
import React from 'react'
import { useRouter } from 'next/navigation'

const SignUppage = () => {
  const router  = useRouter()
  if(GetUser()){
   router.push("/home")
    return(<div></div>)
  }
  return (
  <div className='w-screen h-screen flex flex-col items-center justify-center'>
     <SignUp/>
  </div>
  )
}

export default SignUppage