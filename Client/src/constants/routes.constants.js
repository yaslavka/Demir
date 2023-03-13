const r = Object.freeze({
    root: '/',
    searchhotelhome: '/search_hotel_home',
    region: '/region/:id',
    hotelHom: '/hotel_hom/:id',
    nomerid: '/nomer/:id',
    //Private routes
    user: '/home',
    dashboard: '/dashboard',
    hoteladd: '/dashboard/hotel_add',
    hoteledit: '/dashboard/hotel',
    nomeraedit: '/dashboard/nomera',
    nomeraadd: '/dashboard/nomera_add',
    mybrone: '/dashboard/my_brone',
    mysites: '/dashboard/my_sites',
    otzyvy: '/dashboard/otzyvy',
    allUser: '/dashboard/users',
    message: '/message',
    messages: '/message/:id',
    //konstruktor router
    edit: '/edit/template/:id',
    preview:'/preview/template:/id',
    newtemplate: '/edit/new-template',
    previewnew:'/preview/edit/new-template',

})
export default r
