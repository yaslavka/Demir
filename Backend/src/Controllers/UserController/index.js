const jwt = require("jsonwebtoken");
const ApiError = require("../../../error/ApiError");
const bcrypt = require("bcrypt");
const {User} = require("../../Madals/UserModals");
const decode='random_key'

const generateJwt = (id, email, username, first_name, last_name, referral) => {
    return jwt.sign({id:id, email: email, first_name: first_name, last_name: last_name, referral: referral, username: username},decode);
};

class UserController{
    async inviter(req, res, next) {
        const { username } = req.query;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return next(ApiError.internal("Такой пользователь не найден"));
        }
        let result = {
            first_name: user.first_name,
            last_name: user.last_name,
            avatar: user.avatar,
        };
        return res.json(result);
    }
    async register(req, res, next){
        const {email, first_name, last_name, password, phone, referral, username} = req.body;
        if (!email || !first_name || !last_name || !password || !phone || !username){
            return next(ApiError.badRequest("Не все поля заполнены"));
        }
        const candidateEmail = await User.findOne({ where: { email } })
        const candidateUsername = await User.findOne({ where: { username } })
        const candidatephone = await User.findOne({ where: { phone } })
        if (candidateEmail) {
            return next(ApiError.badRequest("Такой email уже существует"));
        }
        if (candidateUsername) {
            return next(ApiError.badRequest("Такой Логин уже существует"));
        }
        if (candidatephone){
            return next(ApiError.badRequest("Такой телефон уже существует"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const referralUser = await User.findOne({ where: { username: referral } });
        const user = await User.create({
            email,
            username,
            first_name,
            last_name,
            password: hashPassword,
            phone,
            referal_id: referralUser?.id,
            activation_date: new Date()
        });
        const access_token = generateJwt(
            user.id,
            user.email,
            user.username,
            user.first_name,
            user.last_name,
            user.referral
        );
        return res.json({ access_token });
    }
    async login(req, res, next) {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username:username } });
        if (!user) {
            return next(ApiError.internal("Такой пользователь не найден"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Неверный пароль"));
        }

        const access_token = generateJwt(
            user.id,
            user.email,
            user.username,
            user.first_name,
            user.last_name,
            user.referral
        );
        const w = {w:access_token};
        return res.json({ access_token, w });
    }
    async user(req, res, next) {
        const { authorization } = req.headers;
        if(!authorization){
            return res.json('Ненайден айди пользователя');
        }
        const token = authorization.slice(7);
        try {
            const { username } = jwt.decode(token);
            let user = await User.findOne({ where: { username } });
            if (!user) {
                return next(ApiError.internal("Такой пользователь не найден"));
            }
            user = await User.findOne({ where: { username } });
            let referal = await User.findOne({ where: { id: user?.referal_id } });

            user.dataValues.referal = referal;
            return res.json(user);
        }catch (er){
            return next(ApiError.internal(er));
        }
    }
}
module.exports = new UserController()