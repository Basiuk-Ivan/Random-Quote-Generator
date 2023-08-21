import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    const id = Math.floor(Math.random() * 220) + 1;

    axios
      .get(`https://api.adviceslip.com/advice/${id}`)
      .then(res => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
