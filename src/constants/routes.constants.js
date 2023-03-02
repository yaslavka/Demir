const r = Object.freeze({
    root: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
    //Private routes
    region: '/region/:id',
    dashboard: '/dashboard',
    hotel: '/hotel/:id',
    //konstruktor router
    edit: '/edit/template/:id',
    preview:'/preview/template:/id',
    newtemplate: '/edit/new/template/:id',
    previewnew:'/preview/new/template:/id',

})
export default r
