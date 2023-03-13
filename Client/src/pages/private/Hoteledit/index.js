import React, {useEffect, useState} from "react";
import './index.scss'
import {api} from "../../../api";
import {toast} from "react-toastify";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Col, Row} from "react-bootstrap";
import NavbarPrivateUser from "../../../components/loyaut";
import {Link} from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'nemeHotel',
        headerName: 'Имя отеля',
        type: 'text',
        width: 150,
        editable: true,
    },
    {
        field: 'wifi',
        headerName: 'Есть wifi',
        width: 150,
        type: 'boolean',
        editable: true,
    },
    {
        field: 'zavtrak',
        headerName: 'Завтрак',
        type: 'boolean',
        width: 110,
        editable: true,
    },
    {
        field: 'basein',
        headerName: 'Басейн',
        type: 'boolean',
        width: 110,
        editable: true,
    },
    {
        field: 'skidka',
        headerName: 'Скидка',
        type: 'decimal(10,0)',
        width: 110,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Адрес',
        type: 'varchar(255)',
        width: 110,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        type: 'varchar(255)',
        width: 110,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'email',
        type: 'varchar(255)',
        width: 110,
        editable: true,
    },
    {
        field: 'bal',
        headerName: 'Оценка',
        type: 'decimal(61,2)',
        width: 110,
        editable: false,
    },
    {
        field: 'price',
        headerName: 'Цена',
        type: 'decimal(61,2)',
        width: 110,
        editable: true,
    },
    {
        field: 'kolicestvoNomerov',
        headerName: 'Количество номеров',
        type: 'decimal(10,0)',
        width: 110,
        editable: true,
    },
    {
        field: 'rating',
        headerName: 'Рейтинг',
        type: 'decimal(61,2)',
        width: 110,
        editable: false,
    },
    {
        field: 'distanceto',
        headerName: 'Дистанция до пляжа',
        type: 'decimal(61,2)',
        width: 110,
        editable: true,
    },
    {
        field: 'distancecenter',
        headerName: 'Дистанция до центра',
        type: 'decimal(61,2)',
        width: 110,
        editable: true,
    },
    {
        field: 'distancevokzal',
        headerName: 'Дистанция до вокзала',
        type: 'decimal(61,2)',
        width: 110,
        editable: true,
    },
    {
        field: 'typehotel',
        headerName: 'Тип',
        type: 'varchar(255)',
        width: 110,
        editable: true,
    },
    {
        field: 'oposanieHotel',
        headerName: 'Описание отеля',
        type: 'text',
        width: 110,
        editable: true,
    },
];


function HotelEdit() {
    const [myobjekt, setMyobjekt] = useState([])
    const [myBroneobjekt, setMyBroneobjekt] = useState([])
    //const [selectedCellParams, setSelectedCellParams] = useState(null);
    //const [cellModesModel, setCellModesModel] = useState({});


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
    useEffect(()=>{
        api
            .myBroneObjekts()
            .then(response => {
                setMyBroneobjekt(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])

    const handleDelete = async (id) => {
        try {
            await api.deleteHotel(id)
            setMyobjekt(myobjekt.filter((item) => item.id !== id));
        } catch (err) {}
    };
    const handleDelet = async (row) => {
        try {
            await api.rowHotel(row)
            setMyobjekt(myobjekt.filter((item) => item.id !== row));
        } catch (err) {}
    };
    const actionColumn = [
        {
            field: "action",
            headerName: "Дейстивия",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/hotel_hom/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Обзор</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelet(params.row)}
                        >
                            Сохранить
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Удалить
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <>
            <NavbarHomPrivate/>
            {myobjekt && myBroneobjekt && (
                <Row>
                    <Col xl={3} className="dashboard-nav">
                        <NavbarPrivateUser myobjekt={myobjekt} myBroneobjekt={myBroneobjekt}/>
                    </Col>
                    <Col xl={9}>
                        <div className="datatable">
                            <div className="datatableTitle">
                                <Link to={`/dashboard/hotel_add`} className="link">
                                    Добавить новый
                                </Link>
                            </div>
                            <DataGrid
                                className="datagrid"
                                rows={myobjekt}
                                columns={columns.concat(actionColumn)}
                                pageSize={9}
                                rowsPerPageOptions={[9]}
                                checkboxSelection
                                getRowId={(row) => row.id}
                            />
                        </div>
                    </Col>
                </Row>
            )}

        </>
    )
}
export default HotelEdit