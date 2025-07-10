'use client'

import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import { useRouter } from "next/navigation";


const SearchBar = ({docs}) => {
  const [searchResult, setSearchResult]=useState([]);
  const [term, setTerm]=useState('');
  const router = useRouter();

  const handleChange = (e)=>{
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  };
 
  const doSearch = useDebounce((term)=>{
const found = docs.filter((doc)=>{
  return doc.title.toLowerCase().includes(term.toLowerCase());
});
setSearchResult(found);
  },500)

  const closeSearchResults = (e)=>{
    e.preventDefault();
    router.push(e.target.href);
    setTerm("");
  }
  return (
   <>
   <div className="flex items-center gap-2">
    <input onChange={handleChange} value={term} type="search" className="text-black px-6 py-1 rounded-md" />
    <button type="button" className="px-4 py-1 border rounded-md">Search</button>
   </div>
   {
    term && term.trim().length >0 &&(
      <SearchResult results={searchResult} term={term} closeSearchResults={closeSearchResults}/>
    )
   }
   </>
  );
};

export default SearchBar;