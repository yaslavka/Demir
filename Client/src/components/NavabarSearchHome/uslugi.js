import React from "react";

function Uslugi({i, chengedopuslugii}){
    return (
        <>
            <div className="checkbox c-checkbox">
                <label>
                    <input id={i.id} checked={i.checked} className="ch-services" type="checkbox" onChange={()=>chengedopuslugii(i.id)}/>
                    <span className="c-checkbox-element fa fa-check">

                    </span>
                    <span className="name">{i.label}</span>
                    <span id="counter-services-101" className="total-count">

                    </span>
                </label>
            </div>
        </>
    )
}
export default Uslugi