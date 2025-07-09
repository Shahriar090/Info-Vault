import ContentDisplay from '@/Components/ContentDisplay/ContentDisplay';
import React from 'react';

const SubContentPage = ({params}) => {
    const subcontentid = params.subcontentid
  return (
    <ContentDisplay id={subcontentid}/>
  );
};

export default SubContentPage;