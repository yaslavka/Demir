import r from './constants/routes.constants'
import Home from "./pages/public/Home";
import PrivatHome from "./pages/private/Home";
import Region from "./pages/private/Region";
import HotelId from "./pages/private/HotelId";

export const publicRouteConfig =[
    {
        id: '0',
        path: r.root,
        component: Home,
        exact: true,
    },
]

export const privateRouteConfig=[
    {
        id: '0',
        path: r.root,
        component: PrivatHome,
        exact: true,
    },
    {
        id: '1',
        path: r.dashboard,
        component: Region,
        exact: true,
    },
    {
        id: '2',
        path: r.region,
        component: Region,
        exact: true,
    },
    {
        id: '3',
        path: [r.hotel],
        component: HotelId,
        exact: true,
    },
]