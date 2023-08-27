import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export function Header() {
	return (
    <>
      <div className="flex justify-around items-center p-12 bg-rose-50">
        <h1 className="text-7xl text-white font-bold underline">
          <Link to="/">
            エドまちライブラリ
          </Link>
        </h1>
      </div>
    </>    
	)
}