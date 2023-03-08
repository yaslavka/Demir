import React, {useEffect, useState} from 'react'
import Loyaut from "./HomeComponents/Header";
import './index.css'
import SearchForm from "../../../components/SearchForm";
import Goroda from "./HomeComponents/Goroda";
import Reckomended from "./HomeComponents/Rekomendes";
import Action from "./HomeComponents/Action";
import Advansages from "./HomeComponents/Advansages";
import Footer from "./HomeComponents/Footer";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../actions/app.actions";

function Home(){
    const [active, setActive] = useState(false)
    const [modalAuth, setModalAuth] = useState(false)
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(actions.userInfo())
        }
    }, [isAuthenticated, dispatch])
    return (
        <>
            <div className="pages">
                <Loyaut
                    setActive={setActive}
                    active={active}
                    modalAuth={modalAuth}
                    setModalAuth={setModalAuth}
                />
                <div style={{marginBottom: 100}}/>
                <SearchForm
                    endDates={endDates}
                    setEndtDates={setEndtDates}
                    starttDate={starttDate}
                    setStarttDate={setStarttDate}
                />
                <div style={{marginBottom: 236}}/>
                <Goroda/>
                <Reckomended/>
                <Action/>
                <div style={{marginBottom: 40}}/>
                <Advansages/>
                <div style={{marginBottom: 40}}/>
                <Footer/>
            </div>

        </>
    )
}
export default Home