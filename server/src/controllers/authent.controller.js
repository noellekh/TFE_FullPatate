const Authent = require("../models/authent.model");
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const json = require('sequelize');




exports.getUsersAuthent = async function (req, res) {
    try{
        const authent =  await Authent.findOne ({
            attributes: ['id_user', 'user_nom', 'user_surname', 'user_password', 'user_birth', 
                        'user_email', 'user_phone', 'user_sex', 'user_street', 'postal', 'newsletter']
        });
        return res.json(authent);
    } catch (error) {
        console.log("ERREUR AUTHENTIFICATION",error);
    }
}

exports.Register = async function (req, res){
    const {user_nom, user_surname, user_password, user_birth, user_email, user_phone, user_sex, user_street, postal, newsletter}= req.body;
    //if (password !== confPassword) return res.status(400).json({msg: "Mot de passe erreur"});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user_password, salt);
    console.log(hashPassword);
    try {
        await Authent.create({
            user_nom: user_nom,
            user_surname: user_surname,
            user_password: hashPassword,
            user_birth: user_birth,
            user_email: user_email,
            user_phone: user_phone,
            user_sex: user_sex,
            user_street: user_street,
            postal: postal,
            newsletter: newsletter,
            //refresh_token: refreshToken
        });
        res.json({msg: "Register ok"});
    }catch (error){
        console.log(error);
    }
}

exports.Login =  async function (req, res){
    try {

        const auth = await Authent.findOne({
            where:{user_email: req.body.user_email}
            
        });

        

        console.log("AUTH ", auth)


        const passwordIsValid =   bcrypt.compare(
            req.body.user_password,
            auth.user_password
        );
        console.log("auth pass",auth.user_password);
        console.log("req.body.pass", req.body.user_password);
        console.log("ID USER ", req.body.user_email);

        if (!passwordIsValid) if(!match) return res.status(400).json({msg: "Wrong Password"});
        /*{
            res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
        */
        
            const userId = auth.id_user;
            const name = auth.user_nom;
            const email =auth.user_email;
            //res.status(200).send({msg:'ok ok'})
            console.log("MOT DE PASSE OK"); 
            console.log(userId, name, email);
            
            const accessToken = jwt.sign({id_user:userId, user_nom:name, user_email:email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '30m'
            })
            console.log("ACCESS TOKEN IS: ", accessToken)
            ;
    
            const refreshToken = jwt.sign({id_user:userId, user_nom:name, user_email:email}, process.env.REFRESH_TOKEN_SECRET,{
                expiresIn: '1d'
            })
            console.log("REFRESH TOKEN IS: ", refreshToken);
            ;


            
            console.log("userID: ", userId);
            //const refresh_token=auth[0].refresh_token;
            //console.log("REFRESH TOKEN TABLE ", refresh_token)

           const updateT= await Authent.update(
                {refresh_token:refreshToken},
                {where:{id_user: userId}}
                
                );

            res.cookie('refreshToken', refreshToken,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
                
            })
            console.log('COOKIES ',req.cookies.refreshToken)
            res.json({ refreshToken });
            
            
            
           // return res.status(200).json({msg:"ouiii"})
        
        

        /*
        bcrypt.compare(req.body.password, auth.password, function(err, res){
            if(err){
                console.log('comparaison error:', err);
            }else{
                console.log('COMPARAISON OK !');
            }
        });
        
        //if(!match) return res.status(400);json({msq: "Mauvais mot de passe"});
        const userId = auth.id;
        const name = auth.nom;
        const email = auth.email;
        console.log("param", userId, name, email);
        */


    }catch (error){
        //res.send({message:"message"});
        //res.status(404).json({msg:"Email not found"});
        console.log("AUTRE ERREUR", error);
        //res.send(error);
        
    }
}

exports.Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const auth = await Authent.findAll({
        where:{
            refresh_token : refreshToken
        }
    });
    if(!auth[0]) return res.sendStatus(204);
    const userId = auth[0].id_user;
    await Authent.update({refresh_token: null},{
        where:{
            id_user: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
};