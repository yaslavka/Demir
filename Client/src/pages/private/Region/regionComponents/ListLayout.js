import React, {useState} from "react";
import {Link} from "react-router-dom";
import images from '../../../../assets/hotel/50286032_thumb.jpg'
import HotelLoyautid from "./HotelLoyautid";

const dataHotel =[
    {
        id: 1,
        image: images,
        link: '/',
        namelink:'Гостевой дом Солнечный',
        addressMap:'Петрозаводск, ул. Солнечная, д. 4а',
        distanceto: 'Петрозаводск 3.8 км',
        distanceout:'До Онежского озера 5.0 км',
        velikolepno: true,
        bal:'9.6',
        kolichestvooctnok:'526',
        pay: true,
        coords:'Карелия, Кондопожский р-н, д. Мунозеро',
        teritoriya:'Своя ухоженная территория',
        banya:'БАНЯ/САУН',
        mangal:'МАНГАЛ',
        eger:'ОХОТА/УСЛУГИ ЕГЕРЯ',
        besedka:'БЕСЕДКИ ДЛЯ ОТДЫХА',
        kater:'АРЕНДА ЛОДОК, КАТЕРОВ',
        detskay:'ДЕТСКАЯ ПЛОЩАДКА',
        autostop:'АВТОСТОЯНКА',
        price24hours: 2600,
        mest:'Двухместный',
        wifi: true,
        ostatok: 2,
        pitanie: 'Без питания',
        bonus: 80,
        oposanie: 'две односпальные кровати или двуспальная кровать, набор постельного белья, телевизор, спутниковое телевидение, шкаф, диван, телефон, холодильник, набор полотенец.В ванной: туалет, раковина, душ, средства личной гигиены, фен.',
        ploshad: 32
    },
    {
        id: 2,
        image: images,
        link: '/',
        namelink:'Гостевой дом Солнечный',
        addressMap:'Петрозаводск, ул. Солнечная, д. 4а',
        distanceto: 'Петрозаводск 3.8 км',
        distanceout:'До Онежского озера 5.0 км',
        velikolepno: true,
        bal:'9.6',
        kolichestvooctnok:'526',
        pay: true,
        coords:'Карелия, Кондопожский р-н, д. Мунозеро',
        teritoriya:'Своя ухоженная территория',
        banya:'БАНЯ/САУН',
        mangal:'МАНГАЛ',
        eger:'ОХОТА/УСЛУГИ ЕГЕРЯ',
        besedka:'БЕСЕДКИ ДЛЯ ОТДЫХА',
        kater:'АРЕНДА ЛОДОК, КАТЕРОВ',
        detskay:'ДЕТСКАЯ ПЛОЩАДКА',
        autostop:'АВТОСТОЯНКА',
        price24hours: 6600,
        mest:'Двухместный',
        wifi: true,
        ostatok: 2,
        pitanie: 'Без питания',
        bonus: 80,
        oposanie: 'две односпальные кровати или двуспальная кровать, набор постельного белья, телевизор, спутниковое телевидение, шкаф, диван, телефон, холодильник, набор полотенец.В ванной: туалет, раковина, душ, средства личной гигиены, фен.',
        ploshad: 32
    },
    {
        id: 3,
        image: images,
        link: '/',
        namelink:'Гостевой дом Солнечный',
        addressMap:'Петрозаводск, ул. Солнечная, д. 4а',
        distanceto: 'Петрозаводск 3.8 км',
        distanceout:'До Онежского озера 5.0 км',
        velikolepno: true,
        bal:'9.6',
        kolichestvooctnok:'526',
        pay: true,
        coords:'Карелия, Кондопожский р-н, д. Мунозеро',
        teritoriya:'Своя ухоженная территория',
        banya:'БАНЯ/САУН',
        mangal:'МАНГАЛ',
        eger:'ОХОТА/УСЛУГИ ЕГЕРЯ',
        besedka:'БЕСЕДКИ ДЛЯ ОТДЫХА',
        kater:'АРЕНДА ЛОДОК, КАТЕРОВ',
        detskay:'ДЕТСКАЯ ПЛОЩАДКА',
        autostop:'АВТОСТОЯНКА',
        price24hours: 5600,
        mest:'Двухместный',
        wifi: true,
        ostatok: 2,
        pitanie: 'Без питания',
        bonus: 80,
        oposanie: 'две односпальные кровати или двуспальная кровать, набор постельного белья, телевизор, спутниковое телевидение, шкаф, диван, телефон, холодильник, набор полотенец.В ванной: туалет, раковина, душ, средства личной гигиены, фен.',
        ploshad: 32
    },
    {
        id: 4,
        image: images,
        link: '/',
        namelink:'Гостевой дом Солнечный',
        addressMap:'Петрозаводск, ул. Солнечная, д. 4а',
        distanceto: 'Петрозаводск 3.8 км',
        distanceout:'До Онежского озера 5.0 км',
        velikolepno: true,
        bal:'9.6',
        kolichestvooctnok:'526',
        pay: true,
        coords:'Карелия, Кондопожский р-н, д. Мунозеро',
        teritoriya:'Своя ухоженная территория',
        banya:'БАНЯ/САУН',
        mangal:'МАНГАЛ',
        eger:'ОХОТА/УСЛУГИ ЕГЕРЯ',
        besedka:'БЕСЕДКИ ДЛЯ ОТДЫХА',
        kater:'АРЕНДА ЛОДОК, КАТЕРОВ',
        detskay:'ДЕТСКАЯ ПЛОЩАДКА',
        autostop:'АВТОСТОЯНКА',
        price24hours: 4600,
        mest:'Двухместный',
        wifi: true,
        ostatok: 2,
        pitanie: 'Без питания',
        bonus: 80,
        oposanie: 'две односпальные кровати или двуспальная кровать, набор постельного белья, телевизор, спутниковое телевидение, шкаф, диван, телефон, холодильник, набор полотенец.В ванной: туалет, раковина, душ, средства личной гигиены, фен.',
        ploshad: 32
    },
    {
        id: 5,
        image: images,
        link: '/',
        namelink:'Гостевой дом Солнечный',
        addressMap:'Петрозаводск, ул. Солнечная, д. 4а',
        distanceto: 'Петрозаводск 3.8 км',
        distanceout:'До Онежского озера 5.0 км',
        velikolepno: true,
        bal:'9.6',
        kolichestvooctnok:'526',
        pay: true,
        coords:'Карелия, Кондопожский р-н, д. Мунозеро',
        teritoriya:'Своя ухоженная территория',
        banya:'БАНЯ/САУН',
        mangal:'МАНГАЛ',
        eger:'ОХОТА/УСЛУГИ ЕГЕРЯ',
        besedka:'БЕСЕДКИ ДЛЯ ОТДЫХА',
        kater:'АРЕНДА ЛОДОК, КАТЕРОВ',
        detskay:'ДЕТСКАЯ ПЛОЩАДКА',
        autostop:'АВТОСТОЯНКА',
        price24hours: 3600,
        mest:'Двухместный',
        wifi: true,
        ostatok: 2,
        pitanie: 'Без питания',
        bonus: 80,
        oposanie: 'две односпальные кровати или двуспальная кровать, набор постельного белья, телевизор, спутниковое телевидение, шкаф, диван, телефон, холодильник, набор полотенец.В ванной: туалет, раковина, душ, средства личной гигиены, фен.',
        ploshad: 32
    }
]

function ListLayout(){
    const [clik, setClic] = useState(false)
    const [view, setView]=useState(false)

    return (
        <>
            <div className="list-layout">
                <span className="page_type" data-page-type="seo" type="hidden">

                </span>
                <div className="tool-box clearfix">
                    <div className="sort-box pull-left">
                        <ul className="sort-by unstyled clearfix" style={{listStyleType: "none"}}>
                            <li className="label">Сортировать:</li>
                            <li className={clik ?"sort-by-type":"sort-by-type active"}>
                                <Link to="#">Популярность</Link>
                            </li>
                            <li className={clik? "sort-by-rating active":"sort-by-rating"}>
                                <Link to="#">Оценка по отзывам</Link>
                            </li>
                            <li className={clik? "sort-by-stars active": "sort-by-stars"}>
                                <Link to="#">
                                    Звезды
                                    <span className="sorting-dir-icon fa fa-caret-up">

                                    </span>
                                </Link>
                            </li>
                            <li className="sort-by-distance"><Link to="#">Расположение</Link></li>
                            <li className="sort-by-min_price">
                                <Link to="#">
                                Цена
                                    <span className="sorting-dir-icon fa fa-caret-up icon-arrow-up">

                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="view-box pull-right js-view_box">
                        <ul className="view unstyled clearfix" style={{listStyleType: "none"}}>
                            <li className={view? "view-grid js-view-grid active":"view-grid js-view-grid"}>
                                <Link to={'#'}>
                                    <span className="fa fa-th">

                                    </span>
                                    Плитка
                                </Link>
                            </li>
                            <li className={view?"view-list js-view-list":"view-list js-view-list active"}>
                                <Link to={'#'}>
                                    <span className="fa fa-th-list">

                                    </span>
                                    Список
                                </Link>
                            </li>
                            <li className="view-map js-view-map">
                                <Link to={"#"}>
                                    <span className="fa fa-map-marker">

                                    </span>На карте
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items-container" id="search_results_table">
                    <ul className="list" id="hidden-by-loader" style={{opacity: 1, listStyleType: "none"}}>
                        {dataHotel.map((item, index)=>(
                           <HotelLoyautid key={item.id} hotel={item} index={index}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ListLayout