import React from "react";

function TypeRazme({i, Filtertypehote}){
    return (
        <>
            <div className="checkbox c-checkbox">
                <label>
                    <input id={i.id} className="ch-hotel-category" type="checkbox" onChange={()=>Filtertypehote(i.id)}/>
                    <span className="c-checkbox-element fa fa-check">

                    </span>
                    <span className="name">{i.label}</span>
                    <span id="counter_type_1" className="total-count">

                    </span>
                </label>
            </div>
        </>
    )
}
export default TypeRazme