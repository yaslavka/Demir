import React, {useState} from "react";
import SearchformHotelId from "./SearchformHotelId";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import RecomendetHotelId from "./RecomendetHotelId";
import baners from "../../assets/body-bg.webp"

function NavabarHotelIdHome(){
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
           <div id="sidebar">
               <SearchformHotelId
                   endDates={endDates}
                   setEndtDates={setEndtDates}
                   starttDate={starttDate}
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
                   <RecomendetHotelId/>
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
export default NavabarHotelIdHome