import React, {useState} from "react";
import {Navigation, Pagination, Controller, A11y, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom";


function PhotoAlbums({hotelId}){
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <>
            <div>
                {hotelId.albumhotel && (
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
                        {hotelId.albumhotel.map((item)=>(
                            <SwiperSlide>
                                <>
                                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.photohotel}`} alt={item.photohotel}/>
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
            <div className="hotel-gallery">
                {hotelId.albumhotel && (
                    <ul className="unstyled thumbnails clearfix" style={{listStyleType: "none"}}>
                        {hotelId.albumhotel.map((item)=>(
                            <li className="item-image">
                                <Link to={`#/${item.image}`}>
                                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.photohotel}`} alt={item.photohotel}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div style={{marginBottom: 30}}/>
        </>
    )
}
export default PhotoAlbums