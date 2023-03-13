import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import confirm from 'reactstrap-confirm'
import {declOfNum} from "../../utils";
import {api} from "../../api";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import Options from "./options";

function VipBlock({pdnyatie, setPdnyatie}){
    const [myobjekt, setMyobjekt] = useState([])
    const [inputp, setInputp] = useState({vip: 0})
    const {podnyatie} = inputp
    const [hotel, sethotel] = useState({hotelId:0})
    const {hotelId} = hotel
    const { t } = useTranslation('common');
    useEffect(()=>{
        api
            .myobjekts()
            .then(response => {
                setMyobjekt(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])
    const pdnyatiein =(e)=>{
        setInputp({vip: e.target.value})
    }
    const hotelIdsel =(e)=>{
        sethotel({hotelId: e.target.value})
    }
    console.log(hotelId)
    const broneceng = async ()=>{
        setPdnyatie(false)
        const planetLength = +podnyatie
        let result = await confirm({
            title:`${t('Подтвердите VIP размещение')}`,
            message: `${t('VIP размещение на')} ${planetLength} ${declOfNum(planetLength, [
                `${t('день')}`,
                `${t('дня')}`,
                `${t('дней')}`,
            ])}, ${t('на сумму')} ${planetLength * 1500} RUB?`,
            confirmText: `${t('Подтвердить')}`,
            confirmColor: 'danger',
            cancelText: `${t('Отменить')}`,
            cancelColor: 'link text-muted',
        })

        if (result) {
            api
                .postBronenomer({hotelId:hotelId, vip:podnyatie})
                .then((response)=>{
                    toast.info(response.message)
                })
                .catch((err) =>{
                    toast.error(err.message)
                })
        }
    }
    return (
        <>
            <Modal show={pdnyatie} onHide={()=>setPdnyatie(false)}>
                <Modal.Header closeButton={()=>setPdnyatie(false)}>
                    <div className="">VIP Блок</div>
                </Modal.Header>
                <div className="">
                    <div className="check-reservation">
                        <Form onSubmit={(e)=>e.preventDefault()}
                              className="check-reservation__form" noValidate="novalidate">
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="premium" className="sr-only">Укажите количество дней:</label>
                                    <input type="number" name="premium"
                                           value={podnyatie}
                                           className="check-reservation__number form-control required"
                                           placeholder="Количество дней" onChange={pdnyatiein}/>
                                </div>
                                {myobjekt && (
                                    <div className="form-group">
                                        <select onChange={(e)=>hotelIdsel(e)}>
                                            <option value="" disabled selected hidden>Выберите отель</option>
                                            {myobjekt.map((i)=>{
                                                return (
                                                    <>
                                                        <Options key={i.id} i={i}/>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>
                                )}
                            </fieldset>
                            <div className="check-reservation__errors"/>
                            <button type="submit" className="button button-primary check-reservation__submit" onClick={()=>broneceng()}>
                                Выделить
                            </button>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default VipBlock