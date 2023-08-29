import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Select from 'react-select'
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import './../App.css';

export function SelectSpot() {
  const location = useLocation();
  const { timezone_id, area_id } = location.state;

  const [spots, setSpots] = useState([]);
  const [displayedSpots, setDisplayedSpots] = useState([]);
  const [purposes, setPurposes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedPurpose, setSelectedPurpose] = useState({label: 'おまかせ', value: 0});
  const [selectedGenre, setSelectedGenre] = useState({label: 'おまかせ', value: 0});

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/spot_options', {
      division_id: area_id,
      timezone_id: timezone_id
    }).then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setSpots(values);
      setDisplayedSpots(values);
    });

  }, []);

  useEffect(() => {
    let newArray = [];
    if (selectedPurpose.value === 0 && selectedGenre.value === 0) {
      newArray = spots; 
    } else if (selectedPurpose.value === 0) {
      newArray = spots.filter((spot) => {
        return spot.genre_id === selectedGenre.value;
      });
    } else if (selectedGenre.value === 0) {
      newArray = spots.filter((spot) => {
        return spot.purpose_ids.includes(selectedPurpose.value);
      });
    } else {
      newArray = spots.filter((spot) => {
        return spot.purpose_ids.includes(selectedPurpose.value) && spot.genre_id === selectedGenre.value;
      });   
    }

    setDisplayedSpots(newArray)
  }, [selectedPurpose, selectedGenre])

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
      < Header />
      <div className="w-screen flex px-10 py-10">
        <Link to="/timezone" state={{ area_id: area_id }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-rose-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>

        <div className="flex-auto">
          <div className="flex ml-10">
          <div className="w-1/4 text-center text-3xl mr-6 mb-4"> 目的 </div>
            <div className="w-3/5 text-3xl font-bold">
              <Select 
                options={purposes} 
                selectedValue={selectedPurpose}
                onChange={(value) => {
                  value && setSelectedPurpose(value);
                }}
              />
            </div> 
          </div>
          <div className="flex ml-10">
            <div className="w-1/4 text-center text-3xl mr-6"> ジャンル </div>
            <div className="w-3/5 text-3xl font-bold">
              <Select 
                options={genres} 
                selectedValue={selectedGenre}
                onChange={(value) => {
                  setSelectedGenre(value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <div className="items-center">
          {displayedSpots.map((spot) => {
            return(
              <Link to="/detail" state={{ spot_id: spot.id, spot_name: spot.spot, timezone_id:timezone_id, area_id:area_id }}>
                <div className="max-w-2xl rounded overflow-hidden shadow-lg mt-2 mx-auto my-10">
                    <img className="w-full" src={spot.path} alt={spot.spot}/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{spot.spot}</div>
                    </div>
                  </div>
            </Link>
            )
          })}
        </div>
      </div>
		</>
	);
}