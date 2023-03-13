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
        field: 'status1',
        headerName: 'В ожидании',
        type: 'boolean',
        width: 150,
        editable: true,
    },
    {
        field: 'status2',
        headerName: 'На рассмотрении',
        width: 150,
        type: 'boolean',
        editable: true,
    },
    {
        field: 'status3',
        headerName: 'Ожидает оплаты',
        type: 'boolean',
        width: 110,
        editable: true,
    },
    {
        field: 'status4',
        headerName: 'Оплачен',
        type: 'boolean',
        width: 110,
        editable: true,
    },
    {
        field: 'datestart',
        headerName: 'Заезд',
        type: 'datetime',
        width: 110,
        editable: true,
    },
    {
        field: 'dateend',
        headerName: 'Отъезд',
        type: 'datetime',
        width: 110,
        editable: true,
    },
    {
        field: 'summ',
        headerName: 'Сумма',
        type: 'decimal(61,2)',
        width: 110,
        editable: true,
    },
    {
        field: 'pioplesumm',
        headerName: 'Взрослых',
        type: 'decimal(10,0)',
        width: 110,
        editable: true,
    },
    {
        field: 'children',
        headerName: 'Детей',
        type: 'decimal(10,0)',
        width: 110,
        editable: false,
    },
    {
        field: 'hotelId',
        headerName: 'ID Отеля',
        type: 'bigint',
        width: 110,
        editable: true,
    },
    {
        field: 'userId',
        headerName: 'ID Пользователя',
        type: 'bigint',
        width: 110,
        editable: false,
    },
    {
        field: 'nomeraId',
        headerName: 'ID Номера',
        type: 'bigint',
        width: 110,
        editable: false,
    },
];


function MyBrone() {
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
                                rows={myBroneobjekt}
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
export default MyBrone