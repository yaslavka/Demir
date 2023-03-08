import React from "react";

function Opisanie({hotelId}){
    return (
        <>
            <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                {hotelId.typehotel}{' '}{hotelId.nemeHotel}
            </div>
            <div style={{fontWeight: 200, fontSize: 17}}>
                {hotelId.oposanieHotel}
            </div>
        </>
    )
}
export default Opisanie