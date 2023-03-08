const ApiError = require("../../../error/ApiError");
const {Otzyv} = require("../../Madals/OtzyvModals");
const {Hotel} = require("../../Madals/OtelModals/index")

class RecomendController {
    async Recomend (req, res) {
        const recomend = await Hotel.findAll({where: {bal: 10}, include:[{model: Otzyv, as: 'otzyv'}]})
        return res.json(recomend)
    }
}
module.exports = new RecomendController()