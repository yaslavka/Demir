import React, {useEffect, useState} from "react";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Button, Col, Row} from "react-bootstrap";
import './index.css'
import NavbarPrivateUser from "../../../components/loyaut";
import Profile from "./Profileid";
import {Avatar, Box, LinearProgress, linearProgressClasses} from "@mui/material";
import { styled } from '@mui/material/styles';
import {api} from "../../../api";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import Objektuser from "./Objektuser/UserObjek";
import SelectObjekt from "./Objektuser/SelectObjekt";
import { Doughnut } from "react-chartjs-2";
import moment from 'moment';
import 'moment/locale/ru';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width:500,
    borderRadius: 5,
    top: 7,
    marginInline:10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

function Dashboard(){
    const [myobjekt, setMyobjekt] = useState([])
    const userInfo = useSelector(state => state.app.user);
    const [value, setValue] =useState()
    const [maps, setMaps]=useState(1)
    const [bron, setBron] = useState(5)
    const [otzyvs, setOtzyvs] = useState(3)
    let podnyatiered = 96.7;
    let podnyatiegrey = 3.3;
    const podnyatie = {
        datasets: [
            {
                backgroundColor: ["#e6e6e68a", "#DE3232"],
                data: [podnyatiegrey , podnyatiered ],
            },
        ],
    };
    let vydeleniegren = 96.7;
    let vydeleniegrey = 3.3;
    const vydelenie = {
        datasets: [
            {
                backgroundColor: ["#e6e6e68a", "#00D66F"],
                data: [vydeleniegrey , vydeleniegren ],
            },
        ],
    };
    let premiumblue = 96.7;
    let premiumgrey = 3.3;
    const premium = {
        datasets: [
            {
                backgroundColor: ["#e6e6e68a", "#1380C3"],
                data: [premiumgrey , premiumblue ],
            },
        ],
    };
    let outOfStock = 96.7;
    let outOfStoc = 3.3;
    const doughnutState = {
        datasets: [
            {
                backgroundColor: ["#e6e6e68a", "#774AFF"],
                data: [outOfStoc , outOfStock ],
            },
        ],
    };
    useEffect(()=>{
       if (value === undefined){
           api
               .myobjekts()
               .then(response => {
                   setMyobjekt(response)
               })
               .catch(err =>{
                   toast.error(err.message)
               })
       }
    },[value])

    const ss = myobjekt && myobjekt.slice(0, maps)
    const fil = value === undefined || null? 0:  value.brone.slice(0, bron)
    const otzyvvalue =value === undefined || null? 0:  value.otzyv.slice(0, bron)
    const loaddmorbrone =()=>{
        setBron(bron + value.brone.length)
    }
    const loadmorotzyv = () =>{
        setOtzyvs(otzyvs + value.otzyv.length)
    }
    return (
        <>
            <NavbarHomPrivate/>
            {userInfo && (
                <>
                    {myobjekt && (
                        <>
                            <Row>
                                <Col xl={3} className="dashboard-nav">
                                    <NavbarPrivateUser myobjekt={myobjekt}/>
                                </Col>
                                <Col xl={9}>
                                    <Profile/>
                                    <div className="select-objekt">
                                        <div className="select-objekt-text">
                                            Объекты
                                        </div>
                                        <div className="select-objekt-ramka">
                                            <select onChange={(e)=>setValue(JSON.parse(e.target.value))} >
                                                <option value="" disabled selected hidden>название объекта</option>
                                                {myobjekt.map((i)=>(
                                                    <>
                                                        <option id={i.id} value={JSON.stringify(i)}>{i.nemeHotel}</option>
                                                    </>
                                                ))}
                                            </select>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-objekt-procent">
                                        <div className="select-objekt-procent-text">
                                            процент наполнения:
                                        </div>
                                        <Box sx={{ flexGrow: 1 }} style={{marginBottom: 10}}>
                                            <BorderLinearProgress variant="determinate" value={50} />
                                        </Box>
                                    </div>
                                    {value === undefined ?(
                                        <div className="items-container" id="search_results_table">
                                            <ul className="list" id="hidden-by-loader" style={{opacity: 1, listStyleType: "none"}}>
                                                {ss.map((item)=>(
                                                    <Objektuser key={item.id} hotel={item}/>
                                                ))}
                                            </ul>
                                        </div>
                                    ):(
                                        <div className="items-container" id="search_results_table">
                                            <ul className="list" id="hidden-by-loader" style={{opacity: 1, listStyleType: "none"}}>
                                                <SelectObjekt key={value.id} hotel={value}/>
                                            </ul>
                                        </div>
                                    )}
                                    <h2 className="title-uslegi">Услуги</h2>
                                    <div style={{display:"flex", alignItems: "center"}}>
                                        <div className="doughnutChart">
                                            <Doughnut data={podnyatie} />
                                            <div style={{position: "absolute", top: 1060, left: 380, textAlign: "center"}}>
                                                <div style={{fontWeight: "bold", fontSize: 17}}>ПОДНЯТИЕ</div>
                                                <div>Осталось</div>
                                                <div style={{fontWeight: "bold", fontSize: 20}}>5 ДНЕЙ</div>
                                            </div>
                                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 30}}>
                                                <Button style={{width: 150, backgroundColor: '#1181C3'}}>
                                                    Продлить
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="doughnutChart">
                                            <Doughnut data={vydelenie}/>
                                            <div style={{position: "absolute", top: 1060, left: 625, textAlign: "center"}}>
                                                <div style={{fontWeight: "bold", fontSize: 17}}>ВЫДЕЛЕНИЕ</div>
                                                <div>Осталось</div>
                                                <div style={{fontWeight: "bold", fontSize: 20}}>5 ДНЕЙ</div>
                                            </div>
                                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 30}}>
                                                <Button style={{width: 150, backgroundColor: '#1181C3'}}>
                                                    Продлить
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="doughnutChart">
                                            <Doughnut data={premium}/>
                                            <div style={{position: "absolute", top: 1060, left: 885, textAlign: "center"}}>
                                                <div style={{fontWeight: "bold", fontSize: 17}}>ПРЕМИУМ</div>
                                                <div>Осталось</div>
                                                <div style={{fontWeight: "bold", fontSize: 20}}>5 ДНЕЙ</div>
                                            </div>
                                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 30}}>
                                                <Button style={{width: 150, backgroundColor: '#1181C3'}}>
                                                    Продлить
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="doughnutChart">
                                            <Doughnut data={doughnutState}/>
                                            <div style={{position: "absolute", top: 1060, left: 1143, textAlign: "center"}}>
                                                <div style={{fontWeight: "bold", fontSize: 17}}>VIP БЛОК</div>
                                                <div>Осталось</div>
                                                <div style={{fontWeight: "bold", fontSize: 20}}>5 ДНЕЙ</div>
                                            </div>
                                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 30}}>
                                                <Button style={{width: 150, backgroundColor: '#1181C3'}}>
                                                    Продлить
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: 30}}/>
                                    <div style={{padding: 30}}>
                                        <div className="my-sites-none">
                                            <div style={{fontSize: 30, fontWeight: "bold", color: "#000000"}}>
                                                Мои сайты
                                            </div>
                                            <div>
                                                У вас не активирован сайт
                                            </div>
                                            <Button style={{width: 150, backgroundColor: '#1181C3'}}>
                                                Добавить
                                            </Button>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: 30}}/>
                                    {value === undefined ?(
                                        <>
                                            {ss.map((i)=>{
                                                const ii = i.brone.length > 0 && i.brone.slice(0,bron)
                                                const loaddmorbron =()=>{
                                                    setBron(bron + i.brone.length)
                                                }
                                                return (
                                                    <>
                                                        {ii && (
                                                            <>
                                                                {ii.map((is)=>(
                                                                    <div className="dashboard-my-brone">
                                                                        <Row className="dashboard-my-brone-row">
                                                                            <Col xl={4} className="col-info-user-brone">
                                                                                <div className="dashboard-my-brone-nemeHotel">{i.nemeHotel}</div>
                                                                                <div className="dashboard-my-brone-statusy">
                                                                                    <div className="dashboard-my-brone-statusy-text">{i.nemeHotel}</div>
                                                                                    <div className="dashboard-my-brone-statusy-text22">{i.nemeHotel}</div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col xl={8}>
                                                                                <div className="dashboard-my-brone-button">
                                                                                    <div>
                                                                                        <div className="dashboard-my-brone-button-row">
                                                                                            <div>
                                                                                                <span style={{fontWeight:600, }}>Заезд:</span> <span>{moment(is.datestart).locale('ru').format('DD.MM.YYYY')}</span>{' '}<span style={{fontWeight:600, marginInline:5}}>Отъзд:</span><span> {moment(is.dateend).locale('ru').format('DD.MM.YYYY')}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="dashboard-my-brone-button-row">
                                                                                            <div>
                                                                                                <span style={{fontWeight:600, }}>Кол-во взрослых:</span> <span>{is.pioplesumm}</span>{' '}<span style={{fontWeight:600, marginInline:5}}>Кол-во детей:</span><span>{is.children}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="dashboard-my-brone-button-row">
                                                                                            <div>
                                                                                                <span style={{fontWeight:600, }}>Коментарий:</span> <span>Есть</span>{' '}<span style={{fontWeight:600, marginInline:5}}>Посмотреть:</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <Button>
                                                                                        Ответить
                                                                                    </Button>
                                                                                </div>

                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                ))}
                                                                <div style={{padding: 30}} onClick={()=>loaddmorbron()}>
                                                                    <div role="button" className="button-mor-nomer-otz">Показать все
                                                                        Отзывы ({i.brone.length} шт.)
                                                                        <span className="fa fa-arrow-down" aria-hidden="true"></span>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </>
                                                )
                                            })}
                                        </>
                                    ):(
                                    <>
                                        {fil &&(
                                            <>
                                                {fil.map((is)=>(
                                                    <div className="dashboard-my-brone">
                                                        <Row className="dashboard-my-brone-row">
                                                            <Col xl={4} className="col-info-user-brone">
                                                                <div className="dashboard-my-brone-nemeHotel">{value.nemeHotel}</div>
                                                                <div className="dashboard-my-brone-statusy">
                                                                    <div className="dashboard-my-brone-statusy-text">{value.nemeHotel}</div>
                                                                    <div className="dashboard-my-brone-statusy-text22">{value.nemeHotel}</div>
                                                                </div>
                                                            </Col>
                                                            <Col xl={8}>
                                                                <div className="dashboard-my-brone-button">
                                                                    <div>
                                                                        <div className="dashboard-my-brone-button-row">
                                                                            <div>
                                                                                <span style={{fontWeight:600, }}>Заезд:</span> <span>{moment(is.datestart).locale('ru').format('DD.MM.YYYY')}</span>{' '}<span style={{fontWeight:600, marginInline:5}}>Отъзд:</span><span> {moment(is.dateend).locale('ru').format('DD.MM.YYYY')}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="dashboard-my-brone-button-row">
                                                                            <div>
                                                                                <span style={{fontWeight:600, }}>Кол-во взрослых:</span> <span>{is.pioplesumm}</span>{' '}<span style={{fontWeight:600, marginInline:5}}>Кол-во детей:</span><span>{is.children}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="dashboard-my-brone-button-row">
                                                                            <div>
                                                                                <span style={{fontWeight:600, }}>Коментарий:</span> <span>Есть</span>{' '}<span style={{fontWeight:600, marginInline:5}}>Посмотреть:</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <Button>
                                                                        Ответить
                                                                    </Button>
                                                                </div>

                                                            </Col>
                                                        </Row>
                                                    </div>
                                                ))}
                                                <div style={{padding: 30}} onClick={()=>loaddmorbrone()}>
                                                    <div role="button" className="button-mor-nomer-otz">Показать все
                                                        Отзывы ({value.brone.length} шт.)
                                                        <span className="fa fa-arrow-down" aria-hidden="true"></span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                    )}
                                    {value === undefined ? (
                                        <>
                                            {ss.map((i)=>{
                                                const otzyvy = i.otzyv.length > 0 && i.otzyv.slice(0, otzyvs)
                                                const loadmorotzyvs = () =>{
                                                    setOtzyvs(otzyvs + i.otzyv.length)
                                                }
                                                return (
                                                    <div style={{padding: 30}}>
                                                        {otzyvy.map((item)=>(
                                                            <Row className="row-otzyv">
                                                                <Col xl={3} className="col-otzyv">
                                                                    <div className="col-otzyv-bal">
                                                                        <div className="col-otzyv-avatar">
                                                                            <Avatar src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.avatar}`} alt={item.avatar}/>
                                                                            <div className="col-otzyv-first_name">
                                                                                {item.first_name}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-otzyv-address">
                                                                        {item.gorod}
                                                                    </div>
                                                                    <div className="col-otzyv-ocenka">
                                                                        Оценка: {item.ocenka}
                                                                    </div>
                                                                </Col>
                                                                <Col className="col-rating">
                                                                    <div style={{display:"flex", alignItems: "center"}}>
                                                                        <svg
                                                                            width={30}
                                                                            fill="#06f322"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/>
                                                                        </svg>
                                                                        <div style={{fontSize: 20, fontWeight: 500}}>
                                                                            Достоинства:
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {item.dostoinstva}
                                                                    </div>
                                                                    <div style={{display:"flex", alignItems: "center"}}>
                                                                        <div>
                                                                            <svg
                                                                                width={30}
                                                                                style={{marginTop: 5}}
                                                                                fill="#fd0000"
                                                                                viewBox="0 0 24 24">
                                                                                <path d="M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"/>
                                                                            </svg>
                                                                        </div>
                                                                        <div style={{fontSize: 20, fontWeight: 500}}>
                                                                            Достоинства:
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {item.minusy}
                                                                    </div>
                                                                    <div style={{display: "flex", alignItems: "center"}}>
                                                                        <div className="col-rating-komf">
                                                                            Комфортно
                                                                        </div>
                                                                        <div className="col-rating-pers">
                                                                            Вежливый персонал
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        ))}
                                                        <div>
                                                            <div role={"button"} className="button-mor-nomer-otz" onClick={()=>loadmorotzyvs()}>
                                                                Показать все Отзывы ({i.otzyv.length} шт.) <span className="fa fa-arrow-down"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </>
                                    ):(
                                        <>
                                            {otzyvvalue && (
                                                <>
                                                    {otzyvvalue.map((item)=>(
                                                        <div style={{padding: 30}}>
                                                            <Row className="row-otzyv">
                                                                <Col xl={3} className="col-otzyv">
                                                                    <div className="col-otzyv-bal">
                                                                        <div className="col-otzyv-avatar">
                                                                            <Avatar src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${item.avatar}`} alt={item.avatar}/>
                                                                            <div className="col-otzyv-first_name">
                                                                                {item.first_name}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-otzyv-address">
                                                                        {item.gorod}
                                                                    </div>
                                                                    <div className="col-otzyv-ocenka">
                                                                        Оценка: {item.ocenka}
                                                                    </div>
                                                                </Col>
                                                                <Col className="col-rating">
                                                                    <div style={{display:"flex", alignItems: "center"}}>
                                                                        <svg
                                                                            width={30}
                                                                            fill="#06f322"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/>
                                                                        </svg>
                                                                        <div style={{fontSize: 20, fontWeight: 500}}>
                                                                            Достоинства:
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {item.dostoinstva}
                                                                    </div>
                                                                    <div style={{display:"flex", alignItems: "center"}}>
                                                                        <div>
                                                                            <svg
                                                                                width={30}
                                                                                style={{marginTop: 5}}
                                                                                fill="#fd0000"
                                                                                viewBox="0 0 24 24">
                                                                                <path d="M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"/>
                                                                            </svg>
                                                                        </div>
                                                                        <div style={{fontSize: 20, fontWeight: 500}}>
                                                                            Достоинства:
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {item.minusy}
                                                                    </div>
                                                                    <div style={{display: "flex", alignItems: "center"}}>
                                                                        <div className="col-rating-komf">
                                                                            Комфортно
                                                                        </div>
                                                                        <div className="col-rating-pers">
                                                                            Вежливый персонал
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    ))}
                                                    <div style={{padding: 30}}>
                                                        <div role={"button"} className="button-mor-nomer-otz" onClick={()=>loadmorotzyv()}>
                                                            Показать все Отзывы ({value.otzyv.length} шт.) <span className="fa fa-arrow-down"></span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}
                                </Col>
                            </Row>
                        </>
                    )}
                </>
            )}

        </>
    )

}
export default Dashboard