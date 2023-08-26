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
          <Link className="bg-rose-200 hover:bg-rose-300 text-rose-400 font-bold p-6 rounded-full text-5xl" to="/area">
            使ってみる!
          </Link>
        </li>
      </ul>


    </div>
    </>
    );
}
