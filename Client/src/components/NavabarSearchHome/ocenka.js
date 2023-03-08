import React from "react";

function Ocenka({i, pootzyvam}){
    return (
        <>
            <div className="radio c-radio">
                <label>
                    <input id={i.id} name="ratings" checked={i.checked} className="ch-ratings" type="radio" onChange={()=>pootzyvam(i.id)}/>
                    <span className="c-radio-element fa fa-radio">

                    </span>
                    <span>{i.label}</span>
                    <span className="total-count">

                    </span>
                </label>
            </div>
        </>
    )
}
export default Ocenka