import { DialogDemo, DropdownMenuDemo } from "./Dialog";
import Logo from "./Svgs/AppLogo";
import Bell from "./Svgs/NotificationBell";
import { Input } from "./ui/input";

export default function Appbar(){
    return (
        <div className="flex w-full h-full shadow-md m-2 p-3">
          <div className="flex ml-2">
            <Logo/>
          </div>
         <div className="flex justify-center items-center h-1/2 w-3/5">
          <Input
           className="w-1/2 rounded-r-full rounded-l-full"
           placeholder="Search" />
         </div>
         <div className="w-full h-full flex justify-end items-center gap-5 mr-6">
          <Bell/>
          <DropdownMenuDemo/>
          </div>
        </div>
    )
}