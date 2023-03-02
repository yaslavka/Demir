import React from "react";
import {Form} from "react-bootstrap";

function UsloviyaBrony(){
    return(
        <>
            <fieldset style={{opacity: 1}}>
                <div className="set-header">Условия бронирования</div>
                <div className="set-content" id="ch-booking-policy">
                    <div className="checkbox c-checkbox">
                        <label>
                            <input className="ch-no-card-required" type="checkbox"
                                   value="no-card-required"/>
                            <span className="c-checkbox-element fa fa-check">

                                                </span>
                            <span className="name">Бронирование без карты</span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label style={{opacity: 5}}
                               title="Для работы этого фильтра необходимо указать даты заезда и выезда">
                            <input
                                className="ch-free-cancellation" type="checkbox" value="free-cancellation"
                                disabled=""/>
                            <span className="c-checkbox-element fa fa-check">

                                        </span>
                            <span className="name">Бесплатная отмена</span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label style={{opacity: 5}} title="Для работы этого фильтра необходимо указать даты заезда и выезда">
                            <input className="ch-online-payment" type="checkbox" value="online-payment" disabled=""/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span className="name">Онлайн оплата</span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox" id="ch-cashless-payment-container">
                        <label
                            style={{opacity: 5}}
                            title="Для работы этого фильтра необходимо указать даты заезда и выезда">
                            <input className="ch-cashless-payment" type="checkbox" value="cashless-payment" disabled=""/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span className="name">Оплата по счету</span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox hidden" id="ch-day-offer-container">
                        <label>
                            <input id="ch-day-offer" type="checkbox" value=""/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span> Предложение дня&nbsp;
                            <i className="day_offer_info icomoon-icon-info tooltip">

                            </i>
                            <span id="counter_day_offer" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox hidden" id="ch-pay-bonuses-container">
                        <label>
                            <input id="ch-pay-bonuses" type="checkbox" value=""/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span> Оплата бонусами
                            101Hotels.com&nbsp;
                            <i className="pay_bonuses_info icomoon-icon-info tooltip"
                               title="Отели, номера в которых вы можете оплатить бонусами частично или полностью">

                            </i>
                            <span id="counter_pay_bonuses" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div id="need_auth">Только для статуса "Серебряный" и выше</div>
                </div>
            </fieldset>
        </>
    )
}
export default UsloviyaBrony