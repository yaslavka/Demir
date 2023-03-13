import React, { useEffect, useState } from 'react'
import lz from "lzutf8";
import { useDrop } from 'react-dnd'
import {ItemTypes} from "../../utils";
import {assetObject} from "../../assetObject";
import './index.css'

const WhatsAppChat = () => {
    return (
        <>
            <a href="https://wa.me/2348100000000" className="fixed w-16 h-16 text-white text-center text-3xl bg-green-600 flex justify-center items-center rounded-full" style={{ right: "12%", bottom: "10%" }} target="_blank" rel="noopener noreferrer" ><i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </>
    )
}

function ContainerEdit({nav1Service, setNav1Services, nav2Service, setNav2Services, nav2Sector, setNav2Sector, templateNum, setFileName, setLinksfunc, overlayPresent, linksfunc, saveClicked, setToSave, setSaveClicked, setDisplayDevice, displayDevice, setFileData, templatePage, chatInclude}){
    const [updateChildren, setUpdateChildren] = useState([]);
    const [overSection, setOverSection] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [sectionKey, setSectionKey] = useState(null);
    const [htmlString, setHtmlString] = useState("");
    const [cssString, setCssString] = useState("");
    const [compressed, setCompressed] = useState("");
    const [curTemplate, setCurTemplate] = useState(null);
    const [fileName, setfilename] = useState(null);
    const [templateComponents, setTempComp] = useState({

    })
    const temp = templateNum
    console.log(temp)
    useEffect(()=>{
        let filename = "";
        let array = [];
        if (!temp) {
            setUpdateChildren([])
            setfilename("index.html")
            setCurTemplate("new template");
        }else if (temp){
            setUpdateChildren([])
            setfilename("index.html")
            setCurTemplate("new template");
        }
    }, [temp, templatePage, setfilename,])
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            let valueString = Object.values(item)[0];
            let Comp = assetObject[valueString]
            setUpdateChildren([...updateChildren, Comp])
        },
        collect: monitor => ({
            canDrop: !!monitor.canDrop()
        })
    })
    const getHTMLData = () => {

        let newDocString = document.getElementsByClassName("getInnerHTML")[0].innerHTML;
        let newDoc = new DOMParser().parseFromString(newDocString, 'text/html');
        let removed = newDoc.getElementsByClassName("toBeRemoved")
        while (removed.length > 0) {
            removed[0].parentNode.removeChild(removed[0]);
        }
        let editableFalse = newDoc.getElementsByClassName("mce-content-body")
        let i = 0
        while (i < editableFalse.length) {
            editableFalse[i].setAttribute("contenteditable", "false")
            i++
        }
        let vid = document.getElementsByTagName("video")[0]
        if (vid !== undefined) {
            let att = document.createAttribute("muted");
            att.value = "true";
            vid.setAttributeNode(att)
        }
        let htmlStrings = newDoc.getElementsByClassName("filterHTML")[0].innerHTML
        htmlStrings = htmlStrings.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        console.log(htmlStrings)
        return htmlStrings;
    }
    const getCSSData = () => {

        let cssStrings = "h"
        return cssStrings;
    }
    useEffect(()=>{
        setDisplayDevice(true);
        if (linksfunc) {
            setHtmlString(getHTMLData())
            setCssString(getCSSData())
            setCompressed(lz.encodeBase64(lz.compress(htmlString)))
        }
        setToSave({
            filename: fileName,
            templateID: curTemplate,
            templateData: compressed
        })
        setFileData({
            html: `${htmlString}`,
            css: `${cssString}`
        })
        setFileName(fileName)
    },[curTemplate, setToSave, saveClicked, setSaveClicked, setFileData, setDisplayDevice, fileName, setFileName, setLinksfunc, linksfunc, htmlString, cssString, compressed])

    const moveUp = (indexC) => {
        let newArray = [...updateChildren];
        if (indexC === 0) {
            setUpdateChildren([...newArray])
        }
        else {
            let currentCom = newArray[indexC];
            newArray[indexC] = newArray[indexC - 1];
            newArray[indexC - 1] = currentCom;
            setUpdateChildren([...newArray])
        }

    }
    const moveDown = (indexC) => {
        let newArray = [...updateChildren];
        if (indexC === (updateChildren.length - 1)) {
            setUpdateChildren([...newArray])
        }
        else {
            let currentCom = newArray[indexC];
            newArray[indexC] = newArray[indexC + 1];
            newArray[indexC + 1] = currentCom;
            setUpdateChildren([...newArray])
        }


    }
    const removeComponent = (indexC) => {
        let newArray = [...updateChildren];
        newArray.splice(indexC, 1);
        setUpdateChildren([...newArray])
    }
    return (
        <>
            <section className={`mt-24 editWrap mx-auto`} id='editorScreen' style={displayDevice ? { maxWidth: "80vw" } : { maxWidth: "500px" }}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`dot mx-1`}></div>
                    <div className={`dot mx-1`}></div>
                    <div className={`dot mx-1`}></div>
                </div>
                <div className={`editing mx-auto overflow-y-auto overflow-x-hidden`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)` } : null}>
                    <div className="getInnerHTML">
                        <section className="filterHTML">
                            {updateChildren.map((ItemX, index)=>{
                                return (
                                    <>
                                        <section key={index}
                                                 onMouseEnter={() => {
                                                     if (((temp === undefined || temp === null || temp === 0 || temp) && index !== 0) || (temp)) {
                                                         setOverSection(true);
                                                         setSectionKey(index)
                                                     }
                                                 }}
                                                 onMouseLeave={() => {
                                                     setOverSection(false);
                                                     setShowPopUp(false);
                                                 }}
                                                 className="relative"
                                        >
                                            <ItemX setTempComp={setTempComp} templateComponents={templateComponents} setNav1Services={setNav1Services} nav2Service={nav2Service} setNav2Services={setNav2Services} nav2Sector={nav2Sector} setNav2Sector={setNav2Sector} nav1Service={nav1Service} displayDevice={displayDevice} linksfunc={linksfunc} overSection={(overSection && sectionKey === index) ? true : false} showPopup={showPopUp}/>
                                            <div className="toBeRemoved" style={displayDevice ? null : { display: "none" }}>
                                                <div className="flex w-52 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "4rem", zIndex: "9999999" } : { display: "none" }}>
                                                    <button className="p-3 bg-BL-600" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => {
                                                        setShowPopUp((popup) => !popup);
                                                    }}><i className="far fa-images text-white"></i></button>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )
                            })}
                            {chatInclude ? <WhatsAppChat /> : null}
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContainerEdit