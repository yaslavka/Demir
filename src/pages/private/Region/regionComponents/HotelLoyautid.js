import React, {useState} from "react";
import {Link} from "react-router-dom";
import tv from '../../../../assets/shapka/icon/tv.png'
import fotbolka from '../../../../assets/shapka/icon/odejda.png'
import cap from '../../../../assets/shapka/icon/cap.png'
import basein from '../../../../assets/shapka/icon/basein.png'
import dockuments from '../../../../assets/shapka/icon/dockuments.png'
import card from '../../../../assets/shapka/icon/card.png'
import korona from '../../../../assets/shapka/icon/korona.png'
import wifi from '../../../../assets/shapka/icon/wifi.png'
import videocam from '../../../../assets/shapka/icon/videocam.png'
import nakarte from '../../../../assets/shapka/icon/nakarte.png'
import vkzal from '../../../../assets/shapka/icon/vkzal.png'
import plyj from '../../../../assets/shapka/icon/plyj.png'
import ctnter from '../../../../assets/shapka/icon/center.png'


function HotelLoyautid({hotel}){
    const [deskript, setDeskrypt] = useState(false)
    return (
        <>
            <li className="item" key={hotel.id}>
                <article className="item-inner clearfix" id={hotel.id}>
                    <div className="image-wrap">
                        <div className="slides owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-item active" style={{width: 282}}>
                                    <span className="image">
                                        <img src={hotel.image} alt={hotel.image}/>
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
                                            <Link to={`/hotel/${hotel.id}`} className="has_query_params">
                                                <span itemProp="name">Гостинница</span>
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
                                            <Link to={`/hotel/${hotel.id}`} className="has_query_params">
                                                <span itemProp="name">{hotel.namelink}</span>
                                            </Link>
                                            <h1 style={{fontSize: 15, fontWeight: 200, color: "#8c8c8c"}}>оценка: <i style={{fontWeight: 500}}>9,3/10</i> | <i className="fa fa-commenting-o"> </i> Отзывов: 53</h1>
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
                                        {hotel.addressMap}
                                    </a>
                                </div>
                                <div className="distances clearfix">
                                    <div className="distance-to pull-left">
                                        <span className="distance" data-hasqtip="255">
                                            <span className="distancec"><img src={plyj} alt={plyj}/></span>{hotel.distanceto}</span>
                                    </div>
                                    <div className="distance-to pull-left">
                                        <span className="distance distancess" data-hasqtip="255">
                                            <span className="distancec">
                                                <img src={ctnter} alt={plyj}/>
                                            </span>{hotel.distanceto}</span>
                                    </div>
                                    <div className="distance-to pull-left">
                                        <span className="distance" data-hasqtip="255">
                                            <span className="distancec">
                                                <img src={vkzal} alt={plyj}/>
                                            </span>{hotel.distanceto}</span>
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
                                    to={`/hotel/${hotel.id}`}
                                    className="has_query_params"
                                    data-query_params="?ctx=recreation_base&amp;selected_room_id=12974&amp;selected_placement_id=17054"
                                    target="_blank">Двухместный</Link></div>
                            </td>
                            <td className="conditions-cell">
                                <div>
                                    <div className="without-meals">
                                    <span className="fa fa-coffee exclude">

                                    </span> Без&nbsp;питания&nbsp;
                                    </div>
                                </div>
                                <div>
                                    <div className="without-meals">
                                    <span className="fa fa-wifi exclude">

                                    </span> Бесплатный Wi-Fi
                                    </div>
                                </div>
                            </td>
                            <td className="room-price-cell right">
                                <div className="room-price-details">
                                    <div className="room-price" data-placement-id={hotel.id}>
                                        <Link to={`/hotel/${hotel.id}`} className="has_query_params">
                                            от{' '}
                                            <span className="price-values">
                                                {hotel.price24hours}
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
                        <div className="toggle-room-description" role={"button"} onClick={()=>setDeskrypt(!deskript)}><div style={{marginInline: 2}}>Описание и фото</div>{' '}<div className={deskript? "fa fa-arrow-up":"fa fa-arrow-down"}></div></div>
                        <div className="rooms-left">Осталось 2 номера</div>
                    </div>
                    {deskript && (
                        <div>
                            В номере: В номере: две спальни, гостиная, кухня, , центральное отопление, москитная сетка, деревянный или паркетный пол, принадлежности для барбекю, белье, гипоаллергенный, телевизор, спутниковое телевидение, Wi-Fi, стол, стулья, диван-кровать, гостиный уголок, детские кроватки, посуда, микроволновая печь, электрочайник, электроплита, духовой шкаф, холодильник, кухня, обеденный стол, морозильная камера, красивый вид, отдельный вход, вид на реку.В ванной: туалет, раковина, душ, набор полотенец, туалетная бумага.
                        </div>
                    )}
                </article>
            </li>
        </>
    )
}
export default HotelLoyautid