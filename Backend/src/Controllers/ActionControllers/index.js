const {Op} = require("sequelize");
const {Hotel} = require("../../Madals/OtelModals/index")

class ActionController {
    async Actions (req, res) {
        const actions = await Hotel.findAndCountAll({where: {skidka: {[Op.gt]: 0}}})
        return res.json(actions.rows)

    }

}
module.exports = new ActionController()