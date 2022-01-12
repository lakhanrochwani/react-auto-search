import React from 'react';

const Results = ({ text, input }) => {
  let styled = text.replaceAll(input, bold(input));
  function bold(str) {
    // debugger;

    let fontColor = str.fontcolor('red');
    let element = document.getElementsByTagName('font');
    element.innerHTML = `<b>${input}</b>`;
    console.log(element);
    console.log(fontColor);
    return element;
  }
  return (
    <>
      <li>{styled}</li>
      {/* {console.log('Styled:', styled)} */}
    </>
  );
};

export default Results;
