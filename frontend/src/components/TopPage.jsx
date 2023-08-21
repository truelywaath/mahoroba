import React from 'react';
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
      <ul>
        <li className="my-6">
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/area">
            使ってみる!
          </Link>
        </li>
        <li className="my-6">
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/doublify">
            Doublify!
          </Link>
        </li>
      </ul>


    </div>
    </>
    );
}
