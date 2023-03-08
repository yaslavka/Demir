import React, {useState} from 'react'
import './index.css'
import SearchForm from "../../../components/SearchForm";
import Goroda from "./HomeComponents/Goroda";
import Reckomended from "./HomeComponents/Rekomendes";
import Action from "./HomeComponents/Action";
import Advansages from "./HomeComponents/Advansages";
import Footer from "./HomeComponents/Footer";
import NavbarHomPrivate from "../../../components/HeaderPrivate";

function PrivateHome(){
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    return (
        <>
            <div className="pages">
                <NavbarHomPrivate/>
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
export default PrivateHome