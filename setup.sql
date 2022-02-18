CREATE TABLE cities(
  postal int(5) NOT NULL PRIMARY KEY,
  city varchar (50) NOT NULL
);

CREATE TABLE users (
  id_user int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_nom varchar(50) NOT NULL,
  user_password varchar(50) NOT NULL,
  user_surname varchar(50) NOT NULL,
  user_birth date NOT NULL,
  user_email varchar(150) NOT NULL UNIQUE,
  user_phone varchar(15) NOT NULL,
  user_sex varchar(1) NOT NULL,
  user_street varchar(250) NOT NULL,
  postal int(5) NOT NULL, 
  newsletter int(1),
  
  CONSTRAINT fk_cities_users FOREIGN KEY (postal) REFERENCES cities(postal)
);


CREATE TABLE scores(
  id_user integer(11) NOT NULL,
  id_score integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  score integer NOT NULL,

  CONSTRAINT pk_users_scores FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE product (
  id_product int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name varchar (50) NOT NULL,
  product_price varchar(10) NOT NULL,
  product_description varchar (100) NOT NULL

);

CREATE TABLE agenda_client(
  id_user integer (11) NOT NULL,
  id_agenda_client integer (11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  id_date date NOT NULL,

  CONSTRAINT pk_users_agenda FOREIGN KEY (id_user) REFERENCES users(id_user)
);

INSERT INTO cities(postal, city) VALUES(
  1234, 'N-Y'
);

INSERT INTO users (id_user, user_nom, user_surname, user_birth, user_email, user_phone, user_sex, user_street, postal, newsletter) VALUES (
  1, 'Balboa', 'Rocky', '1965-03-09', 'rocky@balboa.com', '84902849', 'M', 'Rue de la boxe', 1234, 0);