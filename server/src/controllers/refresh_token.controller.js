const Authent = require ("../models/authent.model");
const  jwt = require ( "jsonwebtoken");

exports.refreshToken = async function (req, res)  {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const auth = await Authent.findOne({
            
                refresh_token: refreshToken
            
        });
        if(!auth) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                console.log("erreur ici") 
                return res.sendStatus(403);
            }else{
          /*
            const userId = auth.id;
            const name = auth.name;
            const email = auth.email;
        */
            const accessToken = jwt.sign({auth}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: 150000
            });
            return res.json({ accessToken });
        }
        });
    } catch (error) {
        console.log("verify error", error);
    }
}