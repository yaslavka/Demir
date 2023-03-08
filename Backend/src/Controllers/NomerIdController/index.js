const {AlbumsNomera} = require("../../Madals/AlbumsNomera");
const {Hotel} = require("../../Madals/OtelModals");
const {Nomera} = require("../../Madals/Nomeramodals");

class NomerIdController{
    async nomerId(req, res){
        const {id}=req.query
        const nomers = await Nomera.findOne({where:{id:id}, include:[{model: Hotel, as:'hotel'}, {model: AlbumsNomera, as: 'albomsnomera'}]})
        return res.json(nomers)
    }
}
module.exports = new NomerIdController()