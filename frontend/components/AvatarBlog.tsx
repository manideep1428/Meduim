import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Props{
    imageUrl : string | ""
    name: string | "" 

}

const AvatarSvg = ({imageUrl,name} :Props)  => {
  return (
    <div>
        <Avatar className=' hover:cursor-pointer'>
            <AvatarImage src={imageUrl} alt={name} />
           <AvatarFallback>{ name.slice(0,1) }</AvatarFallback> 
        </Avatar>
    </div>
  )
}

export default AvatarSvg
