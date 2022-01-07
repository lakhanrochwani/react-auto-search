import React, { useState, useEffect } from 'react';
import './style.css';
import Results from './Results';

export default function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
    if (value.length < 3) {
      setResults([]);
    }
  }

  useEffect(() => {
    // console.log('Inside', input);
    if (input.length >= 3) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          let output = data.map((e) => {
            return e.title;
          });
          let updatedResults = output.filter((text) => text.includes(input));
          setResults(updatedResults);
        });
    }
  }, [input]);

  return (
    <div>
      <label>
        {' '}
        Search: &nbsp;
        <input type="text" value={input} onChange={handleChange} /> &nbsp;
        {input.length > 0 ? (
          <button
            onClick={() => {
              setInput('');
              setResults([]);
            }}
          >
            Clear
          </button>
        ) : (
          ''
        )}
        <ul>
          {results.map((text, i) => {
            return <Results key={i} text={text} input={input} />;
          })}
        </ul>
      </label>
    </div>
  );
}
