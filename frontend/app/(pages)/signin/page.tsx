'use client'
import GetUser from '@/app/utils/user'
import SignIn from '@/components/signIn'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignInPage = () => {
  const router  = useRouter()
  if(GetUser()){
   router.push("/home")
    return(<div></div>)
  }
  return (
  <div className='w-screen h-screen flex flex-col items-center justify-center'>
     <SignIn/>
  </div>
  )
}

export default SignInPage