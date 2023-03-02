import React, {useState} from "react";
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";

function ViborNomera(){
    const [endDates, setEndtDates] = useState('')
    const [starttDate, setStarttDate] = useState('')
    return (
        <>
            <div className="cc" style={{alignItems: "center"}}>
                <div style={{fontSize: 15, fontWeight: "bold"}} className="">
                    Выбор номера:
                </div>
                <Form className="form-hotel-id">
                    <div className="datepickerss-start">
                        <svg fill="#0094FF"
                             width="26" style={{position: "absolute", marginInline: 10}}
                             focusable="false" viewBox="0 0 24 24"
                             className="location-icon icon icon_search"
                             data-testid="CalendarMonthOutlinedIcon">
                            <path
                                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                        </svg>
                        <div style={{marginLeft: 40}}>
                            <DatePicker
                                selected={starttDate}
                                placeholderText="Дата Заезда"
                                onChange={(date) => setStarttDate(date)}
                            />
                        </div>
                    </div>
                    <div className="datepickerss-start">
                        <svg fill="#0094FF"
                             width="26" style={{position: "absolute", marginInline: 10}}
                             focusable="false" viewBox="0 0 24 24"
                             className="location-icon icon icon_search"
                             data-testid="CalendarMonthOutlinedIcon">
                            <path
                                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                        </svg>
                        <div style={{marginLeft: 40}}>
                            <DatePicker
                                selected={endDates}
                                placeholderText="Дата Выезда"
                                onChange={(date) => setEndtDates(date)}
                            />
                        </div>
                    </div>
                    <div className="datepickerss-start">
                        <svg
                            style={{position: "absolute", marginInline: 15}}
                            width="18"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="#0094FF"/>
                        </svg>
                        <div style={{marginLeft: 40}}>
                            <select id="formatr" >
                                <option value="" disabled selected hidden>Количество Гостей</option>
                                <option value="" >Количество Гостей</option>
                                <option value="" >Количество Гостей</option>
                                <option value="" >Количество Гостей</option>
                                <option value="">Количество Гостей</option>
                            </select>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default ViborNomera