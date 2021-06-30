import { useRouter } from "next/router"
import  Link  from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";


function PaginationButtons() {

    const router = useRouter();
    const startIndex= Number(router.query.start) || 0;
    return (
        <div className="flex max-w-l justify-center text-blue-700 mb-7">
            {startIndex >= 10 && (
                // eslint-disable-next-line @next/next/link-passhref
                <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
                    <div className="flex flex-col items-center cursor-pointer hover:underline flex-grow">
                        <ChevronLeftIcon className="h-5"/>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
                
             {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
                <div className="flex flex-col items-center cursor-pointer hover:underline flex-grow">
                    <ChevronRightIcon className="h-5"/>
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons
