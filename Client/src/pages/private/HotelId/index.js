import React, {useState} from "react";
import Loyaut from "../Home/Header/Loyaut";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import Nav from "../Region/regionComponents/Nav";
import Navbar2 from "../../../components/loyaut/Navbar2";
import Shapka from "./HotelIdComponents/Shapka";
import Linksy from "./HotelIdComponents/Linksy";
import PhotoAlbums from "./HotelIdComponents/PhotoAlbums";
import Opisanie from "./HotelIdComponents/Opisanie";
import Predlojeniya from "./HotelIdComponents/Predlojeniya";
import ViborNomera from "./HotelIdComponents/ViborNomera";
import ima from '../../../assets/hotel/50286032_thumb.jpg'
import Nomera from "./HotelIdComponents/Nomera";
import Setka from "./HotelIdComponents/Setka";
import PageFooter from "../Home/PageFuter";
import facebook from "../../../assets/images/new_version/Facebook.svg";
import instagram from "../../../assets/images/new_version/Instagram_simple_icon.svg";
import Modal from "react-bootstrap/Modal";

const nomera = [
    {
        id: 1,
        image: ima,
        mest: 'двух местный',
        kvadratura: 16,
        koyko: 'две односпальные кровати',
        gisti: 2,
        oplata: true,
        pansion: true,
        nalicie: true,
        cena: 1500
    },
    {
        id: 1,
        image: ima,
        mest: 'двух местный',
        kvadratura: 16,
        koyko: 'две односпальные кровати',
        gisti: 2,
        oplata: true,
        pansion: true,
        nalicie: true,
        cena: 1500
    }
]

function HotelId({ location: { state = {}, pathname } }){
    const [active, setActive]=useState(false)
    const history = useHistory()
    const { id } = useParams()
    return (
        <>
            <Loyaut setActive={setActive} active={active}/>
            <div style={{marginBottom: 40}}/>
            <div style={{paddingLeft: 60}}>
                <Nav/>
            </div>
            <div id="main">
                <Row>
                    <Col xl={3} className="col-otels">
                        <Navbar2/>
                    </Col>
                    <Col xl={9} className="col-ro">
                        <Shapka/>
                        <Linksy/>
                        <PhotoAlbums/>
                        <Row>
                            <Col xl={8}>
                                <Opisanie/>
                            </Col>
                            <Col xl={4}>
                                <Predlojeniya/>
                            </Col>
                        </Row>
                        <div style={{marginBottom: 30}}/>
                        <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                            ЗАГОЛОВОК
                        </div>
                        <div style={{marginBottom: 30}}/>
                        <ViborNomera/>
                        <div style={{marginBottom: 50}}/>
                        <Form>
                         <Row>
                             <Col xl={8}>
                                 {nomera.map((item)=>(
                                     <Nomera key={item.id} nomer={item}/>
                                 ))}
                             </Col>
                             <Col xl={4} style={{padding: 10}}>
                                 <div className="nomera-id-brine" style={{backgroundColor: '#F4F4F4'}}>
                                     <h1 style={{color: '#0F81C0', fontWeight: "bold", fontSize: 20, padding: 10,marginBottom: 10}}>СТОИМОСТЬ</h1>
                                     <div style={{borderTopWidth: 1, borderTopColor: '#AFB6C0', marginBottom: 15}}/>
                                     <div style={{padding: 10}}>
                                         <h1 style={{color: '#555555', fontWeight: "bold", fontSize: 12, marginBottom: 20}}>выбрано: 1 Комната</h1>
                                         <h1 style={{color: '#090808', fontWeight: "bold", fontSize: 33, marginBottom: 30}}>1500 <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>₽</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>/</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>Сутки</span></h1>
                                         <Button style={{backgroundColor: '#774AFF', width: '100%', marginBottom: 20}}>
                                             Забронировать
                                         </Button>
                                     </div>
                                 </div>
                             </Col>
                         </Row>
                        </Form>
                        <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                            ЗАГОЛОВОК
                        </div>
                        <div style={{marginBottom: 30}}/>
                        <Setka/>
                        <div style={{marginBottom: 30}}/>
                    </Col>
                </Row>
            </div>
            <section className="mt-10" style={{backgroundColor: "#1380C3"}}>
                <div>
                    <PageFooter/>
                </div>
            </section>
            <section style={{backgroundColor: "#0D0B18"}}>
                <div className="ss" style={{marginInline: 100, padding: 30, marginBottom: 10, alignItems: "center", justifyContent: "space-between"}}>
                    <div>
                        © 2017-2020-Сайт
                    </div>
                    <div className="ss" style={{alignItems: "center", justifyContent: "space-between"}}>
                        <div>
                            Социальные Сети
                        </div>
                        <div style={{marginInline: 5}}>
                            <img src={facebook} alt={facebook} style={{width: 15}}/>
                        </div>
                        <div style={{marginInline: 5}}>
                            <img src={instagram} alt={facebook} style={{width: 15}}/>
                        </div>
                    </div>
                    <div style={{color:"#fff", fontWeight: 500}}>
                        Политика конфинденциальности
                    </div>
                    <div style={{color:"#fff", fontWeight: 500}}>
                        Пользовательское соглашение
                    </div>
                </div>
            </section>
            {active &&(
                <Modal show={active} onHide={()=>setActive(false)}>
                    <Modal.Header closeButton={()=>setActive(false)}>
                        <div className="">Проверка брони</div>
                    </Modal.Header>
                    <div className="">
                        <div className="check-reservation">
                            <form action="https://secure.101hotels.com/booking/information"
                                  className="check-reservation__form" noValidate="novalidate">
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="number" className="sr-only">Номер брони:</label>
                                        <input type="text" name="number"
                                               className="check-reservation__number form-control required"
                                               placeholder="Номер брони"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pincode" className="sr-only">ПИН-код:</label>
                                        <input type="text" name="pincode"
                                               className="check-reservation__pincode form-control required"
                                               placeholder="ПИН-код" autoComplete="off"/>
                                    </div>
                                </fieldset>
                                <div className="check-reservation__errors"/>
                                <button type="submit"
                                        className="button button-primary check-reservation__submit">Проверить бронь
                                </button>
                            </form>
                        </div>
                    </div>
                </Modal>
            )}

        </>
    )
}
export default HotelId