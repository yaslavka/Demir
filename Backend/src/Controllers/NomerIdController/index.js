const ApiError = require("../../../error/ApiError");
const {User} = require("../../Madals/UserModals");
const {AlbumsNomera} = require("../../Madals/AlbumsNomera");
const {Hotel} = require("../../Madals/OtelModals");
const {Nomera} = require("../../Madals/Nomeramodals");
const jwt = require("jsonwebtoken");

class NomerIdController{
    async nomerId(req, res){
        const {id}=req.query
        const nomers = await Nomera.findOne({where:{id:id}, include:[{model: Hotel, as:'hotel'}, {model: AlbumsNomera, as: 'albomsnomera'}]})
        if (!nomers){
            return res.status(404).json({message: 'Объект не найден'})
        }
        return res.json(nomers)
    }
    async allNomera(req, res, next){
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
        return res.json(nomeraUsers)
    }
}
module.exports = new NomerIdController()