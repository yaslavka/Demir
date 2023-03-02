import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import tv from '../../../../assets/shapka/icon/tv.png'
import wifi from '../../../../assets/shapka/icon/wifi.png'
import cap from '../../../../assets/shapka/icon/cap.png'
import korona from '../../../../assets/shapka/icon/korona.png'
import smile from '../../../../assets/shapka/icon/smile.png'
import bank from '../../../../assets/shapka/icon/icon-card-or-no-card-21px.png'

function Nomera({nomer}){

    return (
        <>
            <div style={{padding: 10}}>
                <Row className="nomera-id-brine">
                    <Col style={{borderRightWidth: 1, padding: 10, borderRightColor: '#AFB6C0'}}>
                        <div className="cc" style={{alignItems: "center", marginBottom: 10}}>
                            <img src={nomer.image} alt={nomer.image} width={50} height={45} style={{resize: 'cover', borderRadius: 10}}/>
                            <div style={{marginInline: 10, fontSize: 15, fontWeight: 700, color: '#0d6efd'}}>
                                {nomer.mest}
                                <div style={{marginInline: 15, fontSize: 15, fontWeight: 400, color: '#070707'}}>
                                    (Эконом)
                                </div>
                            </div>
                        </div>
                        <div className="room-description-text" style={{marginBottom: 10}}>
                                   <span className="bold" style={{color: '#7C7C7C'}}>
                                   Квадратура:
                                       {' '}<span style={{fontWeight: 400}}>{nomer.kvadratura} м</span><sup style={{fontWeight: 400}}>2</sup>
                                   </span>
                        </div>
                        <div className="room-description-text" style={{marginBottom: 10}}>
                                   <span className="bold" style={{color: '#7C7C7C'}}>
                                   Кровати:
                                       {' '}<span style={{fontWeight: 400}}>{nomer.koyko}</span>
                                   </span>
                        </div>
                        <div className="room-description-text" style={{marginBottom: 10}}>
                                   <span className="bold" style={{color: '#7C7C7C'}}>
                                   Гостей:
                                       {' '}<span style={{fontWeight: 400}}>{nomer.gisti}</span>
                                   </span>
                            <i className="fa fa-info-circle" style={{marginInline: 60}} title="kdskdg"/>
                        </div>
                        <div className="cc" style={{alignItems: "center", marginBottom: 30}}>
                            <img src={tv} alt={tv}/>
                            <img src={wifi} alt={tv} style={{marginInline: 2}}/>
                            <img src={cap} alt={tv} style={{marginInline: 2}}/>
                            <img src={korona} alt={tv}/>
                        </div>
                        <div style={{marginBottom: 20}}>
                            <span style={{fontWeight: "bold", fontSize: 30}}>1500 <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>₽</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>/</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>Сутки</span> </span>
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
                        <div>
                            <div style={{fontWeight: 500, fontSize: 15, color: '#53f147', paddingTop: 80, marginBottom: 30}}>
                                Доступен
                            </div>
                            <Button color="primary">
                                Забронировать
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Nomera