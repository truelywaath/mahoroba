import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Select from 'react-select'
import { Link, useLocation } from 'react-router-dom';
import './../App.css';

export function SelectSpot() {
  const location = useLocation();
  const { area_id } = location.state;

  const [spots, setSpots] = useState([]);
  const [purposes, setPurposes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedPurpose, setSelectedPurpose] = useState({label: 'おまかせ', value: 0});
  const [selectedGenre, setSelectedGenre] = useState({label: 'おまかせ', value: 0});

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/spot_options', {
      division_id: area_id
    }).then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setSpots(values);
    });


  }, [selectedPurpose, selectedGenre]);

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/purpose_options').then((res) => {
      const values = Object.values(res.data);
      const newValues = [{value: 0, label: "おまかせ"}, ...values];
      console.log(newValues);
      setPurposes(newValues);
    });
  }, []);

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/genre_options').then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      const newValues = [{value: 0, label: "おまかせ"}, ...values];
      setGenres(newValues);
    });
  }, []);


	return(
		<>
    {selectedPurpose.label}
    {selectedGenre.label}
      <div>
        mokuteki: 
        <Select 
          options={purposes} 
          selectedValue={selectedPurpose}
          onChange={(value) => {
            value && setSelectedPurpose(value);
          }}
        />
      </div>
      <div>
        genre: 
        <Select 
          options={genres} 
          selectedValue={selectedGenre}
          onChange={(value) => {
            setSelectedGenre(value);
          }}
        />
      </div>
      <div className="px-8">
        <div className="text-center">
          {spots.map((spot) => {
            return(
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mx-2">
                <img className="w-full" src={spot.path} alt={spot.spot}/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{spot.spot}</div>
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