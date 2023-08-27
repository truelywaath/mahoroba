
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Select from 'react-select';
import Slider from "react-slick";
import { Link, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../App.css';
import './css/ShowSpotDetail.css';

export function ShowSpotDetail() {
    const location = useLocation();
    const spot_id = location.state.spot_id;
    const spot_name = location.state.spot_name;
    
    const slider_settings = {
        dots: true,
        infinite: true,
        speed: 500,
      };

    const [images, setImages] = useState([]);
    const [detail, setDetail] = useState([]);
    const [related_spots, setRelatedSpots] = useState([]);

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/spot_images', {
        spot_id: spot_id
    }).then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setImages(values);
    });
  }, []);


useEffect(() => {
    Axios.post('http://127.0.0.1:5000/spot_info', {
        spot_id: spot_id
    }).then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setDetail(values);
    });
  }, []);

  useEffect(() => {
    Axios.post('http://127.0.0.1:5000/related_spots', {
        spot_id: spot_id
    }).then((res) => {
      console.log(res.data);
      const values = Object.values(res.data);
      setRelatedSpots(values);
    });
  }, []);





	return(
		<>

    <Slider {...slider_settings}>
      {images.map((img)=>{
        return (
        <div>
            {/* <h1>{img}</h1> */}
          <img src={img.path} />
        </div>
        )
      })}
    </Slider>



{detail.map((info) => {
            return(
<div class="flex flex-row">
  <div class="bg-green-100 px-2">
    <h1>{spot_name}</h1>
    <p>{info.description}</p>
  </div>
  <div class="bg-green-100 px-2 ml-1">
  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.8493436052695!2d139.7478333!3d35.6560833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzIxLjkiTiAxMznCsDQ0JzUyLjIiRQ!5e0!3m2!1sja!2sjp!4v1693087584448!5m2!1sja!2sjp" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  </div>
</div>
            )
          })}

<br></br>

<h1>関連スポット</h1>
<div class="flex flex-row">
{related_spots.map((related_spot) => {
            return(
  <div class="bg-green-100 px-2">
    <p>{related_spot.related_image_path}</p>
  </div>
            )
          })}
</div>
{console.log(typeof(related_spot))}


      <div className="px-8">
        <div className="text-center">
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


