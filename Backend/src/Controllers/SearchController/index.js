const {AlbumHotel} = require("../../Madals/AlbumHotel");
const {AlbumsNomera} = require("../../Madals/AlbumsNomera");
const {Otzyv} = require("../../Madals/OtzyvModals");
const {Nomera} = require("../../Madals/Nomeramodals");
const {Op} = require("sequelize");
const {Hotel} = require("../../Madals/OtelModals");
const {Goroda} = require("../../Madals/GorodaModals");

class SearchController{
    async search(req, res){
        const {search}=req.body
        const siti= await Goroda.findOne({where:{gorod:search}})
        if (!siti){
            return res.status(403).json({message: 'Повашему запросу ничего не найденно'})
        }
        let hotel = await Hotel.findAll({include: 'nomera', where: {gorodaId:siti?.id, activ:{[Op.not]: false}, kolicestvoNomerov: {[Op.gt]: 2}, }})

        if (!hotel){
            return res.status(403).json({message: 'Повашему запросу ничего не найденно'})
        }
        return res.json(hotel)
    }
    async cyti(req, res){
        const {search}=req.body
        const siti= await Goroda.findOne({where:{gorod:search}})
        if (!siti){
            return res.status(403).json({message: 'Повашему запросу ничего не найденно'})
        }
        return res.json(siti)
    }
    async filtersearch(req, res){
        const {search}=req.body
        const siti= await Goroda.findOne({where:{gorod:search}})
        if (!siti){
            return res.status(403).json({message: 'Повашему запросу ничего не найденно'})
        }
        //let hotel = await Hotel.findAll({include: 'nomera', where: {gorodaId:siti?.id, activ:{[Op.not]: false}, kolicestvoNomerov: {[Op.gt]: 2} }})
        const hotel =await  Hotel.findAll({where: {gorodaId:siti?.id, activ:{[Op.not]: false}, kolicestvoNomerov: {[Op.gt]: 2} }, include:[{model:Otzyv, as:'otzyv'},{model:Nomera, as: 'nomera', include:{model:AlbumsNomera, as:'albomsnomera'}}, {model: AlbumHotel, as:'albumhotel'}], })
        if (!hotel){
            return res.status(403).json({message: 'Повашему запросу ничего не найденно'})
        }
        return res.json(hotel)
    }
}
module.exports = new SearchController()