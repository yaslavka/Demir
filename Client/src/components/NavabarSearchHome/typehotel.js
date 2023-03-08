import React from "react";

function TypeHotel({i, pitaniess}){
    return (
        <>
            <div className="checkbox c-checkbox">
                <label>
                    <input id={i.id} checked={i.checked} className="ch-meal-category" type="checkbox" onChange={()=>pitaniess(i.id)}/>
                    <span className="c-checkbox-element fa fa-check">

                    </span>
                    <span className="name">{i.label}</span>
                    <span className="total-count counter_meal_type counter_meal_type_1">

                    </span>
                </label>
            </div>
        </>
    )
}
export default TypeHotel