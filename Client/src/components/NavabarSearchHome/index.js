import React from "react";
import {Form} from "react-bootstrap";
import PriceOfnumber from "./PriceOfnumber";
import './index.css'
import Populyar from "./Populyar";
import RasstoyanieBereg from "./RasstoyanieBereg";
import Zaezdy from "./Zaezdy";
import UsloviyaBrony from "./UsloviyaBrony";
import Ocenka from "./ocenka";
import TypeHotel from "./typehotel";
import Uslugi from "./uslugi";
import TypeRazme from "./typerazme";

function NavabarSearchHome(
    {
        price,
        handelc,
        setPrice,
        bereg,
        beregch,
        km,
        kmc,
        rating,
        hendelr, popular, Populars, Usloviyabn, usloviyabron, ocenkapootzyvam, pootzyvam, pitanies, pitaniess, chengedopuslugii, Loadmoruslugidop, moruslugidop, Filtertypehote, typehote}){

    return (
        <>
            <div id="sidebar" style={{padding: 50}}>
                <div className="filter-form sidebar-box" id="sidebar-filter-form">
                    <div className="sidebar-box-content">
                        <Form>
                            <PriceOfnumber handelc={handelc} value={price} setPrice={setPrice}/>
                            <fieldset style={{opacity: 1}}>
                                <div className="set-header">Популярные</div>
                                <div className="set-content">
                                    {popular.map((i)=>(
                                        <Populyar key={i.id} i={i} Populars={Populars}/>
                                    ))}
                                </div>
                            </fieldset>
                            <RasstoyanieBereg bereg={bereg} beregch={beregch} km={km} kmc={kmc}/>
                            <fieldset style={{opacity: 1}}>
                                <div className="set-header">Звезды</div>
                                <div className="set-content">
                                    {rating.map((i)=>(
                                        <Zaezdy rating={i} key={i.id} hendelr={hendelr}/>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset style={{opacity: 1}}>
                                <div className="set-header">Условия бронирования</div>
                                <div className="set-content">
                                    {usloviyabron.map((i)=>(
                                        <UsloviyaBrony key={i.id} i={i} Usloviyabn={Usloviyabn}/>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset style={{opacity: 1}}>
                                <div className="set-header">Оценка по отзывам</div>
                                <div className="set-content">
                                    {ocenkapootzyvam.map((i)=>(
                                        <Ocenka key={i.id} i={i} pootzyvam={pootzyvam}/>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset style={{opacity:1}}>
                                <div className="set-header">Тип питания</div>
                                <div className="set-content">
                                    {pitanies.map((i)=>(
                                        <TypeHotel key={i.id} i={i} pitaniess={pitaniess}/>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset style={{opacity:1}}>
                                <div className="set-header">Услуги</div>
                                <div className="set-content">
                                    {moruslugidop.map((i)=>(
                                        <Uslugi key={i.id} i={i} Loadmoruslugidop={Loadmoruslugidop} chengedopuslugii={chengedopuslugii}/>
                                    ))}
                                    <a role={"button"} className={Loadmoruslugidop?"more-services off":"more-services"} onClick={()=>Loadmoruslugidop()}>
                                        <span className="text">Ещё услуги</span>
                                        <span className="fa fa-angle-down">
                                        </span>
                                    </a>
                                </div>
                            </fieldset>
                            <fieldset style={{opacity:1}}>
                                <div className="set-header">Тип размещения</div>
                                <div className="set-content">
                                    {typehote.map((i)=>(
                                        <TypeRazme key={i.id} i={i} Filtertypehote={Filtertypehote}/>
                                    ))}
                                </div>
                            </fieldset>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavabarSearchHome