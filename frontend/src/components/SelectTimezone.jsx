import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import './../App.css';

export function SelectTimezone() {
  const location = useLocation();
  const { area_id } = location.state;
  
  const [timezones, setTimezones] = useState([]);
  
  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/timezone_options').then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setTimezones(values);
    }) 
  }, []);

  return(
    <>
      <Header /> 
      <div className="bg-rose-50 w-full text-center text-white text-[60px] font-bold pt-6 pb-9">
        時間帯を選択してください
      </div>
      <div className="mx-12 mt-9">
        <Link to="/area">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[75px] h-[75px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
        <div className="text-center">
          <ul>
            {timezones.map((timezone) => {
              return (
                <div className="list-row">
                  <li className="mb-12" key={timezone.id}>
                    <Link to="/spot" state={{ timezone_id: timezone.id, area_id: area_id }}>
                      <button className="w-[516px] h-[96px] text-4xl font-semibold text-white bg-rose-200 hover:text-rose-600 hover:bg-rose-300  border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                        { timezone.timezone }
                      </button>
                    </Link>
                  </li>
                </div>
              )
            })}
            <div className="list-row">
              <li className="mb-[794px]" key="-1">
                <Link to="/spot" state={{ timezone_id: -1, area_id: area_id }}>
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