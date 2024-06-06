import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Props{
    imageUrl : string | ""
    name: string | "" 
   classname?: any
  }

const AvatarSvg = ({imageUrl,name ,classname} :Props)  => {
  return (
    <div>
        <Avatar className={`hover:cursor-pointer` }>
            <AvatarImage className={`w-8 h-8`} src={imageUrl} alt={name} />
           <AvatarFallback className={`w-8 h-8 ${classname}`}> { name.slice(0,1) }</AvatarFallback> 
        </Avatar>
    </div>
  )
}

export default AvatarSvg
