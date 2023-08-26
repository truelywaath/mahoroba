import React from 'react';
import Router from './router/Router';
import { Header } from './Header';
import './App.css';

function App() {
  return(
    <>
    <div className="bg-gray-100">
      <div className="w-screen flex justify-center items-center">
        <div className="w-5/6 sm:w-full">
          <Header />
          <Router />
        </div>
      </div>
    </div>
    </>
    );
}

export default App;