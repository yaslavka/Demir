require("dotenv").config();
require("dotenv").config();
//const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const sequelize = require("./db");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const multer = require("multer");
const GorodController = require('./src/Controllers/GorodControllers/index')
const RecomendController = require('./src/Controllers/RecomendController/index')
const ActionController = require('./src/Controllers/ActionControllers/index')
const UserController =require('./src/Controllers/UserController/index')
const SearchController = require('./src/Controllers/SearchController/index')
const HotelIdController = require('./src/Controllers/HotelIdController/index')
const NomerIdController = require('./src/Controllers/NomerIdController/index')
const BroneController = require('./src/Controllers/BroneController/index')
// const https = require("https");
// const privateKey = fs.readFileSync(
//     "/etc/letsencrypt/live/6551eb3.online-server.cloud/privkey.pem",
//     "utf8"
// );
// const certificate = fs.readFileSync(
//     "/etc/letsencrypt/live/6551eb3.online-server.cloud/cert.pem",
//     "utf8"
// );
// const ca = fs.readFileSync(
//     "/etc/letsencrypt/live/6551eb3.online-server.cloud/chain.pem",
//     "utf8"
// );
//
//
// const credentials = {
//     key: privateKey,
//     cert: certificate,
//     ca: ca,
// };
app.use(cors());
const server = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/user/avatar", express.static(path.resolve(__dirname, "files", "images")));
app.use("/api/sites/", express.static(path.resolve(__dirname, "clientsites")));
//Главная страница
app.get("/api/siti", GorodController.Gorod)
app.get("/api/recomend", RecomendController.Recomend)
app.get("/api/actions", ActionController.Actions)
//Регистрация
app.get("/api/inviter", UserController.inviter)
app.get("/api/user/all_users", UserController.allUsers)
app.post("/api/user/registration", UserController.register)
//Авторизация
app.post("/api/user/login", UserController.login)
app.get("/api/user", UserController.user)
//Поиск
app.post("/api/user/search", SearchController.search)
app.post("/api/user/search/siti", SearchController.cyti)
app.post("/api/user/search/filter", SearchController.filtersearch)
app.get("/api/hotel", HotelIdController.hotelinfoid)
app.get("/api/nomer", NomerIdController.nomerId)
app.get("/api/user/nomerarow", NomerIdController.allNomera)
app.post("/api/user/bronenomer", BroneController.brones)
app.get("/api/user/mybroneobjekts", BroneController.allMybrone)
app.get("/api/user/mybroneotzyvy", BroneController.allMyOtzyv)
app.get("/api/user/myobjekts", UserController.myobjekts)
app.get("/api/user/cyties", GorodController.cyties)



const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './files/images');
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
});
const upload = multer({ storage });
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        server.listen(80, () => console.log(`server started on port 80`));
        //httpsServer.listen(443, () => console.log(`server started on port 443`));
    }catch (error){
        console.log(error);
    }
}
start();