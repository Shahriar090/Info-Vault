'use client'

import { getDocumentsByAuthor, getDocumentsByCategory, getDocumentsByTag } from '@/utils/doc-util';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sidebar = ({docs}) => {
  const [rootNodes, setRootNodes]=useState([]);
  const [nonRootNodesGrouped, setNonRootNodesGrouped]=useState({})
  const pathName = usePathname();

  useEffect(()=>{
    let matchedDocs = docs;
    if(pathName.includes('/tags')){
      const tag = pathName.split('/')[2];
      matchedDocs = getDocumentsByTag(docs,tag);
    }else if(pathName.includes('/authors')){
      const author = pathName.split('/')[2];
      matchedDocs = getDocumentsByAuthor(docs,author);
    }else if(pathName.includes('/categories')){
      const category = pathName.split('/')[2];
      matchedDocs = getDocumentsByCategory(docs, category);
    }

      // separating docs based on with parent and without parent
  // roots (docs without parent)
  const roots = matchedDocs.filter((doc)=> doc.parent === 'null'|| doc.parent === null);

  // docs with parent
 const nonRoots = Object.groupBy(matchedDocs.filter((doc)=>doc.parent !=='null'),({parent})=>parent);

 const nonRootsKeys = Reflect.ownKeys(nonRoots);
 nonRootsKeys.forEach(key=>{
  const foundInRoots = roots.find((root)=>root.id===key);
  if(!foundInRoots){
    const foundInDocs = docs.find((doc)=>doc.id===key);
    roots.push(foundInDocs);
  }
 });

 roots.sort((a,b)=>{
  if(a.order <b.order){
    return -1;
  }
  if(a.order>b.order){
    return 1;
  }
  return 0;
 });
 
 setRootNodes([...roots]);
 setNonRootNodesGrouped({...nonRoots});
  },[docs, pathName])

  return (
     <aside className="w-full h-screen  bg-gray-800 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8">
        Info Vault
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-4 text-lg">
       <ul role='list' className='border-l border-transparent'>
        {
          rootNodes.map((rootNode)=>(
            <li key={rootNode.id} className='relative'>
              <Link aria-current='page' className='flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-white transition' href={`/docs/${rootNode.id}`}>
               <span className='truncate'>{rootNode.title}</span>
               </Link>

               {
                nonRootNodesGrouped[rootNode.id] && (
                  <ul role='list' className='border-l border-transparent'>
                    {
                      nonRootNodesGrouped[rootNode.id].map((subRoot)=>(
                        <li key={subRoot.id}>
                          <Link href={`/docs/${rootNode.id}/${subRoot.id}`} className='flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-gray-100 transition hover:text-gray-200'> 
                          <span className="truncate">{subRoot.title}</span>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                )
               }
            </li>
          ))
        }
       </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;