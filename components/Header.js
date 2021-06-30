import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image"
import {useRouter} from 'next/router'
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions  from "./HeaderOptions";
import sloop from '../pages/SLOOPLogo.png'

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) {
            return;
        }

        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
        <div className="flex w-full p-6 items-center">
             {/* <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" */}
             <Image src={sloop}
          alt=""
          width={120}
          height={40}
          onClick={() => router.push("/") }
          className="cursor-pointer"
        />

        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 bor cursor-pointerder-gray-200 rounded-full shadow-lg max-w-3xl items-center">
            <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" defaultValue={router.query.term}/>
            <XIcon className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={() => (searchInputRef.current.value = "")}
            />

            <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 cursor-pointer
            pl-4 border-gray-300"/>
            <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"/>

            <button hidden type="submit" onClick={search}>Search</button>
        </form>
        <Avatar className="ml-auto" url='https://lh3.googleusercontent.com/ogw/ADea4I5IQDXICgx7Ic0zvgofqR9NRUjlarJZWOzSa-WxNA=s83-c-mo'/>
        </div>

        <HeaderOptions />
        </header>
    )
}

export default Header
