const jwt = require ( "jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.sendStatus(401);
    }else{

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                console.log("VERIFY TOKEN ERROR",err)
                return res.sendStatus(403);
            }else {
            req.email = decoded.user_email;
            next();
            }
        })

    } 

}