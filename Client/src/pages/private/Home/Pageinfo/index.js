import React from "react";
import hotel from '../../../../assets/hotel/50286032_thumb.jpg'
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const Hotel =[
    {
    id: 1,
    name:'Москва',
    mages: hotel
    },
    {
        id: 1,
        name:'Москва',
        mages: hotel
    },
    {
        id: 1,
        name:'краснодар',
        mages: hotel
    },
    {
        id: 1,
        name:'Нижний Новгород',
        mages: hotel
    },
    {
        id: 1,
        name:'Москва',
        mages: hotel
    },
    {
        id: 1,
        name:'Москва',
        mages: hotel
    },

]

function Pageinfo(){
    return(
        <>
            <div className="container mb-120">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 ">
                    {Hotel.map(({id, name, mages})=>(
                        <>
                            <Link key={id}>
                                <div className="item relative group  before:content-[''] before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20" key={id}>
                                  <div style={{position: "absolute", width: "100%"}}>
                                      <div className="flex-row flex justify-between" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                          <div className="HashLink">
                                              <h1 className="text-white" style={{zIndex: 0}}>272 Отеля</h1>
                                          </div>
                                          <div style={{alignItems: "center"}} className="flex-row flex">
                                              <div style={{}} className="HashLinks">
                                                  <svg fill="#8000ff"
                                                       width={15} height={15}
                                                       focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                  >
                                                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                                                      <circle cx="12" cy="9" r="2.5"/>
                                                  </svg>
                                              </div>
                                              <h1 className="text-white" style={{fontSize: 14, marginRight: 15}}>Карта</h1>
                                          </div>
                                      </div>
                                  </div>
                                    <img src={mages} alt={mages} className="rounded-3" style={{width: 400, height: 304}}/>
                                    <div className="w-auto">
                                        <svg className="absolute-centers primary-btns" width="50" height="7" viewBox="0 0 50 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="-0.00109863" y1="3.25" x2="49.9989" y2="3.25" stroke="#C394E8"  strokeWidth="6"/>
                                        </svg>
                                        <div className=" primary-btns absolute-centers  " style={{zIndex: 1, color: "#fff"}}>{name}</div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
                <div style={{textAlignLast: "center", marginTop: 50}}>
                    <Button color="primary" className="py-2 px-5 box-button">
                        все города
                    </Button>
                </div>
            </div>
        </>
    )
}
export default Pageinfo
