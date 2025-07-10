import ContentDisplay from '@/Components/ContentDisplay/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByTag } from '@/utils/doc-util';
import React from 'react';

const TagesPage = ({params}) => {
    const {name}=params;
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByTag(docs,name);

  return (
    <ContentDisplay id={matchedDocuments[0].id}/>
  );
};  

export default TagesPage;