import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import './../App.css';

export function SelectArea() {
  const [areas, setAreas] = useState([]);
  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/area_options').then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setAreas(values);
    });
  }, []);

  return(
    <>
      < Header />
      <div className="bg-rose-50 w-full text-center text-white text-7xl py-12 mb-10">
        エリアを選択してください
      </div>
    
      <div className="px-8">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-rose-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        <div className="text-center">
          <ul>
            {areas.map((area) => {
              return (
                <div className="list-row">
                  <li className="my-4" key={area.id}>
                    <Link to="/timezone" state={{ area_id: area.id }}>
                      <button className="w-2/3 text-5xl text-white bg-rose-200 hover:text-rose-600 hover:bg-rose-300 py-4 my-2 px-4 border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                        { area.division }
                      </button>
                    </Link>
                  </li>
                </div>
              )
            })}
            <div className="list-row">
              <li className="my-4" key="-1">
                <Link to="/timezone" state={{ area_id: -1 }}>
                  <button className="w-2/3 text-5xl text-white bg-rose-200 hover:text-rose-600 hover:bg-gray-300 py-4 my-2 px-4 border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                   おまかせ
                  </button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}