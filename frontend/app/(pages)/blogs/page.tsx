'use client'
import getUser  from '@/app/utils/user'
import Appbar from '@/components/Appbar'
import Blogs from '@/components/blog'
import React from 'react'

const page = () => {
  if(!getUser()){
    window.location.assign("/signup")
    return(
      <div
    className='flex justify-center items-center h-full 
                text-3xl'> Your Not Logged In</div>
  )
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