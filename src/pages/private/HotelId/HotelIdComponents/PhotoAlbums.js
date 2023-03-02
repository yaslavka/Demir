import React, {useState} from "react";
import {Navigation, Pagination, Controller, A11y, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import im from '../../../../assets/hotel/50286032_thumb.jpg'
import {Link} from "react-router-dom";

const albums = [
    {id: 1, image:im},
    {id: 2, image:im},
    {id: 2, image:im},
    {id: 2, image:im},
    {id: 2, image:im},
    {id: 2, image:im}
]

function PhotoAlbums(){
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <>
           <div>
               <Swiper
                   modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                   spaceBetween={20}
                   slidesPerView={1}
                   navigation
                   controller={{ control: controlledSwiper }}
                   pagination={{ clickable: true }}
                   scrollbar={{ draggable: true }}
                   onSwiper={(swiper) => setControlledSwiper(swiper)}
                   onSlideChange={() => console.log('slide change')}
               >
                   {albums.map((item)=>(
                       <SwiperSlide>
                           <>
                               <img src={item.image} alt={item.image}/>
                           </>
                       </SwiperSlide>
                   ))}
               </Swiper>
           </div>
            <div className="hotel-gallery">
                <ul className="unstyled thumbnails clearfix" style={{listStyleType: "none"}}>
                    {albums.map((item)=>(
                        <li className="item-image">
                            <Link to={`#/${item.image}`}>
                                <img src={item.image} className="hotel-thumb-image" alt={item.image}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{marginBottom: 30}}/>
        </>
    )
}
export default PhotoAlbums