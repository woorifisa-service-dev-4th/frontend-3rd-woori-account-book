import React, { useState } from 'react';
import GraphBars from './GraphBars';
import GraphHeader from './GraphHeader';


const GraphContainer = () => {

  const [showType , setShowType]=useState('all');
  
  const handleTypeClick = (type) => {
    setShowType(type);
  };
  
  return (
    <>
      <GraphHeader onTypeClick={handleTypeClick}/>
      <GraphBars  showType={showType} />
    </>
  );
};

export default GraphContainer;