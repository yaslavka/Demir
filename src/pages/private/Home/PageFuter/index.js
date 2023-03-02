import React  from "react";
import f from '../../../../assets/images/new_version/5.png'
import smart from '../../../../assets/images/new_version/smartphone.png'
import email from '../../../../assets/images/new_version/email.png'
import place from '../../../../assets/images/new_version/place.png'
import {Checkbox} from "@mui/material";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";



function PageFooter(){
    return(
      <>
          <div className="advansages-container">
              <div style={{marginInline: 100}}>
                  <br/>
                  <br/>
                  <br/>
                 <div className="ss" style={{alignItems: "center", justifyContent: "space-between"}}>
                     <div>
                         <img src={f} alt={f}/>
                     </div>
                     <div style={{alignItems: "center", paddingLeft: 5}}>
                         <div style={{padding: 4, alignItems: "center"}} className="ss">
                             <svg fill="#D9CCF8"
                                  width={25} style={{position: "absolute", paddingLeft: 5}}
                                  focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                 <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                             </svg>
                             <input style={{outline: "none", border: "none", width: "100%", height: 50}}/>
                             <Button style={{height: 52, width: "100%", borderRadius: 0, backgroundColor: '#024065', border: "none"}}>
                                 Подписатся
                             </Button>
                         </div>
                         <div className="ss" style={{alignItems: "center", justifyContent: "space-between",}}>
                             <Checkbox sx={{padding: 0}}/>
                             <div>
                                 Я соглашаюсь на обработку персональных данных
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className='ss' style={{alignItems: "center", justifyContent: "space-between", paddingLeft: 30, color: "#FFF", fontWeight: 500}}>
                     <div>
                         <Link>
                             О компании
                         </Link>
                     </div>
                     <div>
                         <Link>
                             Контакты
                         </Link>
                     </div>
                     <div>
                         <Link>
                             партнерская программа для отелей
                         </Link>
                     </div>
                     <div>
                         <Link>
                             пожаловатся
                         </Link>
                     </div>
                     <div>
                         <Link>
                             Рекламма на сайте
                         </Link>
                     </div>
                     <div>
                         <Link>
                             Корпоративным клиентам
                         </Link>
                     </div>
                 </div>
              </div>
          </div>
          <div style={{ borderBottomWidth: 2, borderBottomColor: '#0C70AC', top: 0, marginBottom: 30}}/>
          <div style={{marginInline: 90, paddingLeft: 35, marginBottom: 50, color: "#FFF", fontWeight: 500}}>
              Файл cookie представляет собой небольшой файл c информацией о просмотренных страницах и настройках, который сохраняется на компьютерах пользователей. В целях сделать Сайт наиболее удобным и привлекательным для Клиентов, ООО «Онлайн Инновации» использует файлы cookie различных типов (технические, функциональные, коммерческие и аналитические).

              Если Вы не хотите, чтобы файлы cookie сохранялись на Вашем устройстве, необходимо настроить соответствующим образом Ваш браузер. Однако, в случае отключения определенных файлов cookie, Клиенту могут быть недоступны некоторые функции сайта 101hotels.com
          </div>
          <div style={{marginInline: 100, paddingLeft: 30, marginBottom: 10, alignItems: "center", justifyContent: "space-between"}} className="ss">
             <div className="ss" style={{alignItems: "center"}}>
                 <img src={smart} alt={smart}/>
                 <div style={{color:"#fff", fontWeight: 500}}>
                     +7980000000
                 </div>
             </div>
              <div className="ss" style={{alignItems: "center"}}>
                  <img src={email} alt={smart}/>
                  <div style={{color:"#fff", fontWeight: 500}}>
                      +7980000000
                  </div>
              </div>
              <div className="ss" style={{alignItems: "center"}}>
                  <img src={place} alt={smart}/>
                  <div style={{color:"#fff", fontWeight: 500}}>
                      +7980000000
                  </div>
              </div>
          </div>
          <br/>
      </>
    )
}
export default PageFooter
