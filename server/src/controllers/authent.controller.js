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
    const {name, surname, password, birth, email, phone, sex, street, postal, newsletter}= req.body;
    //if (password !== confPassword) return res.status(400).json({msg: "Mot de passe erreur"});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);
    try {
        await Authent.create({
            user_nom: name,
            user_surname: surname,
            user_password: hashPassword,
            user_birth: birth,
            user_email: email,
            user_phone: phone,
            user_sex: sex,
            user_street: street,
            postal: postal,
            newsletter: newsletter
        });
        res.json({msg: "Register ok"});
    }catch (error){
        console.log(error);
    }
}

exports.Login =  async function (req, res){
    try {

        const auth = await Authent.findOne({
            user_email: req.body.email
        });

        const passwordIsValid =  bcrypt.compare(
            req.body.password,
            auth.user_password
        );
        console.log("auth pass", auth.user_password);
        console.log("req.body.pass", req.body.password);

        if (!passwordIsValid) {
            res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
            console.log('hey')
        }else{
              res.status(200).send({msg:'ok ok'})
              console.log("MOT DE PASSE OK");
              
        }
        

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
        const accessToken = jwt.sign({auth}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: 1000
        })
        console.log("ACCESS TOKEN IS: ", accessToken)
        ;

        const refreshToken = jwt.sign({auth}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: 18998*8
        })
        console.log("REFRESH TOKEN IS: ", refreshToken);
        ;
        
        const userId = auth.id_user;
        console.log("userID: ", userId);
        await Authent.update({refresh_token: refreshToken},{
            id_user: userId
            
        });
        
        
       return res.cookie('refreshToken', refreshToken,{
            httpOnly: false,
        });
        
       // return res.status(200).json({msg:"ouiii"})

    }catch (error){
        return res.status(401).json();
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