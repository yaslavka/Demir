import React, {useEffect, useState} from "react";
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
        field: 'nemenomer',
        headerName: 'Имя номера',
        type: 'text',
        width: 150,
        editable: true,
    },
    {
        field: 'spalnyemesta',
        headerName: 'Кроватей',
        width: 150,
        type: 'varchar(255)',
        editable: true,
    },
    {
        field: 'nomerinfo',
        headerName: 'Информация',
        type: 'text',
        width: 110,
        editable: true,
    },
    {
        field: 'komnat',
        headerName: 'Комнат',
        type: 'decimal(10,0)',
        width: 110,
        editable: true,
    },
    {
        field: 'kvadratura',
        headerName: 'Квадратура',
        type: 'decimal(10,0)',
        width: 110,
        editable: true,
    },
    {
        field: 'pansion',
        headerName: 'Адрес',
        type: 'boolean',
        width: 110,
        editable: true,
    },
    {
        field: 'tv',
        headerName: 'ТВ',
        type: 'boolean',
        width: 110,
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
        field: 'methodoplaty',
        headerName: 'Оплата картой',
        type: 'boolean',
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
        field: 'wifi',
        headerName: 'есть WI-FI',
        type: 'boolean',
        width: 100,
        editable: true,
    },
    {
        field: 'activ',
        headerName: 'Доступен',
        type: 'boolean',
        width: 100,
        editable: true,
    },
    {
        field: 'bal',
        headerName: 'Рейтинг',
        type: 'decimal(61,2)',
        width: 100,
        editable: false,
    },
    {
        field: 'hotelId',
        headerName: 'Какому отелю пренадлежит',
        type: 'bigint',
        width: 200,
        editable: true,
    },
];


function NomeraEdit() {
    const [myobjekt, setMyobjekt] = useState([])
    const [nomerarow, setNomerarow]= useState([])
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
            .userNomerarow()
            .then(response => {
                setNomerarow(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])
    const handleDelete = async (id) => {
        try {
            await api.rowHotel(id)
            setNomerarow(nomerarow.filter((item) => item.id !== id));
        } catch (err) {}
    };
    const handleDelet = async (row) => {
        try {
            await api.rowHotel(row)
            setNomerarow(nomerarow.filter((item) => item.id !== row));
        } catch (err) {}
    };
    const actionColumn = [
        {
            field: "action",
            headerName: "Дейстивия",
            width: 220,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/nomer/${params.row.id}`} style={{ textDecoration: "none" }}>
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
            {myobjekt && (
                <Row>
                    <Col xl={3} className="dashboard-nav">
                        <NavbarPrivateUser myobjekt={myobjekt}/>
                    </Col>
                    <Col xl={9}>
                        <div className="datatable">
                            <div className="datatableTitle">
                                <Link to={`/dashboard/nomera_add`} className="link">
                                    Добавить новый
                                </Link>
                            </div>
                            <DataGrid
                                className="datagrid"
                                rows={nomerarow}
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
export default NomeraEdit