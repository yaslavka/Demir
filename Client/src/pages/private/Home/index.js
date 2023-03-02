import React, {useState} from 'react'
import facebook from '../../../assets/images/new_version/Facebook.svg'
import instagram from '../../../assets/images/new_version/Instagram_simple_icon.svg'
import "react-datepicker/dist/react-datepicker.css";
import './index.css'
import Loyaut from "./Header/Loyaut";
import Search from "./Search";
import Pageinfo from "./Pageinfo";
import PageRecomended from "./PageRecomended";
import PageActions from "./PageActions";
import PageAdvansages from "./PageAdvansages";
import PageFooter from "./PageFuter";

import Modal from 'react-bootstrap/Modal';
import useMatchMedia from "use-match-media-hook";

function PrivatHome(){
    const queries = [
        '(max-width: 1023px)',
        '(min-width: 1024px)'
    ]
    const [mobile, desktop] = useMatchMedia(queries)
    const [active, setActive] = useState(false)
    if (mobile) return (
        <>
            <div style={{marginBottom: 300}}>
                <div className="background-lg">
                    <Loyaut setActive={setActive} active={active}/>
                </div>
                <Search/>
            </div>
            <div>
                <div className="relative">
                    <h3 className="text-1xl lg:text-1xl text-center font-metal font-normal">26162 отеля в 2292 городах</h3>
                </div>
                <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" >
                    <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>Гостиницы России</h3>
                </div>
                <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" >
                    <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>Гостиницы России</h3>
                </div>
            </div>
            <div style={{marginBottom: 150}}>
                <Pageinfo/>
            </div>
            <section style={{backgroundColor:"#F2F2F2"}} className="py-4">
                <div style={{textAlignLast: "center"}}>Мы рекомендуем</div>
                <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" style={{ marginBottom: 10}}>
                    <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>Лучшие Гостиницы</h3>
                </div>
                <div className="cc" style={{alignItems: "center"}}>
                    <PageRecomended/>
                </div>
            </section>
            <section className="mt-10" style={{padding: 10}}>
                <div style={{textAlignLast: "center"}}>Отдохни с выгодой</div>
                <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" style={{zIndex: 3, marginBottom: 10}}>
                    <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>АКЦИИ</h3>
                </div>
                <PageActions/>
            </section>
            {/*<section className="mt-10" style={{padding: 200}}>*/}
            {/*    <div style={{textAlignLast: "center"}}>6 фактов о нас</div>*/}
            {/*    <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" style={{zIndex: 3, marginBottom: 10}}>*/}
            {/*        <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>преимущества бронирования у нас</h3>*/}
            {/*    </div>*/}
            {/*    <div className="ccc" style={{alignItems: "center", justifyContent: "center"}}>*/}
            {/*        <PageAdvansages/>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="mt-10" style={{backgroundColor: "#1380C3"}}>*/}
            {/*    <div>*/}
            {/*        <PageFooter/>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section style={{backgroundColor: "#0D0B18"}}>*/}
            {/*    <div className="ss" style={{marginInline: 100, padding: 30, marginBottom: 10, alignItems: "center", justifyContent: "space-between"}}>*/}
            {/*        <div>*/}
            {/*            © 2017-2020-Сайт*/}
            {/*        </div>*/}
            {/*        <div className="ss" style={{alignItems: "center", justifyContent: "space-between"}}>*/}
            {/*            <div>*/}
            {/*                Социальные Сети*/}
            {/*            </div>*/}
            {/*            <div style={{marginInline: 5}}>*/}
            {/*                <img src={facebook} alt={facebook} style={{width: 15}}/>*/}
            {/*            </div>*/}
            {/*            <div style={{marginInline: 5}}>*/}
            {/*                <img src={instagram} alt={facebook} style={{width: 15}}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div style={{color:"#fff", fontWeight: 500}}>*/}
            {/*            Политика конфинденциальности*/}
            {/*        </div>*/}
            {/*        <div style={{color:"#fff", fontWeight: 500}}>*/}
            {/*            Пользовательское соглашение*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {active &&(
                <Modal show={active} onHide={()=>setActive(false)}>
                    <Modal.Header closeButton={()=>setActive(false)}>
                        <div className="">Проверка брони</div>
                    </Modal.Header>
                    <div className="">
                        <div className="check-reservation">
                            <form action="https://secure.101hotels.com/booking/information"
                                  className="check-reservation__form" noValidate="novalidate">
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="number" className="sr-only">Номер брони:</label>
                                        <input type="text" name="number"
                                               className="check-reservation__number form-control required"
                                               placeholder="Номер брони"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pincode" className="sr-only">ПИН-код:</label>
                                        <input type="text" name="pincode"
                                               className="check-reservation__pincode form-control required"
                                               placeholder="ПИН-код" autoComplete="off"/>
                                    </div>
                                </fieldset>
                                <div className="check-reservation__errors"/>
                                <button type="submit"
                                        className="button button-primary check-reservation__submit">Проверить бронь
                                </button>
                            </form>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
    return (
       <>
           <div style={{marginBottom: 300}}>
               <div className="background-lg">
                   <Loyaut setActive={setActive} active={active}/>
               </div>
               <Search/>
           </div>
           <div>
               <div className="relative">
                   <h3 className="text-1xl lg:text-1xl text-center font-metal font-normal">26162 отеля в 2292 городах</h3>
               </div>
               <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" >
                   <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>Гостиницы России</h3>
               </div>
               <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" >
                   <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>Гостиницы России</h3>
               </div>
           </div>
           <div style={{marginBottom: 150}}>
               <Pageinfo/>
           </div>
           <section style={{backgroundColor:"#F2F2F2"}} className="py-4">
               <div style={{textAlignLast: "center"}}>Мы рекомендуем</div>
               <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" style={{ marginBottom: 10}}>
                   <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>Лучшие Гостиницы</h3>
               </div>
               <div className="cc" style={{alignItems: "center"}}>
                   <PageRecomended/>
               </div>
           </section>
           <section className="mt-10" style={{padding: 50}}>
               <div style={{textAlignLast: "center"}}>Отдохни с выгодой</div>
               <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" style={{zIndex: 3, marginBottom: 10}}>
                   <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>АКЦИИ</h3>
               </div>
               <PageActions/>
           </section>
           <section className="mt-10" style={{padding: 50}}>
               <div style={{textAlignLast: "center"}}>6 фактов о нас</div>
               <div className="text-center font-exo font-bold uppercase leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" style={{zIndex: 3, marginBottom: 10}}>
                   <h3 className="vertical-align: inherit; " style={{fontSize: 30, color: "#622e85"}}>преимущества бронирования у нас</h3>
               </div>
               <div className="ccc" style={{alignItems: "center", justifyContent: "center"}}>
                   <PageAdvansages/>
               </div>
           </section>
           <section className="mt-10" style={{backgroundColor: "#1380C3"}}>
               <div>
                   <PageFooter/>
               </div>
           </section>
           <section style={{backgroundColor: "#0D0B18"}}>
               <div className="ss" style={{marginInline: 100, padding: 30, marginBottom: 10, alignItems: "center", justifyContent: "space-between"}}>
                  <div>
                      © 2017-2020-Сайт
                  </div>
                   <div className="ss" style={{alignItems: "center", justifyContent: "space-between"}}>
                       <div>
                           Социальные Сети
                       </div>
                       <div style={{marginInline: 5}}>
                           <img src={facebook} alt={facebook} style={{width: 15}}/>
                       </div>
                       <div style={{marginInline: 5}}>
                           <img src={instagram} alt={facebook} style={{width: 15}}/>
                       </div>
                   </div>
                   <div style={{color:"#fff", fontWeight: 500}}>
                       Политика конфинденциальности
                   </div>
                   <div style={{color:"#fff", fontWeight: 500}}>
                       Пользовательское соглашение
                   </div>
               </div>
           </section>
           {desktop && (
               <>
                   {active &&(
                       <Modal show={active} onHide={()=>setActive(false)}>
                           <Modal.Header closeButton={()=>setActive(false)}>
                               <div className="">Проверка брони</div>
                           </Modal.Header>
                           <div className="">
                               <div className="check-reservation">
                                   <form action="https://secure.101hotels.com/booking/information"
                                         className="check-reservation__form" noValidate="novalidate">
                                       <fieldset>
                                           <div className="form-group">
                                               <label htmlFor="number" className="sr-only">Номер брони:</label>
                                               <input type="text" name="number"
                                                      className="check-reservation__number form-control required"
                                                      placeholder="Номер брони"/>
                                           </div>
                                           <div className="form-group">
                                               <label htmlFor="pincode" className="sr-only">ПИН-код:</label>
                                               <input type="text" name="pincode"
                                                      className="check-reservation__pincode form-control required"
                                                      placeholder="ПИН-код" autoComplete="off"/>
                                           </div>
                                       </fieldset>
                                       <div className="check-reservation__errors"/>
                                       <button type="submit"
                                               className="button button-primary check-reservation__submit">Проверить бронь
                                       </button>
                                   </form>
                               </div>
                           </div>
                       </Modal>
                   )}
               </>
           )}
       </>
    )
}
export default PrivatHome
