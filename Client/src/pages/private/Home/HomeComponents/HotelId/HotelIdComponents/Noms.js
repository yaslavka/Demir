import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import tv from "../../../../../../assets/icon/tv.png";
import wifi from "../../../../../../assets/icon/wifi.png";
import cap from "../../../../../../assets/icon/cap.png";
import korona from "../../../../../../assets/icon/korona.png";
import smile from "../../../../../../assets/icon/smile.png";
import bank from "../../../../../../assets/icon/icon-card-or-no-card-21px.png";
import BroneButton from "./BroneButton";

function Noms({nomera, broneceng, hotelId, endDates, starttDate}){
    const [brone, setBrone] =useState(false)
    return (
        <>
            <Col xl={8}>
                <div style={{padding: 10}} id={nomera.id}>
                    <Row className="nomera-id-brine">
                        <Col style={{borderRightWidth: 1, padding: 10, borderRightColor: '#AFB6C0'}}>
                            <div className="cc" style={{alignItems: "center", marginBottom: 10}}>
                                <img src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${nomera.imagenomer}`} alt={nomera.imagenomer} width={50} height={45} style={{resize: 'cover', borderRadius: 10}}/>
                                <div style={{marginInline: 10, fontSize: 15, fontWeight: 700, color: '#0d6efd'}}>
                                    {hotelId.typenomera}
                                    <div style={{marginInline: 15, fontSize: 15, fontWeight: 400, color: '#070707'}}>
                                        (Эконом)
                                    </div>
                                </div>
                            </div>
                            <div className="room-description-text" style={{marginBottom: 10}}>
                                                                       <span className="bold" style={{color: '#7C7C7C'}}>
                                                                           Количество комнат:{' '}<span style={{fontWeight: 400}}>{nomera.komnat}</span></span>
                            </div>
                            <div className="room-description-text" style={{marginBottom: 10}}>
                                                                       <span className="bold" style={{color: '#7C7C7C'}}>
                                                                           Квадратура:{' '}<span style={{fontWeight: 400}}>{nomera.kvadratura} м</span><sup style={{fontWeight: 400}}>2</sup></span>
                            </div>
                            <div className="room-description-text" style={{marginBottom: 10}}>
                                                                       <span className="bold" style={{color: '#7C7C7C'}}>
                                                                           Кровати:{' '}<span style={{fontWeight: 400}}>{nomera.spalnyemesta}</span></span>
                            </div>
                            <div className="room-description-text" style={{marginBottom: 10}}>
                                                                       <span className="bold" style={{color: '#7C7C7C'}}>
                                                                           Гостей:{' '}<span style={{fontWeight: 400}}>{nomera.gosti}</span></span>
                                <i className="fa fa-info-circle" style={{marginInline: 60}} title="kdskdg"/>
                            </div>
                            <div className="cc" style={{alignItems: "center", marginBottom: 30}}>
                                <img src={tv} alt={tv}/>
                                <img src={wifi} alt={tv} style={{marginInline: 2}}/>
                                <img src={cap} alt={tv} style={{marginInline: 2}}/>
                                <img src={korona} alt={tv}/>
                            </div>
                            <div style={{marginBottom: 20}}>
                                <span style={{fontWeight: "bold", fontSize: 30}}>{nomera.price} <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>₽</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>/</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>Сутки</span> </span>
                            </div>
                        </Col>
                        <Col style={{padding: 10}}>
                            <div>
                                <div className="cc" style={{alignItems: "center", marginBottom: 30}}>
                                    <img src={smile} alt={smile}/>
                                    <div style={{fontSize: 15, fontWeight: 700, marginInline: 10}}>Полный пансион  влючен</div>
                                </div>
                                <div className="cc" style={{alignItems: "center", marginBottom: 30}}>
                                    <img src={bank} alt={smile}/>
                                    <div style={{fontSize: 15, fontWeight: 700, marginInline: 10}}>Безналичная оплата</div>
                                </div>
                            </div>
                            <div style={{top: 50}}>
                                <Button color="primary" role={"link"} href={`/nomer/${nomera.id}`}>
                                    Обзор номера
                                </Button>
                            </div>
                            <div key={nomera.id}>
                                <div style={{fontWeight: 500, fontSize: 15, color: '#53f147', paddingTop: 80, marginBottom: 30}}>
                                    Доступен
                                </div>
                                <Button color="primary" onClick={()=>setBrone(true)} id={nomera.id}>
                                    Забронировать
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xl={4} style={{padding: 10}}>
                {brone && (
                    <BroneButton nomer={nomera} key={nomera.id} broneceng={broneceng} starttDate={starttDate} endDates={endDates}/>
                )}
            </Col>
        </>
    )
}
export default Noms