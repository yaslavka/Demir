import React from "react";
import {Button} from "react-bootstrap";
import moment from 'moment';
import 'moment/locale/ru';

function BroneButton({nomer, broneceng, endDates, starttDate}){
    return (
        <>
            <div className="nomera-id-brine" style={{backgroundColor: '#F4F4F4'}} id={nomer.id}>
                <h1 style={{color: '#0F81C0', fontWeight: "bold", fontSize: 20, padding: 10,marginBottom: 10}}>СТОИМОСТЬ</h1>
                <div style={{borderTopWidth: 1, borderTopColor: '#AFB6C0', marginBottom: 15}}/>
                <div style={{padding: 10}}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", color: '#555555', fontWeight: "bold", fontSize: 12, marginBottom: 20, textAlign: "center"}}>
                        <div>
                            Дата заезда
                            <div>
                                {moment(starttDate).locale('ru').format('DD MMMM YYYY')}
                            </div>
                        </div>
                        <div>
                            Дата выезда
                            <div>
                                {moment(endDates).locale('ru').format('DD MMMM YYYY')}
                            </div>
                        </div>
                    </div>
                    <h1 style={{color: '#555555', fontWeight: "bold", fontSize: 12, marginBottom: 20}}>выбрано: {nomer.komnat} Комната</h1>
                    <h1 style={{color: '#090808', fontWeight: "bold", fontSize: 33, marginBottom: 30}}>{nomer.price} <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>₽</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>/</span> <span style={{fontWeight: 500, fontSize: 20, color: '#7C7C7C'}}>Сутки</span></h1>
                    <Button style={{backgroundColor: '#774AFF', width: '100%', marginBottom: 20}} type="button" onClick={()=>broneceng(nomer.komnat, nomer.price, nomer.id, starttDate, endDates)}>
                        Забронировать
                    </Button>
                </div>
            </div>
        </>
    )
}
export default BroneButton