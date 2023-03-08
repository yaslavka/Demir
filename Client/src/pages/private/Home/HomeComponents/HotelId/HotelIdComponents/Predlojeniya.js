import React from "react";
import par from '../../../../../../assets/icon/parki.svg'

function Predlojeniyaotelya(){
    return(
        <>
            <div className="predlojeniya">
                <h1 style={{fontWeight: 700, fontSize: 17, color: '#6EA4D3', padding: 10}}>ОТЕЛЬ ПРЕДЛОГАЕТ ГОСТЯМ:</h1>
                <div style={{borderTopWidth: 1, borderTopColor: '#0d6efd'}}>

                </div>
                <span className="fa fa-map-marker" style={{padding: 10}}>
                        {' '} Размещение в самом центре
                </span>
                <span className="fa fa-umbrella" style={{padding: 10}}>
                        {' '} Есть собственный пляж
                </span>
                <span className="fa" style={{padding: 10}}>
                        <img src={par} alt={par} style={{width: 18}}/> {' '} бесплатная Парковка
                </span>
                <span className="fa fa-car" style={{padding: 10}}>
                    {' '} Доступен трансфер
                    <div>{' '} (за дополнительную оплату)</div>
                </span>
                <span className="fa fa-wifi" style={{padding: 10}}>
                        {' '} Бесплатный WI-FI
                </span>
                <span className="fa fa-key" style={{padding: 10}}>
                        {' '} Бронирование на прямую с моментальным подтверждением
                </span>
                <div style={{marginBottom: 30}}/>
            </div>
        </>
    )
}
export default Predlojeniyaotelya