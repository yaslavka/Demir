import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo/photo_2023-02-22_23-34-15.png";
import ModalBrone from "../ModalBrone";
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";

function HeaderHom({isNavMenuVisible, setIsNavMenuVisible, active, setActive}){
    const userInfo = useSelector(state => state.app.user);
    return (
        <>
            <div className="header">
                <div className="header__inner clearfix">
                    <div className={isNavMenuVisible ? "header__button menu-button pull-left js-slide-menu-toggle header__button--active":"header__button menu-button pull-left js-slide-menu-toggle"} onClick={()=>setIsNavMenuVisible(!isNavMenuVisible)} role={"button"}>
                        <svg
                            width={40} height={40}
                            focusable="false"  viewBox="0 0 24 24"
                            fill="#0094FF">
                            <path d="M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
                        </svg>
                    </div>
                    <Link to={'/'} className="logo pull-left">
                        <img src={logo} className="logo__image" alt={logo}/>
                    </Link>
                </div>
                <div className="auth-styles">
                    <div className="check-reservation-button dropdown pull-right" onClick={()=>{setActive(!active)}} role={"button"}>
                        <div className="header__button dropdown__toggle">
                        <span className="header__button-text c" style={{alignItems:"center", justifyContent: "space-between"}}>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9H5V16H3V9ZM9 9H11V16H9V9ZM20 5L10 0L0 5V7H20V5ZM4.47 5L10 2.24L15.53 5H4.47ZM0 18V20H12.4C12.19 19.36 12.08 18.69 12.04 18H0ZM17 11.26V9H15V12.26L17 11.26ZM18 13L14 15V17.55C14 20.07 15.71 22.43 18 23C20.29 22.43 22 20.07 22 17.55V15L18 13ZM17.28 20L15.25 17.97L16.31 16.91L17.28 17.88L19.69 15.5L20.75 16.56L17.28 20Z" fill="#0094FF"/>
                            </svg>
                            <div className="px-2">
                                Проверить бронь
                            </div>
                        </span>
                        </div>
                    </div>
                    {userInfo && (
                        <>
                            <Link className="account dropdown pull-right" to={'/dashboard'} >
                                <div className="header__button ">
                                    <span className="header__button-text c" style={{alignItems:"center", justifyContent: "space-between"}}>
                                        <Avatar src={
                                            userInfo.avatar
                                                ? `${process.env.REACT_APP_BASE_URL}/user/avatar/${userInfo.avatar}`
                                                : null
                                        }/>
                                        <div className="px-2">
                                            Личный кабинет
                                        </div>

                                    </span>
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {active && <ModalBrone active={active} setActive={setActive}/>}
        </>

    )
}
export default HeaderHom