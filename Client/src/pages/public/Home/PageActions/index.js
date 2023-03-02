import React, { useState } from "react";
import hotel from '../../../../assets/hotel/50286032_thumb.jpg'
import marcer from '../../../../assets/hotel/Waypoint Map-595b40b65ba036ed117d4644.svg'
import {Button} from "reactstrap";
import {Navigation, Pagination, Controller, A11y, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMatchMedia from 'use-match-media-hook'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss';

const Hotel =[
    {
        id: 1,
        name:'Москва',
        mages: hotel,
        marcer:marcer
    },
    {
        id: 1,
        name:'Москва',
        mages: hotel,
        marcer:marcer
    },
    {
        id: 1,
        name:'краснодар',
        mages: hotel,
        marcer:marcer
    },
    {
        id: 1,
        name:'Нижний Новгород',
        mages: hotel,
        marcer:marcer
    },
    // {
    //     id: 1,
    //     name:'Москва',
    //     mages: hotel,
    //     marcer:marcer
    // },
    // {
    //     id: 1,
    //     name:'Москва',
    //     mages: hotel,
    //     marcer:marcer
    // },
]


function PageActions(){
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const queries = [
        '(max-width: 1023px)',
        '(min-width: 1024px)'
    ]
    const [mobile, desktop] = useMatchMedia(queries)
    if (mobile) return (
        <>
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
                {Hotel.map(({id, mages, marcer})=>(
                    <SwiperSlide>
                        <div className="ccc" style={{alignItems: "center", justifyContent: "center"}}>
                            <>
                                <div className="contentss" key={id}>
                                    <div key={id} id={id} className="cardss">
                                        <div className="card-contents">
                                            <div className="images">
                                                <img src={mages}  alt={mages} className="pictures"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{padding: 15, fontWeight: "bold", fontSize: 20}}>
                                        <div>
                                            Название акции
                                        </div>
                                        <div>
                                            в две строки
                                        </div>
                                    </div>
                                    <div style={{padding: 15}}>
                                        <svg width="260" height="2" viewBox="0 0 325 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="-0.00109863" y1="0.75" x2="325" y2="0.75" stroke="#D9CCF8" stroke-opacity="0.6"></line></svg>
                                    </div>
                                    <div style={{paddingLeft: 15, fontWeight: 500, marginBottom: 10}}>
                                        Название гостинницы
                                    </div>
                                    <div className="c" style={{alignItems: "center", paddingLeft: 12, marginBottom: 10}}>
                                        <div className="c">
                                            <svg fill="#D9CCF8"
                                                 width={15}
                                                 focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                                                <circle cx="12" cy="9" r="2.5"/>
                                            </svg>
                                            <div style={{fontWeight: 500, fontSize: 12, color:'#7E7E7E'}}>
                                                Краснодарский край. г.Анапа, ул. мира 1
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: 20, marginBottom: 10}}>
                                        <h1 style={{fontSize: 15, fontWeight: 200, color: "#8c8c8c"}}>оценка: <i style={{fontWeight: 500}}>9,3/10</i> | <i className="fa fa-commenting-o"> </i> Отзывов: 53</h1>
                                    </div>
                                    <div style={{padding: 20, marginBottom: 10}}>
                                        <Button color="primary" role={"link"}>Перейти</Button>
                                    </div>
                                </div>
                            </>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
    return(
      <>
          {desktop && (
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
                      {Hotel.map(({id, mages, marcer})=>(
                          <SwiperSlide>
                              <div className="ccc" style={{alignItems: "center", justifyContent: "center", paddingLeft: 100, paddingRight: 100}}>
                              <>
                                  <div className="contentss" key={id}>
                                      <div key={id} id={id} className="cardss">
                                          <div className="card-contents">
                                              <div className="images">
                                                  <img src={mages}  alt={mages} className="pictures"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div style={{padding: 15, fontWeight: "bold", fontSize: 20}}>
                                          <div>
                                              Название акции
                                          </div>
                                          <div>
                                              в две строки
                                          </div>
                                      </div>
                                      <div style={{padding: 15}}>
                                          <svg width="260" height="2" viewBox="0 0 325 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="-0.00109863" y1="0.75" x2="325" y2="0.75" stroke="#D9CCF8" stroke-opacity="0.6"></line></svg>
                                      </div>
                                      <div style={{paddingLeft: 15, fontWeight: 500, marginBottom: 10}}>
                                          Название гостинницы
                                      </div>
                                      <div className="c" style={{alignItems: "center", paddingLeft: 12, marginBottom: 10}}>
                                          <div className="c">
                                              <svg fill="#D9CCF8"
                                                   width={15}
                                                   focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                              >
                                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                                                  <circle cx="12" cy="9" r="2.5"/>
                                              </svg>
                                              <div style={{fontWeight: 500, fontSize: 12, color:'#7E7E7E'}}>
                                                  Краснодарский край. г.Анапа, ул. мира 1
                                              </div>
                                          </div>
                                      </div>
                                      <div style={{paddingLeft: 20, marginBottom: 10}}>
                                          <h1 style={{fontSize: 15, fontWeight: 200, color: "#8c8c8c"}}>оценка: <i style={{fontWeight: 500}}>9,3/10</i> | <i className="fa fa-commenting-o"> </i> Отзывов: 53</h1>
                                      </div>
                                      <div style={{padding: 20, marginBottom: 10}}>
                                          <Button color="primary" role={"link"}>Перейти</Button>
                                      </div>
                                  </div>
                              </>
                          </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>
          )}
      </>
    )
}
export default PageActions
