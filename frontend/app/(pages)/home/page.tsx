'use client'
import getUser  from '@/app/utils/user'
import Appbar from '@/components/Appbar'
import Blogs from '@/components/blog'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const page = () => {
  if(!getUser()){
    if(typeof window !== "undefined")  window.location.assign("/signup")
      toast.error("Please SignIn")
    return(<div></div>)
  //     <div
  //   className='flex justify-center items-center h-full 
  //               text-3xl'>...Please Wait </div>
  // )
}
return(
   <div className='flex flex-col h-full w-full'>
      <Appbar/>
   <div className='w-full h-full flex justify-center items-center'>
    <Blogs/>
  </div>
  </div>
)
}

export default page