import React from "react";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Col, Row} from "react-bootstrap";
import './index.css'
import NavbarPrivateUser from "../../../components/loyaut";
import Profile from "./Profileid";

function Dashboard(){
    return (
        <>
            <NavbarHomPrivate/>
            <Row>
                <Col xl={3} className="dashboard-nav">
                    <NavbarPrivateUser/>
                </Col>
                <Col xl={9}>
                    <Profile/>
                </Col>
            </Row>

        </>
    )
}
export default Dashboard