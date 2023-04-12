import React, { useState } from 'react';

function Sub() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const diff = parseFloat(num1) * parseFloat(num2);
    setResult(diff);
  };

  return (
    <div>
      <h2>Multiplication</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(event) => setNum1(event.target.value)}
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(event) => setNum2(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">mult</button>
      </form>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Sub;
