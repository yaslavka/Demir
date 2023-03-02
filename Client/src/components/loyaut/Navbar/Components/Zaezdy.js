import React from "react";

function Zaezdy(){
    return(
        <>
            <fieldset style={{opacity: 1}}>
                <div className="set-header">Звезды</div>
                <div className="set-content" id="ch-hotels-stars">
                    <div className="checkbox c-checkbox">
                        <label><input type="checkbox" value="5"/>
                            <span className="c-checkbox-element fa fa-check">

                                        </span>
                            <span className="name">5 звезд</span>
                            <span id="counter_stars_5" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label><input type="checkbox" value="4"/>
                            <span className="c-checkbox-element fa fa-check">

                                        </span>
                            <span className="name">4 звезды</span>
                            <span id="counter_stars_4" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" value="3"/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span className="name">3 звезды</span>
                            <span id="counter_stars_3" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label><input type="checkbox" value="2"/>
                            <span className="c-checkbox-element fa fa-check">

                                        </span>
                            <span className="name">2 звезды</span>
                            <span id="counter_stars_2" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label><input type="checkbox" value="1"/>
                            <span className="c-checkbox-element fa fa-check">

                                        </span>
                            <span className="name">1 звезда</span>
                            <span id="counter_stars_1" className="total-count">

                                            </span>
                        </label>
                    </div>
                    <div className="checkbox c-checkbox">
                        <label>
                            <input type="checkbox" value="0"/>
                            <span className="c-checkbox-element fa fa-check">

                                            </span>
                            <span className="name">Без звезд</span>
                            <span id="counter_stars_0" className="total-count">

                                            </span>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
export default Zaezdy