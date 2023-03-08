import React from "react";
import d from '../../../../../assets/hotel/123.png'
import c from '../../../../../assets/hotel/456.png'

function Advansages(){
    return (
        <>
            <div className="advansages-pages">
                <div className="advansages-pages-title">
                    6 ФАКТОВ О НАС
                </div>
                <div className="advansages-pages-sub-title">
                    ПРЕИМУЩЕСТВА БРОНИРОВАНИЯ У НАС
                </div>
                <div className="advansages-pages-images">
                    <img src={d} alt={d}/>
                </div>
                <div className="advansages-pages-images-text">
                    <div>
                        <div>
                            Текст1
                        </div>
                        <div>
                            Текст2
                        </div>
                    </div>
                    <div className="advansages-pages-images-text-r">
                        <div>
                            Текст3
                        </div>
                        <div>
                            Текст4
                        </div>
                    </div>
                    <div>
                        <div>
                            Текст5
                        </div>
                        <div>
                            Текст6
                        </div>
                    </div>
                </div>
                <div className="advansages-pages-images">
                    <img src={c} alt={d}/>
                </div>
                <div className="advansages-pages-images-text">
                    <div>
                        <div>
                            Текст1
                        </div>
                        <div>
                            Текст2
                        </div>
                    </div>
                    <div className="advansages-pages-images-text-r">
                        <div>
                            Текст3
                        </div>
                        <div>
                            Текст4
                        </div>
                    </div>
                    <div>
                        <div>
                            Текст5
                        </div>
                        <div>
                            Текст6
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Advansages