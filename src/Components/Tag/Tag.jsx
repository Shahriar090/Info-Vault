import Link from 'next/link';
import React from 'react';

const Tag = ({tag}) => {
  return (
    <Link key={tag} href={`/tags/${tag}`} className='bg-purple-300 p-1 rounded-md mr-2 text-xs text-black'>
    {tag}
    </Link>
  );
};

export default Tag;