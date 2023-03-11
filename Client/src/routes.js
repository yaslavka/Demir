import r from './constants/routes.constants'
import Home from "./pages/public/Home";
import HotelId from "./pages/public/Home/HomeComponents/HotelId";
import SearchHotel from "./pages/public/Home/HomeComponents/SearchHotel";
import NomerId from "./pages/public/Home/HomeComponents/NomerId";
import PrivateHome from "./pages/private/Home";
import PrivateSearchHotel from "./pages/private/Home/HomeComponents/SearchHotel";
import PrivateHotelId from "./pages/private/Home/HomeComponents/HotelId";
import PrivateNomerId from "./pages/private/Home/HomeComponents/NomerId";
import Dashboard from "./pages/private/Dashboard";
import HoteladdForm from "./pages/private/HoteladdForm";

export const publicRouteConfig =[
    {
        id: '1a',
        path: r.root,
        component: Home,
        exact: true,
    },
    {
        id: '2a',
        path: r.searchhotelhome,
        component: SearchHotel,
        exact: true,
    },
    {
        id: '3a',
        path: r.region,
        component: SearchHotel,
        exact: true,
    },
    {
        id: '4a',
        path: r.hotelHom,
        component: HotelId,
        exact: true,
    },
    {
        id: '5a',
        path: r.nomerid,
        component: NomerId,
        exact: true,
    },
]

export const privateRouteConfig=[
    {
        id: '6a',
        path: r.user,
        component: PrivateHome,
        exact: true,
    },
    {
        id: '7a',
        path: r.searchhotelhome,
        component: PrivateSearchHotel,
        exact: true,
    },
    {
        id: '8a',
        path: r.region,
        component: PrivateSearchHotel,
        exact: true,
    },
    {
        id: '9a',
        path: r.hotelHom,
        component: PrivateHotelId,
        exact: true,
    },
    {
        id: '10a',
        path: r.nomerid,
        component: PrivateNomerId,
        exact: true,
    },
    {
        id: '11a',
        path: r.dashboard,
        component: Dashboard,
        exact: true,
    },
    {
        id: '12a',
        path: r.hoteladd,
        component: HoteladdForm,
        exact: true,
    },
]