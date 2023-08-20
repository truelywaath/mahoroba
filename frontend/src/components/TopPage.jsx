import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

export function TopPage() {
  return(
    <>
    <div className="text-center">
      <h1> aaaaaaaaaa </h1>
      <h1> aaaaaaaaaa </h1>
      <h1> aaaaaaaaaa </h1>
      <h1> aaaaaaaaaa </h1>
      <br></br>
      <br></br>
      <br></br>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/doublify">
        使ってみる!
      </Link>
    </div>
    </>
    );
}
