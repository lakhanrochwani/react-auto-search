import React from 'react';

const Results = ({ text, input }) => {
  let styled = text.replaceAll(input, '<strong>' + input + '</strong>');
  return (
    <>
      <li>{styled}</li>
      {console.log('Styled:', styled)}
    </>
  );
};

export default Results;
