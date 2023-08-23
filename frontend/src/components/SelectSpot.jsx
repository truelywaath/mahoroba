import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './../App.css';

export function SelectSpot() {
  const location = useLocation();
  const { area_id } = location.state;

  const [spots, setSpots] = useState([]);
  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/spot_options', {
      division_id: area_id
    }).then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setSpots(values);
    });
  }, []);


	return(
		<>
      <div className="px-8">
        <div className="text-center">
          {spots.map((spot) => {
            return(
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2 mx-2">
                <img class="w-full" src={spot.path} alt={spot.spot}/>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{spot.spot}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10">
          <Link className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" to="/area">
            一つ前に戻る
          </Link>
        </div>
      </div>
		</>
	);
}