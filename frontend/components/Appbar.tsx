import ProfileIcon from "./profileDailog";
import Logo from "./Svgs/AppLogo";
import Bell from "./Svgs/NotificationBell";
import { Input } from "./ui/input";

export default function Appbar(){
    return (
        <div className="flex shadow-md m-2 p-3">
          <div className="flex ml-2">
            <Logo/>
          </div>
         <div className="flex justify-center items-center h-1/2 w-3/5">
          <Input
           className="w-1/2 rounded-r-full rounded-l-full"
           placeholder="Search" />
         </div>
         <div className="w-full flex justify-end items-center gap-8  mr-6">
          <Bell/>
          <ProfileIcon/>
          </div>
        </div>
    )
}