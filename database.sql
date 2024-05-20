-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80),
    "pronouns" VARCHAR (20),
    "friends_list" VARCHAR (100)
);

INSERT INTO "user" ("username", "password", "first_name", "pronouns") 
VALUES
('usertest', 'passwordtest', 'first name', 'she/they');

