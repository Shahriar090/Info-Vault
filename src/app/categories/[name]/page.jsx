import ContentDisplay from '@/Components/ContentDisplay/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByCategory } from '@/utils/doc-util';
import React from 'react';

const CategoriesPage = ({params}) => {
    const {name} = params;
    const docs = getDocuments();
    const matcheddocs = getDocumentsByCategory(docs, name);
    console.log(matcheddocs,'from categories')

  return (
     <>
    {matcheddocs.length > 0 ? (
      <ContentDisplay id={matcheddocs[0].id} />
    ) : (
      <div>No content found for this category.</div>
    )}
  </>
  );
};

export default CategoriesPage;