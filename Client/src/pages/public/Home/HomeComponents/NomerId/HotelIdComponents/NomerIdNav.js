import React from "react";

function NomerIdNav({nomerId}){
    return (
        <>
            <div id="breadcrumbs">
                <nav>
                    <ul className="breadcrumbs_list" itemScope="" itemType="https://schema.org/BreadcrumbList">

                        <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem"
                            className="breadcrumb__item">
                            <a itemProp="item"
                               className="breadcrumb__link">
                        <span itemProp="name" className="breadcrumb__text">
                            <span className="hidden">➤ </span>
                            {nomerId?.hotel?.typehotel}                       </span>
                            </a>
                            <meta itemProp="position" content="1"/>
                        </li>
                        <li className="breadcrumb__separator"><i className="fa fa-angle-right"> </i>
                        </li>
                        <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem"
                            className="breadcrumb__item">
                            <a itemProp="item"
                               className="breadcrumb__link">
                        <span itemProp="name" className="breadcrumb__text">
                            <span className="hidden">➤ </span>
                            Россия                        </span>
                            </a>
                            <meta itemProp="position" content="2"/>
                        </li>
                        <li className="breadcrumb__separator">
                            <i className="fa fa-angle-right"> </i>
                        </li>
                        <li itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem"
                            className="breadcrumb__item breadcrumb__item_active">
                            <a itemProp="item"

                               className="breadcrumb__link">
                        <span itemProp="name" className="breadcrumb__text">
                            <span className="hidden">➤ </span>
                            {nomerId?.hotel?.address}                       </span>
                            </a>
                            <meta itemProp="position" content="3"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default NomerIdNav