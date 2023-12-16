import React from 'react';
import './App.css';
import './style.css';

function Message({ titre, date }) {
  return (
    <div>
      <h1>{titre}</h1>
      <p className='brushing'>Bonjour à tous!</p>
      <div className='date-info'>{formatDate(date)}</div>
    </div>
  );
}

function formatDate(dateFormat) {
  const options = {
    jma: { day: 'numeric', month: 'short', year: 'numeric' },
    amj: { year: 'numeric',month: 'short', day: 'numeric', },
  };

  return new Date().toLocaleDateString(undefined, options[dateFormat]);
}

function App() {
  return (
    <div className="App">
      <Message titre='Salutations' date='jma' />
    </div>
  );
}

export default App;