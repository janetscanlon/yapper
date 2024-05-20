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

--seed data for user table
INSERT INTO "user" ("username", "password", "first_name", "pronouns") 
VALUES
('usertest', 'passwordtest', 'first name', 'she/they');

CREATE TABLE "reviews"(
	"id" SERIAL PRIMARY KEY,
	"book_title" VARCHAR (100),
	"book_author" VARCHAR (100),
	"genre" VARCHAR (100),
	"rating" INTEGER,
	"review_input" VARCHAR (1000), 
	"review_timestamp" TIMESTAMP
	);

--seed data for reviews table
INSERT INTO "reviews" ("book_title", "book_author", "genre", 	"rating", "review_input")
VALUES
	('A Court of Thorns and Roses', 'Sarah J. Maas', 'fantasy', 5, 'If tamlin has no haters I am dead.');

CREATE TABLE "review_comments"(
	"id" SERIAL PRIMARY KEY,
	"user_id" int REFERENCES "user",
	"review_id" int REFERENCES "reviews",
	"comment_input" VARCHAR (500),
	"comment_timestamp" TIMESTAMP
	); 
	
CREATE TABLE "review_likes"(
	"id" SERIAL PRIMARY KEY,
	"user_id" int REFERENCES "user",
	"review_id" int REFERENCES "reviews"
	);
	
--STRETCH friends_list table