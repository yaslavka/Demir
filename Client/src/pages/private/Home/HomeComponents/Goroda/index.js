import React, {useEffect, useState} from "react";
import {api} from "../../../../../api";
import {Button, Row} from "react-bootstrap";
import Goro from "./gorod";

function Goroda(){
    const [gorod, setGorod] = useState(null)
    useEffect(()=>{
        api
            .gorod()
            .then(response => {
               setGorod(response)
            })
            .catch(error=>{
                setGorod(error)
        })
    },[])
    return (
        <>

            <div className="gorod-container">
                <Row className="gorod-row-images">
                    <h1 style={{textAlign: "center", color:'#6949C6'}}>
                        ЗАГОЛОВОК
                    </h1>
                    {gorod && (
                        <>
                            {gorod.map((item)=>(
                                <Goro item={item} key={item.id}/>
                            ))}
                        </>
                    )}
                    <div style={{textAlignLast: "center", marginTop: 50}}>
                        <Button color="primary" className="py-2 px-5 box-button" style={{borderWidth: 2, borderColor:'#B8D8ED', borderRadius: 5}} role={"link"} href={'/oll_city'}>
                            все города
                        </Button>
                    </div>
                </Row>
            </div>
        </>
    )
}
export default Goroda