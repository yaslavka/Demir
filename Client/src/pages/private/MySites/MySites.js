import React, {useEffect, useState} from "react";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {api} from "../../../api";
import {toast} from "react-toastify";
import {Col, Row} from "react-bootstrap";
import NavbarPrivateUser from "../../../components/loyaut";
import './index.css'
import MySiresId from "./MySitesId";
import siteimg from "../../../assets/hotel/50286032_thumb.jpg"
import {Link} from "react-router-dom";
const sites =[
    {
        id:1,
        namrsites: 'Сайт 1',
        images:siteimg
    },
    {
        id:2,
        namrsites: 'Сайт 2',
        images:siteimg
    },
    {
        id:3,
        namrsites: 'Сайт 3',
        images:siteimg
    },
    {
        id:4,
        namrsites: 'Сайт 4',
        images:siteimg
    },
]

function MySites() {
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
    return (
        <>
            <NavbarHomPrivate/>
            {myobjekt && (
                <Row className="page">
                    <Col xl={3} className="dashboard-nav">
                        <NavbarPrivateUser myobjekt={myobjekt}/>
                    </Col>
                    <Col xl={9}>
                        <div>
                            <Row className="gorod-row-images" style={{padding: 30}}>
                                {sites.map((item)=>(
                                    <MySiresId key={item.id} item={item}/>
                                ))}
                                <div className="bg-white rounded-2xl mx-8 PageSelection_tempWrap__ZaMpe w-2/5">
                                    <Link to={"/edit/new-template"}>
                                    <div className="flex py-2 ml-1">
                                        <div className="PageSelection_dot__3b4VL mx-1"></div>
                                        <div className="PageSelection_dot__3b4VL mx-1"></div>
                                        <div className="PageSelection_dot__3b4VL mx-1"></div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full h-full my-auto">
                                        <div className="flex flex-col justify-center items-center py-12">
                                            <i className="fas fa-plus text-8xl" aria-hidden="true"></i>
                                            <h2>добавить сайт</h2>
                                        </div>
                                    </div>
                                </Link>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            )}
        </>
    )
}
export default MySites