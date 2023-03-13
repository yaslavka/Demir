import React from "react";

function Options({i, key}) {
    return (
        <>
            <option id={i.id} value={i.id} key={key}>{i.nemeHotel}</option>
        </>
    )
}
export default Options