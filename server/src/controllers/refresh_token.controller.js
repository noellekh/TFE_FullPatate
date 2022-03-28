const Authent = require ("../models/authent.model");
const  jwt = require ( "jsonwebtoken");

exports.refreshToken = async function (req, res)  {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken){
            console.log("ERROR REFRESH TOKEN", req.cookies.refreshToken)
            return res.sendStatus(401);

        }else{

            const auth = await Authent.findAll({
                where:{refresh_token: refreshToken}
                
            });
            if(!auth[0]){
                return res.sendStatus(403);
            }else{

                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                    if(err) {
                        console.log("erreur ici") 
                        return res.sendStatus(403);
                    }else{
                  
                    const userId = auth.id_user;
                    const name = auth.user_nom;
                    const email = auth.user_email;
                
                    const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                        expiresIn: '30m'
                    });
                    return res.json({ accessToken });
                }
                });

            }


        }

    } catch (error) {
        console.log("verify error", error);
    }
}