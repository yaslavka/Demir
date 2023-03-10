import React, {useEffect, useState} from "react";
import {api} from "../../../../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import NomerIdNav from "./HotelIdComponents/NomerIdNav";
import {Button, Col, Form, Row} from "react-bootstrap";
import NavabarNomberIdHome from "../../../../../components/NavabarNomberIdHome";
import NomerIdShapka from "./HotelIdComponents/NomerIdShapka";
import Linksy from "../HotelId/HotelIdComponents/Linksy";
import NomerIdAlbums from "./HotelIdComponents/NomerIdAlbums";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './HotelIdComponents/index.css'
import NavbarHomPrivate from "../../../../../components/HeaderPrivate";

function PrivateNomerId(){
    const [nomerId, setNomerId] = useState([])
    const { id } = useParams()
    const [raspolojenie, setRaspolojenie] = React.useState(0);
    const [osluga, setOsluga] = React.useState(0);
    const [cena, setCena] = React.useState(0);
    const [chistota, setChistota] = React.useState(0);
    const [pitanie, setPitanie] = React.useState(0);
    const [son, setSon] = React.useState(0);
    const [otzyvinput, setOtzyvinput] =useState({poloj:'', otrec:''})
    const {poloj, otrec} =otzyvinput
    useEffect(()=>{
        api.nomeridinfo(id)
            .then(response =>{
                setNomerId(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])

    const handleChangeraspolojenie = (event, newValue) => {
        setRaspolojenie(newValue);
    };
    const handleChangeosluga = (event, newValue) => {
        setOsluga(newValue);
    };
    const handleChangecena = (event, newValue) => {
        setCena(newValue);
    };
    const handleChangechistota = (event, newValue) => {
        setChistota(newValue);
    };
    const handleChangepitanie = (event, newValue) => {
        setPitanie(newValue);
    };
    const handleChangeson = (event, newValue) => {
        setSon(newValue);
    };
    const handleChangeotzyv = (event) => {
        setOtzyvinput(prevState => ({...prevState, poloj: event.target.value}));
    };
    const handleChangeotzyvs = (event) => {
        setOtzyvinput(prevState => ({...prevState, otrec: event.target.value}));
    };
    const Onsubmit = (e) =>{
        e.preventDefault();
        api.postOtzyv({id: id, otrec: otrec,poloj: poloj, pitanie:pitanie,chistota:chistota, son:son,cena:cena, osluga:osluga, raspolojenie:raspolojenie})
            .then((response) =>{
                toast.info(response.messages)
            })
            .catch((err)=>{
                toast.error(err.message)
            })
    }
    return (
        <>
            {nomerId && (
                <>
                    <NavbarHomPrivate/>
                    <div/>
                    <NomerIdNav nomerId={nomerId}/>
                    <div id="main">
                        <Row>
                            <Col xl={3} className="col-otels">
                                <NavabarNomberIdHome nomerId={nomerId}/>
                            </Col>
                            <Col xl={9} className="col-ro">
                                <NomerIdShapka nomerId={nomerId}/>
                                <Linksy/>
                                <NomerIdAlbums nomerId={nomerId} />
                                <div style={{marginBottom: 30}}/>
                                <div style={{fontWeight: 800, fontSize: 30, color: '#6926ac'}}>
                                    ???????????????? ??????????
                                </div>
                                <div style={{marginBottom: 30}}/>
                                <div style={{fontWeight: 500, fontSize: 15, color: '#090809'}}>
                                    ?????? ??? 1 | ???????????? ???? ????????????????????
                                </div>
                                <div style={{marginBottom: 30}}/>
                                <Form onSubmit={Onsubmit}>
                                    <Row>
                                        <Col xl={6}>
                                            <div className="nomerid-stranica-otzyv">
                                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                                    <div>
                                                        ????????????????????????
                                                    </div>
                                                    <div>
                                                        {nomerId.bal}
                                                    </div>
                                                </div>
                                                <Box sx={{ width: 410 }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={raspolojenie}
                                                        max={10}
                                                        onChange={handleChangeraspolojenie}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Box>
                                            </div>
                                            <div className="nomerid-stranica-otzyv">
                                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                                    <div>
                                                        ????????????????????????
                                                    </div>
                                                    <div>
                                                        {nomerId.bal}
                                                    </div>
                                                </div>
                                                <Box sx={{ width: 410 }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={osluga}
                                                        max={10}
                                                        onChange={handleChangeosluga}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Box>
                                            </div>
                                            <div className="nomerid-stranica-otzyv">
                                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                                    <div>
                                                        ????????/????????????????
                                                    </div>
                                                    <div>
                                                        {nomerId.bal}
                                                    </div>
                                                </div>
                                                <Box sx={{ width: 410 }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={cena}
                                                        max={10}
                                                        onChange={handleChangecena}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Box>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="nomerid-stranica-otzyv">
                                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                                    <div>
                                                        ??????????????
                                                    </div>
                                                    <div>
                                                        {nomerId.bal}
                                                    </div>
                                                </div>
                                                <Box sx={{ width: 410 }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={chistota}
                                                        max={10}
                                                        onChange={handleChangechistota}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Box>
                                            </div>
                                            <div className="nomerid-stranica-otzyv">
                                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                                    <div>
                                                        ??????????????
                                                    </div>
                                                    <div>
                                                        {nomerId.bal}
                                                    </div>
                                                </div>
                                                <Box sx={{ width: 410 }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={pitanie}
                                                        max={10}
                                                        onChange={handleChangepitanie}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Box>
                                            </div>
                                            <div className="nomerid-stranica-otzyv">
                                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                                    <div>
                                                        ???????????????? ??????
                                                    </div>
                                                    <div>
                                                        {nomerId.bal}
                                                    </div>
                                                </div>
                                                <Box sx={{ width: 410 }}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={son}
                                                        max={10}
                                                        onChange={handleChangeson}
                                                        valueLabelDisplay="auto"
                                                    />
                                                </Box>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div style={{marginBottom: 30}}/>
                                    <div style={{fontWeight: 500, fontSize: 15, color: '#090809'}}>
                                        ?????? ??? 2 | ?????????????? ???????? ?????????????????????? ?????????? ???????????????????? ?? ???????????? ????????????
                                    </div>
                                    <div style={{marginBottom: 30}}/>
                                    <div className="textarea-input">
                                        <textarea placeholder="?????????????????????????? ??????????" name="poloj" value={poloj} onChange={handleChangeotzyv}/>
                                    </div>
                                    <div style={{marginBottom: 30}}/>
                                    <div className="textarea-input">
                                        <textarea placeholder="?????????????????????????? ??????????" name="otrec" value={otrec} onChange={handleChangeotzyvs}/>
                                    </div>
                                    <div style={{marginBottom: 15}}/>
                                    <Button color="primary" type="submit">
                                        ?????????????????? ??????????
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </>
            )}
        </>
    )
}
export default PrivateNomerId