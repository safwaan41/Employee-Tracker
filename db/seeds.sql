USE westeros_db
INSERT INTO department (name)
VALUES 
('Kings Landing'),
('The North'),
('The Westerlands'),
('The Riverlands'),
('The Vale of Arryn'),
('The Iron Islands'),
('The Reach'),
('Dorne'),
('The Wall')

INSERT INTO role (title, salary, department_id)
VALUES
('Protector of the Realm',1000000,1),
('Heir To The Iron Throne',500000,1),

('Warden of The North', 100000, 2),
('Heir To The North', 10000, 2),
('Bastard of Winterfell', 0,2),

('Warden of The West', 200000, 3),
('Heir To Casterly Rock', 25000, 3)

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Robert','Baratheon',1,null),
('Joffery','Baratheon',2,1),

('Eddard', 'Stark',3,null),
('Rob','Stark',4,3),
('Jon','Snow',5,3),

('Tywin','Lannister',6,null),
('Jamie','Lannister',7,6)

INSERT INTO employee(first_name, last_name, role_id, manager_id)VALUES('Tywin','Lannister',4,1);