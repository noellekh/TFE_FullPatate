CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_surname` varchar(50) NOT NULL,
  'user_birth' date NOT NULL,
  'user_email' varchar(150) NOT NULL UNIQUE,
  'user_phone' varchar(15) NOT NULL,
  'user_sex' varchar(1) NOT NULL,
  'user_street' varchar(250) NOT NULL,
  'postal' integer NOT NULL, 
  
  CONSTRAINT pk_users PRIMARY KEY (`id`),
  CONSTRAINT fk_cities_users FOREIGN KEY ('postal') REFERENCE cities(postal)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;


CREATE TABLE ID NOT EXISTS 'cities'(
  'postal' integer NOT NULL,
  'city' varchar (50) NOT NULL

  CO?STRAINT pk_citie PRIMARY KEY ('postal')
);

