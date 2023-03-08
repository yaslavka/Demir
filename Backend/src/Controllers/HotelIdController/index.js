const {AlbumHotel} = require("../../Madals/AlbumHotel");
const {Nomera} = require("../../Madals/Nomeramodals");
const {AlbumsNomera} = require("../../Madals/AlbumsNomera");
const {Otzyv} = require("../../Madals/OtzyvModals");
const {Hotel} = require("../../Madals/OtelModals");

class HotelIdController {
    async hotelinfoid(req, res){
        const {id} = req.query
        const hoteli = await Hotel.findOne({where: {id:id}, include:[{model:Otzyv, as:'otzyv'},{model:Nomera, as: 'nomera', include:{model:AlbumsNomera, as:'albomsnomera'}}, {model: AlbumHotel, as:'albumhotel'}]})
        if (!hoteli){
            return res.status(403).json({message: 'Повашему запросу ничего не найденно'})
        }
        return res.json(hoteli)
    }
}
module.exports = new HotelIdController()