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
    <div className="text-center">
      <div className="bg-blue-300">
        エリアは？
      </div>
      <ul>
          {areas.map((area) => {
            return (
              <div className="list-row">
                <li className="my-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {area}
                  </button>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">
        一つ前に戻る
      </Link>
    </>
  );
}