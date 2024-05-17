'use client'
import getUser  from '@/app/validations/user'
import Blog from '@/components/blog'
import React from 'react'

const page = () => {
 if(!getUser){
  return (
    <h1>You Have No Access</h1>
  )
}
return(
  <Blog/>
)
}

export default page