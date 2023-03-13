import React, {useEffect, useMemo, useState} from "react";
import NavbarHomPrivate from "../../../components/HeaderPrivate";
import {Col, Row} from "react-bootstrap";
import NavbarPrivateUser from "../../../components/loyaut";
import {useSelector} from "react-redux";
import {api} from "../../../api";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import {Avatar} from "@mui/material";

function UserForAdmin() {
    const [userData, setUserData] = useState([])
    const userInfo = useSelector(state => state.app.user);
    useEffect(()=>{
        api.getAllUsers()
            .then(response =>{
                setUserData(response)
            })
            .catch(err =>{
                toast.error(err.message)
            })
    },[])

    const columns = useMemo(()=>[
        {
            field: 'avatar',
            headerName: 'Аватар',
            type: 'varchar(255)',
            width: 60,
            renderCell: params => <Avatar src={`${process.env.REACT_APP_BASE_URL}/user/avatar/${params.row.avatar}`}/>,
            editable: true,
        },
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'Логин',
            type: 'varchar(255)',
            width: 150,
            editable: true,
        },
        {
            field: 'first_name',
            headerName: 'Имя',
            width: 150,
            type: 'varchar(255)',
            editable: true,
        },
        {
            field: 'last_name',
            headerName: 'Фамилия',
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
            field: 'balance',
            headerName: 'Баланс',
            type: 'int',
            width: 110,
            editable: true,
        },
        {
            field: 'rolleadmin',
            headerName: 'Админ',
            type: 'boolean',
            width: 110,
            editable: true,
        },
        {
            field: 'rolleManejer',
            headerName: 'Менеджер',
            type: 'boolean',
            width: 110,
            editable: true,
        },
        {
            field: 'referal_id',
            headerName: 'ID Пригласителя',
            type: 'bigint',
            width: 110,
            editable: false,
        },
        {
            field: 'gorodaId',
            headerName: 'ID Города',
            type: 'bigint',
            width: 110,
            editable: true,
        },
    ],[])


    const handleDelete = async (id) => {
        try {
            await api.deleteHotel(id)
            setUserData(userData.filter((item) => item.id !== id));
        } catch (err) {}
    };
    const handleDelet = async (row) => {
        try {
            await api.rowHotel(row)
            setUserData(userData.filter((item) => item.id !== row));
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
            {userInfo && (
                <Row>
                    <Col xl={3} className="dashboard-nav">
                        <NavbarPrivateUser/>
                    </Col>
                    <Col xl={9}>
                        <div className="datatable">
                            <div style={{textAlign: "center", fontWeight: "bold", fontSize: 30}}>
                                Управление пользователями
                            </div>
                            <div className="datatableTitle">
                                <Link to={`/dashboard/hotel_add`} className="link">
                                    Добавить новый
                                </Link>
                            </div>
                            <DataGrid
                                className="datagrid"
                                rows={userData}
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
export default UserForAdmin