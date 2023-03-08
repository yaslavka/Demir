import React from "react";

function Zaezdy({hendelr, rating}){
    return(
        <>
            <div className="checkbox c-checkbox">
                <label key={rating.id}>
                    <input id={rating.id} type="checkbox" value={rating.value} checked={rating.checked} onChange={()=>hendelr(rating.id)}/>
                    <span className="c-checkbox-element fa fa-check">

                            </span>
                    <span className="name">{rating.label}</span>
                    <span id="counter_stars_5" className="total-count">

                    </span>
                </label>
            </div>
        </>
    )
}
export default Zaezdy