import React, {useState} from "react";
import SearchForm from "../../SearchForm";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import Swipers from "./NavbarComponents/Swipers";
import baners from "../../../assets/bg/body-bg.webp"

function Navbar2() {
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <>
            <div id="sidebar">
               <SearchForm
                   endDates={endDates}
                   setEndtDates={setEndtDates}
                   starttDate={starttDate} s
                   setStarttDate={setStarttDate}
                   checked={checked}
                   handleChange={handleChange}
               />
               <div className="yanex-map">
                 <YMaps>
                     <Map width={320} height={500} style={{borderWidth: 2, borderColor: '#0d6efd4a', width: 320, height:500, borderRadius: 30}}  defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}/>
                 </YMaps>
               </div>
                <section style={{padding: 0, left:0, width: "100%", marginBottom: 20}}>
                    <Swipers/>
                </section>
                <div id="reklam-ban">
                    <img src={baners} alt={baners}/>
                </div>
                <div id="reklam-ban">
                    <img src={baners} alt={baners}/>
                </div>
            </div>
        </>
    )
}
export default Navbar2