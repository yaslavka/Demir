import React, {useEffect, useState} from "react";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Col, Row} from "react-bootstrap";
import NavbarPrivateUser from "../../../components/loyaut";
import {api} from "../../../api";
import {toast} from "react-toastify";


function HoteladdForm(){
    const [myobjekt, setMyobjekt] = useState([])
    useEffect(()=>{
        api
            .myobjekts()
            .then(response => {
                setMyobjekt(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])
    useEffect(()=>{
        api
            .myobjekts()
            .then(response => {
                setMyobjekt(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])
    return (
        <>
            <NavbarHomPrivate/>
            {myobjekt && (
                <Row>
                    <Col xl={3} className="dashboard-nav">
                        <NavbarPrivateUser myobjekt={myobjekt}/>
                    </Col>
                    <Col>
                        <div className=""></div>
                    </Col>
                </Row>
            )}
        </>
    )
}
export default HoteladdForm