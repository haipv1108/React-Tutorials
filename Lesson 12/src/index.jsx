import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div>Hello World!</div>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
)
