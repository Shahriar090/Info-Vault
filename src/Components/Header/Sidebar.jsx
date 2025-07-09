import Link from 'next/link';
import React from 'react';

const Sidebar = ({docs}) => {
  // separating docs based on with parent and without parent
  // roots (docs without parent)
  const roots = docs.filter((doc)=> doc.parent === 'null'|| doc.parent === null);

  // docs with parent
 const nonRoots = Object.groupBy(docs.filter((doc)=>doc.parent !=='null'),({parent})=>parent);
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
          roots.map((rootNode)=>(
            <li key={rootNode.id} className='relative'>
              <Link aria-current='page' className='flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-white transition' href={`/docs/${rootNode.id}`}>
               <span className='truncate'>{rootNode.title}</span>
               </Link>

               {
                nonRoots[rootNode.id] && (
                  <ul role='list' className='border-l border-transparent'>
                    {
                      nonRoots[rootNode.id].map((subRoot)=>(
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