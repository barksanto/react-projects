import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  console.log(data)
  return (
    <div>
      <h2>accordion project setup</h2>
      {data.map((question) => {
        return (
          <h2>
            {question.title}
          </h2>
        )
      })}
    </div>

  )
}

export default App;
