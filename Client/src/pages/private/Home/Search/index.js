import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-dropdown/style.css';
import {api} from "../../../../api";
import {Button, Form} from "reactstrap";
import 'react-datepicker/dist/react-datepicker.css'
import useMatchMedia from "use-match-media-hook";


function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());
    const [piople, setPiople] = useState({label: '', value: 0})
    const [chaild, setCaild] = useState({label: '', value: 0})
    const [search, setSearch] = useState({search: ''})
    const [sstartDate, setSstartDate] = useState(false);
    const handleOnchanges = (event) => {
        setSearch({search: event.target.value});
    };
    const submitSignInForm =(e)=>{
        e.preventDefault();
        api.search({
            search: search, piople: piople.value, startDate:startDate, endDate: endDate, chaild:chaild.value
        }).then(r =>r)
    }
    const queries = [
        '(max-width: 1023px)',
        '(min-width: 1024px)'
    ]
    const [mobile, desktop] = useMatchMedia(queries)
    if (mobile) return(
        <>
            <div  className="search_form_scroll_target" style={{position: "relative", marginTop:200}}>
                <div className="title-under-search-form">
                    <div className="title-under-search-form__top-title on_main_page">Поиск лучших предложений</div>
                    <div className="title-under-search-form__bottom-title">отели, базы отдыха, хостелы и другие
                        варианты
                    </div>
                </div>
                <div className="search">
                    <Form id="search-form" onSubmit={submitSignInForm} className="search-form search__form form">
                        <div className="fieldset__wrapper">
                            <div className="form__fieldset search_input_fieldset">
                                <div className="ui-autocomplete-wrapper ui-autocomplete-clear-icon">
                                    <svg  width="22" height="23" viewBox="0 0 22 23" fill="none" className="location-icon icon icon_search"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 9H5V16H3V9ZM9 9H11V16H9V9ZM20 5L10 0L0 5V7H20V5ZM4.47 5L10 2.24L15.53 5H4.47ZM0 18V20H12.4C12.19 19.36 12.08 18.69 12.04 18H0ZM17 11.26V9H15V12.26L17 11.26ZM18 13L14 15V17.55C14 20.07 15.71 22.43 18 23C20.29 22.43 22 20.07 22 17.55V15L18 13ZM17.28 20L15.25 17.97L16.31 16.91L17.28 17.88L19.69 15.5L20.75 16.56L17.28 20Z"
                                            fill="#0094FF"/>
                                    </svg>
                                    <input id="autocomplete" name="search" value={search.search} placeholder="Локация / гостиница" onChange={handleOnchanges}
                                           className="text ui_input search_form_widget ui_geolocation mylocation ui-autocomplete-input state_two initial_condition"
                                           data-alt-placeholder="Город, отель, адрес" data-geolocation-error=""
                                           data-geolocation-success="" spellCheck="false" autoCapitalize="off"
                                           autoCorrect="off" autoComplete="off" data-country-id="171"
                                           style={{borderColor: "rgb(230, 230, 230)"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="fieldset__wrapper">
                            <div className="row dates-row">
                                <div className="date__field">
                                    <div className="form__fieldset date_fieldset search_form_widget c-datepicker-trigger-js">
                                        <p className="date-arrival-field date-field dates-numbers hidden">
                                            <label className="form__label date-arrival-label">Дата заезда</label>
                                        </p>
                                        <label className="form__label date-arrival-label">Дата заезда</label>
                                        <p className="date-field-placeholder date-field-placeholder-main">
                                            <DatePicker selected={startDate}
                                                        onChange={(date) => setStartDate(date)}/>
                                        </p>
                                    </div>
                                </div>
                                <div className="date__field">
                                    <div className="form__fieldset date_fieldset search_form_widget c-datepicker-trigger-js">
                                        <p className="date-arrival-field date-field dates-numbers hidden">
                                            <label className="form__label date-arrival-label">Дата заезда</label>
                                        </p>
                                        <label className="form__label date-arrival-label">Дата выезда</label>
                                        <p className="date-field-placeholder date-field-placeholder-main">
                                            <DatePicker selected={endDate}
                                                        onChange={(date) => setEndtDate(date)}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fieldset__wrapper">
                            <div className="row party-info">
                                <div className="age__field">
                                    <div className="form__fieldset age_fieldset">
                                        <div className="selectric-wrapper selectric-number-adults selectric-seach-from-selectric selectric-ui_select">
                                            <div className="selectric-hide-select">
                                                <span className="label-word">Взрослых</span>
                                                <select id="number_adults" className="number-adults seach-from-selectric ui_select" name="adults" value={piople.value} onChange={(e)=>setPiople({value: e.target.value})}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="age__field">
                                    <div className="form__fieldset age_fieldset">
                                        <div className="selectric-wrapper selectric-number-children selectric-seach-from-selectric selectric-ui_select selectric-below">
                                            <div className="selectric-hide-select">
                                                <span className="label-word">Детей</span>
                                                <select id="number_children" className="number-children seach-from-selectric ui_select" name="children" value={chaild.value} onChange={(e)=>{setCaild({value: e.target.value})}}>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fieldset__wrapper">
                            <fieldset className="form__fieldset search-form-control-btns">
                                <button id="search-form-submit"
                                        className="search-form-submit ui ui_button ui_red ui_filled ui_search_form"
                                        type="submit"><span>Найти</span></button>
                            </fieldset>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
    return (
       <>
           {desktop && (
               <div className="main-search">
                   <div className="main-search__front">
                       <div className="items-center relative text-white">
                           <h1 className="title-under-search-forms">Lorem ipsum  dolor sit amet</h1>
                           <h1 className="title-under-search-forms-2">consectetur adipiscing elit, sed do eiusmod tempor</h1>
                       </div>
                       <div className="main-search__front container">
                           <Form onSubmit={submitSignInForm} className="main-search__form">
                               <div className="main-search__controls nowrap">
                                   <div className="main-search__fields clearfix cc">
                                       <div
                                           className="main-search__destination main-search__group">
                                           <input style={{width: '100%'}} name="search" value={search.search} placeholder="Локация / гостиница" onChange={handleOnchanges} className="main-search__destination-input main-search__input"/>
                                           <svg width="22" height="23" viewBox="0 0 22 23" fill="none" className="main-search__icon main-search__icon-search"
                                                xmlns="http://www.w3.org/2000/svg">
                                               <path
                                                   d="M3 9H5V16H3V9ZM9 9H11V16H9V9ZM20 5L10 0L0 5V7H20V5ZM4.47 5L10 2.24L15.53 5H4.47ZM0 18V20H12.4C12.19 19.36 12.08 18.69 12.04 18H0ZM17 11.26V9H15V12.26L17 11.26ZM18 13L14 15V17.55C14 20.07 15.71 22.43 18 23C20.29 22.43 22 20.07 22 17.55V15L18 13ZM17.28 20L15.25 17.97L16.31 16.91L17.28 17.88L19.69 15.5L20.75 16.56L17.28 20Z"
                                                   fill="#0094FF"/>
                                           </svg>
                                       </div>
                                       <div className="ss" style={{alignItems: "center", marginLeft: 50}}>
                                           <div style={{alignItems: "center"}}
                                                className="cc">
                                               <div className="" style={{fontSize: 30, color: "#C8C8C8"}}>|</div>
                                               <svg fill="#0094FF"
                                                    width={22} height={23}
                                                    focusable="false" viewBox="0 0 24 24"
                                                    data-testid="CalendarMonthOutlinedIcon">
                                                   <path
                                                       d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                                               </svg>
                                               <div style={{textAlignLast: "center"}}>
                                                   <div style={{marginInline: 1}}>
                                                       Заезд
                                                   </div>
                                                   <DatePicker selected={startDate}
                                                               onChange={(date) => setStartDate(date)}/>
                                               </div>
                                           </div>
                                           <div
                                               className="cc" style={{alignItems:"center"}}>

                                               <div className="" style={{fontSize: 30, color: "#C8C8C8"}}>|</div>
                                               <svg fill="#0094FF"
                                                    width={22} height={23}
                                                    focusable="false" viewBox="0 0 24 24"
                                                    data-testid="CalendarMonthOutlinedIcon">
                                                   <path
                                                       d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                                               </svg>
                                               <div style={{textAlignLast: "center"}}>
                                                   <div style={{marginInline: 1}}>
                                                       Выезд
                                                   </div>
                                                   <DatePicker selected={endDate}
                                                               onChange={(date) => setEndtDate(date)}/>
                                               </div>
                                           </div>
                                           <div className="px-1" style={{fontSize: 30, color: "#C8C8C8"}}>|</div>
                                           <div className="main-search__guests main-search__group cc">
                                               <div className={sstartDate? "dropdown dropdown--show":"dropdown"}>
                                                   <div className="dropdown__toggle">
                                                       <svg fill={sstartDate? "#0094FF":"#0094FF"}
                                                            className="main-search__icon main-search__icon-guests" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            focusable="false">
                                                           <path d="M6940.875,2932.947a14.76,14.76,0,0,1-7.875-1.871,7.677,7.677,0,0,1,4.025-6.608,5.473,5.473,0,0,0,3.85,1.532,5.617,5.617,0,0,0,3.851-1.532,7.406,7.406,0,0,1,4.024,6.608,13.108,13.108,0,0,1-6.733,1.924C6941.647,2933,6941.266,2932.983,6940.875,2932.947Zm-4.376-13.124v-.088a4.39,4.39,0,1,1,8.752,0v.088a4.389,4.389,0,1,1-8.752,0Z" transform="translate(-6933 -2915)"/>
                                                       </svg>
                                                       <div className="main-search__guests-input main-search__input">{piople.label + chaild.label|| 'Количество людей'}</div>
                                                       <div className="main-search__open-guests" role={"button"} onClick={()=>setSstartDate(!sstartDate)}>
                                                           <svg className="main-search__icon main-search__caret-down" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                focusable="false">
                                                               <path d="M7.2,11l4.4,3.8a.561.561,0,0,0,.9,0L16.9,11a.6.6,0,0,0-.4-1h-9A.575.575,0,0,0,7.2,11Z" transform="translate(-7.011 -10)"/>
                                                           </svg>
                                                       </div>
                                                   </div>
                                                   <div className="dropdown__menu guests-popup">
                                                       <div className="guests-popup__adults">
                                                           <div className="guests-popup__label bold">Взрослых:</div>
                                                           <div className="toggle-buttons">
                                                               <input id="guests-popup__adult-1" className="toggle-buttons__button"
                                                                      type="radio" name="adults" value={piople.value}/>
                                                               <label htmlFor="guests-popup__adult-1"
                                                                      className="toggle-buttons__label" onClick={()=>setPiople({ value: 1, label: '1 взр.' })}>1</label>
                                                               <input id="guests-popup__adult-2" className="toggle-buttons__button"
                                                                      type="radio" name="adults" value={piople.value}/>
                                                               <label htmlFor="guests-popup__adult-2"
                                                                      className="toggle-buttons__label" onClick={()=>setPiople({ value: 2, label: '2 взр.'})}>2</label>
                                                               <input id="guests-popup__adult-3" className="toggle-buttons__button"
                                                                      type="radio" name="adults" value={piople.value}/>
                                                               <label htmlFor="guests-popup__adult-3"
                                                                      className="toggle-buttons__label" onClick={()=>setPiople({ value: 3, label: '3 взр.'})}>3</label>
                                                               <input id="guests-popup__adult-4" className="toggle-buttons__button"
                                                                      type="radio" name="adults" value={piople.value}/>
                                                               <label htmlFor="guests-popup__adult-4"
                                                                      className="toggle-buttons__label" onClick={()=>{setPiople({ value: 4, label: '4 взр.'})}}>4</label>
                                                               <input id="guests-popup__adult-5" className="toggle-buttons__button"
                                                                      type="radio" name="adults" value={piople.value}/>
                                                               <label htmlFor="guests-popup__adult-5"
                                                                      className="toggle-buttons__label" onClick={()=>{setPiople({ value: 5, label: '5 взр.'})}}>5</label>
                                                               <input id="guests-popup__adult-6" className="toggle-buttons__button"
                                                                      type="radio" name="adults" value={piople.value}/>
                                                               <label htmlFor="guests-popup__adult-6"
                                                                      className="toggle-buttons__label" onClick={()=>{setPiople({ value: 6, label: '6 взр.'})}}>6</label>
                                                           </div>
                                                       </div>
                                                       <div className="guests-popup__children">
                                                           <div className="guests-popup__label bold">Детей:</div>
                                                           <div className="toggle-buttons">
                                                               <input id="guests-popup__child-0" className="toggle-buttons__button"
                                                                      type="radio" name="children" value={chaild.value}/>
                                                               <label htmlFor="guests-popup__child-0"
                                                                      className="toggle-buttons__label" onClick={()=>setCaild({ value: 0, label: '' })}>0</label>
                                                               <input id="guests-popup__child-1" className="toggle-buttons__button"
                                                                      type="radio" name="children" value={chaild.value}/>
                                                               <label htmlFor="guests-popup__child-1"
                                                                      className="toggle-buttons__label" onClick={()=>setCaild({ value: 1, label: 'и 1 реб.'})}>1</label>
                                                               <input id="guests-popup__child-2" className="toggle-buttons__button"
                                                                      type="radio" name="children" value={chaild.value}/>
                                                               <label htmlFor="guests-popup__child-2"
                                                                      className="toggle-buttons__label" onClick={()=>setCaild({ value: 2, label: 'и 2 дет.'})}>2</label>
                                                               <input id="guests-popup__child-3" className="toggle-buttons__button"
                                                                      type="radio" name="children" value={chaild.value}/>
                                                               <label htmlFor="guests-popup__child-3"
                                                                      className="toggle-buttons__label" onClick={()=>{setCaild({ value: 3, label: 'и 3 дет.'})}}>3</label>
                                                           </div>
                                                       </div>
                                                       <div className="guests-popup__footer">
                                                           <div className="row">
                                                               <div className="col-2 text-left">
                                                                   <button type="button"
                                                                           className="guests-popup__close guests-popup__button button" onClick={()=>{setPiople({ value: 0, label: ''});setCaild({ value: 0, label: ''}); setSstartDate(false)}}>Отмена
                                                                   </button>
                                                               </div>
                                                               <div className="col-2 text-right">
                                                                   <button type="button" onClick={()=>setSstartDate(false)}
                                                                           className="guests-popup__apply guests-popup__button button button-primary">Применить
                                                                   </button>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div style={{borderRadius: 10}} className="px-10">
                                               <Button type="submit"  color="primary" style={{color: '#fff'}}>
                                                   Найти
                                               </Button>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </Form>
                       </div>
                   </div>
               </div>
           )}
       </>
    )
}

export default Search
