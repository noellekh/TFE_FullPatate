var db = require('../../config/db.config');

var Product = function(product){
    this.id_product = product.id_product;
    this.product_name = product.product_name;
    this.product_price = product.product_price;
    this.product_description = product.product_description;
};

Product.createProduct = function(newProduct, result){
    db.query("INSERT INTO product set ?", newProduct, function(err, res){
        if(err){
            console.log("error product: ", err);
            result(err, null);
        }else{
            console.log("id_product: ", res.insertId);
            result(null, res.insertId);
        }
    });
};

Product.findProductById = function(id_product, result){
    db.query("SELECT * from product where id_product =?", id_product, function(err, res){
        if(err){
            console.log("error product: ", err);
        }else{
            result(null, res);
        }
    });
};

Product.findAllProduct = function(result){
    db.query('SELECT * from product', function(err, res){
        if(err){
            console.log('error priduct: ', err);
            result(null, err);
        }else{
            console.log('product: ', res);
            result(null, res);
        }
    });
};

Product.updateProduct = function(id_product, product, result){
    db.query('UPDATE product SET product_name=?, product_price=?, product_description=? WHERE id_product=?',
    [product.product_name, product.product_price, product.product_description, id_product], function(err, res){
        if(err){
            console.log('error product: ', err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Product.deleteProduct = function(id_product, result){
    db.query('DELETE FROM product WHERE id_product=?',[id_product], function(err, res){
        if(err){
            console.lod("error priduct: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports=Product;