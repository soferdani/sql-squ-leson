USE pokemon;


-- select *
-- from pokemon_trainer as pt join pokemon as p join trainer as t
-- on pt.p_id = p.id and pt.t_id = t.id 

-- select *
-- from trainer ;

-- select *
-- from pokemon_trainer;

-- select *
-- from pokemon;

SELECT t.name 
FROM trainer AS t, pokemon AS p, pokemon_trainer as pt
WHERE p.name = "gengar"
AND p.id = pt.p_id 
AND t.id = pt.t_id;


-- select name from pokemon_type;

-- select p.name 
-- from pokemon as p join pokemon_type as t 
-- on p.type = t.id 
-- where t.name = "fire";

-- select max(weight), name from pokemon;


-- insert into pokemon_trainer values (3,(select id from trainer where name = "Genevive"));
-- select count(*) from pokemon_trainer;

-- insert into pokemon_trainer values ();

-- insert into pokemon (id,name,type,height,weight)
--         values (2,'ivysaur',(select id from pokemon_type where name = 'grass'),10,130);
-- select * from pokemon;

-- delete from pokemon;


-- this q is good 
-- (2,'ivysaur',(select id from pokemon_type where name = 'grass')

-- select * from pokemon;






-- insert into trainer (name, town)
-- values ('Genevive','Zedon');

-- insert into pokemon_type (name) values ('bla'),('ad') ;
-- delete from pokemon_type;
-- select * from town;

-- CREATE TABLE pokemon_type(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(25)
-- );


-- CREATE TABLE town(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(25)
-- );


-- CREATE TABLE trainer(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(25),
--     town INT,


--     FOREIGN KEY(town) REFERENCES town(id)
-- );


-- CREATE TABLE pokemon(
--     id INT PRIMARY KEY,
--     name VARCHAR(25),
--     type INT,
--     height SMALLINT,
--     weight SMALLINT,


--     FOREIGN KEY(type) REFERENCES pokemon_type(id)
-- );


-- CREATE TABLE pokemon_trainer(
--     p_id INT,
--     t_id INT,


--     FOREIGN KEY(p_id) REFERENCES pokemon(id),
--     FOREIGN KEY(t_id) REFERENCES trainer(id)
-- );










-- create table pokemon (
--     id int not null primary key,
--     poke_name varchar (30),
--     poke_type varchar (40),
--     poke_height varchar (40),
--     poke_weight varchar (40),
-- );

-- create table pokemon_type (
--     pokemon_type varchar (40),
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     pokemon_id int 
--     foreign key (pokemon_id) references pokemon(id)
-- );

-- create table trainer (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     trainer_name varchar (50),
--     trainer_town varchar (50),
-- );

-- create table town (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     trainer_id int 
--     foreign key (trainer_id) references trainer(id)
-- );

-- create table pokemon_trainer (
--     pokemon_id INT,
--     trainer_id int,
--     foreign key (pokemon_height) references pokemon(id),
--     foreign key (trainer_id) references trainer(id)
-- ) ;