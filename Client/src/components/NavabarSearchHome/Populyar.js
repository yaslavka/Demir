import React from "react";

function Populyar({i, Populars}){
    return(
        <>
            <div className="checkbox c-checkbox">
                <label key={i.id}>
                    <input id={i.id} value={i.value} checked={i.checked} type="checkbox" onChange={()=>Populars(i.id)}/>
                    <span className="c-checkbox-element fa fa-check">

                    </span>
                    <span>
                        {i.label}
                    </span>
                </label>
            </div>
        </>
    )
}
export default Populyar