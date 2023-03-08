import React, {useEffect, useState} from "react";
import useMatchMedia from "use-match-media-hook";
import {Navigation, Pagination, Controller, A11y, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss';
import {api} from "../../../../../api";
import Act from "./action";
import ActionDes from "./actiondes";

function Action(){
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [actions, setActions] = useState(null)
    const queries = [
        '(max-width: 1023px)',
        '(min-width: 1024px)'
    ]
    const [mobile, desktop] = useMatchMedia(queries)

    useEffect(()=>{
        api.actions()
            .then(response => {
                setActions(response)
            })
            .catch(error => {
                setActions(error)
            })
    },[])

    if (mobile) return (
        <>
            <div>
                <div style={{textAlign: "center"}}>
                    Отдохни с выгодой
                </div>
                <div style={{textAlign: "center", fontSize: 30, color: "#622e85"}}>
                    <h3>АКЦИИ</h3>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    controller={{ control: controlledSwiper }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => setControlledSwiper(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {actions && (
                        <>
                            {actions.map((item)=>(
                                <>
                                    <SwiperSlide key={item.id}>
                                        <Act item={item} key={item.id}/>
                                    </SwiperSlide>
                                </>
                            ))}
                        </>
                    )}
                </Swiper>
            </div>
        </>
    )
    return (
        <>
            {desktop && (
                <div>
                    <div style={{textAlign: "center"}}>
                        Отдохни с выгодой
                    </div>
                    <div style={{textAlign: "center", fontSize: 30, color: "#622e85"}}>
                        <h3>АКЦИИ</h3>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                        spaceBetween={5}
                        slidesPerView={3}
                        navigation
                        controller={{ control: controlledSwiper }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => setControlledSwiper(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {actions && (
                            <>
                                {actions.map((item)=>(
                                    <>
                                        <SwiperSlide key={item.id}>
                                            <ActionDes item={item} key={item.id}/>
                                        </SwiperSlide>
                                    </>
                                ))}
                            </>
                        )}
                    </Swiper>
                </div>
            )}
        </>
    )
}
export default Action