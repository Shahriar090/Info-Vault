import ContentDisplay from '@/Components/ContentDisplay/ContentDisplay';
import React from 'react';

const ContentDetails = ({params}) => {
    const contentid = params.contentid
  return (
    <ContentDisplay id={contentid}/>
  );
};

export default ContentDetails;