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
  const [selectedPurpose, setSelectedPurpose] = useState({ label: 'おまかせ', value: 0 });
  const [selectedGenre, setSelectedGenre] = useState({ label: 'おまかせ', value: 0 });

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
      const newValues = [{ value: 0, label: "おまかせ" }, ...values];
      console.log(newValues);
      setPurposes(newValues);
    });
  }, []);

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/genre_options').then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      const newValues = [{ value: 0, label: "おまかせ" }, ...values];
      setGenres(newValues);
    });
  }, []);


  return (
    <>
      < Header />
      <div className="mx-12 mt-6">
        <div className="flex">
          <div className="flex-none">

            <Link to="/timezone" state={{ area_id: area_id }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[75px] h-[75px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </Link>
          </div>

          <div className="flex-auto mt-6 mb-12 mr-8">
            <div className="flex mb-3">
              <div className="flex-none w-1/4 text-center text-4xl font-semibold mr-3"> ジャンル </div>
              <div className="flex-none w-3/5 text-3xl font-medium">
                <Select
                  options={genres}
                  placeholder="おまかせ"
                  selectedValue={selectedGenre}
                  onChange={(value) => {
                    setSelectedGenre(value);
                  }}
                />
              </div>
            </div>


            <div className="flex">
              <div className="flex-none w-1/4 text-center text-4xl font-semibold mr-3"> 目的 </div>
              <div className="flex-none w-3/5 text-3xl font-medium">
                <Select
                  options={purposes}
                  placeholder="おまかせ"
                  selectedValue={selectedPurpose}
                  onChange={(value) => {
                    value && setSelectedPurpose(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="items-center">
          {displayedSpots.map((spot) => {
            return (
              <Link to="/detail" state={{ spot_id: spot.id, spot_name: spot.spot, timezone_id: timezone_id, area_id: area_id }}>
                <div className="max-w-[750px] rounded overflow-hidden shadow-lg mx-auto mb-12">
                  <img className="w-full" src={spot.path} alt={spot.spot} />
                  <div className="py-4 bg-rose-800">
                    <div className="text-center font-bold text-3xl">{spot.spot}</div>
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