const Authent = require("../models/authent.model");
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const json = require('sequelize');


exports.getUsersAuthent = async(req, res) =>{
    try{
        const authent = await Authent.findAll ({
            attributes: ['id_user', 'user_nom', 'user_surname', 'user_password', 'user_birth', 
                        'user_email', 'user_phone', 'user_sex', 'user_street', 'postal', 'newsletter']
        });
        res.json(authent);
    } catch (error) {
        console.log(error);
    }
}

exports.Register = async(req, res)=>{
    const {name, surname, password, confPassword, birth, email, phone, sex, street, postal, newsletter}= req.body;
    if (password !== confPassword) return res.status(400).json({msg: "Mot de passe erreur"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Authent.create({
            user_nom: nom,
            user_password: hashPassword,
            user_surname: surname,
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

exports.Login = async(req, res) =>{
    try {
        const auth = await Authent.findAll({
            where:{
                user_email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, auth[0].password);
        if(!match) return res.status(400);json({msq: "Mauvais mot de passe"});
        const userId = auth[0].id_user;
        const name = auth[0].user_nom;
        const email = auth[0].user_email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });

        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Authent.update({refresh_token: refreshToken},{
            where:{
                id_user: userId
            }
        });
        res.cookie('refreshtoken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60* 1000
        });
        res.json({ accessToken });
    }catch (error){
        res.status(404).json({msg: 'email qqc'});
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