import React from "react";
import {Button} from "react-bootstrap";

function Act({item}){
    return (
        <>
            <div className="action-recomend" id={item.id}>
                <div className="action-contentss">
                    <div className="action-cardss">
                        <div>
                            <div>
                                <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.imageHotel}`} alt={item.imageHotel} key={item.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="action-cardss-titel">
                        <div style={{fontWeight: 900, fontSize: 20}}>
                            НАЗВАНИЕ АКЦИИ
                        </div>
                        <div style={{fontWeight: 900, fontSize: 20}}>
                            НАЗВАНИЕ АКЦИИ
                        </div>
                    </div>
                    <div style={{paddingLeft: 15}}>
                        <svg width="260" height="2" viewBox="0 0 325 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="-0.00109863" y1="0.75" x2="325" y2="0.75" stroke="#D9CCF8" strokeOpacity="0.6"/></svg>
                    </div>
                    <div style={{paddingLeft: 15, fontWeight: 500, marginBottom: 10}}>
                        {item.nemeHotel}
                    </div>
                    <div className="action-recomend-address">
                        <svg fill="#D9CCF8"
                             width={15}
                             focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                            <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        <div style={{fontWeight: 500, fontSize: 12, color:'#7E7E7E'}} className="px-1">
                            {item.address}
                        </div>
                    </div>
                    <div style={{padding: 10, marginBottom: 10}}>
                        <h1 style={{fontSize: 15, fontWeight: 200, color: "#8c8c8c"}}>оценка: <i style={{fontWeight: 500}}>9,3/10</i> | <i className="fa fa-commenting-o"> </i> Отзывов: 53</h1>
                    </div>
                    <div style={{padding: 20, marginBottom: 10}}>
                        <Button color="primary" role={"link"} href={`/hotel_hom/${item.id}`} key={item.id} id={item.id}>Перейти</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Act