import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import  Main from './Main';
import React from 'react';
import Header from './Header'
import { render } from '@testing-library/react';

function App() {
return (
  render (   
    <div>
      <Main/>
      <Header/>
    </div>
    
  )
);
}

export default App;
