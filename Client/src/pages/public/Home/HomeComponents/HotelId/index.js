import React, {useEffect, useState} from "react";
import Loyaut from "../Header";
import HotelIdNav from "./HotelIdComponents/HotelIdNav";
import {Col, Form, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {api} from "../../../../../api";
import {toast} from "react-toastify";
import NavabarHotelIdHome from "../../../../../components/NavabarHotelIdHome";
import Shapka from "./HotelIdComponents/Shapka";
import Linksy from "./HotelIdComponents/Linksy";
import PhotoAlbums from "./HotelIdComponents/PhotoAlbums";
import Opisanie from "./HotelIdComponents/Opisanie";
import Predlojeniyaotelya from "./HotelIdComponents/Predlojeniya";
import ViborNomera from "./HotelIdComponents/ViborNomera";
import Noms from "./HotelIdComponents/Noms";
import confirm from 'reactstrap-confirm'
import {declOfNum} from "../../../../../utils";
import {useTranslation} from "react-i18next";
import Setka from "./HotelIdComponents/Setka";
import Footer from "../Footer";
import OtzyvGost from "./HotelIdComponents/Otzyvgostey";

function HotelId(){
    const [active, setActive]=useState(false)
    const [hotelId, setHotelId] = useState([])
    const [modalAuth, setModalAuth] = useState(false)
    const [ofelem, setOfElem] = useState(3)
    const [morOtz, setMorOtz] = useState(3)
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    const { t } = useTranslation('common');
    const { id } = useParams()
   useEffect(()=>{
       api.hotelidinfo(id)
           .then(response =>{
               setHotelId(response)
           })
           .catch(err =>{
               toast.error(err.message)
           })
   },[])
    const broneceng = async (komnat, price, index, starttDate, endDates)=>{
        const planetLength = +komnat
        let result = await confirm({
            title:`${t('Подтвердите бронь')}`,
            message: `${t('Бронирование номера сколичеством')} ${planetLength} ${declOfNum(planetLength, [
                `${t('комната')}`,
                `${t('комнат')}`,
                `${t('комнату')}`,
            ])}, ${t('на сумму')} ${planetLength * +price} RUB?`,
            confirmText: `${t('Подтвердить')}`,
            confirmColor: 'danger',
            cancelText: `${t('Отменить')}`,
            cancelColor: 'link text-muted',
        })

        if (result) {
            api
                .postBronenomer({komnat:komnat, price:price, id: index, starttDate:starttDate, endDates:endDates})
                .then((response)=>{
                    toast.info(response.message)
                })
                .catch((err) =>{
                    toast.error(err.message)
                })
        }
    }
    const slice = hotelId.nomera && hotelId.nomera.slice(0, ofelem)
    const Loadmor=()=>{
        setOfElem(ofelem + hotelId.nomera.length)
    }
    const otz = hotelId.otzyv && hotelId.otzyv.slice(0, morOtz)
    const LoadmorOtz=()=>{
        setMorOtz(morOtz + hotelId.otzyv.length)
    }
    return (
        <>
            <Loyaut setActive={setActive} active={active} setModalAuth={setModalAuth} modalAuth={modalAuth}/>
            <div/>
            <div>
                {hotelId && (
                    <HotelIdNav hotelId={hotelId}/>
                )}
            </div>
            {hotelId && (
                <div id="main">
                    <Row>
                        <Col xl={3} className="col-otels">
                            {hotelId &&(
                                <NavabarHotelIdHome hotelId={hotelId}/>
                            )}
                        </Col>
                        <Col xl={9} className="col-ro">
                            <>
                                <Shapka hotelId={hotelId}/>
                                <Linksy/>
                                <PhotoAlbums hotelId={hotelId}/>
                                <Row>
                                    <Col xl={8}>
                                        <Opisanie hotelId={hotelId}/>
                                    </Col>
                                    <Col xl={4}>
                                        <Predlojeniyaotelya/>
                                    </Col>
                                </Row>
                                <div style={{marginBottom: 30}}/>
                                <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                                    Все номера отеля
                                </div>
                                <div style={{marginBottom: 30}}/>
                                <ViborNomera
                                    endDates={endDates}
                                    setEndtDates={setEndtDates}
                                    starttDate={starttDate}
                                    setStarttDate={setStarttDate}
                                />
                                <div style={{marginBottom: 50}}/>
                                <Form>
                                    {slice && (
                                        <Row>
                                            {slice.map((nomera)=>{
                                                return (
                                                    <>
                                                        <Noms key={nomera.id} nomera={nomera} broneceng={broneceng} hotelId={hotelId} starttDate={starttDate} endDates={endDates}/>

                                                    </>
                                                )
                                            })}
                                            <div style={{paddingLeft: 10}}>
                                                <div role={"button"} className="button-mor-nomer" onClick={()=>Loadmor()}>
                                                    Показать все номера ({hotelId.nomera.length} шт.) <span className="fa fa-arrow-down"></span>
                                                </div>
                                            </div>
                                        </Row>
                                    )}
                                </Form>
                            </>
                            <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                                ВАЖНАЯ ИНФОРМАЦИЯ
                            </div>
                            <div style={{marginBottom: 30}}/>
                            <Setka/>
                            <div style={{marginBottom: 30}}/>
                            <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                                ОТЗЫВЫ РЕАЛЬНЫХ ГОСТЕЙ ПОСЛЕ ПРОЖИВАНИЯ
                            </div>
                            {otz && (
                                <>
                                    <OtzyvGost hotelId={hotelId} otz={otz} LoadmorOtz={LoadmorOtz}/>
                                </>
                            )}
                            <div style={{marginBottom: 30}}/>
                        </Col>
                    </Row>
                </div>
            )}
            <Footer/>
        </>
    )
}
export default HotelId