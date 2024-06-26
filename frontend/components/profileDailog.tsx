import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import AvatarSvg from "./AvatarBlog"
import { SignOut } from "@/app/utils/user"
import Alert from "./AlertBox"
import { useState } from "react"


export default function ProfileIcon() {
    const [alert,setAlert] = useState(false)
    const handleAlert =()=>{
        setAlert(false);
    }
   return(
    <div>
     <DropdownMenu>
      <DropdownMenuTrigger><AvatarSvg imageUrl="mksdm" name="Manideep"/></DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>setAlert(true)}>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setAlert(true)}>Nothing</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>SignOut()}>LogOut</DropdownMenuItem>
      </DropdownMenuContent>
     </DropdownMenu>
     <Alert show={alert} handleAlert={handleAlert}/>
    </div>
   )
}

  
