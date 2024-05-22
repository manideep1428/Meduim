import Image from "next/image";

export default function Logo(){
    return(
        <div className="relative w-[70px] h-[1/2]">
            <Image alt="App.logo" src={"/light.png"} layout="fill" objectFit={"cover"}/>
        </div>
    )
}
