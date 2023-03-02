import React from "react";
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function SearchForm({endDates, checked, setStarttDate, handleChange, setEndtDates, starttDate}){
    return(
        <>
            <div id="sidebar-search-form" className="sidebar-search-forms">
                <div className="search-forms-titles">
                    <h4 className="forms-titles">Забронировать номер</h4>
                </div>
                <div className="search-forms-titles-button"/>
                <div className="search-forms-h">
                    <Form>
                        <div className="search-forms-input">
                            <svg  width="22" viewBox="0 0 22 23" fill="none" className="location-icon icon icon_search" style={{position: "absolute", marginInline: 10}}
                                  xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 9H5V16H3V9ZM9 9H11V16H9V9ZM20 5L10 0L0 5V7H20V5ZM4.47 5L10 2.24L15.53 5H4.47ZM0 18V20H12.4C12.19 19.36 12.08 18.69 12.04 18H0ZM17 11.26V9H15V12.26L17 11.26ZM18 13L14 15V17.55C14 20.07 15.71 22.43 18 23C20.29 22.43 22 20.07 22 17.55V15L18 13ZM17.28 20L15.25 17.97L16.31 16.91L17.28 17.88L19.69 15.5L20.75 16.56L17.28 20Z"
                                    fill="#0094FF"/>
                            </svg>
                            <input type="text" placeholder="Локация / гостиница" style={{marginLeft: 40}}/>
                        </div>
                        <div className="search-forms-input">
                            <div style={{marginLeft: 40}}>
                                <DatePicker
                                    selected={starttDate}
                                    placeholderText="Дата Заезда"
                                    onChange={(date) => setStarttDate(date)}
                                />
                            </div>
                            <svg fill="#0094FF"
                                 width="26" style={{position: "absolute", marginInline: 10}}
                                 focusable="false" viewBox="0 0 24 24"
                                 className="location-icon icon icon_search"
                                 data-testid="CalendarMonthOutlinedIcon">
                                <path
                                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                            </svg>
                        </div>
                        <div className="search-forms-input">
                            <div style={{marginLeft: 40}}>
                                <DatePicker
                                    selected={endDates}
                                    placeholderText="Дата Выезда"
                                    onChange={(date) => setEndtDates(date)}
                                />
                            </div>
                            <svg fill="#0094FF"
                                 width="26" style={{position: "absolute", marginInline: 10}}
                                 focusable="false" viewBox="0 0 24 24"
                                 className="location-icon icon icon_search"
                                 data-testid="CalendarMonthOutlinedIcon">
                                <path
                                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                            </svg>
                        </div>
                        <div className="search-forms-input fff" id="f">
                            <select style={{marginLeft: 40}} id="format">
                                <option value="" disabled selected hidden>Количество Гостей</option>
                                <option value="" >Количество Гостей</option>
                                <option value="" >Количество Гостей</option>
                                <option value="" >Количество Гостей</option>
                                <option value="">Количество Гостей</option>
                            </select>
                            <svg
                                style={{position: "absolute", marginInline: 15}}
                                width="18"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="#0094FF"/>
                            </svg>
                        </div>
                        <div className="c" style={{justifyContent: "flex-start"}}>
                            <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label="Дети" />
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
}
export default SearchForm