import React, {useState} from "react";
import {Navigation, Pagination, Controller, A11y, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom";

function NomerIdAlbums({nomerId}){
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <>
            <div>
                {nomerId.albomsnomera && (
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
                        {nomerId.albomsnomera.map((item)=>(
                            <SwiperSlide>
                                <>
                                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.photonomerov}`} alt={item.photonomerov}/>
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
            <div className="hotel-gallery">
                {nomerId.albomsnomera && (
                    <ul className="unstyled thumbnails clearfix" style={{listStyleType: "none"}}>
                        {nomerId.albomsnomera.map((item)=>(
                            <li className="item-image">
                                <Link to={`#/${item.image}`}>
                                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.photonomerov}`} alt={item.photonomerov}/>
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
export default NomerIdAlbums