import React, {useEffect, useState} from "react";
import './index.css'
import {Link, useParams} from 'react-router-dom';
import FileSaver from 'file-saver';
import {Pages} from "./TemplantePages";

function HeaderEdit({ nav1Service, templateNum, setTemplatePage, setDisplayDevice, fileName, setLinksfunc, setSaveClicked, toSave, saveClicked, fileData}){
    const [isClicked, setIsClicked] = useState(false);
    const onClicked = () => setIsClicked((condition) => !condition);
    const [allpages, setallpages] = useState(Pages)
    const [PageList, setPageList] = useState([]);
    const [subpages, setSubpages] = useState([]);
    const [showSidebar, setShowSidebar] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentTemp, setCurrentTemp] = useState([]);
    const [newPath, setNewPath] = useState([]);
    useEffect(()=>{
        setallpages({
            "pages": [
                {
                    "groupName": "Home",
                    "subpages": ["Home"]
                },
                {
                    "groupName": "About",
                    "subpages": ["About"]
                },
                {
                    "groupName": "Services",
                    "subpages": nav1Service
                },
                {
                    "groupName": "Contact",
                    "subpages": ["Contact"]
                },
            ],
        })
    },[nav1Service])
    useEffect(()=>{
        if (templateNum){
            setPageList(allpages.pages.map((item) => item.groupName))
            setCurrentTemp(templateNum)
            setNewPath(`/preview/template/${templateNum}`)
        }
        else if (templateNum === 0 || templateNum === undefined || templateNum === null) {
            setNewPath('/preview/new-template')
            setCurrentTemp("New-Template")
        }
    }, [templateNum, allpages.pages])
    const dropdownClicked = (e) => {
        setShowDropdown(states => !states)
        setShowSidebar(e.target.innerHTML)
        if (currentTemp === templateNum) {
            setSubpages(allpages.pages.filter((item, i) => item.groupName === e.target.innerHTML).map((item) => item.subpages.map(items => items))[0])
        }
    }
    const saveTemplate = () => {
        setLinksfunc(true);
        setSaveClicked(true);
        localStorage.setItem(currentTemp, JSON.stringify(toSave))
        setTimeout(() => {
            setLinksfunc(false);
            setSaveClicked(false);
        }, 1500);
        // console.log(fileData)
    }
    const exportCode = () => {
        // console.log("Sending Request")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                file_name: fileName,
                file_content: fileData
            })
        };
        fetch('/generate-file', requestOptions)
            .then(response => response.text())
            .then((fileText) => {
                let blob = new Blob([fileText], { type: "text/html;charset=utf-8" })
                FileSaver.saveAs(blob, fileName)
                // console.log(fileText, "header check file content")
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className={`flex justify-between items-center py-6 HeaderEdit_max-w-7xl__3PVpz HeaderEdit_maxHeadH__1grOm mx-auto px-16 bg-black fixed z-50 w-full top-0`}>
                <div className="w-96 ml-4">
                    <div className="flex justify-around items-center">
                        <div><Link to="/dashboard" rel='noopener noreferrer' className="bg-BL-600 w-12 h-12 flex justify-center items-center rounded-md"><i className="fas fa-home text-white text-xl"></i></Link></div>
                        <div style={{ width: `110px`, cursor: `pointer` }} onClick={onClicked}> {isClicked ? <h2 style={{ background: `red`, padding: `12px 30px`, borderRadius: `5px`, color: "white", fontWeight: "700" }}> Close </h2> : <h2 style={{ padding: `12px 30px`, borderRadius: `5px`, color: `white`, fontWeight: "700", background: `rgb(60,172,254)` }}> Pages </h2>} </div>
                        <div className="pagebar" style={isClicked ? { left: `0`, display: "block" } : { left: `-100%`, display: "none" }}>
                            <div className="flex flex-col mt-12 h-full w-full">
                                {PageList.map((item, i) =>
                                    <div key={i} className="w-full h-4/5">
                                        <button onClick={(e) => dropdownClicked(e)} style={{ width: "100px", padding: "0.7rem 0", borderRadius: `12px`, color: `white`, fontWeight: `600`, cursor: `pointer` }} className=" m-6 bg-BL-600">{item}</button>
                                        <ul className={(showDropdown && showSidebar === item) ? "flex flex-col justify-around items-start w-full" : "hidden"}>
                                            {subpages.map((items, index) => <li className="ml-11 w-full cursor-pointer" key={index} onClick={() => setTemplatePage(items)}>&gt;&nbsp;{items}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="relative w-32 flex justify-between">
                        <button className="rounded-full w-20 h-16 text-white" onClick={() => setDisplayDevice(true)}>
                            <i className={`fas fa-desktop text-2xl`}>
                            </i>
                        </button>
                        <button className="rounded-full w-20 h-16 text-white" onClick={() => setDisplayDevice(false)}>
                            <i className="fas fa-mobile-alt text-2xl"></i>
                        </button>
                    </div>
                </nav>
                <div className="flex items-center justify-between w-96">
                    <button className={`flex items-center px-2 py-3 w-28 justify-center pl-6 rounded-2xl text-white sideButton`}
                            onClick={() => {
                                saveTemplate();
                            }}
                    >
                        <h2> SAVE</h2>
                        <i className={saveClicked ? "ml-2 fas fa-check text-green-600" : " ml-2 fas fa-check text-black"}> </i>
                    </button>
                    <Link to={`${newPath}`} target='_blank' rel='noopener noreferrer' className={`sideButton flex items-center px-2 py-3 text-white w-28 justify-center rounded-2xl`}>
                        {/* <img src={previewIm} alt="Preview" className={`w-9 h-auto`} /> */}
                        <h2>PREVIEW</h2>
                    </Link>
                    <button className={`sideButton flex items-center px-2 py-3 text-white w-28 justify-center rounded-2xl`} onClick={() => exportCode()}>
                        <h2>EXPORT</h2>
                    </button>
                </div>
            </div>
        </>
    )
}
export default HeaderEdit