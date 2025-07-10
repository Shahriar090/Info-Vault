import ContentDisplay from '@/Components/ContentDisplay/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByAuthor } from '@/utils/doc-util';
import React from 'react';

const AuthorsPage = ({params}) => {
    const {name}=params;
    const docs = getDocuments();
    const matchedDocs = getDocumentsByAuthor(docs, name);
  return (
    <ContentDisplay id={matchedDocs[0].id}/>
  );
};

export default AuthorsPage;