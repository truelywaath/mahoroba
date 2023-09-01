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
      <div className="bg-rose-50 w-full text-center text-white text-[60px] font-bold pt-6 pb-9">
        エリアを選択してください
      </div>
    
      <div className="mx-12 mt-9">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[75px] h-[75px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>

        </Link>
        <div className="text-center">
          <ul>
            {areas.map((area) => {
              return (
                <div className="list-row">
                  <li className="mb-12" key={area.id}>
                    <Link to="/timezone" state={{ area_id: area.id }}>
                      <button className="w-[516px] h-[96px] text-4xl font-semibold text-white bg-rose-200 hover:text-rose-600 hover:bg-rose-300  border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                        { area.division }
                      </button>
                    </Link>
                  </li>
                </div>
              )
            })}
            <div className="list-row">
              <li className="mb-[74px]" key="-1">
                <Link to="/timezone" state={{ area_id: -1 }}>
                  <button className="w-[516px] h-[96px] text-4xl font-semibold text-white bg-rose-200 hover:text-rose-600 hover:bg-rose-300  border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                   指定なし
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