import React, {useEffect, useState} from "react";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Button, Col, Form, Row} from "react-bootstrap";
import NavbarPrivateUser from "../../../components/loyaut";
import {api} from "../../../api";
import {toast} from "react-toastify";
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import CustomizedHookno from "./no";
import CustomizedHook from "./Autucomlet";



function NomeraAddForm(){
    const [myobjekt, setMyobjekt] = useState([])
    const [glavnoephoto, setGlavnoephoto] = useState(null)
    const [filenameGlavnoe, setFilenameGlavnoe]= useState('Изображение не выбранно')
    const [albumsphoto, setAlbumsphoto] = useState([])

    useEffect(()=>{
        api
            .myobjekts()
            .then(response => {
                setMyobjekt(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        console.log(selectedFiles[0].name)
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setAlbumsphoto((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };
    function deleteHandler(image) {
        setAlbumsphoto(albumsphoto.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }
    function deleteHandlers() {
        setGlavnoephoto(null)
        setFilenameGlavnoe('Изображение не выбранно')
    }
    const onsubmitFormHotel =()=>{
        api.addHotel({coords:'coords'})
            .then(response => {
                toast.info(response.messages)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    }
    return (
        <>
            <NavbarHomPrivate/>
            {myobjekt && (
                <Row>
                    <Col xl={3} className="dashboard-nav">
                        <NavbarPrivateUser myobjekt={myobjekt}/>
                    </Col>
                    <Col>
                        <div style={{padding: 30}}>
                            <div style={{textAlign: "center", fontWeight: "bold", fontSize: 20}}>Добавте новый объект</div>
                        </div>
                        <Form onSubmit={(e)=>{e.preventDefault()}}>
                            <div className="form-addhotell">
                                <div className="form-addhotell-input">
                                    <input placeholder="Название Номера"/>
                                </div>
                                <div className="form-addhotell-input">
                                    <input placeholder="Тип номера"/>
                                </div>
                            </div>
                            <div className="form-addhotell">
                                <div className="form-addhotell-input">
                                    <input placeholder="Количество таких номеров"/>
                                </div>
                                <div className="form-addhotell-input">
                                    <input placeholder="Цена"/>
                                </div>
                            </div>
                            <div className="form-addhotell">
                                <div className="form-addhotell-input">
                                    <input placeholder="Спальных мест в номере"/>
                                </div>
                                <div className="form-addhotell-input">
                                    <input placeholder="цена с детьми"/>
                                </div>
                            </div>
                            <div className="form-addhotell">
                                <div className="form-addhotell-input">
                                    <input placeholder="Количество комнат"/>
                                </div>
                                <div className="form-addhotell-input">
                                    <input placeholder="Email Отеля"/>
                                </div>
                            </div>
                            <div className="form-addhotell">
                                <div className="form-addhotell-input">
                                    <input placeholder="Платежные реквизиты (БАНКОВСКАЯ КАРТА)"/>
                                </div>
                                <div className="form-addhotell-input">
                                    <input placeholder="Телефон по которому можно совершать оплату"/>
                                </div>
                            </div>
                            <div className="form-addhotell">
                               <CustomizedHookno/>
                                <CustomizedHook/>
                            </div>
                            <div className="form-addhotell-textarea">
                                <div className="textarea-input textarea-in">
                                    <textarea placeholder="Описание отеля" name="opisanie"/>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center", justifyContent: "center", marginBottom: 10}}>
                                <Button type="submit" onClick={()=>{onsubmitFormHotel()}}>
                                    Сохранить
                                </Button>
                            </div>
                            <div style={{textAlign: "center", fontSize: 20, fontWeight: 500, marginBottom: 10}}>
                                Сохраните данные перед продолжением
                            </div>
                            <div style={{padding: 30}}>
                                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <div>
                                        <div style={{marginBottom: 10}}>
                                            <p style={{color: '#696969', textAlign: "center"}}>Главное фото</p>
                                            <div className="upload-image-file" onClick={()=>document.querySelector(".input-upload-img").click()}>
                                                <input onChange={({target: {files}})=>{
                                                    files[0] && setFilenameGlavnoe(files[0].name)
                                                    if (files){
                                                        setGlavnoephoto(URL.createObjectURL(files[0]))
                                                    }
                                                }} hidden type="file" accept="image/*" className="input-upload-img"/>
                                                {glavnoephoto ?(
                                                   <>
                                                       <img src={glavnoephoto} alt={glavnoephoto} width={285} height={285} style={{borderRadius: 10}}/>

                                                   </>
                                                ):(
                                                    <>
                                                        <MdCloudUpload color="#1475cf" size={60}/>
                                                        <p style={{color: '#696969'}}>{filenameGlavnoe}</p>
                                                    </>
                                                )}
                                            </div>
                                            {glavnoephoto && (
                                                <section className="uploads-row">
                                                    <AiFillFileImage color="#1475cf"/>
                                                    <span>Изменить</span>
                                                    <MdDelete onClick={() => deleteHandlers()} style={{cursor: "pointer"}}/>
                                                </section>
                                            )}
                                        </div>
                                        <div style={{display:"flex", alignItems:"center", justifyContent: "center", marginBottom: 10}}>
                                            <Button type="submit" onClick={()=>{onsubmitFormHotel()}}>
                                                Сохранить
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center", fontSize: 20, fontWeight: 500, marginBottom: 10}}>
                                    Сохраните данные перед продолжением
                                </div>
                                <div style={{}}>
                                    {albumsphoto && (
                                        <Row style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                            {albumsphoto.map((imge, index)=>{
                                                return (
                                                    <Col lg={4}>
                                                        <div style={{display: "flex", alignItems: "center"}}>
                                                            <div>
                                                                <p style={{color: '#696969', textAlign: "center"}}>Создание альбома</p>
                                                                <div className="upload-image-file">
                                                                    <img src={imge} alt={''} width={285} height={285} style={{borderRadius: 10}}/>
                                                                </div>
                                                                <section className="uploads-row">
                                                                    <AiFillFileImage color="#1475cf"/>
                                                                    <span>Выбрано {index +1} фото</span>
                                                                    <MdDelete onClick={() => deleteHandler(imge)} style={{cursor: "pointer"}}/>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    )}
                                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <div>
                                            <p style={{color: '#696969', textAlign: "center"}}>Создание альбома</p>
                                            <div className="upload-image-file" onClick={()=>document.querySelector(".input-upload-imge").click()}>
                                                <input onChange={onSelectFile}  hidden type="file" accept="image/*" className="input-upload-imge" multiple/>
                                                <>
                                                    <MdCloudUpload color="#1475cf" size={60}/>
                                                    <p style={{color: '#696969'}}>Добавыить фото</p>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                                <Button type="submit">
                                    Сохранить
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            )}
        </>
    )
}
export default NomeraAddForm