const {Goroda} = require("../../Madals/GorodaModals");


class GorodController {
    async Gorod (req, res) {
        const siti = await Goroda.findAndCountAll({limit: 6})

        return res.json(siti.rows)
    }
    async cyties (req, res) {
        const siti = await Goroda.findAll()

        return res.json(siti)
    }
}
module.exports = new GorodController()