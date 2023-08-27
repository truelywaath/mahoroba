import React from 'react';
import Router from './router/Router';
import './App.css';

function App() {
  return(
    <>
    <div className="bg-gray-100">
      <div className="w-screen flex justify-center items-center">
        <div className="w-5/6 sm:w-full">
          <Router />
        </div>
      </div>
    </div>
    </>
    );
}

export default App;