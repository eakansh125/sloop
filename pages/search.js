import Head from "next/head"
import { useRouter } from "next/router";
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from "../key";
import Response from "../Response";
import SearchResults from "../components/SearchResults";

function Search({results}) {
    const router=useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term}-Sloop search</title>
            </Head>

            {/* Header */}

            <Header />

            {/* Search results */}
            <SearchResults results={results} />

        </div>

        
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData= true;
    const startIndex= context.query.start || "0"    //Pagination
   
    const data = useDummyData? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());
    //After the server has rendered, pass the results to the client
    return {
        props: {
            results: data,
        },
    }

}
