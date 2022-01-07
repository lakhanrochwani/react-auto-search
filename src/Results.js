import React from 'react';

const Results = ({ text, input }) => {
  let styled = text.replace(input, '<strong>' + input + '</strong>');
  return (
    <>
      <li>{styled}</li>
      {console.log('Styled:', styled)}
    </>
  );
};

export default Results;
