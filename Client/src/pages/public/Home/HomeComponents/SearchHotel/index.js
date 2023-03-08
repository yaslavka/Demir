import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Loyaut from "../Header";
import {api} from "../../../../../api";
import {toast} from "react-toastify";
import SearchForm from "../../../../../components/SearchForm";
import Reckomended from "../Rekomendes";
import {Col, Row} from "react-bootstrap";
import './index.css'
import NavabarSearchHome from "../../../../../components/NavabarSearchHome";
import ListHotel from "./ListHotel";
import {dopuslugi, pitanie, poocenke, populars, ratings, typehotels, usloviyabroni} from "./data";


function SearchHotel(){
    const location = useHistory()
    const [resSerch, setResSearch] = useState([])
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    const [city, setCity] = useState(null)
    const [active, setActive] = useState(false)
    const [modalAuth, setModalAuth] = useState(false)
    const [filter, setFilter] = useState([])
    const [price, setPrice] =useState([0, 100000])
    const [bereg, setBereg] =useState({value: 0})
    const [km, setKm]=useState({value: 0})
    const [clik, setClic] = useState(false)
    const [view, setView]=useState(false)
    const [rating, setRating] = useState(ratings)
    const [popular, setPopular]=useState(populars)
    const [usloviyabron, setUsloviyabron]=useState(usloviyabroni)
    const [ocenkapootzyvam, setOcenkapootzyvam] =useState(poocenke)
    const [pitanies, setPitanies] =useState(pitanie)
    const [dopuslugii, setDopuslugii] = useState(dopuslugi)
    const [mordopuslugi, setMordopuslugi]=useState(18)
    const moruslugidop = dopuslugii.uslugis.slice(0, mordopuslugi)
    const [typehote, setTypehote] = useState(typehotels)

    const Filtertypehote =(id)=>{
        const cusinesStateList = typehote;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setTypehote(changeCheckedCuisines);

    }
    const Loadmoruslugidop = () =>{
        setMordopuslugi(mordopuslugi + dopuslugii.uslugis.length)
    }
    const chengedopuslugii =(id)=>{
        const changeCheckedCuisines = moruslugidop.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setDopuslugii({uslugis: changeCheckedCuisines});

    }
    const Populars =(id)=>{
        const cusinesStateList = popular;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setPopular(changeCheckedCuisines);

    }
    const pitaniess =(id)=>{
        const cusinesStateList = pitanies;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setPitanies(changeCheckedCuisines);

    }
    const hendelr =(id)=>{
        const cusinesStateList = rating;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setRating(changeCheckedCuisines);

    }
    const Usloviyabn =(id)=>{
        const cusinesStateList = usloviyabron;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setUsloviyabron(changeCheckedCuisines);

    }
    const pootzyvam =(id)=>{
        const cusinesStateList = ocenkapootzyvam;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setOcenkapootzyvam(changeCheckedCuisines);

    }
    const kmc =(event)=>{
        setKm(prevState => ({...prevState, value: event.target.value}))
    }
    const handelc =(e, value)=>{
        setPrice(value)
    }
    const beregch = (event) =>{

        setBereg(prevState => ({...prevState, value: event.target.value}))
    }
    useEffect(()=>{
        api
            .getFilterSearch({search: location.location.state.search.search})
            .then(response => {
                setFilter(response)
            })
            .catch(err =>{
                toast.error(err)
            })
    },[location.location.state.search.search])
    useEffect(()=>{
        //e.preventDefault();
        api.getFilterSearch({
            search: location.location.state.search.search, piople: location.location.state.piople.value
        })
            .then(response =>{
                setResSearch(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[location.location.state.search.search, location.location.state.piople.value])
    useEffect(()=>{
        api.searchCity({search: location.location.state.search.search})
            .then(response=>{
                setCity(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[location.location.state.search.search])
    const alayFilter = () =>{
        let updateListt = resSerch
        const filtrs = rating.filter((item)=>item.checked).map((item)=>(item.value.toLowerCase()))
        if (filtrs.length > 0){
            updateListt = updateListt.filter(item=>filtrs.includes(item.rating))
            setFilter(updateListt)
        }else if (filtrs.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }

    }
    const PopulalFilter =()=>{
        let updateListt = resSerch
        const filterPopulars = popular.filter((item)=>item.checked).map((item)=>(item.label.toLowerCase()))
        if (filterPopulars.length > 0 ){
            updateListt = updateListt.filter((item)=>filterPopulars.includes(item.typehotel))
            setFilter(updateListt)
        }else if (filterPopulars.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        PopulalFilter()
    },[popular])
    const PopulalWiFi =()=>{
        let updateListt = resSerch
        const filterPopularswifi = popular.filter((item)=>item.checked).map((item)=>(item.wifi))
        if (filterPopularswifi.length > 0 ){
            updateListt = updateListt.filter((item)=>filterPopularswifi.includes(item.wifi))
            setFilter(updateListt)
        }else if (filterPopularswifi.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        PopulalWiFi()
    },[popular])
    const PopularZavtrak =()=>{
        let updateListt = resSerch
        const filterPopularsZavtrak = popular.filter((item)=>item.checked).map((item)=>(item.zavtrak))
        if (filterPopularsZavtrak.length > 0 ){
            updateListt = updateListt.filter((item)=>filterPopularsZavtrak.includes(item.zavtrak))
            setFilter(updateListt)
        }else if (filterPopularsZavtrak.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        PopularZavtrak()
    },[popular])
    const PopularOcenka =()=>{
        let updateListt = resSerch
        const filterPopularsOcenka = popular.filter((item)=>item.checked).map((item)=>(item.bal))
        if (filterPopularsOcenka.length > 0 ){
            updateListt = updateListt.filter((item)=>filterPopularsOcenka.includes(item.bal))
            setFilter(updateListt)
        }else if (filterPopularsOcenka.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }

    useEffect(()=>{
        PopularOcenka()
    },[popular])
    const Popularspecpredlo =()=>{
        let updateListt = resSerch
        const filterPopularspecpredlo = popular.filter((item)=>item.checked).map((item)=>(item.specpredlojeniya))
        if (filterPopularspecpredlo.length > 0 ){
            updateListt = updateListt.filter((item)=>filterPopularspecpredlo.includes(item.specpredlojeniya))
            setFilter(updateListt)
        }else if (filterPopularspecpredlo.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }

    useEffect(()=>{
        Popularspecpredlo()
    },[popular])
    const Popularudobstva =()=>{
        let updateListt = resSerch
        const filterPopularudobstva = popular.filter((item)=>item.checked).map((item)=>(item.udobstva))
        if (filterPopularudobstva.length > 0 ){
            updateListt = updateListt.filter((item)=>filterPopularudobstva.includes(item.udobstva))
            setFilter(updateListt)
        }else if (filterPopularudobstva.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }

    useEffect(()=>{
        Popularudobstva()
    },[popular])
    const Pricefi = () => {
        let updateListt = resSerch
        const minPrice = price[0];
        const maxPrice = price[1];
        updateListt = updateListt.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );

        setFilter(updateListt);
    }
    useEffect(()=>{
        Pricefi()
    },[price])
    useEffect(()=>{
        alayFilter()
    },[rating])
    const Usloviyabronirovaniya =()=>{
        let updateListt = resSerch
        const pay = usloviyabron.filter((item)=>item.checked).map((item)=>(item.pay))
        const otmena = usloviyabron.filter((item)=>item.checked).map((item)=>(item.otmena))
        const payonli = usloviyabron.filter((item)=>item.checked).map((item)=>(item.payonli))
        const payschet = usloviyabron.filter((item)=>item.checked).map((item)=>(item.payschet))
        if (pay.length > 0 || otmena.length > 0 || payonli.length > 0 || payschet.length > 0){
            updateListt = updateListt.filter((item)=>pay.includes(item.pay))
            updateListt = updateListt.filter((item)=>otmena.includes(item.otmena))
            updateListt = updateListt.filter((item)=>payonli.includes(item.payonli))
            updateListt = updateListt.filter((item)=>payschet.includes(item.payschet))
            setFilter(updateListt)
        }else if (pay.length === 0 || otmena.length === 0 ||payonli.length === 0 || payschet.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        Usloviyabronirovaniya()
    },[usloviyabron])
    const Filterpootzyvam =()=>{
        let updateListt = resSerch
        const bal = ocenkapootzyvam.filter((item)=>item.checked).map((item)=>(item.bal))
        if (bal.length > 0){
            updateListt = updateListt.filter((item)=>bal.includes(item.bal))
            setFilter(updateListt)
        }else if (bal.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        Filterpootzyvam()
    },[ocenkapootzyvam])
    const Filterpitanie =()=>{
        let updateListt = resSerch
        const zavtrak = pitanies.filter((item)=>item.checked).map((item)=>(item.zavtrak))
        const polupansion = pitanies.filter((item)=>item.checked).map((item)=>(item.polupansion))
        const pansion = pitanies.filter((item)=>item.checked).map((item)=>(item.pansion))
        const allenk = pitanies.filter((item)=>item.checked).map((item)=>(item.allenk))
        const kuhnya = pitanies.filter((item)=>item.checked).map((item)=>(item.kuhnya))
        if (zavtrak.length > 0 || polupansion.length > 0 || pansion.length > 0 || allenk.length > 0 || kuhnya.length > 0){
            updateListt = updateListt.filter((item)=>zavtrak.includes(item.zavtrak))
            updateListt = updateListt.filter((item)=>polupansion.includes(item.polupansion))
            updateListt = updateListt.filter((item)=>pansion.includes(item.pansion))
            updateListt = updateListt.filter((item)=>allenk.includes(item.allenk))
            updateListt = updateListt.filter((item)=>kuhnya.includes(item.kuhnya))
            setFilter(updateListt)
        }else if (zavtrak.length === 0 || polupansion.length === 0 || pansion.length === 0 || allenk.length === 0 || kuhnya.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        Filterpitanie()
    },[pitanies])
    const Filteruslugi =()=>{
        let updateListt = resSerch
        const rybalka = moruslugidop.filter((item)=>item.checked).map((item)=>(item.rybalka))
        const baseyn = moruslugidop.filter((item)=>item.checked).map((item)=>(item.baseyn))
        const banya = moruslugidop.filter((item)=>item.checked).map((item)=>(item.banya))
        const eger = moruslugidop.filter((item)=>item.checked).map((item)=>(item.eger))
        const transfer = moruslugidop.filter((item)=>item.checked).map((item)=>(item.transfer))
        const mangal = moruslugidop.filter((item)=>item.checked).map((item)=>(item.mangal))
        const allkuh = moruslugidop.filter((item)=>item.checked).map((item)=>(item.allkuh))
        const lodka = moruslugidop.filter((item)=>item.checked).map((item)=>(item.lodka))
        const udobstva = moruslugidop.filter((item)=>item.checked).map((item)=>(item.udobstva))
        const plyj = moruslugidop.filter((item)=>item.checked).map((item)=>(item.plyj))
        const sauna = moruslugidop.filter((item)=>item.checked).map((item)=>(item.sauna))
        const wifi = moruslugidop.filter((item)=>item.checked).map((item)=>(item.wifi))
        const verhovayaezda = moruslugidop.filter((item)=>item.checked).map((item)=>(item.verhovayaezda))
        const besedka = moruslugidop.filter((item)=>item.checked).map((item)=>(item.besedka))
        const spining = moruslugidop.filter((item)=>item.checked).map((item)=>(item.spining))
        const bar = moruslugidop.filter((item)=>item.checked).map((item)=>(item.bar))
        const velo = moruslugidop.filter((item)=>item.checked).map((item)=>(item.velo))
        const trofei = moruslugidop.filter((item)=>item.checked).map((item)=>(item.trofei))
        const kvadrocikl = moruslugidop.filter((item)=>item.checked).map((item)=>(item.kvadrocikl))
        const okhrana = moruslugidop.filter((item)=>item.checked).map((item)=>(item.okhrana))
        const konyprokat = moruslugidop.filter((item)=>item.checked).map((item)=>(item.konyprokat))
        const parkovka = moruslugidop.filter((item)=>item.checked).map((item)=>(item.parkovka))
        const barbeku = moruslugidop.filter((item)=>item.checked).map((item)=>(item.barbeku))
        const sobaka = moruslugidop.filter((item)=>item.checked).map((item)=>(item.sobaka))
        const zoo = moruslugidop.filter((item)=>item.checked).map((item)=>(item.zoo))
        const inventar = moruslugidop.filter((item)=>item.checked).map((item)=>(item.inventar))
        if (rybalka.length > 0 || baseyn.length > 0 || banya.length > 0 || eger.length > 0 || transfer.length > 0 || mangal.length > 0){
            updateListt = updateListt.filter((item)=>rybalka.includes(item.rybalka))
            updateListt = updateListt.filter((item)=>baseyn.includes(item.baseyn))
            updateListt = updateListt.filter((item)=>banya.includes(item.banya))
            updateListt = updateListt.filter((item)=>eger.includes(item.eger))
            updateListt = updateListt.filter((item)=>transfer.includes(item.transfer))
            updateListt = updateListt.filter((item)=>mangal.includes(item.mangal))
            updateListt = updateListt.filter((item)=>allkuh.includes(item.allkuh))
            updateListt = updateListt.filter((item)=>lodka.includes(item.lodka))
            updateListt = updateListt.filter((item)=>udobstva.includes(item.udobstva))
            updateListt = updateListt.filter((item)=>plyj.includes(item.plyj))
            updateListt = updateListt.filter((item)=>sauna.includes(item.sauna))
            updateListt = updateListt.filter((item)=>wifi.includes(item.wifi))
            updateListt = updateListt.filter((item)=>verhovayaezda.includes(item.verhovayaezda))
            updateListt = updateListt.filter((item)=>besedka.includes(item.besedka))
            updateListt = updateListt.filter((item)=>spining.includes(item.spining))
            updateListt = updateListt.filter((item)=>bar.includes(item.bar))
            updateListt = updateListt.filter((item)=>velo.includes(item.velo))
            updateListt = updateListt.filter((item)=>trofei.includes(item.trofei))
            updateListt = updateListt.filter((item)=>kvadrocikl.includes(item.kvadrocikl))
            updateListt = updateListt.filter((item)=>okhrana.includes(item.okhrana))
            updateListt = updateListt.filter((item)=>konyprokat.includes(item.konyprokat))
            updateListt = updateListt.filter((item)=>parkovka.includes(item.parkovka))
            updateListt = updateListt.filter((item)=>barbeku.includes(item.barbeku))
            updateListt = updateListt.filter((item)=>sobaka.includes(item.sobaka))
            updateListt = updateListt.filter((item)=>zoo.includes(item.zoo))
            updateListt = updateListt.filter((item)=>inventar.includes(item.inventar))
            setFilter(updateListt)
        }else if (mordopuslugi.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        Filteruslugi()
    },[moruslugidop])
    const Filtetypeho =()=>{
        let updateListt = resSerch
        const lable = typehote.filter((item)=>item.checked).map((item)=>(item.label.toLowerCase()))
        if (lable.length > 0){
            updateListt = updateListt.filter((item)=>lable.includes(item.typehotel))
            setFilter(updateListt)
        }else if (lable.length === 0){
            api
                .getFilterSearch({search: location.location.state.search.search})
                .then(response => {
                    setFilter(response)
                })
                .catch(err =>{
                    toast.error(err)
                })
        }
    }
    useEffect(()=>{
        Filtetypeho()
    },[typehote])
    return (
        <>
           <div className="search-pages">
               <Loyaut
                   setActive={setActive}
                   active={active}
                   modalAuth={modalAuth}
                   setModalAuth={setModalAuth}
               />
               <div style={{marginBottom: 50}}/>
               <SearchForm
                   endDates={endDates}
                   setEndtDates={setEndtDates}
                   starttDate={starttDate}
                   setStarttDate={setStarttDate}
               />
               <div style={{marginBottom: 180}}/>
               <Reckomended/>
               <div style={{marginBottom: 20}}/>
               {city && (
                   <>
                       <div className="search-pages-title">
                           <div className="search-pages-links">
                               Главная
                           </div>
                           <div className="search-pages-strlka"> > </div>
                           <div className="search-pages-links">
                               {city.oblast}
                           </div>
                           <div className="search-pages-strlka"> > </div>
                           <Link to={`city/${city.gorod}`} className="tex-lincs">
                               <div className="search-pages-link">
                                   {city.gorod}
                               </div>
                           </Link>
                       </div>
                   </>
               )}
               <div style={{marginBottom: 20}}/>
               {city && (
                   <div className="search-pages-sub-title">
                       Отели {city.oblast}
                   </div>
               )}
               <Row>
                   <Col xl={3}>
                       <NavabarSearchHome
                           handelc={handelc}
                           price={price}
                           beregch={beregch}
                           bereg={bereg}
                           setPrice={setPrice}
                           kmc={kmc}
                           km={km}
                           ocenkapootzyvam={ocenkapootzyvam}
                           pootzyvam={pootzyvam}
                           Usloviyabn={Usloviyabn}
                           usloviyabron={usloviyabron}
                           hendelr={hendelr}
                           rating={rating}
                           Populars={Populars}
                           popular={popular}
                           pitaniess={pitaniess}
                           pitanies={pitanies}
                           moruslugidop={moruslugidop}
                           Loadmoruslugidop={Loadmoruslugidop}
                           chengedopuslugii={chengedopuslugii}
                           Filtertypehote={Filtertypehote}
                           typehote={typehote}
                       />
                   </Col>
                   <Col xl={9}>
                       <div className="list-layout">
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
                           {filter && (
                               <div className="items-container" id="search_results_table">
                                   <ul className="list" id="hidden-by-loader" style={{opacity: 1, listStyleType: "none"}}>
                                       {filter.map((item, index)=>(
                                           <ListHotel key={item.id} hotel={item} index={index}/>
                                       ))}
                                   </ul>
                               </div>
                           )}
                       </div>
                   </Col>
               </Row>
           </div>
        </>
    )
}
export default SearchHotel