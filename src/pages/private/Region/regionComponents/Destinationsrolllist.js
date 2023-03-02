import React from "react";
import {Link} from "react-router-dom";

const Destinationsroll =[
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
    {
        id:1,
        name:'Сортавальский район',
        kolichestvo:'(43 базы отдыха)'
    },
]

function Destinationsrolllist(){
    return (
        <>
            <div className="destinations-roll-list">
                <div className="heading ">
                    Популярные места загородного отдыха Карелии
                </div>
                <ul className="list list-column-3 unstyled clearfix">
                    {
                        Destinationsroll.map(({id,name, kolichestvo})=>(
                            <>
                                <li className="item" key={id}>
                                    <span className="item-inner">
                                        <Link to={'#'}>
                                            {name}
                                        </Link>
                                        <span className="number" data-hotels-num="(43 базы отдыха)">{kolichestvo}</span>
                                    </span>
                                </li>
                            </>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default Destinationsrolllist