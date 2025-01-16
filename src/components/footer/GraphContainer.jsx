import React, { useState } from 'react';
import GraphBars from './GraphBars';
import GraphHeader from './GraphHeader';


const GraphContainer = ({ data }) => {

  const [showType , setShowType]=useState('all');
  
  const handleTypeClick = (type) => {
    setShowType(type);
  };
  
  return (
    <>
      <GraphHeader onTypeClick={handleTypeClick}/>
      <GraphBars data={data} showType={showType} />
    </>
  );
};

export default GraphContainer;
