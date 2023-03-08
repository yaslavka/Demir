import React from 'react'
import Header from "./Header";
import './index.css'

function Loyaut({active, modalAuth, setActive, setModalAuth}){
    return (
        <>
            <Header
                setActive={setActive}
                active={active}
                modalAuth={modalAuth}
                setModalAuth={setModalAuth}
            />
        </>
    )
}
export default Loyaut