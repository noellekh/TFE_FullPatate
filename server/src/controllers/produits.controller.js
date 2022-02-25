const Product = require ('../models/produits.model');

exports.findallProduct = function(req, res){
    Product.findallProduct = (function(err, product){
        console.log('controller')
        if(err)
        req.send(err)
        console.log('res', product);
        res.send(product);
    });
};

exports.createProduct = function(req, res){
    const new_product = new Product(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({error:true, message:'Remplissez les champs produits'});

    }else{
        Product.createProduct(new_product, function(err, product){
            if(err)
            res.send(err);
            console.log(err);
            res.json({errpr:false, message:'Produit ajouté avec succes', data: product});

        });
    };
};

exports.updateProduct = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({error:true, message:'veuillez remplir tous les champs produits'});

    }else{
        Product.updateProduct(req.params.id_product, new Product(req.body), function(err, product){
            if(err)
            res.send(err);
            res.json({error:false, message:'Produits modifié avec succes !'});

        });
    };
};

exports.findProductById = function(req, res){
    Product.findProductById(req.params.id_product, function(err, product){
        if(err)
        res.send(err);
        res.json(product);
    });
};

exports.deleteProduct = function(req, res){
    Product.deleteProduct(req.params.id_product, function(err, product){
        res.send(err);
        res.json({error:false, message:"Produit supprimé avec succes !"});
    });
};