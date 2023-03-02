import React from "react";
import {Form} from "react-bootstrap";
import PriceOfnumber from "./Components/PriceOfnumber";
import Populyar from "./Components/Populyar";
import RasstoyanieBereg from "./Components/RasstoyanieBereg";
import Zaezdy from "./Components/Zaezdy";
import UsloviyaBrony from "./Components/UsloviyaBrony";

function Navbar(){
    return(
        <div id="sidebar">
            <>
                <div className="filter-form sidebar-box" id="sidebar-filter-form">
                    <div className="sidebar-box-content">
                        <Form>
                            <PriceOfnumber/>
                            <fieldset style={{opacity: 1}}>
                                <div className="set-content">
                                    <div id="slider-price" style={{display: "none"}}>
                                        <div className="slider"/>
                                    </div>
                                </div>
                            </fieldset>
                            <Populyar/>
                            <RasstoyanieBereg/>
                            <Zaezdy/>
                            <UsloviyaBrony/>


                            <fieldset style={{opacity: 1}}>
                                <div className="set-header">Оценка по отзывам</div>
                                <div className="set-content" id="ch-ratings">
                                    <div className="radio c-radio">
                                        <label>
                                            <input name="ratings" className="ch-ratings"
                                                   type="radio" value="0"/>
                                                   <span className="c-radio-element fa fa-radio">

                                                   </span>
                                            <span> Все</span>
                                            <span className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input name="ratings" className="ch-ratings"
                                                   type="radio" value="9"/>
                                                   <span className="c-radio-element fa fa-radio">

                                                   </span>
                                            <span> 9+ Отлично</span>
                                            <span className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input name="ratings" className="ch-ratings"
                                                   type="radio" value="8"/>
                                                <span className="c-radio-element fa fa-radio">

                                                </span><span> 8+ Хорошо</span>
                                                <span className="total-count">

                                                </span>
                                        </label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input name="ratings" className="ch-ratings"
                                                   type="radio" value="7"/>
                                                   <span className="c-radio-element fa fa-radio">

                                                   </span>
                                            <span> 7+ Нормально</span>
                                            <span className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset style={{opacity:1}}>
                                <div className="set-header">Тип питания</div>
                                <div className="set-content" id="ch-meal-categories">
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-meal-category" type="checkbox" value="1"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Завтрак</span>
                                            <span className="total-count counter_meal_type counter_meal_type_1">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-meal-category"
                                                   type="checkbox" value="2"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Полупансион</span>
                                            <span className="total-count counter_meal_type counter_meal_type_2">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-meal-category"
                                                   type="checkbox" value="3"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Полный пансион</span>
                                            <span className="total-count counter_meal_type counter_meal_type_3">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-meal-category"
                                                   type="checkbox" value="4"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Все включено</span>
                                            <span className="total-count counter_meal_type counter_meal_type_4">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-self-catering"
                                                   type="checkbox" value="0"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">С собственной кухней</span>
                                            <span className="total-count counter_meal_type counter_meal_type_0">

                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset style={{opacity:1}}>
                                <div className="set-header">Услуги</div>
                                <div className="set-content" id="ch-service-container">
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="101"
                                                   data-additional="[]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Рыбалка</span>
                                            <span id="counter-services-101" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="10" data-additional="[188,185,195,186,41,40]"/>
                                                <span className="c-checkbox-element fa fa-check">

                                                </span>
                                                <span className="name">Бассейн</span>
                                                <span id="counter-services-10" className="total-count">

                                                </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="94" data-additional="[]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Баня</span>
                                            <span id="counter-services-94" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="211"
                                                   data-additional="[]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Услуги егеря</span>
                                            <span id="counter-services-211" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="183"
                                                   data-additional="[192,158,194,150,4,193,159]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Трансфер</span>
                                            <span id="counter-services-183" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="25" data-additional="[]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Мангал</span>
                                            <span id="counter-services-25" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="28" data-additional="[]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Общая кухня</span>
                                            <span id="counter-services-28" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="212"
                                                   data-additional="[]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Аренда лодок и катеров</span>
                                            <span id="counter-services-212" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-bathroom"
                                                   type="checkbox"
                                                   value="bathroom_id"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Удобства в номере</span>
                                            <span id="counter_bathroom" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="13"
                                                   data-additional="[43,190,42,44,45]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Пляж</span>
                                            <span id="counter-services-13" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="11" data-additional="[198]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Сауна / SPA</span>
                                            <span id="counter-services-11" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="19"
                                                   data-additional="[]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Wi-Fi</span>
                                            <span id="counter-services-19" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="133" data-additional="[]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Верховая езда</span>
                                            <span id="counter-services-133" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="209" data-additional="[]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Беседки для отдыха</span>
                                            <span id="counter-services-209" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services" type="checkbox" value="213" data-additional="[]"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Аренда удочек, спиннингов</span>
                                            <span id="counter-services-213" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label><input className="ch-services"
                                                      type="checkbox" value="2"
                                                      data-additional="[]"/>
                                                      <span className="c-checkbox-element fa fa-check">

                                                      </span>
                                            <span className="name">Бар / Ресторан</span>
                                            <span id="counter-services-2" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="129"
                                                   data-additional="[]"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Велоспорт</span>
                                            <span id="counter-services-129" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-services"
                                                   type="checkbox" value="210"
                                                   data-additional="[]"/>
                                                <span className="c-checkbox-element fa fa-check">

                                                </span>
                                                <span className="name">Приготовление трофеев</span>
                                                <span id="counter-services-210" className="total-count">

                                                </span>
                                        </label>
                                    </div>
                                    {/*service-types-more*/}
                                    <div className="service-types-more hidden">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="215"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Квадроциклы</span>
                                                <span id="counter-services-215" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="206"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Охраняемая территория</span>
                                                <span id="counter-services-206" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="216"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Конный прокат</span>
                                                <span id="counter-services-216" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="14"
                                                       data-additional="[168,169]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Автостоянка / Парковка</span>
                                                <span id="counter-services-14" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="84"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Барбекю</span>
                                                <span id="counter-services-84" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="96"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Допускается размещение домашних животных</span>
                                                <span id="counter-services-96" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="93"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Зоопарк</span>
                                                <span id="counter-services-93" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="89"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Прокат пляжного инвентаря</span>
                                                <span id="counter-services-89" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="78"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Прокат горнолыжного инвентаря</span>
                                                <span id="counter-services-78" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="77"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Место для хранения лыж</span>
                                                <span id="counter-services-77" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="69"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Вид на реку</span>
                                                <span id="counter-services-69" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="68"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Вид на озеро</span>
                                                <span id="counter-services-68" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="52"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Детский бассейн</span>
                                                <span id="counter-services-52" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="49"
                                                       data-additional="[]"/>
                                                    <span className="c-checkbox-element fa fa-check">

                                                    </span>
                                                <span className="name">Караоке</span>
                                                <span id="counter-services-49" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="220"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Своя ухоженная территория</span>
                                                <span id="counter-services-220" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="48"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Няня / Услуги по уходу за детьми</span>
                                                <span id="counter-services-48" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="47"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Анимационный персонал</span>
                                                <span id="counter-services-47" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="39"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Мини-бар</span>
                                                <span id="counter-services-39" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="33"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Доставка еды и напитков в номер</span>
                                                <span id="counter-services-33" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services" type="checkbox" value="30"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Детская площадка</span>
                                                <span id="counter-services-30" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="22"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Экскурсионное обслуживание</span>
                                                <span id="counter-services-22" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="200"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Камин</span>
                                                <span id="counter-services-200" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="7"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Фен</span>
                                                <span id="counter-services-7" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input className="ch-services"
                                                       type="checkbox" value="5"
                                                       data-additional="[]"/>
                                                       <span className="c-checkbox-element fa fa-check">

                                                       </span>
                                                <span className="name">Кондиционер</span>
                                                <span id="counter-services-5" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    {/*more-services off display: none;*/}
                                    <a href="#" className="more-services">
                                        <span className="text">Ещё услуги</span>
                                        <span className="fa fa-angle-down">

                                        </span>
                                    </a>
                                </div>
                            </fieldset>
                            <fieldset style={{opacity:1}}>
                                <div className="set-header">Тип размещения</div>
                                <div className="set-content" id="ch-hotel-categories">
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category"
                                                   type="checkbox" value="1"
                                                   data-url="hotels"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span><span className="name">Отели</span>
                                            <span id="counter_type_1" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category"
                                                   type="checkbox" value="2"
                                                   data-url="hostels"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Хостелы</span>
                                            <span id="counter_type_2" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="custom ch-hotels_like_hostels_price" type="checkbox" value="2" data-url="hotels_like_hostels_price"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Отели по цене хостела</span>
                                            <span id="counter_type_hotels_like_hostels_price" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category"
                                                   type="checkbox" value="3"
                                                   data-url="guesthouse"/>
                                                <span className="c-checkbox-element fa fa-check">

                                                </span>
                                                <span className="name">Гостевые дома</span>
                                                <span id="counter_type_3" className="total-count">

                                                </span>
                                            </label>
                                        </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category" type="checkbox" value="4" data-url="apartments"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Апартаменты</span>
                                            <span id="counter_type_4" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category" type="checkbox" value="5" data-url="pensions"/>
                                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                                            <span className="name">Пансионаты</span>
                                            <span id="counter_type_5" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category"
                                                   type="checkbox" value="6"
                                                   data-url="sanatorium"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Санатории</span>
                                            <span id="counter_type_6" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category"
                                                   type="checkbox" value="7"
                                                   data-url="recreation_base"/>
                                                   <span className="c-checkbox-element fa fa-check">

                                                   </span>
                                            <span className="name">Базы отдыха</span>
                                            <span id="counter_type_7" className="total-count">

                                            </span>
                                        </label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input className="ch-hotel-category"
                                                   type="checkbox" value="8"
                                                   data-url="cottage"/>
                                                <span className="c-checkbox-element fa fa-check">

                                                </span>
                                                <span className="name">Коттеджи</span>
                                                <span id="counter_type_8"
                                                      className="total-count">

                                                </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </Form>
                    </div>
                </div>
            </>
        </div>
    )
}
export default Navbar