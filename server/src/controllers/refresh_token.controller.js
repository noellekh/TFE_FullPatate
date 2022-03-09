const Authent = require ("../models/authent.model");
const  jwt = require ( "jsonwebtoken");

exports.refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const auth = await Authent.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!auth[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = auth[0].id_user;
            const name = auth[0].user_nom;
            const email = auth[0].user_email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}