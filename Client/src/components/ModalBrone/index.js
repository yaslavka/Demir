import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './index.css'

function ModalBrone({active, setActive}){
    return (
        <>
            <Modal show={active} onHide={()=>setActive(false)}>
                <Modal.Header closeButton={()=>setActive(false)}>
                    <div className="">Проверка брони</div>
                </Modal.Header>
                <div className="">
                    <div className="check-reservation">
                        <form action="https://secure.101hotels.com/booking/information"
                              className="check-reservation__form" noValidate="novalidate">
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="number" className="sr-only">Номер брони:</label>
                                    <input type="text" name="number"
                                           className="check-reservation__number form-control required"
                                           placeholder="Номер брони"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pincode" className="sr-only">ПИН-код:</label>
                                    <input type="text" name="pincode"
                                           className="check-reservation__pincode form-control required"
                                           placeholder="ПИН-код" autoComplete="off"/>
                                </div>
                            </fieldset>
                            <div className="check-reservation__errors"/>
                            <button type="submit"
                                    className="button button-primary check-reservation__submit">Проверить бронь
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default ModalBrone