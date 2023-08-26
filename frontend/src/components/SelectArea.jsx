import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
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
      <div className="bg-rose-50 w-full text-center text-white text-7xl py-12 rounded-bl-full rounded-br-full mb-10">
        エリアは？
      </div>
      <div className="px-8">
        <div className="text-center">
          <ul>
            <div className="list-row">
              <li className="my-4" key="-1">
                <Link to="/spot" state={{ area_id: -1 }}>
                  <button className="w-2/3 text-5xl text-rose-400 bg-rose-200 hover:bg-gray-300 py-4 my-2 px-4 border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                   おまかせ
                  </button>
                </Link>
              </li>
            </div>
            {areas.map((area) => {
              return (
                <div className="list-row">
                  <li className="my-4" key={area.id}>
                    <Link to="/spot" state={{ area_id: area.id }}>
                      <button className="w-2/3 text-5xl text-rose-400 bg-rose-200 hover:bg-rose-300 py-4 my-2 px-4 border border-gray-400 rounded shadow rounded-full" component={Link} to="/">
                        { area.division }
                      </button>
                    </Link>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
        
        <div className="mt-10">
          <Link className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" to="/">
            一つ前に戻る
          </Link>
        </div>
      </div>
    </>
  );
}