import Link from 'next/link';

const SearchResult = ({results, term,closeSearchResults}) => {
  return (
    <div className='absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow text-black'>
        <p className="">
            Showing Results For <span className='font-semibold'>{term}:</span>
        </p>
        <ul role='list' className='divide-y divide-gray-100'>
            {
                results.map((result)=>(
                    <li key={result.id}>
                        <Link href={`/docs/${result.id}`} onClick={(e)=>closeSearchResults(e)}>
                        {result.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  );
};

export default SearchResult;