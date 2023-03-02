import React, {useState} from "react";
import Header from "./index";
import logo from '../../../../assets/logo/photo_2023-02-22_23-34-15.png'
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

function Loyaut({setModalAuth,active, setActive}){
    const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)
    return(
        <>
            <Header setIsNavMenuVisible={setIsNavMenuVisible} isNavMenuVisible={isNavMenuVisible} setModalAuth={setModalAuth} active={active} setActive={setActive}/>
            <div className={isNavMenuVisible?"slide-menu slide-menu--open":"slide-menu"}>
                <div className="slide-menu__panel mCustomScrollbar _mCS_1 mCS-autoHide" style={{overflow: "visible"}}>
                    <div id="mCSB_1" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabIndex={0}>
                        <div id="mCSB_1_container" className="mCSB_container" style={{position: "relative", top: 0, left: 0}} dir="ltr">
                            <div className="slide-menu__panel-inner">
                                <div className="slide-menu__logo c" style={{alignItems: "center"}}>
                                    <Link to={'/'}>
                                        <img src={logo} alt={logo}/>
                                    </Link>
                                    <div role={"button"} onClick={()=>setIsNavMenuVisible(false)}>
                                        <svg onClick={()=>setIsNavMenuVisible(false)} role={"button"}
                                             width={20} height={20}
                                             focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slide-menu__widget">
                                    <Link to="/" className="slide-menu__link">
                                       <div className="cc" style={{alignItems: "center", justifyContent: "space-evenly"}}>
                                           <svg
                                               width={20} height={20}
                                               focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                               <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                           </svg>
                                           <div>
                                               Поиск отелей
                                           </div>
                                       </div>
                                    </Link>
                                </div>
                                <div className="slide-menu__widget">
                                    <div className="slide-menu__widget-content">
                                        <div className="check-reservation">
                                            <div className="check-reservation__header">Проверка брони</div>
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
                                                <Button type="submit"
                                                        className="button button-primary check-reservation__submit">Проверить
                                                    бронь
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loyaut
