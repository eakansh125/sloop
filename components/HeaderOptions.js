
import HeaderOption from "./HeaderOption";
import { DotsVerticalIcon, NewspaperIcon, PhotographIcon,
PlayIcon, SearchIcon , BookOpenIcon} from "@heroicons/react/outline"; 

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm sm:text-base lg:justify-start
        lg:space-x-36 lg:pl-52 border-b-[1px]">
            {/* Left */}
            <div className="flex space-x-6">
                <HeaderOption  Icon={SearchIcon} title="All" selected/>
                <HeaderOption  Icon={NewspaperIcon} title="News"/>
                <HeaderOption  Icon={PhotographIcon} title="Images"/>
                <HeaderOption  Icon={BookOpenIcon} title="Books"/>
                <HeaderOption  Icon={PlayIcon} title="Videos"/>
                <HeaderOption  Icon={DotsVerticalIcon} title="More"/>
            </div>
            {/* Right */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
