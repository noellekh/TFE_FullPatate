CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_surname` varchar(50) NOT NULL,
  'user_birth' date NOT NULL,
  'user_email' varchar(150) NOT NULL UNIQUE,
  'user_phone' varchar(15) NOT NULL,
  'user_sex' varchar(1) NOT NULL,
  'user_street' varchar(250) NOT NULL,
  'postal' integer NOT NULL, 
  'newsletter' integer
  
  CONSTRAINT pk_users PRIMARY KEY (id_user),
  CONSTRAINT fk_cities_users FOREIGN KEY (postal) REFERENCES cities(postal)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;


CREATE TABLE ID NOT EXISTS 'cities'(
  'postal' integer NOT NULL,
  'city' varchar (50) NOT NULL

  CONSTRAINT pk_cities PRIMARY KEY (postal)
);

CREATE TABLE 'scores'(
  'id_user' integer(11) NOT NULL REFERENCES users,
  'id_score' integer NOT NULL AUTO_INCREMENT,
  'score' integer NOT NULL

  CONSTRAINT pk_scores PRIMARY KEY (id_score)
  CONSTRAINT pk_users_scores FOREIGN KEY (id_user) REFERENCES users(id_user)

);

CREATE TABLE 'product' (
  'id_product' int(11) NOT NULL AUTO_INCREMENT,
  'product_name' varchar (50) NOT NULL,
  'product_price' varchar(10) NOT NULL,
  'product_description' varchar (100) NOT NULL,

  CONSTRAINT pk_product PRIMARY KEY(id_product)
);

