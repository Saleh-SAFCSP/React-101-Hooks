import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const buttonClick = (e) => {
    setCount(count + 1);
  };
  const buttonClick2 = (e) => {
    setName('Saleh');
  };

  useEffect(() => {
    console.log('Hey from useEffect 1');
  });

  useEffect(() => {
    console.log('Hey from useEffect 2');
  }, []);

  useEffect(() => {
    console.log('Hey from useEffect 3');
  }, [name]);

  // console.log('Hey from app');

  const websiteName = 'React 101';

  return (
    <div className='App'>
      <Navbar websiteName={websiteName} />
      <div className='mid'>
        <button onClick={buttonClick} type='button'>
          Add count
        </button>
        <h1>{count}</h1>
        <button onClick={buttonClick2} type='button'>
          You name
        </button>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default App;
