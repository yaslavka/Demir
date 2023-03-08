import React from "react";
import {Form} from "react-bootstrap";

function UsloviyaBrony({i, Usloviyabn}){
    return(
        <>
            <div className="checkbox c-checkbox">
                <label>
                    <input id={i.id} checked={i.checked} className="ch-no-card-required" type="checkbox" onChange={()=>Usloviyabn(i.id)}/>
                    <span className="c-checkbox-element fa fa-check">

                    </span>
                    <span className="name">{i.label}</span>
                </label>
            </div>
        </>
    )
}
export default UsloviyaBrony