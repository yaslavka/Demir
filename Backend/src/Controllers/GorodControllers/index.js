const {Goroda} = require("../../Madals/GorodaModals");


class GorodController {
    async Gorod (req, res) {
        const siti = await Goroda.findAndCountAll({limit: 6})

        return res.json(siti.rows)
    }
}
module.exports = new GorodController()