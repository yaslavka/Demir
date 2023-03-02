import React from "react";
import {Link} from "react-router-dom";

const Hotelli =[
    {
        id: 1,
        first: 'лучшие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },
    {
        id: 1,
        first: 'недорогие',
        link:'/s'

    },

]


function Hotel(){
    return(
        <>
            <div className="hotels-quick-links clearfix">
                <span className="light"/>
                <nav>
                    <ul className="hotel-quick-links__row">
                        {Hotelli.map(({id, first, link})=>(
                            <>
                                <li key={id}>
                                    <Link tey={id} to={link} className="hotels-quick-link">
                                        {first}
                                    </Link>
                                </li>
                            </>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Hotel