import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function HotelIdNomera({nomera}){
    const [deskriptnomera, setDeskryptnomera] = useState(false)
    return (
        <>
            <table id="featured_rooms_3130" className="rooms table" style={{marginTop: 10}}>

                <tbody>
                <tr className="room_12974 selected" data-room_id="12974">
                    <td className="room-name-cell down" data-hotel_id="3130" data-room_id="12974"
                        data-supplier="0">
                        <div className="room-name" id="room_12974_name">
                            <Link
                            to={`/nomer/${nomera.id}`}
                            className="has_query_params">{nomera.nemenomer}</Link></div>
                    </td>
                    <td className="conditions-cell">
                        {nomera.zavtrak === true ? (
                            <>
                                <div>
                                    <div className="without-meals">
                                    <span className="fa fa-coffee exclude">

                                    </span> Завтрак&nbsp;Включен&nbsp;
                                    </div>
                                </div>
                            </>
                        ):(
                            <>
                                <div>
                                    <div className="without-meals">
                                    <span className="fa fa-coffee exclude">

                                    </span> Без&nbsp;питания&nbsp;
                                    </div>
                                </div>
                            </>
                        )}
                        {nomera.wifi === true ? (
                            <>
                                <div>
                                    <div className="without-meals">
                                    <span className="fa fa-wifi exclude">

                                    </span> Бесплатный Wi-Fi
                                    </div>
                                </div>
                            </>
                        ):(
                            <>
                                <div>
                                    <div className="without-meals">
                                    <span className="fa fa-wifi exclude">

                                    </span> Без Wi-Fi
                                    </div>
                                </div>
                            </>
                        )}
                    </td>
                    <td className="room-price-cell right">
                        <div className="room-price-details">
                            <div className="room-price" data-placement-id={nomera.id}>
                                <Link to={`/nomer/${nomera.id}`} className="has_query_params">
                                    от{' '}
                                    <span className="price-values">
                                                {nomera.price}
                                           </span>&nbsp;
                                    <span className="currency">р / Сутки</span>
                                </Link>
                            </div>
                        </div>

                    </td>
                </tr>
                </tbody>
            </table>
            <div className="ss"  style={{alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingRight: 20, paddingLeft: 10, marginBottom: 10}}>
                <div className="toggle-room-description" role={"button"} onClick={()=>setDeskryptnomera(!deskriptnomera)}><div style={{marginInline: 2}}>Описание и фото</div>{' '}<div className={deskriptnomera ? "fa fa-arrow-up" : "fa fa-arrow-down"}/></div>
                <div className="rooms-left">Количество комнат {nomera.komnat}</div>
                <div className="rooms-left">Спальных мест {nomera.spalnyemesta}</div>
            </div>
            {deskriptnomera && (
                <div className="opisanie-otelya-photo">
                    <div className="opisanie-otelya">
                        <div className="albumhotel-hotel-photo">
                            {nomera.albomsnomera &&(
                                <>
                                    {nomera.albomsnomera.map((img)=>(
                                        <>
                                            <div className="albumhotel-hotel-photo">
                                                <div className="albumhotel-hotel">
                                                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${img.photonomerov}`} alt={img.photonomerov}/>
                                                </div>
                                            </div>
                                        </>
                                    ))}

                                </>
                            )}
                        </div>
                        <div>
                            <Button role={"link"} href={`/hotel_hom/${nomera.id}`}>
                                Забронировать номер
                            </Button>
                        </div>
                    </div>
                    {nomera.nomerinfo === null?(
                        <>
                        </>
                    ):(
                        <>
                            <div className="opisanie-otelya-text">
                                <span>В номере:</span> {nomera.nomerinfo}
                            </div>
                            <div className="opisanie-otelya-text">
                                <span>Площадь:</span> {nomera.kvadratura} M<sup>2</sup>
                            </div>
                        </>

                    )}
                </div>
            )}
        </>
    )
}
export default HotelIdNomera