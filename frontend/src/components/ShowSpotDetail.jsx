
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Select from 'react-select';
import Slider from "react-slick";
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../App.css';
import './css/ShowSpotDetail.css';

export function ShowSpotDetail() {
    const location = useLocation();
    const spot_id = location.state.spot_id;
    const spot_name = location.state.spot_name;
    const timezone_id = location.state.timezone_id;
    const area_id = location.state.area_id;


    const slider_settings = {
        dots: true,
        infinite: true,
        speed: 500,
      };

    const related_slider_settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
< Header />
<div className="mx-12 mt-6">
        <Link to="/spot" state={{ timezone_id: timezone_id, area_id: area_id }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[75px] h-[75px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        </Link>
</div>



    <div class="mt-[45px] ml-20 mr-20 mb-20 max-w-[840px] rounded overflow-hidden shadow-lg">
        <Slider {...slider_settings}>
        {images.map((img)=>{
            return (
            <div>
            <img src={img.path} class="w-full slide-img" />
            </div>
            )
        })}
        </Slider>
    </div>



{detail.map((info) => {
            return(
<div class="flex mt-[72px]">
  <div class="px-2 mx-8 flex-1">
    <p class="text-5xl font-bold m-3">{spot_name}</p>
    <p class="text-2xl font-medium mt-10 mr-3 ml-3 mb-3">{info.description}</p>
  </div>
  <div class="px-2 ml-1 flex-1">
  <iframe width="400rem" height="300rem"  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.8493436052695!2d139.7478333!3d35.6560833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzIxLjkiTiAxMznCsDQ0JzUyLjIiRQ!5e0!3m2!1sja!2sjp!4v1693087584448!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  </div>
</div>
            )
          })}

<div class="mt-20 ml-12 mr-12 pb-1 border-b-stone-950 border-2">
    <p class="text-3xl font-bold mb-2">関連スポット</p>
</div>

<div class="mx-12 mt-16 mb-[68px]">
        <Slider {...related_slider_settings}>
        {related_spots.map((related_spot) => {
                return(
                    <div>
                <img src={related_spot.related_image_path} class="slide-related-img" />
                </div>
                )
            })}
        </Slider>
    </div>

		</>
	);
}


