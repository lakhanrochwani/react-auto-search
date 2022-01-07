import React from 'react';

const Results = ({ text, input }) => {
  let styled = text.split(input);

  return (
    <>
      <li>{text}</li>
      {console.log(styled)}
    </>
  );
};

export default Results;
