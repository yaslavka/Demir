import React from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Goro({item}){
    return (
        <>
            <Col lg={4} className="gorod-images" key={item.id}>
                <Link to={`/region/${item.id}`} className="gorod-images-link" id={item.id} >
                    <div style={{position: "absolute", marginTop: 10}}>
                        <div className="flex-row flex justify-between" style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <div className="HashLink">
                                <h1 className="text-white" style={{zIndex: 0}}>272 Отеля</h1>
                            </div>
                            <div style={{alignItems: "center", marginInline: 50}} className="flex-row">
                                <div style={{}} className="HashLinks">
                                    <svg fill="#8000ff"
                                         width={20} style={{marginLeft: 3}}
                                         focusable="false" aria-hidden="true" viewBox="0 0 20 24"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                                        <circle cx="12" cy="9" r="2.5"/>
                                    </svg>
                                </div>
                                <h1 className="text-white" style={{marginLeft: 10}}>Карта</h1>
                            </div>
                        </div>
                    </div>
                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.photo}`} alt={item.phone} className="gorod-images-img"/>
                    <div className="w-auto">
                        <svg className="absolute-centers primary-btns" width="50" height="7" viewBox="0 0 50 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="-0.00109863" y1="3.25" x2="49.9989" y2="3.25" stroke="#C394E8"  strokeWidth="6"/>
                        </svg>
                        <div className=" primary-btns absolute-centers  " style={{zIndex: 1, color: "#fff"}}>{item.gorod}</div>
                    </div>
                </Link>
            </Col>
        </>
    )
}
export default Goro