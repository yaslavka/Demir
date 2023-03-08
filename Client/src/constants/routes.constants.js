const r = Object.freeze({
    root: '/',
    searchhotelhome: '/search_hotel_home',
    region: '/region/:id',
    hotelHom: '/hotel_hom/:id',
    nomerid: '/nomer/:id',
    //Private routes
    user: '/home',
    dashboard: '/dashboard',
    //konstruktor router
    edit: '/edit/template/:id',
    preview:'/preview/template:/id',
    newtemplate: '/edit/new/template/:id',
    previewnew:'/preview/new/template:/id',

})
export default r
