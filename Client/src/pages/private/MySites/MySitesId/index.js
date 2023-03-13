import React from "react";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";



function MySiresId({item}) {
    return (
        <>
            <Col lg={4} className={`bg-white rounded-2xl  tempWrap page-projects--new connects-points__email`} style={{marginInline: 21, marginBottom: 20}} id={item.id}>
                <Link to={`/edit/template/${item.id}`} className="sites-mages-linnk">
                    <div className="flex py-2 ml-1">
                        <div className={`dot mx-1`}></div>
                        <div className={`dot mx-1`}></div>
                        <div className={`dot mx-1`}></div>
                    </div>
                    <div className="sites-mages">
                        <img src={item.images} alt={item.images}/>
                    </div>
                    <div className="py-6 text-center">
                        <h3>{item.namrsites}</h3>
                    </div>
                </Link>
            </Col>
        </>
    )
}
export default MySiresId