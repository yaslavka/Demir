const {Brone} = require('../../Madals/BroneModal/index')
const jwt = require("jsonwebtoken");
const ApiError = require("../../../error/ApiError");
const {Otzyv} = require("../../Madals/OtzyvModals");
const {Nomera} = require("../../Madals/Nomeramodals");
const {User} = require("../../Madals/UserModals");
const {Hotel} = require("../../Madals/OtelModals");

class BroneController {
    async brones(req, res){
        const {id, summ, komnat} = req.body
    }
    async allMybrone(req, res, next){
        const { authorization } = req.headers;
        if(!authorization){
            return res.json('Ненайден айди пользователя');
        }
        const token = authorization.slice(7);
        const { username } = jwt.decode(token);
        let user = await User.findOne({ where: { username } });
        if (!user) {
            return next(ApiError.internal("Такой пользователь не найден"));
        }
        const hot = await Hotel.findAll({where:{userId: user.id}})
        if (!hot){
            return res.status(404).json({message: 'Объект не найден'})
        }
        const nomeraUsers = await Nomera.findAll({where: {hotelId: hot.map(h=>h.id)}})
        if (!nomeraUsers){
            return res.status(404).json({message: 'Объект не найден'})
        }
        const brone = await Brone.findAll({where: {nomeraId: nomeraUsers.map(n =>n.id)}})
        if (!brone){
            return res.status(404).json({message: 'Объект не найден'})
        }
        return res.json(brone)
    }
    async allMyOtzyv(req, res, next){
        const { authorization } = req.headers;
        if(!authorization){
            return res.json('Ненайден айди пользователя');
        }
        const token = authorization.slice(7);
        const { username } = jwt.decode(token);
        let user = await User.findOne({ where: { username } });
        if (!user) {
            return next(ApiError.internal("Такой пользователь не найден"));
        }
        const hot = await Hotel.findAll({where:{userId: user.id}})
        if (!hot){
            return res.status(404).json({message: 'Объект не найден'})
        }
        const otzyv = await Otzyv.findAll({where: {hotelId: hot.map(h=>h.id)}})
        if (!otzyv){
            return res.status(404).json({message: 'Объект не найден'})
        }

        return res.json(otzyv)
    }
}
module.exports =new BroneController()