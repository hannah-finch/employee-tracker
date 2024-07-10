INSERT INTO department ( name )
VALUES ('grocery'),
       ('produce'),
       ('floral'),
       ('photo');

INSERT INTO role ( title, salary, department_id )
VALUES ('manager', 20000, 1),
       ('cashier', 14000, 1),
       ('produce worker', 14000, 2),
       ('floral worker', 15000, 3),
       ('photo worker', 15000, 4);

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ('Emmalyn', 'Smith', 1, NULL),
       ('Isaac', 'Thompson', 2, 1),
       ('Walter', 'Mitty', 3, 1),
       ('Leo', 'Howard', 4, 1),
       ('Isabelle', 'Hill', 5, 1);