import React, {useState} from "react";
import {Link} from "react-router-dom";
import nakarte from "../../../../assets/icon/nakarte.png";
import plyj from "../../../../assets/icon/plyj.png";
import ctnter from "../../../../assets/icon/center.png";
import vkzal from "../../../../assets/icon/vkzal.png";
import tv from "../../../../assets/icon/tv.png";
import fotbolka from "../../../../assets/icon/odejda.png";
import cap from "../../../../assets/icon/cap.png";
import basein from "../../../../assets/icon/basein.png";
import dockuments from "../../../../assets/icon/dockuments.png";
import card from "../../../../assets/icon/card.png";
import korona from "../../../../assets/icon/korona.png";
import wifi from "../../../../assets/icon/wifi.png";
import videocam from "../../../../assets/icon/videocam.png";
import ObjektNomera from "./ObjektNomera";
import {Col, Row} from "react-bootstrap";

function SelectObjekt({hotel}){
    const [deskript, setDeskrypt] = useState(false)
    return (
        <>
            <Row>
                <Col xl={9}>
                    <li className="item" key={hotel.id}>
                        <article className="item-inner clearfix" id={hotel.id}>
                            <div className="image-wrap">
                                <div className="slides owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-item active" style={{width: 282}}>
                                    <span className="image">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${hotel.imageHotel}`} alt={hotel.imageHotel}/>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-to-favorites-wrap">
                                    <div className="add-to-favorites"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-meta clearfix">
                                    <div className="">
                                        <div className="c" style={{alignItems: "center", justifyContent: "space-between"}}>
                                            <div>
                                                <div className="item-name">
                                                    <Link to={`/hotel_hom/${hotel.id}`} className="has_query_params">
                                                        <span itemProp="name">Гостинница {hotel?.type}</span>
                                                    </Link>
                                                    <svg
                                                        width={20} fill="#FBBF00"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        data-testid="StarPurple500OutlinedIcon">
                                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                                                    </svg>
                                                    <svg
                                                        width={20} fill="#FBBF00"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        data-testid="StarPurple500OutlinedIcon">
                                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                                                    </svg>
                                                    <svg
                                                        width={20} fill="#FBBF00"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        data-testid="StarPurple500OutlinedIcon">
                                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                                                    </svg>
                                                    <svg
                                                        width={20} fill="#FBBF00"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        data-testid="StarPurple500OutlinedIcon">
                                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                                                    </svg>
                                                    <svg
                                                        width={20} fill="#FBBF00"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        data-testid="StarPurple500OutlinedIcon">
                                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                                                    </svg>
                                                </div>
                                                <div className="item-name">
                                                    <Link to={`/hotel_hom/${hotel.id}`} className="has_query_params">
                                                        <span itemProp="name">{hotel.nemeHotel}</span>
                                                    </Link>
                                                    <h1 style={{fontSize: 15, fontWeight: 200, color: "#8c8c8c"}}>оценка: <i style={{fontWeight: 500}}>{hotel.bal}/10</i> | <i className="fa fa-commenting-o"> </i> Отзывов: {hotel.otzyv.length}</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to={'#'}>
                                                    <div className="px-2">
                                                        <img src={nakarte} alt={nakarte}/>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="item-address-wrap js-on-map">
                                            <a href="#" className="on-map">
                                                <span className="fa fa-map-marker"/>
                                                {hotel.address}
                                            </a>
                                        </div>
                                        <div className="distances clearfix">
                                            <div className="distance-to pull-left">
                                        <span className="distance" data-hasqtip="255">
                                            <span className="distancec"><img src={plyj} alt={plyj}/></span> Расстояние до пляжа {hotel.distanceto} м</span>
                                            </div>
                                            <div className="distance-to pull-left">
                                        <span className="distance distancess" data-hasqtip="255">
                                            <span className="distancec">
                                                <img src={ctnter} alt={plyj}/>
                                            </span>Расстояние до центра {hotel.distancecenter} м</span>
                                            </div>
                                            <div className="distance-to pull-left">
                                        <span className="distance" data-hasqtip="255">
                                            <span className="distancec">
                                                <img src={vkzal} alt={plyj}/>
                                            </span>Расстояние до вокзала {hotel.distancevokzal} м</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="item-services">
                                    <ul className="unstyled clearfix" style={{listStyleType: "none"}}>
                                        <li className="hotel_card__label_service"><img src={tv} alt={tv}/></li>
                                        <li className="hotel_card__label_service"><img src={fotbolka} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={cap} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={basein} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={dockuments} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={card} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={korona} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={wifi} alt={fotbolka}/></li>
                                        <li className="hotel_card__label_service"><img src={videocam} alt={fotbolka}/></li>
                                    </ul>
                                </div>
                            </div>
                            <table id="featured_rooms_3130" className="rooms table" style={{marginTop: 1}}>

                                <tbody>
                                <tr className="room_12974 selected" data-room_id="12974">
                                    <td className="room-name-cell down" data-hotel_id="3130" data-room_id="12974"
                                        data-supplier="0">
                                        <div className="room-name" id="room_12974_name"><Link
                                            to={`/hotel_hom/${hotel.id}`}
                                            className="has_query_params"
                                            data-query_params="?ctx=recreation_base&amp;selected_room_id=12974&amp;selected_placement_id=17054"
                                            target="_blank">{hotel.typenomera}</Link></div>
                                    </td>
                                    <td className="conditions-cell">
                                        {hotel.zavtrak === true ? (
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
                                        {hotel.wifi === true ? (
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
                                            <div className="room-price" data-placement-id={hotel.id}>
                                                <Link to={`/hotel_hom/${hotel.id}`} className="has_query_params">
                                                    от{' '}
                                                    <span className="price-values">
                                                {hotel.price}
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
                                <div className="toggle-room-description" role={"button"} onClick={()=>setDeskrypt(!deskript)}><div style={{marginInline: 2}}>Описание и фото</div>{' '}<div className={deskript ? "fa fa-arrow-up" : "fa fa-arrow-down"}/></div>
                                <div className="rooms-left">Осталось {hotel.kolicestvoNomerov} номера</div>
                            </div>
                            {deskript && (
                                <div className="opisanie-otelya-photo">
                                    <div className="opisanie-otelya">
                                        <div className="albumhotel-hotel-photo">
                                            {hotel.albumhotel &&(
                                                <>
                                                    {hotel.albumhotel.map((img)=>(
                                                        <>
                                                            <div className="albumhotel-hotel-photo">
                                                                <div className="albumhotel-hotel">
                                                                    <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${img.photohotel}`} alt={img.photohotel}/>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}

                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {hotel.oposanieHotel === null?(
                                        <>
                                        </>
                                    ):(
                                        <div className="opisanie-otelya-text">
                                            <span>В номерах:</span> {hotel.oposanieHotel}
                                        </div>
                                    )}
                                    {hotel.nomera.map((nomera)=>(
                                        <ObjektNomera key={nomera.id} nomera={nomera}/>
                                    ))}
                                </div>
                            )}
                        </article>
                    </li>
                </Col>
                <Col xl={3}>
                    <div className="col-info-userhotel">
                        <h1 className="zagolovok-info">Информация</h1>
                        <br/>
                        <div className="spisok-info">Кол-во: {' '}Номеров {' '}{hotel.nomera.length}{' '}шт.</div>
                        <div className="spisok-info">Кол-во: {' '}Фото {' '}{hotel.albumhotel.length}{' '}шт.</div>
                        <div className="spisok-info">Кол-во: {' '}брони {' '}{hotel.brone.length}{' '}шт.</div>
                        <div className="spisok-info">Кол-во: {' '}Отзывов {' '}{hotel.otzyv.length}{' '}шт.</div>
                        <div className="profile-pages-info-edit" role={"button"}>
                            <svg
                                fill="#B19AF2"
                                width={30}
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"/>
                            </svg>
                            <div className="profile-pages-info-edit-text">
                                Редактироавть
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default SelectObjekt