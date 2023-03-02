import React from "react";

function Populyar(){
    return(
        <>
            <fieldset style={{opacity: 1}}>
                <div className="set-header">Популярные</div>
                <div className="set-content" id="popular-container">
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_hotels"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                </span>
                            <span>
                                                    Отели
                                                </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_hostels"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                   </span>
                            <span>
                                                Хостелы
                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_wi-fi"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                </span>
                            <span>
                                                    Есть Wi-Fi
                                                </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_breakfast"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                   </span>
                            <span>
                                                Завтрак включен
                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_9plus"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                </span>
                            <span>
                                                    Оценка Отлично 9+
                                                </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_8plus"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                </span>
                            <span>
                                                    Оценка Хорошо 8+
                                                </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="leader" type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span>
                                                Лидер продаж
                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label style={{opacity:5}} title="Для работы этого фильтра необходимо указать даты заезда и выезда">
                            <input id="ch-special-offers" type="checkbox" disabled=""/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span>
                                                Есть спецпредложения
                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input id="popular_bathroom"
                                   type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                                   </span>
                            <span>
                                                Удобства в номере
                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox" style={{display:"none"}}>
                        <label>
                            <input id="ch-day-offer" type="checkbox"/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span>
                                                Предложение дня
                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label style={{opacity: 5}} title="Для работы этого фильтра необходимо указать даты заезда и выезда">
                            <input id="popular_bonus_pay" type="checkbox" disabled=""/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span>
                                                Оплата бонусами
                                            </span>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
export default Populyar