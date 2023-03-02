import React from "react";

function PriceOfnumber() {
    return (
        <>
            <fieldset style={{opacity: 1}}>
                <div className="set-header">Цена за номер</div>
                <div className="set-content" id="ch-price-range">
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox"
                                   value="0-1000"/>
                            <span className="c-checkbox-element fa fa-check">

                            </span>
                            <span>
                                <span className="price-value" data-price-currency="RUB" data-price-value="0" data-round="yes">
                                    0
                                </span>
                                -
                                <span className="price-value" data-price-currency="RUB"
                                      data-price-value="1000" data-round="yes">
                                    1000
                                </span>
                                <span className="currency">
                                    руб.
                                </span>
                                за ночь
                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" value="1000-2000"/>
                            <span className="c-checkbox-element fa fa-check">

                            </span>
                            <span>
                                <span className="price-value" data-price-currency="RUB" data-price-value="1000" data-round="yes">
                                    1000
                                </span>
                                -
                                <span className="price-value" data-price-currency="RUB" data-price-value="2000" data-round="yes">
                                    2000
                                </span>
                                <span className="currency">
                                    руб.
                                </span>
                                за ночь
                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" value="2000-3000"/>
                            <span className="c-checkbox-element fa fa-check">

                            </span>
                            <span>
                                <span className="price-value" data-price-currency="RUB" data-price-value="2000" data-round="yes">
                                    2000
                                </span>
                                -
                                <span className="price-value" data-price-currency="RUB" data-price-value="3000" data-round="yes">
                                    3000
                                </span>
                                <span className="currency">
                                    руб.
                                </span>
                                за ночь
                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" value="3000-5000"/>
                            <span className="c-checkbox-element fa fa-check">

                            </span>
                            <span>
                                <span className="price-value" data-price-currency="RUB"
                                      data-price-value="3000" data-round="yes">
                                    3000
                                </span>
                                -
                                <span className="price-value"
                                      data-price-currency="RUB"
                                      data-price-value="5000"
                                      data-round="yes">
                                    5000
                                </span>
                                <span className="currency">
                                    руб.
                                </span>
                                за ночь
                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" value="5000-Infinity"/>
                            <span className="c-checkbox-element fa fa-check">

                            </span>
                            <span>
                                свыше
                                <span className="price-value" data-price-currency="RUB" data-price-value="5000" data-round="yes">
                                    5000
                                </span>
                                <span className="currency">
                                    руб.
                                </span>
                                за ночь
                            </span>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default PriceOfnumber