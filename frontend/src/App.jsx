import React from 'react';
import Router from './router/Router';
import { Header } from './Header';
import './App.css';

function App() {
  return(
    <>
    <div className="w-screen flex justify-center items-center">
      <div className=" w-96">
        <Header />
        <Router />
      </div>
    </div>
    </>
    );
}

export default App;