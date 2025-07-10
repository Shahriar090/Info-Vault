import { getDocumentContent } from '@/lib/doc';
import Link from 'next/link';
import React from 'react';
import Tag from '../Tag/Tag';

const ContentDisplay = async ({id}) => {
  const documentContent = await getDocumentContent(id);
  console.log(documentContent,'from content display')
  return (
    <article className='text-black'>
      <h1>{documentContent.title}</h1>

      <div>
        <span>
          Published On: {documentContent.date} <span>By {" "}
            <Link className='underline text-blue-500' href={`/author/${documentContent.author}`}>
            {documentContent.author}</Link>
            {' '}
            Under The {' '}
            <Link className='underline text-blue-500' href={`/category/${documentContent.category}`}>
            {documentContent.category}
            </Link>{' '}
            Category
          </span>
        </span>
        <div>
          {
            documentContent.tags && documentContent.tags.map((tag)=><Tag key={tag} tag={tag}/>)
          }
        </div>

        <div dangerouslySetInnerHTML={{__html:documentContent.contentHtml}}/>
      </div>
    </article>
  );
};

export default ContentDisplay;