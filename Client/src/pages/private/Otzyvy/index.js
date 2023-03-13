import React, {useEffect, useState} from "react";
import {api} from "../../../api";
import {toast} from "react-toastify";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Col, Row} from "react-bootstrap";
import NavbarPrivateUser from "../../../components/loyaut";
import {Avatar} from "@mui/material";

function OllOtzyv() {
    const [ollotzyv, setOllotzyv] =useState([])
    const [otzyvs, setOtzyvs] = useState(10)
    useEffect(()=>{
        api.myBroneOtzyvy()
            .then(response =>{
                setOllotzyv(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])
    const otzyvy = ollotzyv && ollotzyv.slice(0, otzyvs)
    const loadmorotzyvs = () =>{
        setOtzyvs(otzyvs + ollotzyv.length)
    }
    return (
        <>
            <NavbarHomPrivate/>
            <Row>
                <Col xl={3} className="dashboard-nav">
                    <NavbarPrivateUser/>
                </Col>
                <Col xl={9}>
                    {otzyvy && (
                        <>
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
                                        Показать все Отзывы ({ollotzyv.length} шт.) <span className="fa fa-arrow-down"></span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Col>
            </Row>

        </>
    )

}
export default OllOtzyv