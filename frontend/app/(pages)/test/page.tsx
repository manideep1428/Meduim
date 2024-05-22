'use client'
import React from 'react'
import BlogCard from '@/components/blogCard'

const Test = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <BlogCard
       id = "1"
       title='Test'
       content={"Hello! It seems like you'd like to discuss some content. Could you provide more details on what specific content you're interested in? This could range from a specific topic, article, story, or type of media. Let me know how I can help!"}
       imageUrl='Manideep'
       name='manideep'
      />
    </div>
  )
}

export default Test