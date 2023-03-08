import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import foot from '../../../../../assets/hotel/footer.png'
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link} from "react-router-dom";
import smart from '../../../../../assets/images/new_version/smartphone.png'
import emails from '../../../../../assets/images/new_version/email.png'
import place from '../../../../../assets/images/new_version/place.png'
import facebook from '../../../../../assets/images/new_version/Facebook.svg'
import instagram from '../../../../../assets/images/new_version/Instagram_simple_icon.svg'

function Footer(){
    const [em, setEm] = useState({email:''})
    const [checked, setChecked] = useState(false);
    const {email}=em
    const handleOnchanges = (event) => {
        setEm({email: event.target.value});
    };


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <>
            <div className="footter">
                <div className="footter-content">
                    <div className="footter-content-form">
                        <div>
                            <img src={foot} alt={foot}/>
                        </div>
                        <Form>
                            <div className="form-footer">
                                <div style={{alignItems: "center", paddingLeft: 5}}>
                                    <div style={{padding: 4, alignItems: "center", display: "flex"}} className="ss">
                                        <svg fill="#D9CCF8"
                                             width={25} style={{position: "absolute", paddingLeft: 5}}
                                             focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                                        </svg>
                                        <input style={{outline: "none", border: "none", width: "100%", height: 50}} onChange={handleOnchanges} value={email} type="text" />
                                        <Button style={{height: 52, width: "100%", borderRadius: 0, backgroundColor: '#024065', border: "none"}}>
                                            Подписатся
                                        </Button>
                                    </div>
                                    <div className="ss" style={{alignItems: "center", display: "flex"}}>
                                        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>}  label={''}/>
                                        <div>
                                            Я соглашаюсь на обработку персональных данных
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </div>
                    <div style={{alignItems: "center", display:"flex", justifyContent: "space-between", color: "#FFF", fontWeight: 500}}>
                        <div>
                            <Link className='footer-links' to={'/'}>
                                О компании
                            </Link>
                        </div>
                        <div>
                            <Link className='footer-links' to={'/'}>
                                Контакты
                            </Link>
                        </div>
                        <div>
                            <Link className='footer-links' to={'/'}>
                                партнерская программа для отелей
                            </Link>
                        </div>
                        <div>
                            <Link className='footer-links' to={'/'}>
                                пожаловатся
                            </Link>
                        </div>
                        <div>
                            <Link className='footer-links' to={'/'}>
                                Рекламма на сайте
                            </Link>
                        </div>
                        <div>
                            <Link className='footer-links' to={'/'}>
                                Корпоративным клиентам
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-border"/>
                <div style={{marginInline: 90, paddingLeft: 35, marginBottom: 50, color: "#FFF", fontWeight: 500}}>
                    Файл cookie представляет собой небольшой файл c информацией о просмотренных страницах и настройках, который сохраняется на компьютерах пользователей. В целях сделать Сайт наиболее удобным и привлекательным для Клиентов, ООО «Онлайн Инновации» использует файлы cookie различных типов (технические, функциональные, коммерческие и аналитические).

                    Если Вы не хотите, чтобы файлы cookie сохранялись на Вашем устройстве, необходимо настроить соответствующим образом Ваш браузер. Однако, в случае отключения определенных файлов cookie, Клиенту могут быть недоступны некоторые функции сайта 101hotels.com
                </div>
                <div style={{marginInline: 100, paddingLeft: 30, marginBottom: 10, alignItems: "center", justifyContent: "space-between", display: "flex"}} className="ss">
                    <div className="ss" style={{alignItems: "center", display: "flex"}}>
                        <img src={smart} alt={smart}/>
                        <div style={{color:"#fff", fontWeight: 500}}>
                            +7980000000
                        </div>
                    </div>
                    <div className="ss" style={{alignItems: "center", display: "flex"}}>
                        <img src={emails} alt={smart}/>
                        <div style={{color:"#fff", fontWeight: 500}}>
                            +7980000000
                        </div>
                    </div>
                    <div className="ss" style={{alignItems: "center",display: "flex"}}>
                        <img src={place} alt={smart}/>
                        <div style={{color:"#fff", fontWeight: 500}}>
                            +7980000000
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#0D0B18"}}>
                    <div className="ss" style={{marginInline: 100, padding: 30, alignItems: "center", justifyContent: "space-between", display: "flex"}}>
                        <div>
                            © 2017-2020-Сайт
                        </div>
                        <div className="ss" style={{alignItems: "center", justifyContent: "space-between", display: "flex"}}>
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
                </div>
            </div>
        </>
    )
}
export default Footer