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

  console.log('test')
  return(
    <>
      <div className="px-8">
        <div className="text-center">
          <div className="bg-blue-300 py-5 border-2 border-blue-500">
            エリアは？
          </div>
          <ul>
            {areas.map((area) => {
              return (
                <div className="list-row">
                  <li className="my-4">
                    <button className="w-2/3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      {area}
                    </button>
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