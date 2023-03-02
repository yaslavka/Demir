import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Navbar from "../../../components/loyaut/Navbar";
import Loyaut from "../Home/Header/Loyaut";
import ContentRegionId from "./regionComponents";
import ModalBron from "../../../components/ModalBron";
import PageRecomended from "../../public/Home/PageRecomended";
import Nav from "./regionComponents/Nav";
import KatalogSearch from "../../../components/KatalogSearch";

function Region(){
    const [active, setActive] = useState(false)
    return(
        <>
            <Loyaut setActive={setActive} active={active}/>
            <div>
                <KatalogSearch/>
            </div>
            <section style={{padding: 20, marginTop: -50, backgroundColor: '#a5a4a45e', marginBottom: 20}}>
                <PageRecomended/>
            </section>
            <div style={{paddingLeft: 60}}>
                <Nav/>
            </div>
            <div style={{textAlign: "center", fontWeight: "bold", fontSize: 30}}>
                Отели Республика Карелия
            </div>
            <div id="main" style={{backgroundColor: '#FFF'}}>
                <Row>
                    <Col xl={3}>
                        <Navbar/>
                    </Col>
                    <Col xl={9}>
                        <ContentRegionId/>
                    </Col>
                </Row>
            </div>
            {active && (
                <ModalBron active={active} setActive={setActive}/>
            )}
        </>
    )
}
export default Region